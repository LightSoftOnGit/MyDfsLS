function cotizadorModelos_init(){	    
	cargarClases();	
	ocultarSeleccion();
	
}

function limpiarControles(){
	
}


	
	


function cargarClases() {	
		
	var inputparam = {};
 	inputparam["serviceID"] = "obtenerModelosCotizador"; 	
 	inputparam["httpheaders"] = {};
	inputparam["httpconfig"] = {timeout:10};
 	appmiddlewareinvokerasync(inputparam,cargarClasesCallback);	
}

 function cargarClasesCallback (status, result) { 	 	
 		kony.application.showLoadingScreen("sknLblLoading", "Cargando...", constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true,{shouldShowLabelInBottom: true, seperatorHeight: 30});
 		if (result.errmsg != undefined) {
 			alert('Se presento un error al recuperar los modelos: ' + result.errmsg);
 			kony.application.dismissLoadingScreen();	
 		} else { 			
 			if (result.codigo != null && result.codigo != undefined &&  result.codigo == 1) { 				
    			if (result.lstModelos != undefined && result.lstModelos.length>0) {    				
    				var arrClases=[];     				
    				var arrTipos=[];
    				for(i=0;i<result.lstModelos.length;i++){    					    					    						
    					arrClases.push({"lblClase":result.lstModelos[i].descripcion,"lblId":result.lstModelos[i].id});				
    										
    					for(j=0;j<result.lstModelos[i].lstTipos.length;j++){
    						    						
    						arrTipos.push({"lblContent":result.lstModelos[i].lstTipos[j].descripcion,"lblContentId":result.lstModelos[i].lstTipos[j].id,"lblIdClase":result.lstModelos[i].id});
    					}    					
    				}   			
					kony.store.setItem('lstTipos', arrTipos); 				
    				cotizadorModelos.segmentClases.setData(arrClases);
    				kony.store.setItem("cotizacionEnCurso",false);
    				seleccionarClase(0);
    				    							
    			} else{
    				alert('No hubo resultados');
    			}
 			} else {
 				if(result.codigo!=null && result.codigo!=undefined){
 					alert(result.codigo);
 				}
 			}
 		}
 		
		kony.application.dismissLoadingScreen();	
		
 	}



function onSwipeCallBack(rowIndex){		
	ocultarSeleccion();
	seleccionarClase(rowIndex);
}

function seleccionarClase(rowIndex){	
	var arrTipos = kony.store.getItem('lstTipos'); 
	var arrTiposSel=[];
	var idClase=cotizadorModelos.segmentClases.data[rowIndex].lblId;
	
	for(k=0; k < arrTipos.length;k++){		
		if(arrTipos[k].lblIdClase.toString()==idClase.toString()){			
			arrTiposSel.push({"lblContent":arrTipos[k].lblContent,"lblContentId":arrTipos[k].lblContentId,"lblIdClase":arrTipos[k].lblIdClase});
			cotizadorModelos.segmentList.setData(arrTiposSel,k,0);
		}
	}	      
	cotizadorModelos.imageClase.src=cotizadorModelos.segmentClases.data[rowIndex].lblClase.toString().trim().toLowerCase().replace(" ", "").replace("-", "") +".png";
	kony.store.setItem('claseSeleccionada', cotizadorModelos.segmentClases.data[rowIndex].lblClase.toString().trim().toLowerCase().replace(" ", "").replace("-", ""));
		
	cotizadorModelos.imageClase.setVisibility(true,null);	
	cotizadorModelos.fxcImagenClase.top="14%";
	cotizadorModelos.imageClase.animate(getMoveUPAnimationObject(),animMoveUpConfig(),{animationStart:moveUpAnimStart,animationEnd:moveUpAnimEnd});
	
	cotizadorModelos.segmentList.setVisibility(true, null);
	
	//cotizadorModelos.fxcImagenClase.setEnabled(false);
	cotizadorModelos.fxcImagenClase.setEnabled(false);
	
    cotizadorModelos.forceLayout();	
	
	 					
}

function ocultarSeleccion(){ 	
	cotizadorModelos.segmentList.setVisibility(false, null);
	cotizadorModelos.forceLayout();
	//cotizadorModelos.fxcImagenClase.setEnabled(true);
}


function moveUpAnimStart()
{	
	//cotizadorModelos.fxcImagenClase.top="14%";
	cotizadorModelos.forceLayout();
}

function moveUpAnimEnd(){
  	cotizadorModelos.fxcImagenClase.top="150%";  	
	cotizadorModelos.forceLayout();
}

function animMoveUpConfig(){
	var config = {
	   "duration":2,
	   "iterationCount":1,
	   "delay":1,
	   "direction":kony.anim.DIRECTION_NONE,
	   "fillMode":kony.anim.FILL_MODE_FORWARDS
	};
	return config;
}

function getMoveUPAnimationObject()
{
	var animDefinition = 
	{       
       0:   
	   {
         	"opacity":1
	   },
	   5:
	   {
	   		"opacity":0.95
	   },
	   10:
	   {
	   		"opacity":0.90
	   },
	   15:
	   {
	   		"opacity":0.85
	   },
	   20:
	   {
	   		"opacity":0.80
	   },
	   25:
	   {
	   		"opacity":0.75
	   },
	   30:
	   {
	   		"opacity":0.70
	   },
	   35:
	   {
	   		"opacity":0.65
	   },
	   40:
	   {
	   		"opacity":0.60
	   },
	   45:
	   {
	   		"opacity":0.55
	   },
	   50:
	   {
	   		"opacity":0.50
	   },
	   55:
	   {
	   		"opacity":0.45
	   },
	   60:
	   {
	   		"opacity":0.40
	   },
	   65:
	   {
	   		"opacity":0.35
	   },
	   70:
	   {
	   		"opacity":0.30
	   },
	   75:
	   {
	   		"opacity":0.25
	   },
	   80:
	   {
	   		"opacity":0.20
	   },
	   85:
	   {
	   		"opacity":0.15
	   },
	   90:
	   {
	   		"opacity":0.10
	   },
	   95:
	   {
	   		"opacity":0.05
	   },
	   100:
	   {
	   		"opacity":0
	   }
    } ;
	animDef = kony.ui.createAnimation(animDefinition);
	return animDef;
}