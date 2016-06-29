//startup.js file
var globalhttpheaders = {};
var appConfig = {
    appId: "myDfsLS",
    appName: "myDfsLS",
    appVersion: "1.0.0",
    platformVersion: null,
    serverIp: "www.mobile.mbfs.com.mx",
    serverPort: "80",
    secureServerPort: "443",
    isDebug: true,
    middlewareContext: "myDfsLS",
    isturlbase: "http://dfswa07.cloudapp.net:8088/services",
    isMFApp: true,
    appKey: "9938bcc09c18a767754494fca421da02",
    appSecret: "bf2808edd35a7d68504a98c600430488",
    serviceUrl: "http://dfswa07.cloudapp.net:8088/authService/100000002/appconfig",
    svcDoc: {
        "appId": "3c18fe6d-0071-4010-a69b-2ef0718fc97d",
        "baseId": "78802371-be0a-4d54-9dca-6effa07a55e6",
        "name": "myDfsLS",
        "selflink": "http://dfswa07.cloudapp.net:8088/authService/100000002/appconfig",
        "login": [{
            "type": "basic",
            "prov": "userstore",
            "url": "http://dfswa07.cloudapp.net:8088/authService/100000002",
            "alias": "userstore"
        }],
        "integsvc": {
            "MyDfsService1": "http://dfswa07.cloudapp.net:8088/services/MyDfsService1",
            "myDfsLSService5": "http://dfswa07.cloudapp.net:8088/services/myDfsLSService5",
            "myDfsLSService6": "http://dfswa07.cloudapp.net:8088/services/myDfsLSService6",
            "myDfsLSService7": "http://dfswa07.cloudapp.net:8088/services/myDfsLSService7",
            "myDfsLSService0": "http://dfswa07.cloudapp.net:8088/services/myDfsLSService0",
            "myDfsLSService1": "http://dfswa07.cloudapp.net:8088/services/myDfsLSService1",
            "myDfsLSService2": "http://dfswa07.cloudapp.net:8088/services/myDfsLSService2",
            "myDfsLSService3": "http://dfswa07.cloudapp.net:8088/services/myDfsLSService3",
            "myDfsLSService4": "http://dfswa07.cloudapp.net:8088/services/myDfsLSService4"
        },
        "reportingsvc": {
            "custom": "http://dfswa07.cloudapp.net:8088/services/CMS",
            "session": "http://dfswa07.cloudapp.net:8088/services/IST"
        },
        "services_meta": {
            "MyDfsService1": {
                "version": "1.0",
                "url": "http://dfswa07.cloudapp.net:8088/services/MyDfsService1",
                "type": "integsvc"
            },
            "myDfsLSService5": {
                "version": "1.0",
                "url": "http://dfswa07.cloudapp.net:8088/services/myDfsLSService5",
                "type": "integsvc"
            },
            "myDfsLSService6": {
                "version": "1.0",
                "url": "http://dfswa07.cloudapp.net:8088/services/myDfsLSService6",
                "type": "integsvc"
            },
            "myDfsLSService7": {
                "version": "1.0",
                "url": "http://dfswa07.cloudapp.net:8088/services/myDfsLSService7",
                "type": "integsvc"
            },
            "myDfsLSService0": {
                "version": "1.0",
                "url": "http://dfswa07.cloudapp.net:8088/services/myDfsLSService0",
                "type": "integsvc"
            },
            "myDfsLSService1": {
                "version": "1.0",
                "url": "http://dfswa07.cloudapp.net:8088/services/myDfsLSService1",
                "type": "integsvc"
            },
            "myDfsLSService2": {
                "version": "1.0",
                "url": "http://dfswa07.cloudapp.net:8088/services/myDfsLSService2",
                "type": "integsvc"
            },
            "myDfsLSService3": {
                "version": "1.0",
                "url": "http://dfswa07.cloudapp.net:8088/services/myDfsLSService3",
                "type": "integsvc"
            },
            "myDfsLSService4": {
                "version": "1.0",
                "url": "http://dfswa07.cloudapp.net:8088/services/myDfsLSService4",
                "type": "integsvc"
            }
        }
    },
    svcDocRefresh: false,
    svcDocRefreshTimeSecs: -1,
    eventTypes: [],
    url: "http://dfswa07.cloudapp.net:8088/myDfsLS/MWServlet",
    secureurl: "http://dfswa07.cloudapp.net:8088/myDfsLS/MWServlet"
};
sessionID = "";

