function cotizadorCalculo_init() {
    incializarControlesCalculo();
}

function incializarControlesCalculo() {
    cotizadorCalculo.sliderPlazos.max = 8;
    cotizadorCalculo.sliderPlazos.min = 2;
    cotizadorCalculo.sliderPlazos.step = 2;
    cotizadorCalculo.radioPersona.selectedKey = '0';
    cotizadorCalculo.fxcContainerCalculo.setEnabled(false);
}

function cargarPlazos() {
    var idPlan = kony.store.getItem('idPlanSeleccionado');
    var inputparam = {};
    inputparam["serviceID"] = "obtenerPlazos";
    inputparam["idPlan"] = idPlan.toString();
    inputparam["tipoPlazo"] = "";
    appmiddlewareinvokerasync(inputparam, cargarPlazosCallback);
}

function mostrarCargando() {}

function cargarDatosParaCalculo() {
    var cotizacionEnCurso = kony.store.getItem("cotizacionEnCurso");
    if (cotizacionEnCurso != null && cotizacionEnCurso == false) {
        kony.application.showLoadingScreen("sknLblLoading", "Cargando...", constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true, {
            shouldShowLabelInBottom: true,
            seperatorHeight: 30
        });
        cargarEstados();
        cargarDatosCalculo();
        cargarPrecioUnidad();
        cargarPlazos();
    }
}

function obtenerCotizacion() {
    var texto = cotizadorCalculo.txtPrecio.text;
    if (texto == '') {
        texto = '0';
    }
    texto = texto.replaceAll('$', '');
    texto = texto.replaceAll("'", '');
    texto = texto.replaceAll(',', '')
    if (isNaN(texto)) {
        alert("Introduzca un precio valido por favor");
    } else {
        var precio = parseFloat(texto);
        var precioMaximo = kony.store.getItem("preciomaximo");
        var precioMinimo = kony.store.getItem("preciominimo");
        var sPrecioMaximo = kony.store.getItem("spreciomaximo");
        var sPrecioMinimo = kony.store.getItem("spreciominimo");
        if (precioMinimo > precio) {
            alert("El precio minimo de la unidad es: " + sPrecioMinimo);
            cotizadorCalculo.txtPrecio.text = kony.os.toCurrency(parseFloat(precioMinimo));
        } else if (precioMaximo < precio) {
            alert("El precio maximo de la unidad es: " + sPrecioMaximo);
            cotizadorCalculo.txtPrecio.text = kony.os.toCurrency(parseFloat(precioMaximo));
        } else {
            cotizadorCalculo.txtPrecio.text = kony.os.toCurrency(parseFloat(texto));
            //cotizadorCotizacion.show();	
            showFrm(cotizadorCotizacion);
        }
    }
}

function cargarPlazosCallback(status, result) {
    if (result.errmsg != undefined) {
        alert('Se presento un error al recuperar los plazos: ' + result.errmsg);
    } else {
        if (result.codigo != null && result.codigo != undefined && result.codigo == 1) {
            if (result.lstPlazos != undefined && result.lstPlazos.length > 0) {
                kony.store.setItem('lstPlazos', result.lstPlazos);
                cargarSliderPlazos();
            } else {
                alert('No hubo resultados');
            }
        } else {
            if (result.codigo != null && result.codigo != undefined) {
                alert(result.codigo);
            }
        }
    }
}

