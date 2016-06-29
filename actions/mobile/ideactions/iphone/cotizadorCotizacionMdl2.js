function limpiarCotizacion2() {
    var cotizacionEnCurso = kony.store.getItem("cotizacionEnCurso");
    if (cotizacionEnCurso != null && cotizacionEnCurso == false) {
        limpiarDatosCotizacion();
    }
}

function enviarCotizacionNavegacion() {
    //cambiar por frmShow()
    //cotizadorEnviar2.show();
    showFrm(cotizadorEnviar2);
}

function limpiarDatosCotizacion() {
    try {
        cotizadorCotizacion2.lblPlanSeleccionado.text = "";
        cotizadorCotizacion2.lblPrecio.text = "";
        cotizadorCotizacion2.lblPlazo.text = "";
        cotizadorCotizacion2.lblMensualidad.text = "";
        cotizadorCotizacion2.lblComisionApertura.text = "";
        cotizadorCotizacion2.lblTotalAnticipo.text = "";
        cotizadorCotizacion2.flexValorFinal.opacity = 0;
        cotizadorCotizacion2.lblValorFinal.text = "";
        cotizadorCotizacion2.lblGasolina.text = "";
        cotizadorCotizacion2.lblPotencia.text = "";
        cotizadorCotizacion2.lblTorque.text = "";
        cotizadorCotizacion2.lblTraccion.text = "";
        cotizadorCotizacion2.lblTransmision.text = "";
        cotizadorCotizacion2.lblNumeroCilindros.text = "";
        cotizadorCotizacion2.lblCilindrada.text = "";
        cotizadorCotizacion2.lblConsumoCombinado.text = "";
        cotizadorCotizacion2.forceLayout();
    } catch (err) {}
}

function cotizadorCotizacion2_init() {
    //kony.application.showLoadingScreen("sknLblLoading", "Cargando...", constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true,{shouldShowLabelInBottom: true, seperatorHeight: 30});
}

function cargarCotizacion2() {
    var cotizacionEnCurso = kony.store.getItem("cotizacionEnCurso");
    if (cotizacionEnCurso != null && cotizacionEnCurso == false) {
        var pForm = kony.application.getPreviousForm();
        if (pForm.id != 'frmInformacion') {
            kony.application.showLoadingScreen("sknLblLoading", "Cargando...", constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true, {
                shouldShowLabelInBottom: true,
                seperatorHeight: 30
            });
            cargarDatosModelo2();
            cargarFichaTecnica2();
            calcularCotizacion2();
        }
    }
}

function calcularCotizacion2() {
    var inputparam = {};
    inputparam["serviceID"] = "obtenerCotizacionPrecio";
    inputparam["idTipo"] = cotizadorModelos2.segmentCalculadora.selectedItems[0].lblContentId.toString();
    inputparam["tipoPersona"] = cotizadorCalculo2.radioPersona.selectedKey.toString();
    inputparam["tipoFinanciamiento"] = kony.store.getItem('idFinanciamientoSeleccionado').toString();
    inputparam["idEstado"] = cotizadorCalculo2.lbEstados.selectedKey.toString();
    inputparam["idPlan"] = kony.store.getItem('idPlanSeleccionado').toString();
    inputparam["cantidadMeses"] = cotizadorCalculo2.sliderPlazos.selectedValue.toString();
    inputparam["porcentajeEnganche"] = cotizadorCalculo2.txtEngancheSeleccionado.text;
    inputparam["precio"] = cotizadorCalculo2.txtPrecio.text.replaceAll('$', '').replaceAll(',', '').replaceAll("'", '');
    inputparam["httpconfig"] = {
        timeout: 50
    };
    appmiddlewareinvokerasync(inputparam, calcularCotizacionCallback2);
}

function calcularCotizacionCallback2(status, result) {
    if (result.errmsg != undefined) {
        alert('No fue posible calcular la cotización, verifique su conexión a intenet y vuelva  a intentarlo mas tarde por favor.');
        kony.application.dismissLoadingScreen();
        //cambiar por frmShow()
        //inicio.show();
        showFrm(inicio);
    } else {
        if (result.codigo != null && result.codigo != undefined && result.codigo == 1) {
            if (result.leyenda != undefined) {
                kony.store.setItem("resultCotizacion", result);
                cargarDatosCotizacion2(result);
            } else {
                alert('No hubo resultados');
            }
        } else {
            if (status == 300) {
                alert('No fue posible calcular la cotización, verifique su conexión a intenet y vuelva  a intentarlo mas tarde por favor.');
                kony.application.dismissLoadingScreen();
            } else if (status != 100 && status != 200) {
                alert('No fue posible calcular la cotización, verifique su conexión a intenet y vuelva  a intentarlo mas tarde por favor.');
                kony.application.dismissLoadingScreen();
            } else if (result.codigo != null && result.codigo != undefined) {
                alert('No fue posible calcular la cotización, verifique su conexión a intenet y vuelva  a intentarlo mas tarde por favor.');
                kony.application.dismissLoadingScreen();
            }
        }
    }
}

