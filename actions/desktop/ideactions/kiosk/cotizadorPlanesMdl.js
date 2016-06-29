function cotizadorPlanes_init() {
    limpiarControlesPlanes();
    cargarPlanesCotizador();
}

function establecerPlanSeleccionado() {
    kony.store.setItem('idPlanSeleccionado', cotizadorPlanes.segmentList.selectedItems[0].lblId);
    kony.store.setItem('descripcionPlanSeleccionado', cotizadorPlanes.segmentList.selectedItems[0].lblContent);
    kony.store.setItem('esPlanAlternativo', cotizadorPlanes.segmentList.selectedItems[0].lblPlanAlternativo);
    kony.store.setItem("cotizacionEnCurso", false);
}

function cargarPlanesCotizador() {
    var idPlanFlexibility = kony.store.getItem('idFinanciamientoFlex');
    var idTipo = cotizadorModelos.segmentList.selectedItems[0].lblContentId;
    var tipoFinanciamiento = kony.store.getItem('idFinanciamientoSeleccionado');
    //if(id_financiamiento!=0){
    //		tipoFinanciamiento=id_financiamiento;	
    //	} else {
    //		tipoFinanciamiento=cotizadorFinanciamiento.segmentList.selectedItems[0].lblId;
    //	}
    //	
    if (tipoFinanciamiento == idPlanFlexibility) {
        tipoFinanciamiento = id_credito_directo;
    }
    //kony.store.setItem('idTipoFinanciamiento', tipoFinanciamiento);
    var inputparam = {};
    inputparam["serviceID"] = "obtenerPlanesCotizador";
    inputparam["idTipo"] = idTipo.toString();
    inputparam["tipoFinanciamiento"] = tipoFinanciamiento.toString();
    inputparam["tipoPersona"] = "";
    //alert(' idTipo '+idTipo+" tipo financiamiento "+tipoFinanciamiento); 
    kony.application.showLoadingScreen("sknLblLoading", "Cargando...", constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true, {
        shouldShowLabelInBottom: true,
        seperatorHeight: 30
    });
    appmiddlewareinvokerasync(inputparam, cargarPlanesCallback);
}

function cargarPlanesCallback(status, result) {
    arrPlanes = [];
    var idFinanciamientoFlex = kony.store.getItem('idFinanciamientoFlex');
    var idPlan = kony.store.getItem('idTipoFinanciamiento');
    if (result.errmsg != undefined) {
        alert('Se presento un error al recuperar los modelos: ' + result.errmsg);
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
                cotizadorPlanes.segmentList.setData(arrPlanes);
                cotizadorPlanes.segmentList.setVisibility(true, null);
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

function limpiarControlesPlanes() {
    //cotizadorPlanes.segmentList.setVisibility(false, null);
}