function cargarSliderPlazos() {
    cotizadorCalculo.sliderPlazos.max = 3;
    cotizadorCalculo.sliderPlazos.min = 1;
    cotizadorCalculo.sliderPlazos.step = 1;
    cotizadorCalculo.sliderPlazos.selectedValue = 1;
    cotizadorCalculo.forceLayout();
    var lstPlazos = kony.store.getItem('lstPlazos');
    if (lstPlazos == undefined) {
        return;
    }
    var totalItemPlazos = 0;
    var plazoMaximo = lstPlazos[0].mesFinal;
    var plazoMinimo = lstPlazos[0].mesInicial;
    var arrPlazosFijos = [];
    var sliderStep = 1;
    var j = 0;
    for (i = 0; i < lstPlazos.length; i++) {
        totalItemPlazos = totalItemPlazos + (parseInt(lstPlazos[i].mesFinal) - parseInt(lstPlazos[i].mesInicial));
        if (lstPlazos[i].mesInicial == lstPlazos[i].mesFinal) {
            arrPlazosFijos[j] = lstPlazos[i];
            j++;
        } else {}
        if (lstPlazos[i].mesInicial < plazoMinimo) {
            plazoMinimo = lstPlazos[i].mesInicial;
        }
        if (lstPlazos[i].mesFinal > plazoMaximo) {
            plazoMaximo = lstPlazos[i].mesFinal;
        }
    }
    cotizadorCalculo.sliderPlazos.max = parseInt(plazoMinimo);
    cotizadorCalculo.sliderPlazos.min = parseInt(plazoMinimo);
    if (totalItemPlazos == 0) {
        sliderStep = (plazoMaximo - plazoMinimo) / (arrPlazosFijos.length - 1);
    }
    cotizadorCalculo.sliderPlazos.step = parseInt(sliderStep);
    cotizadorCalculo.sliderPlazos.selectedValue = parseInt(plazoMinimo);
    cotizadorCalculo.lblPlazoMinimo.text = plazoMinimo.toString();
    cotizadorCalculo.lblPlazoMaximo.text = plazoMaximo.toString();
    cotizadorCalculo.lblPlazoMinimo.setVisibility(true, null);
    cotizadorCalculo.lblPlazoMaximo.setVisibility(true, null);
    cotizadorCalculo.sliderPlazos.max = parseInt(plazoMaximo);
    cotizadorCalculo.lblPlazoSeleccionado.text = plazoMinimo;
    validarPlazoSeleccionado(parseInt(plazoMinimo));
    cotizadorCalculo.fxcContainerCredito.setVisibility(true);
    cotizadorCalculo.forceLayout();
    cotizadorCalculo.fxcContainerCalculo.setEnabled(true);
    kony.application.dismissLoadingScreen();
}

function retraso() {
    alert("Hello");
}

function onSliderSelection(selected) {
    cotizadorCalculo.lblPlazoSeleccionado.text = cotizadorCalculo.sliderPlazos.selectedValue.toString();
    validarPlazoSeleccionado(cotizadorCalculo.sliderPlazos.selectedValue)
}

function cargarEstados() {
    var inputparam = {};
    inputparam["serviceID"] = "obtenerEntidadesCirculacion";
    appmiddlewareinvokerasync(inputparam, cargarEstadosCallback);
}

function cargarEstadosCallback(status, result) {
    //kony.application.showLoadingScreen("sknLblLoading", "Cargando...", constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true,{shouldShowLabelInBottom: true, seperatorHeight: 30});	
    if (result.errmsg != undefined) {
        alert('Se presento un error al recuperar los estados: ' + result.errmsg);
    } else {
        if (result.codigo != null && result.codigo != undefined && result.codigo == 1) {
            if (result.lstEstados != undefined && result.lstEstados.length > 0) {
                arrEstados = [];
                for (i = 0; i < result.lstEstados.length; i++) {
                    lstTemporal = [];
                    lstTemporal[0] = result.lstEstados[i].id;
                    lstTemporal[1] = result.lstEstados[i].descripcion;
                    arrEstados[i] = lstTemporal;
                }
                cotizadorCalculo.lbEstados.masterData = arrEstados;
                cotizadorCalculo.lbEstados.selectedKey = result.lstEstados[0].id;
                //kony.application.dismissLoadingScreen();
            } else {
                alert('No hubo resultados');
            }
        } else {
            if (result.codigo != null && result.codigo != undefined) {
                alert(result.codigo);
            }
        }
    }
    //kony.application.dismissLoadingScreen();
}

function cargarDatosCalculo() {
    cotizadorCalculo.lblUnidad.text = cotizadorModelos.segmentList.selectedItems[0].lblContent;
    cotizadorCalculo.lblPlan.text = kony.store.getItem('descripcionPlanSeleccionado');
}

function cargarPrecioUnidad() {
    var idTipo = cotizadorModelos.segmentList.selectedItems[0].lblContentId;
    var inputparam = {};
    inputparam["serviceID"] = "obtenerPrecioUnidad";
    inputparam["idTipo"] = idTipo;
    cotizadorCalculo.forceLayout();
    appmiddlewareinvokerasync(inputparam, cargarPrecioCallback);
}

