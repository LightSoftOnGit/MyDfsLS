
function cotizadorFinanciamiento2_init(){
	
	//cotizadorFinanciamiento2.lblClase.text=kony.store.getItem("lblClaseSeleccionada");
	
	
	//limpiarControlesFinanciamiento2();
	cargarTiposFinanciamiento2();	
}

function cargarModeloSeleccionadoFinanciamiento(){	
	cargarTiposFinanciamiento2();
	cotizadorFinanciamiento2.lblClase.text=kony.store.getItem("lblClaseSeleccionada");	
}

function setFinanciamientoSeleccionado2(){
	kony.store.setItem('idTipoFinanciamiento',cotizadorFinanciamiento2.segmentCalculadora.selectedItems[0].lblId);
	
	if(cotizadorFinanciamiento2.segmentCalculadora.selectedItems[0].lblId==kony.store.getItem('idFinanciamientoFlex')){
		kony.store.setItem('idFinanciamientoSeleccionado',id_credito_directo );	
		kony.store.setItem('nombreFinanciamientoSelccionado', kony.store.getItem('nombreCreditoDirecto'));	
	}else{
		kony.store.setItem('idFinanciamientoSeleccionado',cotizadorFinanciamiento2.segmentCalculadora.selectedItems[0].lblId );
		kony.store.setItem('nombreFinanciamientoSelccionado', cotizadorFinanciamiento2.segmentCalculadora.selectedItems[0].lblContent);
	}
	if(cotizadorFinanciamiento2.segmentCalculadora.selectedItems[0].lblIdPlan!=""){
		
		kony.store.setItem('idPlanSeleccionado', cotizadorFinanciamiento2.segmentCalculadora.selectedItems[0].lblIdPlan);
		kony.store.setItem('descripcionPlanSeleccionado', cotizadorFinanciamiento2.segmentCalculadora.selectedItems[0].lblDescripcionPlan);    		
		
		kony.store.setItem('esPlanAlternativo', cotizadorFinanciamiento2.segmentCalculadora.selectedItems[0].lblEsPlanAlternativo=="true");	
		
		kony.store.setItem("cotizacionEnCurso",false);
		//cambiar por frmShow(),
		//cotizadorCalculo2.show();
		showFrm(cotizadorCalculo2);
		
	}else{
		//cambiar por frmShow(), quitar el init
		//cotizadorPlanes2.show();
		//cotizadorPlanes2_init();
		showFrm(cotizadorPlanes2);
	}
	
}

function cargarTiposFinanciamiento2() {		
	kony.application.showLoadingScreen("sknLblLoading", "Cargando...", constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true,{shouldShowLabelInBottom: true, seperatorHeight: 30});
	id_financiamiento=0;
	
	var idTipo=cotizadorModelos2.segmentCalculadora.selectedItems[0].lblContentId;	
	var inputparam = {};
 	inputparam["serviceID"] = "obtenerTiposFinanciamientoConFlexibility"; 	
 	inputparam["idTipo"] = idTipo;
 	inputparam["tipoFinanciamiento"] = id_credito_directo.toString(); 	
 	inputparam["tipoPersona"] = ''; 	  
 	inputparam["httpconfig"] = {timeout:30};
 	appmiddlewareinvokerasync(inputparam,cargarFinanciamientosCallback2);	
}

 function cargarFinanciamientosCallback2 (status, result) {
		 	
 		arrFinanciamientos=[];
 		arrPlanes=[];
 		var totalPlanes=0;
 		var financiamientoFlex="";
 		if (result.errmsg != undefined) { 			
 			alert('No fue posible recuperar los financiamientos, verifique su connexión a intenet y vuelva  a intentarlo mas tarde por favor.');
 			kony.application.dismissLoadingScreen();
 			//cambiar por frmShow()
 			//inicio.show();
 			showFrm(inicio);
 		} else { 			
 			if (result.codigo != null && result.codigo != undefined && result.codigo == 1) { 			
 				
    			if (result.lstFinanciamientos != undefined && result.lstFinanciamientos.length>0) {     			 				    				
    				for(i=0;i<result.lstFinanciamientos.length;i++){ 					    					    						    			    							    					
    					if(result.lstFinanciamientos[i].clave.toString()==clave_credito_directo){
    						id_credito_directo=result.lstFinanciamientos[i].id;
    					}
    					if(result.lstFinanciamientos[i].clave.toString()==clave_flexibility){    						
    						kony.store.setItem('idFinanciamientoFlex', result.lstFinanciamientos[i].id);  
    						kony.store.setItem('nombreCreditoDirecto', result.lstFinanciamientos[i].nombre);      						
    											    						    						
    					} 
    					if(result.lstFinanciamientos[i].lstPlanes != null && result.lstFinanciamientos[i].lstPlanes != undefined){ 		    						 							 	
    						    		
    						if(result.lstFinanciamientos[i].lstPlanes.length==1 ){  
    							arrFinanciamientos.push({"lblId":result.lstFinanciamientos[i].id,"lblContent":result.lstFinanciamientos[i].nombre,"lblIdPlan":result.lstFinanciamientos[i].lstPlanes[0].id,"lblDescripcionPlan":result.lstFinanciamientos[i].lstPlanes[0].descripcion,"lblEsPlanAlternativo":result.lstFinanciamientos[i].lstPlanes[0].esPlanAlternativo.toString()});
	    						
    						}else{
    							arrFinanciamientos.push({"lblId":result.lstFinanciamientos[i].id,"lblContent":result.lstFinanciamientos[i].nombre,"lblIdPlan":"","lblDescripcionPlan":"","lblEsPlanAlternativo":""});
    						
    						}				    						   						
    					}  		
	    				  							
    				}
    				cotizadorFinanciamiento2.segmentCalculadora.widgetDataMap={lblId:"lblId",lblContent:"lblContent",lblIdPlan:"lblIdPlan",lblDescripcionPlan:"lblDescripcionPlan",lblEsPlanAlternativo:"lblEsPlanAlternativo"};	
    				cotizadorFinanciamiento2.segmentCalculadora.setData(arrFinanciamientos);   				 				
    				cotizadorFinanciamiento2.segmentCalculadora.setVisibility(true, null);    	
    				cotizadorFinanciamiento2.forceLayout();
    				kony.application.dismissLoadingScreen();
    			} else{
    				alert('No hubo resultados');
    				kony.application.dismissLoadingScreen();
    			}
 			} else {
 				if(result.codigo != null && result.codigo != undefined ){
 					alert(result.codigo);
 					kony.application.dismissLoadingScreen();
 				}
 				
 			}
 		}
		
 	}

function limpiarControlesFinanciamiento2(){		
	try{
		var arrVacio=[];
		cotizadorFinanciamiento2.segmentCalculadora.widgetDataMap={lblId:"lblId",lblContent:"lblContent",lblIdPlan:"lblIdPlan",lblDescripcionPlan:"lblDescripcionPlan",lblEsPlanAlternativo:"lblEsPlanAlternativo"};
		arrVacio.push({"lblId":"","lblContent":"","lblIdPlan":"","lblDescripcionPlan":"","lblEsPlanAlternativo":""});
		cotizadorFinanciamiento2.segmentCalculadora.setData(arrVacio);
		cotizadorFinanciamiento2.forceLayout(); 
	} catch (e) {
	
	}
	
}