function cargarDatosCotizacion2(result) {
    var arrCotizacion = [];
    cotizadorCotizacion2.lblPlanSeleccionado.text = kony.store.getItem('descripcionPlanSeleccionado');
    cotizadorCotizacion2.lblPrecio.text = cotizadorCalculo2.txtPrecio.text;
    cotizadorCotizacion2.lblPlazo.text = cotizadorCalculo2.sliderPlazos.selectedValue + ' meses';
    cotizadorCotizacion2.lblMensualidad.text = result.smensualidad;
    cotizadorCotizacion2.lblComisionApertura.text = result.sComisionApertura;
    cotizadorCotizacion2.lblTotalAnticipo.text = result.stotalAnticipo;
    var idFinanciamientoFlex = kony.store.getItem('idFinanciamientoFlex');
    var idFinanciamientoSeleccionado = kony.store.getItem('idFinanciamientoSeleccionado');
    var esPlanAlternativo = kony.store.getItem('esPlanAlternativo');
    if (esPlanAlternativo.toString() == 'true') {
        cotizadorCotizacion2.flexValorFinal.opacity = 1;
        cotizadorCotizacion2.lblValorFinal.text = result.svalorfinal;
        cotizadorCotizacion2.forceLayout();
    } else {
        cotizadorCotizacion2.flexValorFinal.opacity = 0;
        cotizadorCotizacion2.forceLayout();
    }
    kony.store.setItem('cotizadorTerminos', result.leyenda);
    kony.store.setItem("cotizacionEnCurso", true);
    cotizadorCotizacion2.forceLayout();
    kony.application.dismissLoadingScreen();
}

function cargarDatosModelo2() {
    var nombreClase = kony.store.getItem('claseSeleccionada');
    cotizadorCotizacion2.imageClaseCotizacion.src = nombreClase.trim().toLowerCase().replaceAll(" ", "").replaceAll("-", "") + "cot" + ".png";
    cotizadorCotizacion2.lblUnidad.text = cotizadorModelos2.segmentCalculadora.selectedItems[0].lblContent;
}

function alternarFichaTecnica2() {
    cotizadorCotizacion2.middleContainerCalculadoraDatos.setVisibility(!cotizadorCotizacion2.middleContainerCalculadoraDatos.isVisible, null);
    cotizadorCotizacion2.bottomSegmentDatosTecnicos.setVisibility(!cotizadorCotizacion2.bottomSegmentDatosTecnicos.isVisible, null);
    cotizadorCotizacion2.forceLayout();
}

function cargarFichaTecnica2() {
    var inputparam = {};
    inputparam["serviceID"] = "obtenerFichaTecnica";
    //alert(cotizadorModelos2.segmentCalculadora.selectedItems[0].lblContentId.toString());
    inputparam["idTipo"] = cotizadorModelos2.segmentCalculadora.selectedItems[0].lblContentId.toString();
    inputparam["httpheaders"] = {};
    inputparam["httpconfig"] = {
        timeout: 30
    };
    appmiddlewareinvokerasync(inputparam, cargarFichaTecnica2Callback);
}

function cargarFichaTecnica2Callback(status, result) {
    if (result.errmsg != undefined) {
        //alert('No fue posible recuperar la ficha técnica de la unidad, verifique su conexión a intenet y vuelva  a intentarlo mas tarde por favor.');
        //alert(result.errcode);
        kony.application.dismissLoadingScreen();
        cotizadorCotizacion2.botonDatosTecnicosContainer.setVisibility(false);
        //inicio.show();
    } else {
        if (result.codigo != null && result.codigo != undefined && result.codigo == 1) {
            if (result.clase != undefined) {
                cotizadorCotizacion2.botonDatosTecnicosContainer.setVisibility(true);
                cotizadorCotizacion2.lblGasolina.text = result.combustible;
                cotizadorCotizacion2.lblPotencia.text = result.potencia;
                cotizadorCotizacion2.lblTorque.text = result.torque;
                cotizadorCotizacion2.lblTraccion.text = result.transmision;
                cotizadorCotizacion2.lblTransmision.text = result.motorTraccion;
                cotizadorCotizacion2.lblNumeroCilindros.text = result.cilindrosDisposicion
                cotizadorCotizacion2.lblCilindrada.text = result.cilindrada;
                //alert(result.consumoCombinado);
                cotizadorCotizacion2.lblConsumoCombinado.text = result.consumoCombinado;
                //cotizadorCotizacion2.segmentFichaTecnica.setData(arrFichaTecnica);
                //cotizadorCotizacion2.lblFichaTecnica.setVisibility(true, null);
            } else {
                alert('No hubo resultados');
            }
        } else {
            cotizadorCotizacion2.botonDatosTecnicosContainer.setVisibility(false);
        }
    }
}