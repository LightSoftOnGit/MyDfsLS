function gpsObtenerDistribuidorPorEstado() {
    //var key = parseInt(gpsEstado.lstEstados.selectedKey).toFixed(0);
    var key = parseInt(kony.application.getCurrentForm().lstEstados.selectedKey).toFixed(0);
    //var key = parseInt(frmDistribuidores.lstEstados.selectedKey).toFixed(0);
    kony.application.showLoadingScreen("sknLblLoading", "Cargando...", constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true, {
        shouldShowLabelInBottom: true,
        seperatorHeight: 30
    });
    gpsUbicacionActual();
    var inputparam = {};
    inputparam["serviceID"] = "obtenerDistribuidorPorEstado";
    inputparam["rubro"] = kony.i18n.getLocalizedString("idSitio");
    inputparam["id"] = key.toString();
    inputparam["httpheaders"] = {};
    inputparam["httpconfig"] = {
        timeout: 15
    };
    distribuidorPorEstado = appmiddlewareinvokerasync(inputparam, gpsUbicacionDistribuidorEstado);
}

function gpsUbicacionDistribuidorEstado(status, distribuidorPorEstado) {
    //gpsEstado.smgtoOpciones.removeAll();  
    frmDistribuidores.smgtoOpciones.removeAll();
    if (distribuidorPorEstado != null && distribuidorPorEstado != undefined && distribuidorPorEstado["codigo"] != null && distribuidorPorEstado["codigo"] != undefined && distribuidorPorEstado["codigo"] == 1) {
        if (distribuidorPorEstado["lstDistribuidores"] != null && distribuidorPorEstado["lstDistribuidores"] != undefined) {
            var smgtoTemporal = [];
            if (distribuidorPorEstado["lstDistribuidores"].length > 0) {
                for (var i = 0; i < distribuidorPorEstado["lstDistribuidores"].length; i++) {
                    smgtoTemporal.push({
                        "lblNombre": distribuidorPorEstado["lstDistribuidores"][i]["nombre"],
                        "lblCalle": distribuidorPorEstado["lstDistribuidores"][i]["calle"],
                        "lblPlaza": distribuidorPorEstado["lstDistribuidores"][i]["colonia"] + ", " + distribuidorPorEstado["lstDistribuidores"][i]["codigoPostal"] + ", " + distribuidorPorEstado["lstDistribuidores"][i]["plaza"],
                        "lblTelefono": distribuidorPorEstado["lstDistribuidores"][i]["telefono"],
                        "lblLatitud": kony.store.getItem("latitud"),
                        "lblLongitud": kony.store.getItem("longitud"),
                        "lblEmail": distribuidorPorEstado["lstDistribuidores"][i]["email"],
                        "lblId": distribuidorPorEstado["lstDistribuidores"][i]["id"],
                        "lblLatitudDestino": distribuidorPorEstado["lstDistribuidores"][i]["latitud"],
                        "lblLongitudDestino": distribuidorPorEstado["lstDistribuidores"][i]["longitud"],
                        "lblPaginaWeb": distribuidorPorEstado["lstDistribuidores"][i]["paginaWeb"],
                        "lblTaller": distribuidorPorEstado["lstDistribuidores"][i]["taller"],
                        "lblT": "T",
                        "btnIr": "Ir"
                    })
                }
                //gpsEstado.smgtoOpciones.setData(smgtoTemporal);
                //gpsEstado.smgtoOpciones.isVisible=true;
                //frmDistribuidores.smgtoOpciones.setData(smgtoTemporal);
                kony.application.getCurrentForm().smgtoOpciones.setData(smgtoTemporal);
                kony.application.dismissLoadingScreen();
            } else {
                alert(kony.i18n.getLocalizedString("106"));
                kony.application.dismissLoadingScreen();
            }
        }
    } else {
        if (distribuidorPorEstado != null && distribuidorPorEstado["codigo"] != null && distribuidorPorEstado != undefined && distribuidorPorEstado["codigo"] != undefined) {
            if (distribuidorPorEstado["codigo"] == 100) {
                var errorMsg = kony.i18n.getLocalizedString(distribuidorPorEstado["codigo"]) != null ? distribuidorPorEstado["codigo"] + ". " + kony.i18n.getLocalizedString(distribuidorPorEstado["codigo"]) : distribuidorPorEstado["codigo"] + ". ";
                alert(errorMsg);
            } else if (distribuidorPorEstado["codigo"] == 101) {
                alert(kony.i18n.getLocalizedString(distribuidorPorEstado["codigo"]));
            } else if (distribuidorPorEstado["codigo"] == 102) {
                alert(kony.i18n.getLocalizedString(distribuidorPorEstado["codigo"]));
            } else {
                alert(kony.i18n.getLocalizedString(distribuidorPorEstado["codigo"]));
            }
            kony.application.dismissLoadingScreen();
        } else if (status == 300) {
            alert(kony.i18n.getLocalizedString("103"));
            kony.application.dismissLoadingScreen();
        } else if (status != 100 && status != 200) {
            alert(kony.i18n.getLocalizedString("104"));
            kony.application.dismissLoadingScreen();
        }
    }
    //kony.application.dismissLoadingScreen();
}

function gpsUbicacionActual() {
    var opcionesPosicion = new Object();
    opcionesPosicion.enablehighaccuracy = true;
    opcionesPosicion.timeout = 10000;
    opcionesPosicion.maximumage = 0;
    opcionesPosicion.useBestProvider = true;
    try {
        kony.location.getCurrentPosition(geoUbicacionExitosa, geoLlamadaError, opcionesPosicion);
    } catch (exception) {
        alert("Exception :: " + exception.message);
    }
}

function geoUbicacionExitosa(position) {
    var latitud = position.coords.latitude;
    var longitud = position.coords.longitude;
    kony.store.setItem("latitud", latitud);
    kony.store.setItem("longitud", longitud);
}