function cargarMontoPago() {
    obtenerMontoPago();
}

function obtenerMontoPago() {
    kony.application.showLoadingScreen("sknLblLoading", "Cargando...", constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true, {
        shouldShowLabelInBottom: true,
        seperatorHeight: 30
    });
    var cliente = kony.store.getItem("numeroClientePagos");
    var contrato = kony.store.getItem("numeroContratoPagos");
    pagosMonto.lblContrato.text = "CONTRATO\n" + contrato;
    var fechaInicio = new Date();
    var fechaFin = new Date();
    fechaInicio.setMonth(fechaFin.getMonth() - 3);
    saldosMovimientos.fechaIncio.dateComponents = [fechaInicio.getDate(), (parseInt(fechaInicio.getMonth()) + 1), fechaInicio.getFullYear() - 1];
    saldosMovimientos.fechaFin.dateComponents = [fechaFin.getDate(), (parseInt(fechaFin.getMonth()) + 1), fechaFin.getFullYear()];
    //var sFechaInicio= fechaInicio.getDate()+"/"+(parseInt(fechaInicio.getMonth())+1)+"/"+fechaInicio.getFullYear();
    //var sFechaFin= fechaFin.getDate()+"/"+(parseInt(fechaFin.getMonth())+1)+"/"+fechaFin.getFullYear();
    var sFechaInicio = "01/01/2000";
    var sFechaFin = "01/01/2016";
    var inputparam = {};
    inputparam["serviceID"] = "obtenerSaldosMovimientosEncabezado";
    inputparam["persona"] = cliente;
    inputparam["operacionMaestra"] = contrato;
    //inputparam["persona"] = 251540;
    //inputparam["operacionMaestra"] = '47349-AP';
    inputparam["fechaInicio"] = sFechaInicio;
    inputparam["fechaFin"] = sFechaFin;
    inputparam["httpheaders"] = {};
    inputparam["httpconfig"] = {
        timeout: 5
    };
    lstMovEncabezado = appmiddlewareinvokerasync(inputparam, obtenerMontoPagoCallback);
}

function obtenerMontoPagoCallback(status, lstMovEncabezado) {
    if (lstMovEncabezado != null && lstMovEncabezado != undefined && lstMovEncabezado["codigo"] != null && lstMovEncabezado["codigo"] != undefined && lstMovEncabezado["codigo"] == 1) {
        if (lstMovEncabezado["lstContenido"] != null && lstMovEncabezado["lstContenido"] != undefined) {
            var capital;
            var saldo;
            var fechaCorte;
            var lstFechasCorte;
            var dataTemporal = [];
            for (var i = 0; i < lstMovEncabezado["lstContenido"].length; i++) {
                capital = parseInt(lstMovEncabezado["lstContenido"][i]["capital"]).toFixed(2);
                saldo = parseInt(lstMovEncabezado["lstContenido"][i]["saldo"]).toFixed(2);
                var fechaTemporal = new Date(lstMovEncabezado["lstContenido"][i]["fechaCorte"].toString());
                fechaCorte = fechaTemporal.getDate() + "/" + (parseInt(fechaTemporal.getMonth()) + 1) + "/" + fechaTemporal.getFullYear();
                lstFechasCorte = lstMovEncabezado["lstContenido"][i]["lstFechasCorte"];
                if (lstFechasCorte != null && lstFechasCorte != undefined) {
                    for (var j = 0; j < lstFechasCorte.length; j++) {}
                }
            }
            /*	        
            saldosMovimientos.lblCapital.text=capital;
            saldosMovimientos.lblSaldo.text=saldo;
            saldosMovimientos.lblFechaCorte.text=fechaCorte;
            */
            pagosMonto.txtMontoPago.text = kony.os.toCurrency(parseFloat(saldo));
            pagosMonto.lblMontoPago.text = kony.os.toCurrency(parseFloat(saldo));
            pagosMonto.forceLayout();
            kony.application.dismissLoadingScreen();
        } else {
            kony.application.dismissLoadingScreen();
        }
    } else {
        kony.application.dismissLoadingScreen();
    }
}

function validarMontoPago() {
    var texto = pagosMonto.txtMontoPago.text;
    if (texto == '') {
        pagosMonto.txtMontoPago.text = pagosMonto.lblMontoPago.text;
        alert("Introduzca un monto valido por favor");
        return;
    }
    texto = texto.replaceAll('$', '');
    texto = texto.replaceAll("'", '');
    texto = texto.replaceAll(',', '')
    if (isNaN(texto)) {
        alert("Introduzca un monto valido por favor");
    } else {
        var precio = parseFloat(texto);
        pagosMonto.txtMontoPago.text = kony.os.toCurrency(precio);
    }
}