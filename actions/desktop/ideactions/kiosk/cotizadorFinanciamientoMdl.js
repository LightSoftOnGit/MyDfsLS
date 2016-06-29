function cotizadorFinanciamiento_init() {
    limpiarControlesFinanciamiento();
    cargarTiposFinanciamiento();
}

function setFinanciamientoSeleccionado() {
    kony.store.setItem('idTipoFinanciamiento', cotizadorFinanciamiento.segmentList.selectedItems[0].lblId);
    if (cotizadorFinanciamiento.segmentList.selectedItems[0].lblId == kony.store.getItem('idFinanciamientoFlex')) {
        kony.store.setItem('idFinanciamientoSeleccionado', id_credito_directo);
        kony.store.setItem('nombreFinanciamientoSelccionado', kony.store.getItem('nombreCreditoDirecto'));
    } else {
        kony.store.setItem('idFinanciamientoSeleccionado', cotizadorFinanciamiento.segmentList.selectedItems[0].lblId);
        kony.store.setItem('nombreFinanciamientoSelccionado', cotizadorFinanciamiento.segmentList.selectedItems[0].lblContent);
    }
    if (cotizadorFinanciamiento.segmentList.selectedItems[0].lblIdPlan != "") {
        kony.store.setItem('idPlanSeleccionado', cotizadorFinanciamiento.segmentList.selectedItems[0].lblIdPlan);
        kony.store.setItem('descripcionPlanSeleccionado', cotizadorFinanciamiento.segmentList.selectedItems[0].lblDescripcionPlan);
        kony.store.setItem('esPlanAlternativo', cotizadorFinanciamiento.segmentList.selectedItems[0].lblEsPlanAlternativo == "true");
        kony.store.setItem("cotizacionEnCurso", false);
        //cotizadorCalculo.show();
        showFrm(cotizadorCalculo);
    } else {
        cotizadorPlanes.show();
        cotizadorPlanes_init();
    }
}

function cargarTiposFinanciamiento() {
    kony.application.showLoadingScreen("sknLblLoading", "Cargando...", constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true, {
        shouldShowLabelInBottom: true,
        seperatorHeight: 30
    });
    id_financiamiento = 0;
    var idTipo = cotizadorModelos.segmentList.selectedItems[0].lblContentId;
    var inputparam = {};
    inputparam["serviceID"] = "obtenerTiposFinanciamientoConFlexibility";
    inputparam["idTipo"] = idTipo;
    inputparam["tipoFinanciamiento"] = id_credito_directo.toString();
    inputparam["tipoPersona"] = '';
    appmiddlewareinvokerasync(inputparam, cargarFinanciamientosCallback);
}

function cargarFinanciamientosCallback2(status, result) {
    arrJson = [];
    if (result.errmsg != undefined) {
        alert('Se presento un error al recuperar los modelos: ' + result.errmsg);
    } else {
        if (result.codigo != null && result.codigo != undefined && result.codigo == 1) {
            if (result.lstFinanciamientos != undefined && result.lstFinanciamientos.length > 0) {
                var id1 = "";
                for (i = 0; i < result.lstFinanciamientos.length; i++) {
                    var arrItem = [i, result.lstFinanciamientos[i].nombre.toString() + "\n\nThis is Second row"];
                    arrJson[i] = arrItem;
                }
                alert(arrJson);
                cotizadorFinanciamiento.chkTarjetas.masterData = arrJson;
                cotizadorFinanciamiento.forceLayout();
                kony.application.dismissLoadingScreen();
            } else {
                alert('No hubo resultados');
                kony.application.dismissLoadingScreen();
            }
        } else {
            if (result.codigo != null && result.codigo != undefined) {
                alert(result.codigo);
                kony.application.dismissLoadingScreen();
            }
        }
    }
}

function cargarFinanciamientosCallback(status, result) {
    arrFinanciamientos = [];
    arrPlanes = [];
    var totalPlanes = 0;
    var financiamientoFlex = "";
    if (result.errmsg != undefined) {
        alert('Se presento un error al recuperar los modelos: ' + result.errmsg);
    } else {
        if (result.codigo != null && result.codigo != undefined && result.codigo == 1) {
            if (result.lstFinanciamientos != undefined && result.lstFinanciamientos.length > 0) {
                for (i = 0; i < result.lstFinanciamientos.length; i++) {
                    if (result.lstFinanciamientos[i].clave.toString() == clave_credito_directo) {
                        id_credito_directo = result.lstFinanciamientos[i].id;
                    }
                    if (result.lstFinanciamientos[i].clave.toString() == clave_flexibility) {
                        kony.store.setItem('idFinanciamientoFlex', result.lstFinanciamientos[i].id);
                        kony.store.setItem('nombreCreditoDirecto', result.lstFinanciamientos[i].nombre);
                    }
                    if (result.lstFinanciamientos[i].lstPlanes != null && result.lstFinanciamientos[i].lstPlanes != undefined) {
                        if (result.lstFinanciamientos[i].lstPlanes.length == 1) {
                            arrFinanciamientos.push({
                                "lblId": result.lstFinanciamientos[i].id,
                                "lblContent": result.lstFinanciamientos[i].nombre,
                                "lblIdPlan": result.lstFinanciamientos[i].lstPlanes[0].id,
                                "lblDescripcionPlan": result.lstFinanciamientos[i].lstPlanes[0].descripcion,
                                "lblEsPlanAlternativo": result.lstFinanciamientos[i].lstPlanes[0].esPlanAlternativo.toString()
                            });
                        } else {
                            arrFinanciamientos.push({
                                "lblId": result.lstFinanciamientos[i].id,
                                "lblContent": result.lstFinanciamientos[i].nombre,
                                "lblIdPlan": "",
                                "lblDescripcionPlan": "",
                                "lblEsPlanAlternativo": ""
                            });
                        }
                    }
                }
                cotizadorFinanciamiento.segmentList.setData(arrFinanciamientos);
                cotizadorFinanciamiento.segmentList.setVisibility(true, null);
                cotizadorFinanciamiento.forceLayout();
                kony.application.dismissLoadingScreen();
            } else {
                alert('No hubo resultados');
                kony.application.dismissLoadingScreen();
            }
        } else {
            if (result.codigo != null && result.codigo != undefined) {
                alert(result.codigo);
                kony.application.dismissLoadingScreen();
            }
        }
    }
}

function limpiarControlesFinanciamiento() {
    //cotizadorFinanciamiento.segmentList.setVisibility(false, null);
    var arrVacio = [];
    arrVacio.push({
        "lblId": "",
        "lblContent": "",
        "lblIdPlan": "",
        "lblDescripcionPlan": "",
        "lblEsPlanAlternativo": ""
    });
    cotizadorFinanciamiento.segmentList.setData(arrVacio);
    cotizadorFinanciamiento.forceLayout();
}