function appInit(params) {
    skinsInit();
    initializeheaderMenu();
    initializeheaderMenuInfo();
    initializefooterGray1();
    initializefooterTest();
    initializemenuGeneral();
    initializebienvenidaNoClienteTemplate();
    initializebienvenidaTemplate();
    initializebuttonCalculadoraTemplate();
    initializecalculadoraFinTemplate();
    initializecalculadoraFlexTemplate();
    initializecalculadoraFlexTemplate2();
    initializecalculadoraFlexTemplate3();
    initializecalculadoraTemplate();
    initializecontentTemplate();
    initializecotizadorCotizacionDatosTecnicos();
    initializecotizadorCotizacionTemplate();
    initializecotizadorDatosTecnicosHeader();
    initializecotizadorHeader();
    initializedistribuidorCotizadorTemplate();
    initializedistribuidorTemplate();
    initializefacturacionElectronicaTemplate();
    initializeflexContainer1972403634217();
    initializeflexContainer1972403634220();
    initializehamburguerTemplate();
    initializeheaderTemplate();
    initializeinformacionTemplate();
    initializemenuTemplate();
    initializepromocionesTemplate();
    initializesaldosContenido();
    initializesaldosPaginado();
    initializesaldosPopup();
    initializesaldosTemplate();
    initializesegmentPromo();
    initializesegmentPromo2();
    initializevbox1972403634298();
    initializevbox1972403634300();
    initializevbox1972403634302();
    chatGlobals();
    cotizadorCalculo2Globals();
    cotizadorCotizacion2Globals();
    cotizadorEnviar2Globals();
    cotizadorEnviar2backGlobals();
    cotizadorFinanciamiento2Globals();
    cotizadorModelos2Globals();
    cotizadorModelos2buenoGlobals();
    cotizadorPlanes2Globals();
    cotizadorTerminosCondicionesGlobals();
    frmAjustesParquimetroGlobals();
    frmAvisoPrivacidadGlobals();
    frmCalculadoraCalcFlexibilityGlobals();
    frmCalculadoraCotizacionGlobals();
    frmCalculadoraDatosGlobals();
    frmConstruccionGlobals();
    frmContactoGlobals();
    frmContratoGlobals();
    frmContratoInfoGlobals();
    frmDistribuidoresGlobals();
    frmDistribuidoresCotizadorGlobals();
    frmInformacionGlobals();
    frmMiSeguroGlobals();
    frmSecureGlobals();
    frmSegurosGlobals();
    frmTermsAndConditions2Globals();
    frmUbicacionActualGlobals();
    frmWelcomeScreen2Globals();
    gpsOpcionesGlobals();
    inicioGlobals();
    loginGlobals();
    loginBienvenidaGlobals();
    loginCambiarContrasenaGlobals();
    loginEstadosCuentaGlobals();
    loginFacturacionGlobals();
    loginFacturacionAuxGlobals();
    loginLoyaltyGlobals();
    loginRecuperarContrasenaGlobals();
    loginRegistroEmpresaGlobals();
    loginRegistroNombreGlobals();
    loginTerminosCondicionesGlobals();
    menuGlobals();
    parquimetroGlobals();
    popUpArcoGlobals();
    popupImagenClaseGlobals();
    popupLoginLoyaltyGlobals();
    popupParquimetroGlobals();
    popUpSaldosMovimientosDetalleGlobals();
    saldosMovimientosGlobals();
    saldosMovimientosDetalleGlobals();
    setAppBehaviors();
};

function setAppBehaviors() {
    kony.application.setApplicationBehaviors({
        applyMarginPaddingInBCGMode: false,
        adherePercentageStrictly: true,
        retainSpaceOnHide: true,
        marginsIncludedInWidgetContainerWeight: true,
        APILevel: 6500
    })
};

function themeCallBack() {
    callAppMenu();
    initializeGlobalVariables();
    kony.application.setApplicationInitializationEvents({
        init: appInit,
        showstartupform: function() {
            frmWelcomeScreen2.show();
        }
    });
};

function loadResources() {
    globalhttpheaders = {};
    sdkInitConfig = {
        "appConfig": appConfig,
        "isMFApp": appConfig.isMFApp,
        "appKey": appConfig.appKey,
        "appSecret": appConfig.appSecret,
        "eventTypes": appConfig.eventTypes,
        "serviceUrl": appConfig.serviceUrl
    }
    kony.setupsdks(sdkInitConfig, onSuccessSDKCallBack, onSuccessSDKCallBack);
};

function onSuccessSDKCallBack() {
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
}

function onSuccess(oldlocalname, newlocalename, info) {
    loadResources();
};

function onFailure(errorcode, errormsg, info) {
    loadResources();
};
kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
//If default locale is specified. This is set even before any other app life cycle event is called.
kony.i18n.setDefaultLocaleAsync("es_US", onSuccess, onFailure, null);
// If you wish to debug Application Initialization events, now is the time to
// place breakpoints.
debugger;