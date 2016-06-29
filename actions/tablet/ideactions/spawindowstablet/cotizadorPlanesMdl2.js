function cotizadorPlanes2_init() {
    limpiarControlesPlanes2();
    cargarPlanesCotizador2();
}

function cargarModeloSeleccionadoPlanes() {
    cotizadorPlanes2.lblClase.text = kony.store.getItem("lblClaseSeleccionada");
}

function establecerPlanSeleccionado2() {
    kony.store.setItem('idPlanSeleccionado', cotizadorPlanes2.segmentCalculadora.selectedItems[0].lblId);
    kony.store.setItem('descripcionPlanSeleccionado', cotizadorPlanes2.segmentCalculadora.selectedItems[0].lblContent);
    kony.store.setItem('esPlanAlternativo', cotizadorPlanes2.segmentCalculadora.selectedItems[0].lblPlanAlternativo);
    kony.store.setItem("cotizacionEnCurso", false);
    //cambiar por frmShow(),
    //cotizadorCalculo2.show();
    showFrm(cotizadorCalculo2);
}

function cargarPlanesCotizador2() {
    var idPlanFlexibility = kony.store.getItem('idFinanciamientoFlex');
    var idTipo = cotizadorModelos2.segmentCalculadora.selectedItems[0].lblContentId;
    var tipoFinanciamiento = kony.store.getItem('idFinanciamientoSeleccionado');
    if (tipoFinanciamiento == idPlanFlexibility) {
        tipoFinanciamiento = id_credito_directo;
    }
    //kony.store.setItem('idTipoFinanciamiento', tipoFinanciamiento);
    var inputparam = {};
    inputparam["serviceID"] = "obtenerPlanesCotizador";
    inputparam["idTipo"] = idTipo.toString();
    inputparam["tipoFinanciamiento"] = tipoFinanciamiento.toString();
    inputparam["tipoPersona"] = "";
    inputparam["httpconfig"] = {
        timeout: 30
    };
    kony.application.showLoadingScreen("sknLblLoading", "Cargando...", constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true, {
        shouldShowLabelInBottom: true,
        seperatorHeight: 30
    });
    appmiddlewareinvokerasync(inputparam, cargarPlanesCallback2);
}

function cargarPlanesCallback2(status, result) {
    arrPlanes = [];
    var idFinanciamientoFlex = kony.store.getItem('idFinanciamientoFlex');
    var idPlan = kony.store.getItem('idTipoFinanciamiento');
    if (result.errmsg != undefined) {
        alert('No fue posible recuperar los Planes, verifique su connexión a intenet y vuelva  a intentarlo mas tarde por favor.');
        kony.application.dismissLoadingScreen();
        //cambiar por frmShow(),
        //inicio.show();
        showFrm(inicio);
    } else {
        if (result.codigo != null && result.codigo != undefined && result.codigo == 1) {
            if (result.lstPlanes != undefined && result.lstPlanes.length > 0) {
                for (i = 0; i < result.lstPlanes.length; i++) {
                    if (idPlan == idFinanciamientoFlex) {
                        if (result.lstPlanes[i].esPlanAlternativo == true) {
                            arrPlanes.push({
                                "lblId": result.lstPlanes[i].id,
                                "lblContent": result.lstPlanes[i].descripcion,
                                "lblPlanAlternativo": result.lstPlanes[i].esPlanAlternativo.toString()
                            });
                        }
                    } else {
                        if (result.lstPlanes[i].esPlanAlternativo != true) {
                            arrPlanes.push({
                                "lblId": result.lstPlanes[i].id,
                                "lblContent": result.lstPlanes[i].descripcion,
                                "lblPlanAlternativo": result.lstPlanes[i].esPlanAlternativo.toString()
                            });
                        }
                    }
                }
                cotizadorPlanes2.segmentCalculadora.widgetDataMap = {
                    lblId: "lblId",
                    lblContent: "lblContent",
                    lblPlanAlternativo: "lblPlanAlternativo"
                };
                cotizadorPlanes2.segmentCalculadora.setData(arrPlanes);
                cotizadorPlanes2.segmentCalculadora.setVisibility(true, null);
                kony.application.dismissLoadingScreen();
            } else {
                alert('No hubo resultados');
                kony.application.dismissLoadingScreen();
            }
        } else {
            //alert(result.codigo.toString());
        }
    }
}

function limpiarControlesPlanes2() {
    try {
        var arrVacio = [];
        cotizadorPlanes2.segmentCalculadora.widgetDataMap = {
            lblId: "lblId",
            lblContent: "lblContent",
            lblPlanAlternativo: "lblPlanAlternativo"
        };
        arrVacio.push({
            "lblId": "",
            "lblContent": "",
            "lblPlanAlternativo": ""
        });
        cotizadorPlanes2.segmentCalculadora.setData(arrVacio);
        cotizadorPlanes2.forceLayout();
    } catch (e) {}
}