function gpsDistribuidorOpcionesNav(eventobject, sectionNumber, rowNumber) {
    var idOpcion  = kony.application.getCurrentForm().smgtoOpciones.selectedItems[0].lblId;
    switch(idOpcion){
		case 1:
			var geolocalizacion= kony.store.getItem("geolocalizacion");
			if(geolocalizacion != null && geolocalizacion != undefined){
				if(geolocalizacion==true){
					geoPosicion();
				}
				else{
					//infUbicacion.show();
					showFrm(infUbicacion);	
				}
			}
			else{
				geoPosicion();
			}
		break;
		case 2:
			optenerEstados();
		break;
	}
}
function gpsVerDistribuidores(){
	kony.store.removeItem("distribuidorEstado");
	kony.store.removeItem("distribuidorCercano");
	
	kony.application.showLoadingScreen("sknLblLoading", "Cargando...", constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true, {
                shouldShowLabelInBottom: true,
                seperatorHeight: 30
            });  
	frmDistribuidores.smgtoOpciones.removeAll();         
	var geolocalizacion= kony.store.getItem("geolocalizacion");
	if(geolocalizacion != null && geolocalizacion != undefined){
		if(geolocalizacion==true){
			geoPosicion();
			optenerEstados();
		}
		else{
			optenerEstados();
		}
	}
	else{
		geoPosicion();
		optenerEstados();
	}
	//frmDistribuidores.show();
	showFrm(frmDistribuidores);	
}

function geoPosicion()
{
	var opcionesPosicion=new Object();
	opcionesPosicion.enablehighaccuracy=true;
	opcionesPosicion.timeout=15000;
	opcionesPosicion.maximumage=0;
	opcionesPosicion.useBestProvider=true;
	
	try{
	 	kony.location.getCurrentPosition(geoLlamadaExitosa, geoLlamadaError,opcionesPosicion);
	}
	catch(exception){
		alert("Exception :: "+exception.message);
	}
}

function geoLlamadaError(posicionError)
{
	 var llamada=kony.store.getItem("distribuidorCercano");
		        
    if(llamada!=null && llamada==true){
    	alert("Seleccione un distribuidor antes de enviar la cotización");
    	kony.store.removeItem("distribuidorCercano");//   ====> Aqui se vacia el store para cotizador	
    	kony.store.setItem("distribuidorEstado",true);
    	optenerEstados();
    } else{		
		kony.application.dismissLoadingScreen();
		switch(posicionError.code){
			case 1:
				alert(kony.i18n.getLocalizedString("107"));
			break;
			case 2:
				alert(kony.i18n.getLocalizedString("108"));
			break;
			case 3:
				alert(kony.i18n.getLocalizedString("109"));
			break;
		}
	}
	
}

function geoLlamadaExitosa(posicion)
{
	var latitud = posicion.coords.latitude;
	var longitud = posicion.coords.longitude;
	
	kony.store.setItem("latitud", latitud);
	kony.store.setItem("longitud", longitud);
	
	var inputparam = {};
	inputparam["serviceID"] = "obtenerDistribuidorPorGps";
	inputparam["rubro"] = kony.i18n.getLocalizedString("idSitio");
	inputparam["latitud"] = latitud;
	inputparam["longitud"] = longitud;
	inputparam["radio"] = "50";
	inputparam["limite"] = "3";
	inputparam["httpheaders"] = {};
	inputparam["httpconfig"] = {timeout:15};
	
	distribuidorPorGps = appmiddlewareinvokerasync(inputparam,getUbicaciones);
	
}

