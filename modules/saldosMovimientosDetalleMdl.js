function verSaldosMovimientosDetalle(){
	var renta=	saldosMovimientos.smgtoContenido.selectedItems[0].colRenta;
	var fecha=  saldosMovimientos.smgtoContenido.selectedItems[0].colFecha;
	var coa=	saldosMovimientos.smgtoContenido.selectedItems[0].colCoA;
	var idPago=	saldosMovimientos.smgtoContenido.selectedItems[0].colIdPago;
	
	//var rowSeleccionado  = saldosMovimientos.dataGridContenido.selectedItem;
	//kony.application.showLoadingScreen("sknLblLoading", "Cargando...", constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true, {
    //            shouldShowLabelInBottom: true,
    //            seperatorHeight: 30
    //        });
	showLoader();
	popUpSaldosMovimientosDetalle.lblTituloPopup.text=saldosMovimientos.smgtoContenido.selectedItems[0].colDescripcion;            
	
	var inputparam = {};
	if(idPago != null && idPago != undefined && idPago!=0){
		//inputparam["serviceID"] = "obtenerSaldosMovimientosDetalleAbono";
		//inputparam["idPago"] = rowSeleccionado["colIdPago"];
		//lstDetalleAbono = appmiddlewareinvokerasync(inputparam,getSaldosMovimientosDetalleAbono);
		kony.print ("Pagos no requieren descripción");
		//popUpSaldosMovimientosDetalle.show();
		//kony.application.dismissLoadingScreen();
		dismissLoader();
	}
	else{
		inputparam["serviceID"] = "obtenerSaldosMovimientosDetalle";
		inputparam["persona"] = kony.store.getItem("numeroCliente").toString();
		inputparam["fechaInicio"] = kony.store.getItem("MovimientosFechaInicio");
		inputparam["fechaFin"] = kony.store.getItem("MovimientosFechaFin");
		inputparam["operacionMaestra"] = kony.store.getItem("contratoMaestro");
		
		inputparam["renta"] = renta;
		inputparam["fechaDetalle"] = fecha;
		inputparam["coa"] = coa;
		
		inputparam["httpheaders"] = {};
		inputparam["httpconfig"] = {timeout:15};
		
		lstDetalle = appmiddlewareinvokerasync(inputparam,getSaldosMovimientosDetalle);
	}	
}

function getSaldosMovimientosDetalle(status, lstDetalle) {
	
	if(lstDetalle != null && lstDetalle != undefined && 
	   lstDetalle["codigo"] != null && lstDetalle["codigo"] != undefined && 
	   lstDetalle["codigo"]==1){
	   if (lstDetalle["lstDetalle"] != null && lstDetalle["lstDetalle"] != undefined) {
	   		var smgtoTemporal = [];
	   		if(lstDetalle["lstDetalle"].length>0){
	   		    for (var i = 0; i < lstDetalle["lstDetalle"].length; i++) {
		        	var descripcion=lstDetalle["lstDetalle"][i]["descripcion"];
		        	var monto=lstDetalle["lstDetalle"][i]["monto"];
		        	var interesIva=lstDetalle["lstDetalle"][i]["interesIva"];
		        	var cargo=lstDetalle["lstDetalle"][i]["cargo"];
		        			        	
		        	if(monto != 0 && interesIva != 0){
		        		smgtoTemporal.push({
			                "lblDescripcion": descripcion,
			                "lblMonto": "$"+monto
			            });
			            smgtoTemporal.push({
			                "lblDescripcion": "INTERÉS DE "+descripcion,
			                "lblMonto": "$"+interesIva
			            });
		        	}
		        	else{
		        		smgtoTemporal.push({
			                "lblDescripcion": descripcion,
			                "lblMonto": "$"+cargo
			            });
		        	}
		        } 
		        //kony.application.dismissLoadingScreen();
				dismissLoader();
		        //saldosMovimientosDetalle.smgtoContenido.setData(smgtoTemporal);
				popUpSaldosMovimientosDetalle.smgtoContenido.setData(smgtoTemporal);
		        popUpSaldosMovimientosDetalle.show();
		        //saldosMovimientosDetalle.show();
		    }
		}
		else{
			kony.print ("No existe detalle del pago");
			//kony.application.dismissLoadingScreen();
			dismissLoader();
		}
	}
	else{
		if(lstDetalle != null && lstDetalle != undefined &&
		lstDetalle["codigo"] != null && lstDetalle["codigo"] != undefined){
			alert("El servidor no respondio");
			//kony.application.dismissLoadingScreen();
			dismissLoader();
		}
		else if(status==300){
			alert(kony.i18n.getLocalizedString("103"));
			//kony.application.dismissLoadingScreen();
			dismissLoader();
		}
		else if(status!=100 && status!=200){
			errorServiciosWeb(lstDetalle.errcode);
			//kony.application.dismissLoadingScreen();
			dismissLoader();
		}
	}	
}

function getSaldosMovimientosDetalleAbono(status, lstDetalleAbono) {
	if(lstDetalleAbono != null && lstDetalleAbono != undefined && 
	   lstDetalleAbono["codigo"] != null && lstDetalleAbono["codigo"] != undefined && 
	   lstDetalleAbono["codigo"]==1){  
	   if (lstDetalleAbono["lstDetalle"] != null && lstDetalleAbono["lstDetalle"] != undefined) {
	   		
	   		var smgtoTemporal = [];
	   		if(lstDetalleAbono["lstDetalle"].length>0){
	   		    for (var i = 0; i < lstDetalleAbono["lstDetalle"].length; i++) {
		        	var descripcion=lstDetalleAbono["lstDetalle"][i]["descripcion"];
		        	var monto=lstDetalleAbono["lstDetalle"][i]["montoMovimiento"];
		        	var montoTotal=lstDetalleAbono["lstDetalle"][i]["montoTotal"];
		        	var iva=lstDetalleAbono["lstDetalle"][i]["montoIva"];
		        	var operacion= lstDetalleAbono["lstDetalle"][i]["operacion"];
		        	
		        	smgtoTemporal.push({
		        		"lblDescripcion": operacion+" "+descripcion,
		        		"lblMonto": "$"+montoTotal
		        	});
		        }
		        //kony.application.dismissLoadingScreen();
				dismissLoader();
		        popUpSaldosMovimientosDetalle.smgtoContenido.setData(smgtoTemporal);
		        popUpSaldosMovimientosDetalle.show();
		    }
		    else{
		    	kony.print ("No existe detalle del abonos");
		    }
		}
	}	
}

function saldosMovimientosDetalleCerrar(){
	popUpSaldosMovimientosDetalle.destroy();
}
