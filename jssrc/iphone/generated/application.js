function displayMWError() {
    kony.ui.Alert("Middleware Error ", null, "error", null, null);
};

function displaySessionError() {
    kony.ui.Alert("Session Expired .. Please re-login", null, "error", null, null);
};

function displayError(code, msg) {
    // Commented for SWA: kony.ui.Alert("Error Code: "..code .." Message: " ..msg,null,"error",null,null);
    kony.ui.Alert(code + "- " + msg, null, "error", null, null);
};
var mergeHeaders = function(httpHeaders, globalHeaders) {
    for (var attrName in globalHeaders) {
        httpHeaders[attrName] = globalHeaders[attrName];
    }
    return httpHeaders;
};

function appmiddlewareinvoker(inputParam, isBlocking, indicator, datasetID) {
    var url = appConfig.url;
    var sessionIdKey = "cacheid";
    inputParam.appID = appConfig.appId;
    inputParam.appver = appConfig.appVersion;
    inputParam["channel"] = "rc";
    inputParam["platform"] = kony.os.deviceInfo().name;
    if (indicator) {
        inputParam["indicator"] = indicator;
    };
    if (datasetID) {
        inputParam["datasetID"] = datasetID;
    };
    inputParam[sessionIdKey] = sessionID;
    if (globalhttpheaders) {
        if (inputParam["httpheaders"]) {
            inputParam.httpheaders = mergeHeaders(inputParam.httpheaders, globalhttpheaders);
        } else {
            inputParam["httpheaders"] = globalhttpheaders;
        };
    };
    var resulttable = _invokeServiceSyncForMF_(url, inputParam, isBlocking);
    if (resulttable) {
        if (resulttable[sessionIdKey]) {
            sessionID = resulttable[sessionIdKey];
        };
    };
    return resulttable;
};

function appmiddlewaresecureinvoker(inputParam, isBlocking, indicator, datasetID) {
    var url = appConfig.secureurl;
    var sessionIdKey = "cacheid";
    inputParam.appID = appConfig.appId;
    inputParam.appver = appConfig.appVersion;
    inputParam["channel"] = "rc";
    inputParam["platform"] = kony.os.deviceInfo().name;
    if (indicator) {
        inputParam["indicator"] = indicator;
    };
    if (datasetID) {
        inputParam["datasetID"] = datasetID;
    };
    inputParam[sessionIdKey] = sessionID;
    if (globalhttpheaders) {
        if (inputParam["httpheaders"]) {
            inputParam.httpheaders = mergeHeaders(inputParam.httpheaders, globalhttpheaders);
        } else {
            inputParam["httpheaders"] = globalhttpheaders;
        };
    };
    var resulttable = _invokeServiceSyncForMF_(url, inputParam, isBlocking);
    if (resulttable) {
        if (resulttable[sessionIdKey]) {
            sessionID = resulttable[sessionIdKey];
        };
    };
    return resulttable;
};

function appmiddlewareinvokerasync(inputParam, callBack) {
    var url = appConfig.url;
    var sessionIdKey = "cacheid";
    inputParam.appID = appConfig.appId;
    inputParam.appver = appConfig.appVersion;
    inputParam["channel"] = "rc";
    inputParam["platform"] = kony.os.deviceInfo().name;
    inputParam[sessionIdKey] = sessionID;
    if (globalhttpheaders) {
        if (inputParam["httpheaders"]) {
            inputParam.httpheaders = mergeHeaders(inputParam.httpheaders, globalhttpheaders);
        } else {
            inputParam.httpheaders = globalhttpheaders;
        };
    };
    var connHandle = _invokeServiceAsyncForMF_(url, inputParam, callBack);
    return connHandle;
};

function appmiddlewaresecureinvokerasync(inputParam, callBack) {
    var url = appConfig.secureurl;
    var sessionIdKey = "cacheid";
    inputParam.appID = appConfig.appId;
    inputParam.appver = appConfig.appVersion;
    inputParam["channel"] = "rc";
    inputParam["platform"] = kony.os.deviceInfo().name;
    inputParam[sessionIdKey] = sessionID;
    if (globalhttpheaders) {
        if (inputParam["httpheaders"]) {
            inputParam.httpheaders = mergeHeaders(inputParam.httpheaders, globalhttpheaders);
        } else {
            inputParam["httpheaders"] = globalhttpheaders;
        };
    };
    var connHandle = _invokeServiceAsyncForMF_(url, inputParam, callBack);
    return connHandle;
};

function mfgetidentityservice(idProviderName) {
    var currentInstance = kony.sdk.getCurrentInstance();
    if (!currentInstance) {
        throw new Exception("INIT_FAILURE", "Please call init before getting identity provider");
    }
    return currentInstance.getIdentityService(idProviderName);
};

function mfintegrationsecureinvokerasync(inputParam, serviceID, operationID, callBack) {
    var url = appConfig.secureurl;
    var sessionIdKey = "cacheid";
    inputParam.appID = appConfig.appId;
    inputParam.appver = appConfig.appVersion;
    inputParam["channel"] = "rc";
    inputParam["platform"] = kony.os.deviceInfo().name;
    inputParam[sessionIdKey] = sessionID;
    if (globalhttpheaders) {
        if (inputParam["httpheaders"]) {
            inputParam.httpheaders = mergeHeaders(inputParam.httpheaders, globalhttpheaders);
        } else {
            inputParam["httpheaders"] = mergeHeaders({}, globalhttpheaders);
        };
    };
    kony.print("Async : Invoking service through mobileFabric with url : " + url + " service id : " + serviceID + " operationid : " + operationID + "\n input params" + JSON.stringify(inputParam));
    if (kony.mbaas) {
        kony.mbaas.invokeMbaasServiceFromKonyStudio(url, inputParam, serviceID, operationID, callBack);
    } else {
        alert("Unable to find the mobileFabric SDK for KonyStudio. Please download the SDK from the Kony Cloud Console and add as module to the Kony Project.");
    }
};

