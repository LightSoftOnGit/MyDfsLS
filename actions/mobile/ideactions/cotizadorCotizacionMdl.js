function limpiarCotizacion(){
	var cotizacionEnCurso = kony.store.getItem("cotizacionEnCurso");
	if(cotizacionEnCurso!=null && cotizacionEnCurso==false){
		var arrEmpty=[];
		cotizadorCotizacion.segmentCotizacion.setData(arrEmpty);
		cotizadorCotizacion.forceLayout();
	}
}

function cotizadorCotizacion_init(){
	//kony.application.showLoadingScreen("sknLblLoading", "Cargando...", constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true,{shouldShowLabelInBottom: true, seperatorHeight: 30});
}

function cargarCotizacion(){
	var cotizacionEnCurso = kony.store.getItem("cotizacionEnCurso");
	if(cotizacionEnCurso!=null && cotizacionEnCurso==false){
		kony.application.showLoadingScreen("sknLblLoading", "Cargando...", constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true,{shouldShowLabelInBottom: true, seperatorHeight: 30});
		cargarDatosModelo();	
		cargarFichaTecnica();
		calcularCotizacion();
	}
}


function calcularCotizacion(){
		 	
	var inputparam = {};
 	inputparam["serviceID"] = "obtenerCotizacionPrecio"; 
 	inputparam["idTipo"] = cotizadorModelos.segmentList.selectedItems[0].lblContentId.toString();
	inputparam["tipoPersona"] = cotizadorCalculo.radioPersona.selectedKey.toString();
	inputparam["tipoFinanciamiento"] =kony.store.getItem('idFinanciamientoSeleccionado').toString();
	inputparam["idEstado"] = cotizadorCalculo.lbEstados.selectedKey.toString();
	inputparam["idPlan"] = kony.store.getItem('idPlanSeleccionado').toString();
	inputparam["cantidadMeses"] = cotizadorCalculo.sliderPlazos.selectedValue.toString();
	inputparam["porcentajeEnganche"] = cotizadorCalculo.lblEngancheSeleccionado.text;
	inputparam["precio"] = cotizadorCalculo.txtPrecio.text.replaceAll('$', '').replaceAll(',', '').replaceAll("'", '');	
 	appmiddlewareinvokerasync(inputparam,calcularCotizacionCallback);
 	
	
}

function calcularCotizacionCallback(status, result){
	
	if (result.errmsg != undefined) {
 			alert('Se presento un error al recuperar el precio de la unidad: ' + result.errmsg);
 		} else { 	
 				
 			if (result.codigo != null && result.codigo != undefined && result.codigo == 1) { 				
    			if (result.leyenda != undefined ) {
    				kony.store.setItem("resultCotizacion", result);   				    				
    				cargarDatosCotizacion(result);								    				    							
    			} else{
    				alert('No hubo resultados');
    			}
 			} else {
 				if(result.codigo!=null && result.codigo!=undefined){
 					alert(result.codigo);
 				}
 			}
 		}
 	
}

function cargarDatosCotizacion(result){
	
	var arrCotizacion=[];	
	arrCotizacion.push({"lblContenido": kony.store.getItem('descripcionPlanSeleccionado')});	
 	arrCotizacion.push({"lblContenido": "Precio estimado: "+cotizadorCalculo.txtPrecio.text});
	arrCotizacion.push({"lblContenido": 'Plazo a '+ cotizadorCalculo.sliderPlazos.selectedValue+' meses'});
	arrCotizacion.push({"lblContenido": 'Mensualidad: '+result.smensualidad });
 	arrCotizacion.push({"lblContenido": 'Comision por apertura: '+ result.sComisionApertura});
 	arrCotizacion.push({"lblContenido": 'Total de anticipo: '+result.sEnganche});
	var idFinanciamientoFlex = kony.store.getItem('idFinanciamientoFlex');
 	var idFinanciamientoSeleccionado = kony.store.getItem('idFinanciamientoSeleccionado');
 	var esPlanAlternativo=kony.store.getItem('esPlanAlternativo'); 	
 	if(esPlanAlternativo=='true'){
 		arrCotizacion.push({"lblContenido": 'Valor final: '+result.svalorfinal});
 	}
 	cotizadorCotizacion.segmentCotizacion.setData(arrCotizacion);
 	kony.store.setItem('cotizadorTerminos', result.leyenda);
    cotizadorCotizacion.forceLayout();	
    kony.store.setItem("cotizacionEnCurso", true);
	kony.application.dismissLoadingScreen();			
    
}

function cargarDatosModelo(){
	var nombreClase = kony.store.getItem('claseSeleccionada');
	cotizadorCotizacion.imageClaseCotizacion.src= nombreClase+"cot"+".png";
	
	cotizadorCotizacion.lblSegmentTitle.text= cotizadorModelos.segmentList.selectedItems[0].lblContent;
}

function alternarFichaTecnica(){
	cotizadorCotizacion.segmentFichaTecnica.setVisibility(!cotizadorCotizacion.segmentFichaTecnica.isVisible, null);
	cotizadorCotizacion.segmentCotizacion.setVisibility(!cotizadorCotizacion.segmentCotizacion.isVisible , null);
	cotizadorCotizacion.forceLayout();
} 

function cargarFichaTecnica(){
		 	
	var inputparam = {};
 	inputparam["serviceID"] = "obtenerFichaTecnica";  	
 	inputparam["idTipo"] = cotizadorModelos.segmentList.selectedItems[0].lblContentId.toString();
 	
 	appmiddlewareinvokerasync(inputparam,cargarFichaTecnicaCallback);
}



function cargarFichaTecnicaCallback(status, result){
	if (result.errmsg != undefined) {
 			alert('Se presento un error al recuperar el precio de la unidad: ' + result.errmsg);
	} else { 	
			
		if (result.codigo != null && result.codigo != undefined &&  result.codigo == 1) { 				
			if (result.clase != undefined ) {   				    				
				var arrFichaTecnica=[];    				
				arrFichaTecnica.push({"lblContenidoFicha":"Combustible "+"\n"+ result.combustible});
				arrFichaTecnica.push({"lblContenidoFicha":"Potencia (Hp@rpm)" +"\n"+	result.potencia });  			    				
				arrFichaTecnica.push({"lblContenidoFicha":"Torque (Nm@rpm)"+"\n"+	result.torque });    				
				arrFichaTecnica.push({"lblContenidoFicha":"Transmisión"+"\n"+	result.transmision});
				arrFichaTecnica.push({"lblContenidoFicha":"Tracción"+"\n"+	result.motorTraccion});    				
				arrFichaTecnica.push({"lblContenidoFicha":"N° de Cilindros / Disposición"+"\n"+  result.cilindrosDisposicion});
				arrFichaTecnica.push({"lblContenidoFicha":"Cilindrada"+"\n"+	result.cilindrada });    				
				arrFichaTecnica.push({"lblContenidoFicha":"Consumo Combinado"+"\n"+	result.consumoCombinado});
				cotizadorCotizacion.segmentFichaTecnica.setData(arrFichaTecnica);
				cotizadorCotizacion.lblFichaTecnica.setVisibility(true, null);    												    				    							
			} else{
				alert('No hubo resultados');
			}
		} else {
			cotizadorCotizacion.lblFichaTecnica.setVisibility(false, null);
		}
	} 	
}