function getUbicaciones(status, distribuidorPorGps) {
	if(distribuidorPorGps!=null && distribuidorPorGps["codigo"]!=null &&
		   distribuidorPorGps!=undefined && distribuidorPorGps["codigo"]!=undefined &&
		   distribuidorPorGps["codigo"]==1){
		
		if (distribuidorPorGps["lstDistribuidores"] != null && 
			distribuidorPorGps["lstDistribuidores"] != undefined) {
	        
	        var smgtoTemporal = [];
	        
	        if(distribuidorPorGps["lstDistribuidores"].length>0){
		   
		        for (var i = 0; i < distribuidorPorGps["lstDistribuidores"].length; i++) {
		            smgtoTemporal.push({
		                "lblNombre": distribuidorPorGps["lstDistribuidores"][i]["nombre"],
		                "lblCalle": distribuidorPorGps["lstDistribuidores"][i]["calle"],
		                "lblPlaza": distribuidorPorGps["lstDistribuidores"][i]["colonia"]+", "+
		                			distribuidorPorGps["lstDistribuidores"][i]["codigoPostal"]+", "+
		                			distribuidorPorGps["lstDistribuidores"][i]["plaza"],
		                "lblTelefono": distribuidorPorGps["lstDistribuidores"][i]["telefono"],
		                
		                "lblLatitud": kony.store.getItem("latitud"),
		                "lblLongitud": kony.store.getItem("longitud"),
		                
		                "lblEmail": distribuidorPorGps["lstDistribuidores"][i]["email"],
		                "lblId": distribuidorPorGps["lstDistribuidores"][i]["id"],
		                "lblLatitudDestino": distribuidorPorGps["lstDistribuidores"][i]["latitud"],
		                "lblLongitudDestino": distribuidorPorGps["lstDistribuidores"][i]["longitud"],
		                "lblPaginaWeb": distribuidorPorGps["lstDistribuidores"][i]["paginaWeb"],
		                "lblTaller": distribuidorPorGps["lstDistribuidores"][i]["taller"],
		                
		                "lblT": "T",
		                "btnIr": "Ir"
		            })
		        }
		        
		        var llamada=kony.store.getItem("distribuidorCercano");
		        
		        if(llamada!=null && llamada==true){		
		        	kony.store.removeItem("distribuidorCercano"); //   ====> Aqui se vacia el store para cotizador			
					var datosDistribuidor = "";
					datosDistribuidor=datosDistribuidor+smgtoTemporal[0].lblNombre;
					datosDistribuidor=datosDistribuidor+"\n"+smgtoTemporal[0].lblCalle;
					datosDistribuidor=datosDistribuidor+"\n"+smgtoTemporal[0].lblPlaza+" "+smgtoTemporal[0].lblTelefono;
					cotizadorEnviar2.richTextDireccion.text=datosDistribuidor;

					kony.store.setItem("nombreDistribuidorEnvio",smgtoTemporal[0].lblNombre);
					kony.store.setItem("calleDistribuidorEnvio",smgtoTemporal[0].lblCalle);
					kony.store.setItem("plazaDistribuidorEnvio",smgtoTemporal[0].lblPlaza);
					kony.store.setItem("telefonoDistribuidorEnvio",smgtoTemporal[0].lblTelefono);
					kony.store.setItem("emailDistribuidorEnvio",smgtoTemporal[0].lblEmail);	
					//kony.application.dismissLoadingScreen();								
				}
				else{
					frmDistribuidores.smgtoOpciones.setData(smgtoTemporal);
					kony.application.dismissLoadingScreen();
		        }
		    }
		    else{
		    	alert(kony.i18n.getLocalizedString("105"));				
		    	kony.application.dismissLoadingScreen();
		    	var llamada=kony.store.getItem("distribuidorCercano");		        
			    if(llamada!=null && llamada==true){
			    	alert("Seleccione un distribuidor antes de enviar la cotización");
			    	kony.store.removeItem("distribuidorCercano");//   ====> Aqui se vacia el store para cotizador	
			    	kony.store.setItem("distribuidorEstado",true);
			    	optenerEstados();
			    } 
		    }
	    }
	    
	}
	else{
		if(distribuidorPorGps!=null && distribuidorPorGps["codigo"]!=null &&
		   distribuidorPorGps!=undefined && distribuidorPorGps["codigo"]!=undefined){
			if(distribuidorPorGps["codigo"]==100){
				alert(kony.i18n.getLocalizedString(distribuidorPorGps["codigo"]));
			}
			else if(distribuidorPorGps["codigo"]==101){
				alert(kony.i18n.getLocalizedString(distribuidorPorGps["codigo"]));
			}
			else if(distribuidorPorGps["codigo"]==102){
				alert(kony.i18n.getLocalizedString(distribuidorPorGps["codigo"]));
			}
			else{
				alert(kony.i18n.getLocalizedString(distribuidorPorGps["codigo"]));
			}
			kony.application.dismissLoadingScreen();
		}
		else if(status==300){
			alert(kony.i18n.getLocalizedString("103"));
			kony.application.dismissLoadingScreen();
		}
		else if(status!=100 && status!=200){
			//alert(kony.i18n.getLocalizedString("104"));
			errorServiciosWeb(distribuidorPorGps.errcode);
			kony.application.dismissLoadingScreen();
		}
	}
}

