/** A cell is an integer (x, z) center in the office navigation grid. */
export type Cell = [number, number];
export const cellKey = ([x, z]: Cell): string => `${x},${z}`;
const copy = (cell: Cell): Cell => [cell[0], cell[1]];
const neighbors = ([x, z]: Cell): Cell[] => [[x + 1, z], [x, z + 1], [x - 1, z], [x, z - 1]];

/**
 * Small deterministic path finder with cell occupancy and one-step reservations.
 *
 * A character keeps ownership of its origin until arrive() and exclusively reserves
 * its destination before walking. Consequently neither head-on swaps nor another
 * character entering its origin during a step are permitted. A one-cell safety
 * halo around other characters keeps articulated shoulders apart. A failed reservation
 * means wait/replan, never move through another character.
 */
export class GridNavigation {
  readonly width: number;
  readonly height: number;
  private walls = new Set<string>();
  private occupants = new Map<string, string>();
  private positions = new Map<string, Cell>();
  private reservations = new Map<string, string>();
  private steps = new Map<string, Cell>();

  constructor(width = 24, height = 20) {
    if (!Number.isInteger(width) || !Number.isInteger(height) || width < 1 || height < 1 || width > 256 || height > 256) {
      throw new RangeError('La cuadrícula debe medir entre 1 y 256 celdas por lado.');
    }
    this.width = width;
    this.height = height;
  }

  get blockedCount(): number { return this.walls.size; }

  inBounds(cell: Cell): boolean {
    return Number.isInteger(cell[0]) && Number.isInteger(cell[1]) && cell[0] >= 0 && cell[0] < this.width && cell[1] >= 0 && cell[1] < this.height;
  }

  isBlocked(cell: Cell): boolean { return !this.inBounds(cell) || this.walls.has(cellKey(cell)); }

  /** Static rectangle: lower edge included, upper edge excluded. Fractions expand. */
  blockRect(x: number, z: number, width: number, depth: number): void {
    if (![x, z, width, depth].every(Number.isFinite) || width <= 0 || depth <= 0) {
      throw new RangeError('El obstáculo debe ser un rectángulo finito de tamaño positivo.');
    }
    const cells: string[] = [];
    for (let i = Math.max(0, Math.floor(x)); i < Math.min(this.width, Math.ceil(x + width)); i++) {
      for (let j = Math.max(0, Math.floor(z)); j < Math.min(this.height, Math.ceil(z + depth)); j++) {
        const key = cellKey([i, j]);
        if (this.occupants.has(key) || this.reservations.has(key)) throw new Error('El obstáculo invadiría un personaje.');
        cells.push(key);
      }
    }
    for (const key of cells) this.walls.add(key);
  }

  isFree(cell: Cell, exceptId?: string): boolean {
    if (this.isBlocked(cell)) return false;
    // Characters span more than a single cell with their arms: require at least
    // two cells between centers on either axis (Chebyshev distance >= 2).
    // Include both the origin and reserved destination throughout every step.
    for (let dx = -1; dx <= 1; dx++) {
      for (let dz = -1; dz <= 1; dz++) {
        const key = cellKey([cell[0] + dx, cell[1] + dz]);
        const occupied = this.occupants.get(key);
        const reserved = this.reservations.get(key);
        if ((occupied !== undefined && occupied !== exceptId) || (reserved !== undefined && reserved !== exceptId)) return false;
      }
    }
    return true;
  }

  register(id: string, cell: Cell): boolean {
    if (!id || !this.isFree(cell, id)) return false;
    const current = this.positions.get(id);
    if (current) return cellKey(current) === cellKey(cell);
    this.positions.set(id, copy(cell));
    this.occupants.set(cellKey(cell), id);
    return true;
  }

  position(id: string): Cell | undefined {
    const value = this.positions.get(id);
    return value ? copy(value) : undefined;
  }

