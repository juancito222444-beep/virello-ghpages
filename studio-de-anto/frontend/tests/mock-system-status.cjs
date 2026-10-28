// Fixed, synthetic response for regressions that visit Settings for other flows.
module.exports=()=>({app:'STUDIO DE ANTO',release:'1.7.0',api_version:'1',
 generated_at:'2026-10-28T15:00:00Z',code_update_available:false,checks:[
  {id:'service',label:'Aplicación',status:'ok',message:'Diagnóstico simulado del estudio.'},
  {id:'credentials',label:'Clave configurada',status:'warning',message:'No se verificó ninguna cuenta real.'}
 ]});
