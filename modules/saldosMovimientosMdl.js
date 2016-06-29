function saldosMovimientosVer(pagina){
	var fechaInicio=new Date();
	var fechaFin=new Date();
	fechaInicio.setMonth(fechaFin.getMonth()-3);
	
	saldosMovimientos.fechaIncio.dateComponents=[fechaInicio.getDate(),(parseInt(fechaInicio.getMonth())+1),fechaInicio.getFullYear()];
	saldosMovimientos.fechaFin.dateComponents=[fechaFin.getDate(),(parseInt(fechaFin.getMonth())+1),fechaFin.getFullYear()];
	
	var sFechaInicio= fechaInicio.getDate()+"/"+(parseInt(fechaInicio.getMonth())+1)+"/"+fechaInicio.getFullYear();
	var sFechaFin= fechaFin.getDate()+"/"+(parseInt(fechaFin.getMonth())+1)+"/"+fechaFin.getFullYear();
	
	kony.store.setItem("MovimientosFechaInicio",sFechaInicio);
	kony.store.setItem("MovimientosFechaFin", sFechaFin);
	
	saldosMovimientos.fechaIncio.validStartDate="05/02/2002";
	
	showFrm(saldosMovimientos);
		
	optenerSaldosMovimientos(pagina);
	optenerSaldosMovimientosEncabezado();
	//saldosMovimientos.show();
}

function optenerSaldosMovimientos(pagina){
	//kony.application.showLoadingScreen("sknLblLoading", "Cargando...", constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true, {
    //            shouldShowLabelInBottom: true,
    //            seperatorHeight: 30
    //        });
	showLoader();
	
	var inputparam = {};
	inputparam["serviceID"] = "obtenerSaldosMovimientosPagina";
	inputparam["pagina"] = pagina.toString();
	inputparam["registrosPagina"] = "6";
	inputparam["persona"] = kony.store.getItem("numeroCliente").toString();//"251540";
	inputparam["fechaInicio"] = kony.store.getItem("MovimientosFechaInicio");
	inputparam["fechaFin"] = kony.store.getItem("MovimientosFechaFin");
	inputparam["operacionMaestra"] = kony.store.getItem("contratoMaestro");//"47349-AP";
	inputparam["httpheaders"] = {};
	inputparam["httpconfig"] = {timeout:20};
	
	lstRespuestas = appmiddlewareinvokerasync(inputparam,getSaldosMovimientos);
}

function getSaldosMovimientos(status, lstRespuestas) {
	if(lstRespuestas != null && lstRespuestas != undefined && 
	   lstRespuestas["codigo"] != null && lstRespuestas["codigo"] != undefined && 
	   lstRespuestas["codigo"]==1){
	   if (lstRespuestas["lstContenido"] != null && lstRespuestas["lstContenido"] != undefined) {
	   		var dataTemporal = [];
	        var pgActual;
        	var totalRegistros;
        	var lstMovimientos;
        	var monto;
        	
        	for (var i = 0; i < lstRespuestas["lstContenido"].length; i++) {
	        	pgActual= lstRespuestas["lstContenido"][i]["pgActual"];
	        	totalRegistros= lstRespuestas["lstContenido"][i]["totalRegistros"];
	        	lstMovimientos= lstRespuestas["lstContenido"][i]["lstMovimientos"];
	    		if (lstMovimientos != null && lstMovimientos != undefined) {
	    			for (var j = 0; j < lstMovimientos.length; j++) {
	    				var fechaTemporal= new Date(lstMovimientos[j]["fechaMovimiento"].toString());
	    				var fechaRegistro= fechaTemporal.getDate()+"/"+(parseInt(fechaTemporal.getMonth())+1)+"/"+fechaTemporal.getFullYear();
	    			 	var cargo=lstMovimientos[j]["cargo"];
	    			 	var abono=lstMovimientos[j]["abono"];
	    			 	var coa= lstMovimientos[j]["coa"];
	    			 	
	    			 	if(coa=="P" || coa=="A" || coa=="N"){
	    			 		abono!=null && abono != undefined ? monto=abono:monto=0;
	    			 	}
	    			 	else{
	    			 		cargo!=null && cargo != undefined ? monto=cargo:monto=0
	    			 	} 
	    			 	
	    			 	dataTemporal.push({
		                "colFecha": fechaRegistro,
		                "colDescripcion": lstMovimientos[j]["descripcion"],
		                "colTransaccion": "$ "+monto,
		                "colRenta": lstMovimientos[j]["renta"],
		                "colCoA": coa,
		                "colIdPago": lstMovimientos[j]["idPago"]
		                })
	    			 }
	    		}
	        }
	        saldosMovimientos.smgtoContenido.setData(dataTemporal);
	        
	        var totalPaginas= Math.ceil(totalRegistros/6);
	        saldosMovimientos.lblActual.text= pgActual;
	        saldosMovimientos.lblTotalRegistros.text= totalRegistros;
	        saldosMovimientos.lblTotalPaginas.text= totalPaginas.toFixed(0);
	        
	        if(pgActual==1){
				var masterDataPaginado = [];
				for (var j = 0; j < totalPaginas; j++) {
					var pagina=j+1;
					masterDataPaginado.push({
						"lblIndice": pagina.toFixed(0)	
					});
				}
				saldosMovimientos.smgtoPaginado.setData(masterDataPaginado);
			}
			if(totalRegistros>0){
				saldosMovimientos.flexContainerPaginado.isVisible=true;
			}
			else{
				saldosMovimientos.flexContainerPaginado.isVisible=false;
				alert("No se encontraron movimientos");
			}
			//kony.application.dismissLoadingScreen();
			dismissLoader();
		}
		
	}
	else{
		if(lstRespuestas != null && lstRespuestas != undefined &&
		lstRespuestas["codigo"] != null && lstRespuestas["codigo"] != undefined){
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
			errorServiciosWeb(lstRespuestas.errcode);
			//kony.application.dismissLoadingScreen();
			dismissLoader();
		}
	}
}

