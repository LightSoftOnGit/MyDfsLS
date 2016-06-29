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
    appKey: "67679e79f26620107f7882ce7042761",
    appSecret: "285b4964b368adbeaa94c701d9e825a4",
    serviceUrl: "http://dfswa07.cloudapp.net:8088/authService/100000002/appconfig",
    svcDoc: {
        "appId": "a4901ea4-6332-496b-8078-06e3625644f7",
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
            "DFSLSChat": "http://dfswa07.cloudapp.net:8088/services/DFSLSChat",
            "DFSLSInfo": "http://dfswa07.cloudapp.net:8088/services/DFSLSInfo",
            "DFSLSLogin": "http://dfswa07.cloudapp.net:8088/services/DFSLSLogin",
            "DFSLSSaldos": "http://dfswa07.cloudapp.net:8088/services/DFSLSSaldos",
            "DFSLSEdosCta": "http://dfswa07.cloudapp.net:8088/services/DFSLSEdosCta",
            "DFSLSContrato": "http://dfswa07.cloudapp.net:8088/services/DFSLSContrato",
            "DFSLSCotizador": "http://dfswa07.cloudapp.net:8088/services/DFSLSCotizador",
            "DFSLSDistribuidor": "http://dfswa07.cloudapp.net:8088/services/DFSLSDistribuidor"
        },
        "reportingsvc": {
            "custom": "http://dfswa07.cloudapp.net:8088/services/CMS",
            "session": "http://dfswa07.cloudapp.net:8088/services/IST"
        },
        "services_meta": {
            "DFSLSChat": {
                "version": "1.0",
                "url": "http://dfswa07.cloudapp.net:8088/services/DFSLSChat",
                "type": "integsvc"
            },
            "DFSLSInfo": {
                "version": "1.0",
                "url": "http://dfswa07.cloudapp.net:8088/services/DFSLSInfo",
                "type": "integsvc"
            },
            "DFSLSLogin": {
                "version": "1.0",
                "url": "http://dfswa07.cloudapp.net:8088/services/DFSLSLogin",
                "type": "integsvc"
            },
            "DFSLSSaldos": {
                "version": "1.0",
                "url": "http://dfswa07.cloudapp.net:8088/services/DFSLSSaldos",
                "type": "integsvc"
            },
            "DFSLSEdosCta": {
                "version": "1.0",
                "url": "http://dfswa07.cloudapp.net:8088/services/DFSLSEdosCta",
                "type": "integsvc"
            },
            "DFSLSContrato": {
                "version": "1.0",
                "url": "http://dfswa07.cloudapp.net:8088/services/DFSLSContrato",
                "type": "integsvc"
            },
            "DFSLSCotizador": {
                "version": "1.0",
                "url": "http://dfswa07.cloudapp.net:8088/services/DFSLSCotizador",
                "type": "integsvc"
            },
            "DFSLSDistribuidor": {
                "version": "1.0",
                "url": "http://dfswa07.cloudapp.net:8088/services/DFSLSDistribuidor",
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
    kony.application.setCheckBoxSelectionImageAlignment(constants.CHECKBOX_SELECTION_IMAGE_ALIGNMENT_RIGHT);
    kony.application.setDefaultTextboxPadding(false);
    kony.application.setRespectImageSizeForImageWidgetAlignment(true);
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