  /** Shortest walk, excluding the origin. [] means already there or no valid path. */
  path(id: string, target: Cell): Cell[] {
    const start = this.positions.get(id);
    if (!start || !this.isFree(target, id)) return [];
    const startKey = cellKey(start), targetKey = cellKey(target);
    if (startKey === targetKey) return [];
    const queue: Cell[] = [copy(start)];
    const previous = new Map<string, Cell | null>([[startKey, null]]);
    for (let head = 0; head < queue.length; head++) {
      const current = queue[head];
      if (cellKey(current) === targetKey) break;
      for (const next of neighbors(current)) {
        const key = cellKey(next);
        if (previous.has(key) || !this.isFree(next, id)) continue;
        previous.set(key, current);
        queue.push(next);
      }
    }
    if (!previous.has(targetKey)) return [];
    const result: Cell[] = [];
    let at: Cell | null = copy(target);
    while (at && cellKey(at) !== startKey) {
      result.unshift(copy(at));
      at = previous.get(cellKey(at)) ?? null;
    }
    return result;
  }

  reserveNext(id: string, next: Cell): boolean {
    const start = this.positions.get(id);
    if (!start || Math.abs(start[0] - next[0]) + Math.abs(start[1] - next[1]) !== 1 || !this.isFree(next, id)) return false;
    const existing = this.steps.get(id);
    if (existing) return cellKey(existing) === cellKey(next);
    this.steps.set(id, copy(next));
    this.reservations.set(cellKey(next), id);
    return true;
  }

  /** Commit a step only when its visual character has reached the next center. */
  arrive(id: string): Cell | undefined {
    const next = this.steps.get(id), start = this.positions.get(id);
    if (!start) return undefined;
    if (!next) return copy(start);
    this.occupants.delete(cellKey(start));
    this.occupants.set(cellKey(next), id);
    this.positions.set(id, copy(next));
    this.reservations.delete(cellKey(next));
    this.steps.delete(id);
    return copy(next);
  }

  /** Only cancel before beginning a visual step; an in-flight step must arrive. */
  cancel(id: string): void {
    const next = this.steps.get(id);
    if (next) this.reservations.delete(cellKey(next));
    this.steps.delete(id);
  }

  remove(id: string): void {
    this.cancel(id);
    const start = this.positions.get(id);
    if (start) this.occupants.delete(cellKey(start));
    this.positions.delete(id);
  }

  /** Closest available cell, useful for an occupied destination. Does not reserve. */
  nearestFree(target: Cell, exceptId?: string): Cell | null {
    if (!target.every(Number.isFinite)) return null;
    const seed: Cell = [Math.max(0, Math.min(this.width - 1, Math.round(target[0]))), Math.max(0, Math.min(this.height - 1, Math.round(target[1])))];
    const queue: Cell[] = [seed], seen = new Set<string>([cellKey(seed)]);
    for (let head = 0; head < queue.length; head++) {
      const current = queue[head];
      if (this.isFree(current, exceptId)) return copy(current);
      for (const next of neighbors(current)) {
        const key = cellKey(next);
        if (this.inBounds(next) && !seen.has(key)) { seen.add(key); queue.push(next); }
      }
    }
    return null;
  }
}

/** Conservative traffic claims: intersecting corridors take turns; disjoint
 * journeys can run together. One-step occupancy remains the final safety check. */
export class CorridorReservations {
  private claims = new Map<string, Set<string>>();

  claim(id: string, cells: Cell[]): boolean {
    if (!id || cells.length === 0) return false;
    const footprint = new Set<string>();
    for (const [x, z] of cells) {
      if (!Number.isInteger(x) || !Number.isInteger(z)) return false;
      for (let dx = -1; dx <= 1; dx++) for (let dz = -1; dz <= 1; dz++) {
        footprint.add(cellKey([x + dx, z + dz]));
      }
    }
    for (const [other, occupied] of this.claims) {
      if (other === id) continue;
      for (const cell of footprint) if (occupied.has(cell)) return false;
    }
    this.claims.set(id, footprint);
    return true;
  }

  release(id: string): void { this.claims.delete(id); }
}