function saldosMovimientosSeleccionarPagina(rowIndex){
	var pagina= saldosMovimientos.smgtoPaginado.data[rowIndex].lblIndice;
	optenerSaldosMovimientos(pagina);
}

function saldosMovimientosSiguiente(){
	var pagina= parseInt(saldosMovimientos.lblActual.text)+1;
	var paginaTotal= saldosMovimientos.lblTotalPaginas.text;
	if(pagina <=paginaTotal){
		pagina=pagina-1;
		saldosMovimientos.smgtoPaginado.selectedRowIndex=[0,pagina];
	}
	else{
		alert("No existen más páginas");
	}
}

function saldosMovimientosAnterior(){
	var pagina= parseInt(saldosMovimientos.lblActual.text)-1;
	if(pagina>0){
		pagina=pagina-1;
		saldosMovimientos.smgtoPaginado.selectedRowIndex=[0,pagina];
	}
	else{
		alert("No existen más páginas");
	}
}

function saldosMovimientosPrimero(){
	saldosMovimientos.smgtoPaginado.selectedRowIndex=[0,0];
}

function saldosMovimientosUltimo(){
	var pagina= parseInt(saldosMovimientos.lblTotalPaginas.text);
	pagina=pagina-1;
	saldosMovimientos.smgtoPaginado.selectedRowIndex=[0,pagina];
}

function saldosMovimientosRango(){
	var fechaInicio= new Date(saldosMovimientos.fechaIncio.year,saldosMovimientos.fechaIncio.month-1, saldosMovimientos.fechaIncio.day);
	var fechaFin= new Date(saldosMovimientos.fechaFin.year,saldosMovimientos.fechaFin.month-1, saldosMovimientos.fechaFin.day);
	
	var sFechaInicio= fechaInicio.getDate()+"/"+(parseInt(fechaInicio.getMonth())+1)+"/"+fechaInicio.getFullYear();
	var sFechaFin= fechaFin.getDate()+"/"+(parseInt(fechaFin.getMonth())+1)+"/"+fechaFin.getFullYear();
	
	kony.store.setItem("MovimientosFechaInicio",sFechaInicio);
	kony.store.setItem("MovimientosFechaFin", sFechaFin);
	
	optenerSaldosMovimientos(1);	
}

function optenerSaldosMovimientosEncabezado(){
	var inputparam = {};
	inputparam["serviceID"] = "obtenerSaldosMovimientosEncabezado";
	inputparam["persona"] = kony.store.getItem("numeroCliente").toString();
	inputparam["fechaInicio"] = kony.store.getItem("MovimientosFechaInicio");
	inputparam["fechaFin"] = kony.store.getItem("MovimientosFechaFin");
	inputparam["operacionMaestra"] = kony.store.getItem("contratoMaestro").toString();
	inputparam["httpheaders"] = {};
	inputparam["httpconfig"] = {timeout:15};
	
	lstMovEncabezado = appmiddlewareinvokerasync(inputparam,getSaldosMovimientosEncabezado);
}

function getSaldosMovimientosEncabezado(status, lstMovEncabezado) {
	if(lstMovEncabezado != null && lstMovEncabezado != undefined && 
	   lstMovEncabezado["codigo"] != null && lstMovEncabezado["codigo"] != undefined && 
	   lstMovEncabezado["codigo"]==1){
	   if (lstMovEncabezado["lstContenido"] != null && lstMovEncabezado["lstContenido"] != undefined) {
	   		var capital;
	        var saldo;
	        var fechaCorte;
	        var lstFechasCorte;
	        var dataTemporal = [];
	                	
        	for (var i = 0; i < lstMovEncabezado["lstContenido"].length; i++) {
	        	capital= parseInt(lstMovEncabezado["lstContenido"][i]["capital"]).toFixed(2);
	        	saldo= parseInt(lstMovEncabezado["lstContenido"][i]["saldo"]).toFixed(2);
	        	var fechaTemporal= new Date(lstMovEncabezado["lstContenido"][i]["fechaCorte"].toString());
	    		fechaCorte= fechaTemporal.getDate()+"/"+(parseInt(fechaTemporal.getMonth())+1)+"/"+fechaTemporal.getFullYear();
	        	lstFechasCorte= lstMovEncabezado["lstContenido"][i]["lstFechasCorte"];
	    		
	    		if (lstFechasCorte != null && lstFechasCorte != undefined) {
	    			for (var j = 0; j < lstFechasCorte.length; j++) {
	    				
	    			 }
	    		}
	        }
	        saldosMovimientos.lblCapital.text="$"+capital;
	        saldosMovimientos.lblSaldo.text="$"+saldo;
	        saldosMovimientos.lblFechaCorte.text="Saldo a pagar al "+fechaCorte;
	   }
	}
}