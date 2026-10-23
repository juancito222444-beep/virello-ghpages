import {GridNavigation,type Cell} from './navigation';

/** Shared geometry/navigation layout: moving a chair cannot silently seal a corridor. */
export const DESKS:[[number,number],[number,number],[number,number],[number,number],[number,number],[number,number]]=[[4.5,3],[10.5,3],[4.5,8],[10.5,8],[18.5,3],[18.5,14]];
export const HOMES:Cell[]=[[4,4],[10,4],[4,9],[10,9],[18,4],[18,15]];
export const MEETING:Cell[]=[[2,14],[4,14],[6,14],[8,14],[10,14],[11,16]];
export const PLANTS=[[1.5,1.5],[13.5,1.5],[1.5,10.5],[21.5,6.5],[13.5,18.5],[21.5,18.5]];
export const CHAIR_OFFSET=2.5;
export function configureOfficeNavigation(nav:GridNavigation){
 nav.blockRect(0,0,24,1);nav.blockRect(0,0,1,20);nav.blockRect(0,12,13,1);
 for(const [x,z] of DESKS){nav.blockRect(x-1.85,z-.825,3.7,1.65);nav.blockRect(x-.5,z+CHAIR_OFFSET-.5,1,1);}
 nav.blockRect(3,15,7,3);
 for(const x of [4.2,6.5,8.8])nav.blockRect(x-.5,18.2,1,1.3);
 nav.blockRect(17,8,4,2);nav.blockRect(18,10,2,1);nav.blockRect(22,13,2,4);
 for(const [x,z] of PLANTS)nav.blockRect(x-.5,z-.5,1,1);
 return nav;
}
