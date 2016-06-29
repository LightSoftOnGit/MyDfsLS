function segurosVer(){
	//frmSeguros.show();
	showFrm(frmSeguros);
}

function segurosMiseguro(){
	//showLoader();
	kony.application.showLoadingScreen("sknLblLoading", "Cargando...", constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true, {
                shouldShowLabelInBottom: true,
                seperatorHeight: 30
            });
	
	gpsUbicacionActual();
	var inputparam = {};
	inputparam["serviceID"] = "obtenerDetalleContrato";
	inputparam["operacionMaestra"] = kony.store.getItem("contratoMaestro");
	inputparam["httpheaders"] = {};
	inputparam["httpconfig"] = {timeout:15};
	
	detalleContrato = appmiddlewareinvokerasync(inputparam,segurosDetalleContrato);
}

function segurosDetalleContrato(status, detalleContrato) {
	if(detalleContrato != null && detalleContrato != undefined && 
	   detalleContrato["codigo"] != null && detalleContrato["codigo"] != undefined && 
	   detalleContrato["codigo"]==1){
		
		var lstAseguradora;
		if (detalleContrato["lstContenido"] != null && 
			detalleContrato["lstContenido"] != undefined) {
			var smgtoTemporal = [];
			if(detalleContrato["lstContenido"].length>0){
				for (var i = 0; i < detalleContrato["lstContenido"].length; i++) {
		        	//completar set de valores
					frmMiSeguro.richTextNombreAsegurado.text= detalleContrato["lstContenido"][i]["nombreCliente"];
					frmMiSeguro.richTextNoContrato.text= detalleContrato["lstContenido"][i]["numeroContrato"];
					
					lstAseguradoras= detalleContrato["lstContenido"][i]["lstAseguradora"];
					if (lstAseguradoras != null && lstAseguradoras != undefined) {
		    			for (var j = 0; j < lstAseguradoras.length; j++) {
		    				
		    			 	frmMiSeguro.richTextNoPoliza.text=lstAseguradoras[j]["aseguradoraPoliza"]
		    			 	
		    			 }
		    		}
					frmMiSeguro.richTextNoSerie.text= detalleContrato["lstContenido"][i]["vinUnidad"];	
		        }
		        //kony.application.getCurrentForm().smgtoOpciones.setData(smgtoTemporal);
				//kony.application.dismissLoadingScreen();
				dismissLoader();
		    }
	        else{
	    		alert(kony.i18n.getLocalizedString("106"));
	    		//kony.application.dismissLoadingScreen();
				dismissLoader();
	    	}
	    }
	    showFrm(frmMiSeguro);
	}
	else{
		if(detalleContrato !=null && detalleContrato["codigo"]!=null &&
		   detalleContrato !=undefined && detalleContrato["codigo"]!=undefined){
			if(detalleContrato["codigo"]==100){
				var errorMsg=kony.i18n.getLocalizedString(detalleContrato["codigo"])!=null?detalleContrato["codigo"]+". "+kony.i18n.getLocalizedString(detalleContrato["codigo"]):detalleContrato["codigo"]+". ";
				alert(errorMsg);
			}
			else if(detalleContrato["codigo"]==101){
				alert(kony.i18n.getLocalizedString(detalleContrato["codigo"]));
			}
			else if(detalleContrato["codigo"]==102){
				alert(kony.i18n.getLocalizedString(detalleContrato["codigo"]));
			}
			else{
				alert(kony.i18n.getLocalizedString(detalleContrato["codigo"]));
			}
			//kony.application.dismissLoadingScreen();
			dismissLoader();
		}
		else if(status==300){
			alert(kony.i18n.getLocalizedString("103"));
			//kony.application.dismissLoadingScreen();
			dismissLoader();
		}
		else if(status!=100 && status!=200){
			alert(kony.i18n.getLocalizedString("104"));
			//kony.application.dismissLoadingScreen();
			dismissLoader();
		}
	}
	//frmMiSeguro.show();
}

function segurosLlamadaTelefono(){
	try{
		var telefonoTemp= kony.application.getCurrentForm().lblTelefono.text;
		var telefono=telefonoTemp.replace(/\D/g,'');
		kony.phone.dial(telefono);
	} 
	catch(err){
		alert("Error al ejecutar llamada:: "+err);
		alert(kony.i18n.getLocalizedString("110"));
	}
}
function segurosCorreoElectronico(){
	var correo= kony.application.getCurrentForm().lblCorreo.text;
	kony.phone.openEmail([correo],[],[],'Mensaje enviado desde myMBF',"Titulo \n contenido del correo",false);
}