function mfintegrationsecureinvokersync(inputParam, serviceID, operationID) {
    var url = appConfig.secureurl;
    var sessionIdKey = "cacheid";
    var resulttable;
    inputParam.appID = appConfig.appId;
    inputParam.appver = appConfig.appVersion;
    inputParam["channel"] = "rc";
    inputParam["platform"] = kony.os.deviceInfo().name;
    inputParam[sessionIdKey] = sessionID;
    if (globalhttpheaders) {
        if (inputParam["httpheaders"]) {
            inputParam.httpheaders = mergeHeaders(inputParam.httpheaders, globalhttpheaders);
        } else {
            inputParam["httpheaders"] = mergeHeaders({}, globalhttpheaders);
        };
    };
    kony.print("Invoking service through mobileFabric with url : " + url + " service id : " + serviceID + " operationid : " + operationID + "\n input params" + JSON.stringify(inputParam));
    if (kony.mbaas) {
        resulttable = kony.mbaas.invokeMbaasServiceFromKonyStudioSync(url, inputParam, serviceID, operationID);
        kony.print("Result table for service id : " + serviceID + " operationid : " + operationID + " : " + JSON.stringify(resulttable));
    } else {
        alert("Unable to find the mobileFabric SDK for KonyStudio. Please download the SDK from the Kony Cloud Console and add as module to the Kony Project.");
    }
    return resulttable;
};
_invokeServiceAsyncForMF_ = function(url, inputParam, callBack) {
    var operationID = inputParam["serviceID"];
    if (!operationID) {
        resulttable = kony.net.invokeServiceAsync(url, inputParam, callBack);
    } else {
        var _mfServicesMap_ = {
            "getMessageFromServer": {
                "servicename": "DFSLSChat",
                "serviceid": "8e16ea55-c258-4e77-89e9-604d282707e8",
                "type": "integration",
                "operationname": "getMessageFromServer",
                "operationid": "503"
            },
            "openChat": {
                "servicename": "DFSLSChat",
                "serviceid": "8e16ea55-c258-4e77-89e9-604d282707e8",
                "type": "integration",
                "operationname": "openChat",
                "operationid": "504"
            },
            "sendMessageToServer": {
                "servicename": "DFSLSChat",
                "serviceid": "8e16ea55-c258-4e77-89e9-604d282707e8",
                "type": "integration",
                "operationname": "sendMessageToServer",
                "operationid": "505"
            },
            "sendMessageToServerBulk": {
                "servicename": "DFSLSChat",
                "serviceid": "8e16ea55-c258-4e77-89e9-604d282707e8",
                "type": "integration",
                "operationname": "sendMessageToServerBulk",
                "operationid": "506"
            },
            "subscribeToKpns": {
                "servicename": "DFSLSChat",
                "serviceid": "8e16ea55-c258-4e77-89e9-604d282707e8",
                "type": "integration",
                "operationname": "subscribeToKpns",
                "operationid": "507"
            },
            "validarUsuario": {
                "servicename": "DFSLSLogin",
                "serviceid": "ea6bbb70-8e60-4649-a7be-d9af263354ef",
                "type": "integration",
                "operationname": "validarUsuario",
                "operationid": "510"
            },
            "actualizarContrasena": {
                "servicename": "DFSLSLogin",
                "serviceid": "ea6bbb70-8e60-4649-a7be-d9af263354ef",
                "type": "integration",
                "operationname": "actualizarContrasena",
                "operationid": "511"
            },
            "obtenerSaldosMovimientosPagina": {
                "servicename": "DFSLSSaldos",
                "serviceid": "0d974b30-067e-4458-a5de-be5f806cd4a1",
                "type": "integration",
                "operationname": "obtenerSaldosMovimientosPagina",
                "operationid": "514"
            },
            "obtenerSaldosMovimientosDetalleAbono": {
                "servicename": "DFSLSSaldos",
                "serviceid": "0d974b30-067e-4458-a5de-be5f806cd4a1",
                "type": "integration",
                "operationname": "obtenerSaldosMovimientosDetalleAbono",
                "operationid": "515"
            },
            "descargarSaldosMovimientos": {
                "servicename": "DFSLSSaldos",
                "serviceid": "0d974b30-067e-4458-a5de-be5f806cd4a1",
                "type": "integration",
                "operationname": "descargarSaldosMovimientos",
                "operationid": "516"
            },
            "documentoSaldosMovimientos": {
                "servicename": "DFSLSSaldos",
                "serviceid": "0d974b30-067e-4458-a5de-be5f806cd4a1",
                "type": "integration",
                "operationname": "documentoSaldosMovimientos",
                "operationid": "517"
            },
            "obtenerSaldosMovimientosDetalle": {
                "servicename": "DFSLSSaldos",
                "serviceid": "0d974b30-067e-4458-a5de-be5f806cd4a1",
                "type": "integration",
                "operationname": "obtenerSaldosMovimientosDetalle",
                "operationid": "518"
            },
            "correoSaldosMovimientos": {
                "servicename": "DFSLSSaldos",
                "serviceid": "0d974b30-067e-4458-a5de-be5f806cd4a1",
                "type": "integration",
                "operationname": "correoSaldosMovimientos",
                "operationid": "519"
            },
            "obtenerSaldosMovimientosEncabezado": {
                "servicename": "DFSLSSaldos",
                "serviceid": "0d974b30-067e-4458-a5de-be5f806cd4a1",
                "type": "integration",
                "operationname": "obtenerSaldosMovimientosEncabezado",
                "operationid": "520"
            },
            "obtenerSaldosMovimientosEncabezadoVC": {
                "servicename": "DFSLSSaldos",
                "serviceid": "0d974b30-067e-4458-a5de-be5f806cd4a1",
                "type": "integration",
                "operationname": "obtenerSaldosMovimientosEncabezadoVC",
                "operationid": "640"
            },
            "obtenerSaldosMovimientosDetalleVC": {
                "servicename": "DFSLSSaldos",
                "serviceid": "0d974b30-067e-4458-a5de-be5f806cd4a1",
                "type": "integration",
                "operationname": "obtenerSaldosMovimientosDetalleVC",
                "operationid": "641"
            },
            "obtenerSaldosMovimientosPaginaVC": {
                "servicename": "DFSLSSaldos",
                "serviceid": "0d974b30-067e-4458-a5de-be5f806cd4a1",
                "type": "integration",
                "operationname": "obtenerSaldosMovimientosPaginaVC",
                "operationid": "642"
            },
            "enviarEstadosDeCuenta": {
                "servicename": "DFSLSEdosCta",
                "serviceid": "b11f012a-f564-44f8-a836-25c19bb8fb23",
                "type": "integration",
                "operationname": "enviarEstadosDeCuenta",
                "operationid": "523"
            },
            "enviarSMSCodigoVerificacion": {
                "servicename": "DFSLSEdosCta",
                "serviceid": "b11f012a-f564-44f8-a836-25c19bb8fb23",
                "type": "integration",
                "operationname": "enviarSMSCodigoVerificacion",
                "operationid": "524"
            },
            "enviarCertificadoLoyalty": {
                "servicename": "DFSLSEdosCta",
                "serviceid": "b11f012a-f564-44f8-a836-25c19bb8fb23",
                "type": "integration",
                "operationname": "enviarCertificadoLoyalty",
                "operationid": "525"
            },
            "validarRFCNombre": {
                "servicename": "DFSLSEdosCta",
                "serviceid": "b11f012a-f564-44f8-a836-25c19bb8fb23",
                "type": "integration",
                "operationname": "validarRFCNombre",
                "operationid": "526"
            },
            "registrarCliente": {
                "servicename": "DFSLSEdosCta",
                "serviceid": "b11f012a-f564-44f8-a836-25c19bb8fb23",
                "type": "integration",
                "operationname": "registrarCliente",
                "operationid": "527"
            },
            "obtenerEstadosDeCuenta": {
                "servicename": "DFSLSEdosCta",
                "serviceid": "b11f012a-f564-44f8-a836-25c19bb8fb23",
                "type": "integration",
                "operationname": "obtenerEstadosDeCuenta",
                "operationid": "528"
            },
            "obtenerCertificadoLoyalty": {
                "servicename": "DFSLSEdosCta",
                "serviceid": "b11f012a-f564-44f8-a836-25c19bb8fb23",
                "type": "integration",
                "operationname": "obtenerCertificadoLoyalty",
                "operationid": "529"
            },
            "validarContrato": {
                "servicename": "DFSLSEdosCta",
                "serviceid": "b11f012a-f564-44f8-a836-25c19bb8fb23",
                "type": "integration",
                "operationname": "validarContrato",
                "operationid": "530"
            },
            "obtenerEmpresas": {
                "servicename": "DFSLSEdosCta",
                "serviceid": "b11f012a-f564-44f8-a836-25c19bb8fb23",
                "type": "integration",
                "operationname": "obtenerEmpresas",
                "operationid": "531"
            },
            "recuperarContrasena": {
                "servicename": "DFSLSEdosCta",
                "serviceid": "b11f012a-f564-44f8-a836-25c19bb8fb23",
                "type": "integration",
                "operationname": "recuperarContrasena",
                "operationid": "532"
            },
            "enviarCorreoCodigoVerificacion": {
                "servicename": "DFSLSEdosCta",
                "serviceid": "b11f012a-f564-44f8-a836-25c19bb8fb23",
                "type": "integration",
                "operationname": "enviarCorreoCodigoVerificacion",
                "operationid": "533"
            },
            "enviarFacturas": {
                "servicename": "DFSLSEdosCta",
                "serviceid": "b11f012a-f564-44f8-a836-25c19bb8fb23",
                "type": "integration",
                "operationname": "enviarFacturas",
                "operationid": "534"
            },
            "obtenerFacturas": {
                "servicename": "DFSLSEdosCta",
                "serviceid": "b11f012a-f564-44f8-a836-25c19bb8fb23",
                "type": "integration",
                "operationname": "obtenerFacturas",
                "operationid": "535"
            },
            "obtenerTiposFinanciamiento": {
                "servicename": "DFSLSCotizador",
                "serviceid": "29fecb8c-5173-43be-b0cc-d4f032a8ac4d",
                "type": "integration",
                "operationname": "obtenerTiposFinanciamiento",
                "operationid": "538"
            },
            "obtenerTiposFinanciamientoConFlexibility": {
                "servicename": "DFSLSCotizador",
                "serviceid": "29fecb8c-5173-43be-b0cc-d4f032a8ac4d",
                "type": "integration",
                "operationname": "obtenerTiposFinanciamientoConFlexibility",
                "operationid": "539"
            },
            "obtenerPlanesCotizador": {
                "servicename": "DFSLSCotizador",
                "serviceid": "29fecb8c-5173-43be-b0cc-d4f032a8ac4d",
                "type": "integration",
                "operationname": "obtenerPlanesCotizador",
                "operationid": "540"
            },
            "enviarCotizacion": {
                "servicename": "DFSLSCotizador",
                "serviceid": "29fecb8c-5173-43be-b0cc-d4f032a8ac4d",
                "type": "integration",
                "operationname": "enviarCotizacion",
                "operationid": "541"
            },
            "obtenerCotizacionPrecio": {
                "servicename": "DFSLSCotizador",
                "serviceid": "29fecb8c-5173-43be-b0cc-d4f032a8ac4d",
                "type": "integration",
                "operationname": "obtenerCotizacionPrecio",
                "operationid": "542"
            },
            "obtenerEntidadesCirculacion": {
                "servicename": "DFSLSCotizador",
                "serviceid": "29fecb8c-5173-43be-b0cc-d4f032a8ac4d",
                "type": "integration",
                "operationname": "obtenerEntidadesCirculacion",
                "operationid": "543"
            },
            "obtenerPrecioUnidad": {
                "servicename": "DFSLSCotizador",
                "serviceid": "29fecb8c-5173-43be-b0cc-d4f032a8ac4d",
                "type": "integration",
                "operationname": "obtenerPrecioUnidad",
                "operationid": "544"
            },
            "obtenerPlanesCotizadorPorDistribuidor": {
                "servicename": "DFSLSCotizador",
                "serviceid": "29fecb8c-5173-43be-b0cc-d4f032a8ac4d",
                "type": "integration",
                "operationname": "obtenerPlanesCotizadorPorDistribuidor",
                "operationid": "545"
            },
            "obtenerModelosCotizador": {
                "servicename": "DFSLSCotizador",
                "serviceid": "29fecb8c-5173-43be-b0cc-d4f032a8ac4d",
                "type": "integration",
                "operationname": "obtenerModelosCotizador",
                "operationid": "546"
            },
            "obtenerPlazos": {
                "servicename": "DFSLSCotizador",
                "serviceid": "29fecb8c-5173-43be-b0cc-d4f032a8ac4d",
                "type": "integration",
                "operationname": "obtenerPlazos",
                "operationid": "547"
            },
            "obtenerFichaTecnica": {
                "servicename": "DFSLSCotizador",
                "serviceid": "29fecb8c-5173-43be-b0cc-d4f032a8ac4d",
                "type": "integration",
                "operationname": "obtenerFichaTecnica",
                "operationid": "548"
            },
            "obtenerCotizacionPrecioVC": {
                "servicename": "DFSLSCotizador",
                "serviceid": "29fecb8c-5173-43be-b0cc-d4f032a8ac4d",
                "type": "integration",
                "operationname": "obtenerCotizacionPrecioVC",
                "operationid": "643"
            },
            "obtenerMarcasVC": {
                "servicename": "DFSLSCotizador",
                "serviceid": "29fecb8c-5173-43be-b0cc-d4f032a8ac4d",
                "type": "integration",
                "operationname": "obtenerMarcasVC",
                "operationid": "644"
            },
            "obtenerPlazosVC": {
                "servicename": "DFSLSCotizador",
                "serviceid": "29fecb8c-5173-43be-b0cc-d4f032a8ac4d",
                "type": "integration",
                "operationname": "obtenerPlazosVC",
                "operationid": "645"
            },
            "obtenerModelosVC": {
                "servicename": "DFSLSCotizador",
                "serviceid": "29fecb8c-5173-43be-b0cc-d4f032a8ac4d",
                "type": "integration",
                "operationname": "obtenerModelosVC",
                "operationid": "646"
            },
            "obtenerPrecioUnidadVC": {
                "servicename": "DFSLSCotizador",
                "serviceid": "29fecb8c-5173-43be-b0cc-d4f032a8ac4d",
                "type": "integration",
                "operationname": "obtenerPrecioUnidadVC",
                "operationid": "647"
            },
            "obtenerTiposFinanciamientoVC": {
                "servicename": "DFSLSCotizador",
                "serviceid": "29fecb8c-5173-43be-b0cc-d4f032a8ac4d",
                "type": "integration",
                "operationname": "obtenerTiposFinanciamientoVC",
                "operationid": "648"
            },
            "obtenerEntidadesCirculacionVC": {
                "servicename": "DFSLSCotizador",
                "serviceid": "29fecb8c-5173-43be-b0cc-d4f032a8ac4d",
                "type": "integration",
                "operationname": "obtenerEntidadesCirculacionVC",
                "operationid": "649"
            },
            "enviarCotizacionVC": {
                "servicename": "DFSLSCotizador",
                "serviceid": "29fecb8c-5173-43be-b0cc-d4f032a8ac4d",
                "type": "integration",
                "operationname": "enviarCotizacionVC",
                "operationid": "650"
            },
            "obtenerAvisoPrivacidad": {
                "servicename": "DFSLSInfo",
                "serviceid": "57c785f0-2c9d-4588-908f-c3056d71aa9f",
                "type": "integration",
                "operationname": "obtenerAvisoPrivacidad",
                "operationid": "551"
            },
            "obtenerSolicitudDerechosArco": {
                "servicename": "DFSLSInfo",
                "serviceid": "57c785f0-2c9d-4588-908f-c3056d71aa9f",
                "type": "integration",
                "operationname": "obtenerSolicitudDerechosArco",
                "operationid": "552"
            },
            "enviarSolicitudDerechosArco": {
                "servicename": "DFSLSInfo",
                "serviceid": "57c785f0-2c9d-4588-908f-c3056d71aa9f",
                "type": "integration",
                "operationname": "enviarSolicitudDerechosArco",
                "operationid": "553"
            },
            "obtenerInformacionContacto": {
                "servicename": "DFSLSInfo",
                "serviceid": "57c785f0-2c9d-4588-908f-c3056d71aa9f",
                "type": "integration",
                "operationname": "obtenerInformacionContacto",
                "operationid": "554"
            },
            "obtenerTerminosCondiciones": {
                "servicename": "DFSLSInfo",
                "serviceid": "57c785f0-2c9d-4588-908f-c3056d71aa9f",
                "type": "integration",
                "operationname": "obtenerTerminosCondiciones",
                "operationid": "555"
            },
            "obtenerBeneficiosTerminacionContrato": {
                "servicename": "DFSLSContrato",
                "serviceid": "e7457299-3a41-4ae8-8af2-5248739b040d",
                "type": "integration",
                "operationname": "obtenerBeneficiosTerminacionContrato",
                "operationid": "558"
            },
            "obtenerDetalleContrato": {
                "servicename": "DFSLSContrato",
                "serviceid": "e7457299-3a41-4ae8-8af2-5248739b040d",
                "type": "integration",
                "operationname": "obtenerDetalleContrato",
                "operationid": "559"
            },
            "obtenerDistribuidorPorEstado": {
                "servicename": "DFSLSDistribuidor",
                "serviceid": "ca526e17-6dcb-4f8b-8b0f-e957bd2ffd19",
                "type": "integration",
                "operationname": "obtenerDistribuidorPorEstado",
                "operationid": "562"
            },
            "obtenerDistribuidorPorGps": {
                "servicename": "DFSLSDistribuidor",
                "serviceid": "ca526e17-6dcb-4f8b-8b0f-e957bd2ffd19",
                "type": "integration",
                "operationname": "obtenerDistribuidorPorGps",
                "operationid": "563"
            },
            "obtenerEstados": {
                "servicename": "DFSLSDistribuidor",
                "serviceid": "ca526e17-6dcb-4f8b-8b0f-e957bd2ffd19",
                "type": "integration",
                "operationname": "obtenerEstados",
                "operationid": "564"
            }
        };
        kony.print("Getting serviceID for : " + operationID);
        var serviceID = _mfServicesMap_[operationID] && _mfServicesMap_[operationID]["servicename"];
        kony.print("Got serviceID for : " + operationID + " : " + serviceID);
        kony.print("Async : Invoking service through mobileFabric with url : " + url + " service id : " + serviceID + " operationid : " + operationID + "\n input params" + JSON.stringify(inputParam));
        if (serviceID && operationID) {
            var url = appConfig.secureurl;
            if (kony.mbaas) {
                kony.mbaas.invokeMbaasServiceFromKonyStudio(url, inputParam, serviceID, operationID, callBack);
            } else {
                alert("Unable to find the mobileFabric SDK for KonyStudio. Please download the SDK from the Kony Cloud Console and add as module to the Kony Project.");
            }
        } else {
            resulttable = kony.net.invokeServiceAsync(url, inputParam, callBack);
        }
    }
};
_invokeServiceSyncForMF_ = function(url, inputParam, isBlocking) {
    var resulttable;
    var operationID = inputParam["serviceID"];
    if (!operationID) {
        resulttable = kony.net.invokeService(url, inputParam, isBlocking);
    } else {
        var _mfServicesMap_ = {
            "getMessageFromServer": {
                "servicename": "DFSLSChat",
                "serviceid": "8e16ea55-c258-4e77-89e9-604d282707e8",
                "type": "integration",
                "operationname": "getMessageFromServer",
                "operationid": "503"
            },
            "openChat": {
                "servicename": "DFSLSChat",
                "serviceid": "8e16ea55-c258-4e77-89e9-604d282707e8",
                "type": "integration",
                "operationname": "openChat",
                "operationid": "504"
            },
            "sendMessageToServer": {
                "servicename": "DFSLSChat",
                "serviceid": "8e16ea55-c258-4e77-89e9-604d282707e8",
                "type": "integration",
                "operationname": "sendMessageToServer",
                "operationid": "505"
            },
            "sendMessageToServerBulk": {
                "servicename": "DFSLSChat",
                "serviceid": "8e16ea55-c258-4e77-89e9-604d282707e8",
                "type": "integration",
                "operationname": "sendMessageToServerBulk",
                "operationid": "506"
            },
            "subscribeToKpns": {
                "servicename": "DFSLSChat",
                "serviceid": "8e16ea55-c258-4e77-89e9-604d282707e8",
                "type": "integration",
                "operationname": "subscribeToKpns",
                "operationid": "507"
            },
            "validarUsuario": {
                "servicename": "DFSLSLogin",
                "serviceid": "ea6bbb70-8e60-4649-a7be-d9af263354ef",
                "type": "integration",
                "operationname": "validarUsuario",
                "operationid": "510"
            },
            "actualizarContrasena": {
                "servicename": "DFSLSLogin",
                "serviceid": "ea6bbb70-8e60-4649-a7be-d9af263354ef",
                "type": "integration",
                "operationname": "actualizarContrasena",
                "operationid": "511"
            },
            "obtenerSaldosMovimientosPagina": {
                "servicename": "DFSLSSaldos",
                "serviceid": "0d974b30-067e-4458-a5de-be5f806cd4a1",
                "type": "integration",
                "operationname": "obtenerSaldosMovimientosPagina",
                "operationid": "514"
            },
            "obtenerSaldosMovimientosDetalleAbono": {
                "servicename": "DFSLSSaldos",
                "serviceid": "0d974b30-067e-4458-a5de-be5f806cd4a1",
                "type": "integration",
                "operationname": "obtenerSaldosMovimientosDetalleAbono",
                "operationid": "515"
            },
            "descargarSaldosMovimientos": {
                "servicename": "DFSLSSaldos",
                "serviceid": "0d974b30-067e-4458-a5de-be5f806cd4a1",
                "type": "integration",
                "operationname": "descargarSaldosMovimientos",
                "operationid": "516"
            },
            "documentoSaldosMovimientos": {
                "servicename": "DFSLSSaldos",
                "serviceid": "0d974b30-067e-4458-a5de-be5f806cd4a1",
                "type": "integration",
                "operationname": "documentoSaldosMovimientos",
                "operationid": "517"
            },
            "obtenerSaldosMovimientosDetalle": {
                "servicename": "DFSLSSaldos",
                "serviceid": "0d974b30-067e-4458-a5de-be5f806cd4a1",
                "type": "integration",
                "operationname": "obtenerSaldosMovimientosDetalle",
                "operationid": "518"
            },
            "correoSaldosMovimientos": {
                "servicename": "DFSLSSaldos",
                "serviceid": "0d974b30-067e-4458-a5de-be5f806cd4a1",
                "type": "integration",
                "operationname": "correoSaldosMovimientos",
                "operationid": "519"
            },
            "obtenerSaldosMovimientosEncabezado": {
                "servicename": "DFSLSSaldos",
                "serviceid": "0d974b30-067e-4458-a5de-be5f806cd4a1",
                "type": "integration",
                "operationname": "obtenerSaldosMovimientosEncabezado",
                "operationid": "520"
            },
            "obtenerSaldosMovimientosEncabezadoVC": {
                "servicename": "DFSLSSaldos",
                "serviceid": "0d974b30-067e-4458-a5de-be5f806cd4a1",
                "type": "integration",
                "operationname": "obtenerSaldosMovimientosEncabezadoVC",
                "operationid": "640"
            },
            "obtenerSaldosMovimientosDetalleVC": {
                "servicename": "DFSLSSaldos",
                "serviceid": "0d974b30-067e-4458-a5de-be5f806cd4a1",
                "type": "integration",
                "operationname": "obtenerSaldosMovimientosDetalleVC",
                "operationid": "641"
            },
            "obtenerSaldosMovimientosPaginaVC": {
                "servicename": "DFSLSSaldos",
                "serviceid": "0d974b30-067e-4458-a5de-be5f806cd4a1",
                "type": "integration",
                "operationname": "obtenerSaldosMovimientosPaginaVC",
                "operationid": "642"
            },
            "enviarEstadosDeCuenta": {
                "servicename": "DFSLSEdosCta",
                "serviceid": "b11f012a-f564-44f8-a836-25c19bb8fb23",
                "type": "integration",
                "operationname": "enviarEstadosDeCuenta",
                "operationid": "523"
            },
            "enviarSMSCodigoVerificacion": {
                "servicename": "DFSLSEdosCta",
                "serviceid": "b11f012a-f564-44f8-a836-25c19bb8fb23",
                "type": "integration",
                "operationname": "enviarSMSCodigoVerificacion",
                "operationid": "524"
            },
            "enviarCertificadoLoyalty": {
                "servicename": "DFSLSEdosCta",
                "serviceid": "b11f012a-f564-44f8-a836-25c19bb8fb23",
                "type": "integration",
                "operationname": "enviarCertificadoLoyalty",
                "operationid": "525"
            },
            "validarRFCNombre": {
                "servicename": "DFSLSEdosCta",
                "serviceid": "b11f012a-f564-44f8-a836-25c19bb8fb23",
                "type": "integration",
                "operationname": "validarRFCNombre",
                "operationid": "526"
            },
            "registrarCliente": {
                "servicename": "DFSLSEdosCta",
                "serviceid": "b11f012a-f564-44f8-a836-25c19bb8fb23",
                "type": "integration",
                "operationname": "registrarCliente",
                "operationid": "527"
            },
            "obtenerEstadosDeCuenta": {
                "servicename": "DFSLSEdosCta",
                "serviceid": "b11f012a-f564-44f8-a836-25c19bb8fb23",
                "type": "integration",
                "operationname": "obtenerEstadosDeCuenta",
                "operationid": "528"
            },
            "obtenerCertificadoLoyalty": {
                "servicename": "DFSLSEdosCta",
                "serviceid": "b11f012a-f564-44f8-a836-25c19bb8fb23",
                "type": "integration",
                "operationname": "obtenerCertificadoLoyalty",
                "operationid": "529"
            },
            "validarContrato": {
                "servicename": "DFSLSEdosCta",
                "serviceid": "b11f012a-f564-44f8-a836-25c19bb8fb23",
                "type": "integration",
                "operationname": "validarContrato",
                "operationid": "530"
            },
            "obtenerEmpresas": {
                "servicename": "DFSLSEdosCta",
                "serviceid": "b11f012a-f564-44f8-a836-25c19bb8fb23",
                "type": "integration",
                "operationname": "obtenerEmpresas",
                "operationid": "531"
            },
            "recuperarContrasena": {
                "servicename": "DFSLSEdosCta",
                "serviceid": "b11f012a-f564-44f8-a836-25c19bb8fb23",
                "type": "integration",
                "operationname": "recuperarContrasena",
                "operationid": "532"
            },
            "enviarCorreoCodigoVerificacion": {
                "servicename": "DFSLSEdosCta",
                "serviceid": "b11f012a-f564-44f8-a836-25c19bb8fb23",
                "type": "integration",
                "operationname": "enviarCorreoCodigoVerificacion",
                "operationid": "533"
            },
            "enviarFacturas": {
                "servicename": "DFSLSEdosCta",
                "serviceid": "b11f012a-f564-44f8-a836-25c19bb8fb23",
                "type": "integration",
                "operationname": "enviarFacturas",
                "operationid": "534"
            },
            "obtenerFacturas": {
                "servicename": "DFSLSEdosCta",
                "serviceid": "b11f012a-f564-44f8-a836-25c19bb8fb23",
                "type": "integration",
                "operationname": "obtenerFacturas",
                "operationid": "535"
            },
            "obtenerTiposFinanciamiento": {
                "servicename": "DFSLSCotizador",
                "serviceid": "29fecb8c-5173-43be-b0cc-d4f032a8ac4d",
                "type": "integration",
                "operationname": "obtenerTiposFinanciamiento",
                "operationid": "538"
            },
            "obtenerTiposFinanciamientoConFlexibility": {
                "servicename": "DFSLSCotizador",
                "serviceid": "29fecb8c-5173-43be-b0cc-d4f032a8ac4d",
                "type": "integration",
                "operationname": "obtenerTiposFinanciamientoConFlexibility",
                "operationid": "539"
            },
            "obtenerPlanesCotizador": {
                "servicename": "DFSLSCotizador",
                "serviceid": "29fecb8c-5173-43be-b0cc-d4f032a8ac4d",
                "type": "integration",
                "operationname": "obtenerPlanesCotizador",
                "operationid": "540"
            },
            "enviarCotizacion": {
                "servicename": "DFSLSCotizador",
                "serviceid": "29fecb8c-5173-43be-b0cc-d4f032a8ac4d",
                "type": "integration",
                "operationname": "enviarCotizacion",
                "operationid": "541"
            },
            "obtenerCotizacionPrecio": {
                "servicename": "DFSLSCotizador",
                "serviceid": "29fecb8c-5173-43be-b0cc-d4f032a8ac4d",
                "type": "integration",
                "operationname": "obtenerCotizacionPrecio",
                "operationid": "542"
            },
            "obtenerEntidadesCirculacion": {
                "servicename": "DFSLSCotizador",
                "serviceid": "29fecb8c-5173-43be-b0cc-d4f032a8ac4d",
                "type": "integration",
                "operationname": "obtenerEntidadesCirculacion",
                "operationid": "543"
            },
            "obtenerPrecioUnidad": {
                "servicename": "DFSLSCotizador",
                "serviceid": "29fecb8c-5173-43be-b0cc-d4f032a8ac4d",
                "type": "integration",
                "operationname": "obtenerPrecioUnidad",
                "operationid": "544"
            },
            "obtenerPlanesCotizadorPorDistribuidor": {
                "servicename": "DFSLSCotizador",
                "serviceid": "29fecb8c-5173-43be-b0cc-d4f032a8ac4d",
                "type": "integration",
                "operationname": "obtenerPlanesCotizadorPorDistribuidor",
                "operationid": "545"
            },
            "obtenerModelosCotizador": {
                "servicename": "DFSLSCotizador",
                "serviceid": "29fecb8c-5173-43be-b0cc-d4f032a8ac4d",
                "type": "integration",
                "operationname": "obtenerModelosCotizador",
                "operationid": "546"
            },
            "obtenerPlazos": {
                "servicename": "DFSLSCotizador",
                "serviceid": "29fecb8c-5173-43be-b0cc-d4f032a8ac4d",
                "type": "integration",
                "operationname": "obtenerPlazos",
                "operationid": "547"
            },
            "obtenerFichaTecnica": {
                "servicename": "DFSLSCotizador",
                "serviceid": "29fecb8c-5173-43be-b0cc-d4f032a8ac4d",
                "type": "integration",
                "operationname": "obtenerFichaTecnica",
                "operationid": "548"
            },
            "obtenerCotizacionPrecioVC": {
                "servicename": "DFSLSCotizador",
                "serviceid": "29fecb8c-5173-43be-b0cc-d4f032a8ac4d",
                "type": "integration",
                "operationname": "obtenerCotizacionPrecioVC",
                "operationid": "643"
            },
            "obtenerMarcasVC": {
                "servicename": "DFSLSCotizador",
                "serviceid": "29fecb8c-5173-43be-b0cc-d4f032a8ac4d",
                "type": "integration",
                "operationname": "obtenerMarcasVC",
                "operationid": "644"
            },
            "obtenerPlazosVC": {
                "servicename": "DFSLSCotizador",
                "serviceid": "29fecb8c-5173-43be-b0cc-d4f032a8ac4d",
                "type": "integration",
                "operationname": "obtenerPlazosVC",
                "operationid": "645"
            },
            "obtenerModelosVC": {
                "servicename": "DFSLSCotizador",
                "serviceid": "29fecb8c-5173-43be-b0cc-d4f032a8ac4d",
                "type": "integration",
                "operationname": "obtenerModelosVC",
                "operationid": "646"
            },
            "obtenerPrecioUnidadVC": {
                "servicename": "DFSLSCotizador",
                "serviceid": "29fecb8c-5173-43be-b0cc-d4f032a8ac4d",
                "type": "integration",
                "operationname": "obtenerPrecioUnidadVC",
                "operationid": "647"
            },
            "obtenerTiposFinanciamientoVC": {
                "servicename": "DFSLSCotizador",
                "serviceid": "29fecb8c-5173-43be-b0cc-d4f032a8ac4d",
                "type": "integration",
                "operationname": "obtenerTiposFinanciamientoVC",
                "operationid": "648"
            },
            "obtenerEntidadesCirculacionVC": {
                "servicename": "DFSLSCotizador",
                "serviceid": "29fecb8c-5173-43be-b0cc-d4f032a8ac4d",
                "type": "integration",
                "operationname": "obtenerEntidadesCirculacionVC",
                "operationid": "649"
            },
            "enviarCotizacionVC": {
                "servicename": "DFSLSCotizador",
                "serviceid": "29fecb8c-5173-43be-b0cc-d4f032a8ac4d",
                "type": "integration",
                "operationname": "enviarCotizacionVC",
                "operationid": "650"
            },
            "obtenerAvisoPrivacidad": {
                "servicename": "DFSLSInfo",
                "serviceid": "57c785f0-2c9d-4588-908f-c3056d71aa9f",
                "type": "integration",
                "operationname": "obtenerAvisoPrivacidad",
                "operationid": "551"
            },
            "obtenerSolicitudDerechosArco": {
                "servicename": "DFSLSInfo",
                "serviceid": "57c785f0-2c9d-4588-908f-c3056d71aa9f",
                "type": "integration",
                "operationname": "obtenerSolicitudDerechosArco",
                "operationid": "552"
            },
            "enviarSolicitudDerechosArco": {
                "servicename": "DFSLSInfo",
                "serviceid": "57c785f0-2c9d-4588-908f-c3056d71aa9f",
                "type": "integration",
                "operationname": "enviarSolicitudDerechosArco",
                "operationid": "553"
            },
            "obtenerInformacionContacto": {
                "servicename": "DFSLSInfo",
                "serviceid": "57c785f0-2c9d-4588-908f-c3056d71aa9f",
                "type": "integration",
                "operationname": "obtenerInformacionContacto",
                "operationid": "554"
            },
            "obtenerTerminosCondiciones": {
                "servicename": "DFSLSInfo",
                "serviceid": "57c785f0-2c9d-4588-908f-c3056d71aa9f",
                "type": "integration",
                "operationname": "obtenerTerminosCondiciones",
                "operationid": "555"
            },
            "obtenerBeneficiosTerminacionContrato": {
                "servicename": "DFSLSContrato",
                "serviceid": "e7457299-3a41-4ae8-8af2-5248739b040d",
                "type": "integration",
                "operationname": "obtenerBeneficiosTerminacionContrato",
                "operationid": "558"
            },
            "obtenerDetalleContrato": {
                "servicename": "DFSLSContrato",
                "serviceid": "e7457299-3a41-4ae8-8af2-5248739b040d",
                "type": "integration",
                "operationname": "obtenerDetalleContrato",
                "operationid": "559"
            },
            "obtenerDistribuidorPorEstado": {
                "servicename": "DFSLSDistribuidor",
                "serviceid": "ca526e17-6dcb-4f8b-8b0f-e957bd2ffd19",
                "type": "integration",
                "operationname": "obtenerDistribuidorPorEstado",
                "operationid": "562"
            },
            "obtenerDistribuidorPorGps": {
                "servicename": "DFSLSDistribuidor",
                "serviceid": "ca526e17-6dcb-4f8b-8b0f-e957bd2ffd19",
                "type": "integration",
                "operationname": "obtenerDistribuidorPorGps",
                "operationid": "563"
            },
            "obtenerEstados": {
                "servicename": "DFSLSDistribuidor",
                "serviceid": "ca526e17-6dcb-4f8b-8b0f-e957bd2ffd19",
                "type": "integration",
                "operationname": "obtenerEstados",
                "operationid": "564"
            }
        };
        kony.print("Getting serviceID for : " + operationID);
        var serviceID = _mfServicesMap_[operationID] && _mfServicesMap_[operationID]["servicename"];
        kony.print("Got serviceID for : " + operationID + " : " + serviceID);
        kony.print("Invoking service through mobileFabric with url : " + url + " service id : " + serviceID + " operationid : " + operationID + "\n input params" + JSON.stringify(inputParam));
        if (serviceID && operationID) {
            var url = appConfig.secureurl;
            if (kony.mbaas) {
                resulttable = kony.mbaas.invokeMbaasServiceFromKonyStudioSync(url, inputParam, serviceID, operationID);
                kony.print("Result table for service id : " + serviceID + " operationid : " + operationID + " : " + JSON.stringify(resulttable));
            } else {
                alert("Unable to find the mobileFabric SDK for KonyStudio. Please download the SDK from the Kony Cloud Console and add as module to the Kony Project.");
            }
        } else {
            resulttable = kony.net.invokeService(url, inputParam, isBlocking);
        }
    }
    return resulttable;
};
/*
   Sample invocation code
   var inputparam = {};
   inputparam.options = {
       "access": "online",
       "CRUD_TYPE": "get",//get/create..
       "odataurl": "$filter=UserId eq xxx",
       "data" : {a:1,b:2}//in case of create/update
   };
*/
function mfobjectsecureinvokerasync(inputParam, serviceID, objectID, callBack) {
    var options = {
        "access": inputParam.options.access
    };
    var serviceObj = kony.sdk.getCurrentInstance().getObjectService(serviceID, options);
    var CRUD_TYPE = inputParam.options.CRUD_TYPE;
    switch (CRUD_TYPE) {
        case 'get':
            var dataObject = new kony.sdk.dto.DataObject(objectID);
            var headers = inputParam.httpheaders || {};
            if (inputParam.options && inputParam.options.odataurl) dataObject.setOdataUrl(inputParam.options.odataurl.toString());
            options = {
                "dataObject": dataObject,
                "headers": headers
            };
            serviceObj.fetch(options, callBack, callBack);
            break;
        case 'create':
            var dataObject = new kony.sdk.dto.DataObject(objectID);
            var headers = inputParam.httpheaders || {};
            var data = inputParam.options && inputParam.options.data || {};
            var key;
            for (key in data) {
                dataObject.addField(key, data[key]);
            }
            options = {
                "dataObject": dataObject,
                "headers": headers
            };
            serviceObj.create(options, callBack, callBack);
            break;
        case 'update':
            var dataObject = new kony.sdk.dto.DataObject(objectID);
            var headers = inputParam.httpheaders || {};
            var data = inputParam.options && inputParam.options.data || {};
            var key;
            for (key in data) {
                dataObject.addField(key, data[key]);
            }
            options = {
                "dataObject": dataObject,
                "headers": headers
            };
            serviceObj.update(options, callBack, callBack);
            break;
        case 'partialupdate':
            var dataObject = new kony.sdk.dto.DataObject(objectID);
            var headers = inputParam.httpheaders || {};
            var data = inputParam.options && inputParam.options.data || {};
            var key;
            for (key in data) {
                dataObject.addField(key, data[key]);
            }
            options = {
                "dataObject": dataObject,
                "headers": headers
            };
            serviceObj.partialUpdate(options, callBack, callBack);
            break;
        case 'delete':
            var dataObject = new kony.sdk.dto.DataObject(objectID);
            var headers = inputParam.httpheaders || {};
            var data = inputParam.options && inputParam.options.data || {};
            var key;
            for (key in data) {
                dataObject.addField(key, data[key]);
            }
            options = {
                "dataObject": dataObject,
                "headers": headers
            };
            serviceObj.deleteRecord(options, callBack, callBack);
            break;
        default:
    }
};

function appmenuseq() {
    frmWelcomeScreen2.show();
};

function callAppMenu() {
    var appMenu = [
        ["appmenuitemid1", "Item 1", "option1.png", appmenuseq, {}],
        ["appmenuitemid2", "Item 2", "option2.png", appmenuseq, {}],
        ["appmenuitemid3", "Item 3", "option3.png", appmenuseq, {}],
        ["appmenuitemid4", "Item 4", "option4.png", appmenuseq, {}]
    ];
    kony.application.createAppMenu("sampAppMenu", appMenu, "", "");
    kony.application.setCurrentAppMenu("sampAppMenu");
};

function makeCall(eventobject) {
    kony.phone.dial(eventobject.text);
};

function initializeGlobalVariables() {};