function cargarPrecioCallback(status, result) {
    //kony.application.showLoadingScreen("sknLblLoading", "Cargando...", constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true,{shouldShowLabelInBottom: true, seperatorHeight: 30});
    if (result.errmsg != undefined) {
        alert('Se presento un error al recuperar el precio de la unidad: ' + result.errmsg);
    } else {
        if (result.codigo != null && result.codigo != undefined && result.codigo == 1) {
            if (result.precio != undefined) {
                cotizadorCalculo.txtPrecio.placeholder = "De " + result.sPrecioMinimo.toString() + " a " + result.sPrecioMaximo.toString();
                cotizadorCalculo.txtPrecio.text = result.sPrecio.toString();
                kony.store.setItem("preciomaximo", result.precioMaximo);
                kony.store.setItem("preciominimo", result.precionMinimo);
                kony.store.setItem("spreciomaximo", result.sPrecioMaximo);
                kony.store.setItem("spreciominimo", result.sPrecioMinimo);
                cotizadorCalculo.forceLayout();
            } else {
                alert('No hubo resultados');
            }
        } else {
            if (result.codigo != null && result.codigo != undefined) {
                alert(result.codigo);
            }
        }
    }
    //kony.application.dismissLoadingScreen();		
}

function validarPrecioUnidad() {
    var texto = cotizadorCalculo.txtPrecio.text;
    kony.store.setItem("cotizacionEnCurso", false);
    if (texto == '') {
        texto = '0';
    }
    texto = texto.replaceAll('$', '');
    texto = texto.replaceAll("'", '');
    texto = texto.replaceAll(',', '')
    if (isNaN(texto)) {
        alert("Introduzca un precio valido por favor");
    } else {
        var precio = parseFloat(texto);
        var precioMaximo = kony.store.getItem("preciomaximo");
        var precioMinimo = kony.store.getItem("preciominimo");
        var sPrecioMaximo = kony.store.getItem("spreciomaximo");
        var sPrecioMinimo = kony.store.getItem("spreciominimo");
        if (precioMinimo > precio) {
            alert("El precio minimo de la unidad es: " + sPrecioMinimo);
            cotizadorCalculo.txtPrecio.text = kony.os.toCurrency(parseFloat(precioMinimo));
        } else if (precioMaximo < precio) {
            alert("El precio maximo de la unidad es: " + sPrecioMaximo);
            cotizadorCalculo.txtPrecio.text = kony.os.toCurrency(parseFloat(precioMaximo));
        } else {
            cotizadorCalculo.txtPrecio.text = kony.os.toCurrency(parseFloat(texto));
        }
    }
}

function validarPlazoSeleccionado(plazoSeleccionado) {
    var lstPlazos = kony.store.getItem('lstPlazos');
    if (lstPlazos != undefined && lstPlazos.length > 0) {
        for (i = 0; i < lstPlazos.length; i++) {
            if (plazoSeleccionado >= lstPlazos[i].mesInicial && plazoSeleccionado <= lstPlazos[i].mesFinal) {
                establecerEnganches(lstPlazos[i].engancheMinimo, lstPlazos[i].engancheMaximo);
            }
        }
    }
}

function establecerEnganches(plazoMinimo, plazoMaximo) {
    cotizadorCalculo.lblEngancheMinimo.setVisibility(true, null);
    cotizadorCalculo.lblEngancheMaximo.setVisibility(true, null);
    cotizadorCalculo.lblEngancheMinimo.text = plazoMinimo;
    cotizadorCalculo.lblEngancheMaximo.text = plazoMaximo;
    plazoMaximo = plazoMaximo.replaceAll('$', '');
    plazoMaximo = plazoMaximo.replaceAll(',', '');
    plazoMaximo = plazoMaximo.replaceAll("'", '');
    plazoMinimo = plazoMinimo.replaceAll('$', '');
    plazoMinimo = plazoMinimo.replaceAll(',', '');
    plazoMinimo = plazoMinimo.replaceAll("'", '');
    cotizadorCalculo.sliderEnganche.min = parseInt(plazoMinimo);
    cotizadorCalculo.sliderEnganche.max = parseInt(plazoMaximo);
    cotizadorCalculo.sliderEnganche.selectedValue = parseInt(plazoMinimo);
    cotizadorCalculo.sliderEnganche.step = 1;
    cotizadorCalculo.lblEngancheSeleccionado.text = parseInt(plazoMinimo);
    cotizadorCalculo.forceLayout();
}

function onSliderEngancheSelect() {
    cotizadorCalculo.lblEngancheSeleccionado.text = cotizadorCalculo.sliderEnganche.selectedValue;
}
String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.split(search).join(replacement);
};