function optenerEstados(){
	var inputparam = {};
	inputparam["serviceID"] = "obtenerEstados";
	inputparam["rubro"] = kony.i18n.getLocalizedString("idSitio");
	inputparam["httpheaders"] = {};
	inputparam["httpconfig"] = {timeout:15};
	lstEstados = appmiddlewareinvokerasync(inputparam,getEstados);
}

function getEstados(status, lstEstados) {
	if(lstEstados != null && lstEstados != undefined && 
	   lstEstados["codigo"] != null && lstEstados["codigo"] != undefined && 
	   lstEstados["codigo"]==1){
		
		if (lstEstados["lstEstados"] != null && lstEstados["lstEstados"] != undefined) {
	        var masterData = [];
	        for (var i = 0; i < lstEstados["lstEstados"].length; i++) {
	        	var lstTemporal = [];
	        	lstTemporal[0] = lstEstados["lstEstados"][i]["id"];
	        	lstTemporal[1] = lstEstados["lstEstados"][i]["nombre"];
	        	masterData[i] = lstTemporal;
	        }    
			frmDistribuidores.lstEstados.masterData=masterData;
			
			var llamada=kony.store.getItem("distribuidorEstado");
			if(llamada!=null && llamada!=undefined && llamada==true){	
				frmDistribuidoresCotizador.lstEstados.masterData=masterData;
				//frmDistribuidoresCotizador.show();
				showFrm(frmDistribuidoresCotizador);
			}
	    }
	}
	else{
		if(lstEstados!=null && lstEstados["codigo"]!=null &&
		   lstEstados!=undefined && lstEstados["codigo"]!=undefined){
			if(lstEstados["codigo"]==100){
				alert(kony.i18n.getLocalizedString(lstEstados["codigo"]));
			}
			else if(lstEstados["codigo"]==101){
				alert(kony.i18n.getLocalizedString(lstEstados["codigo"]));
			}
			else if(lstEstados["codigo"]==102){
				alert(kony.i18n.getLocalizedString(lstEstados["codigo"]));
			}
			else{
				alert(kony.i18n.getLocalizedString(lstEstados["codigo"]));
			}
			kony.application.dismissLoadingScreen();
		}
		else if(status==300){
			alert(kony.i18n.getLocalizedString("103"));
			kony.application.dismissLoadingScreen();
		}
		else if(status!=100 && status!=200){
			//alert(kony.i18n.getLocalizedString("104"));
			//errorServiciosWeb(lstEstados.errcode);
			kony.application.dismissLoadingScreen();
		}
	}
	var geolocalizacion= kony.store.getItem("geolocalizacion");
	if(geolocalizacion != null && geolocalizacion != undefined){
		if(geolocalizacion==false){
			kony.application.dismissLoadingScreen();
		}
	}	
}

function errorServiciosWeb(idError){
	switch(idError){
		case 1000:
			alert("Error durante la conexcion");
			break;
		case 1011:
			alert("El dispositivo no tiene WiFi o conectividad móvil");
			break;
		case 1012:
			alert("Solicitud suspendida");
			break;
		case 1013:
			alert("Middleware, cadena JSON no válida");
			break;
		case 1014:
			alert("Tiempo de espera agotado");
			break;
		case 1015:
			alert("No se pudo encontrar el host");
			break;
		case 1016:
			alert("No se puede conectar al servidor");
			break;
		case 1022:
			alert("Llamada al servicio cancelada");
			break;
		default:
			//alert(status+" ** "+lstRespuestas.errcode);
			break;
	}
}