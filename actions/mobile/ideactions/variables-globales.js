//arrTipos=[];
arrPlanesCotizador = [];
id_Plan_flexibility = 0;
id_credito_directo = 3;
id_persona_flexibility = 0;
clave_credito_directo = "CP";
clave_flexibility = "FX";
totalPlanesCotizador = 0;
id_financiamiento = 0;


function showLoading() {
    kony.application.showLoadingScreen("sknLblLoading", "Cargando...", constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true, {
        shouldShowLabelInBottom: true,
        seperatorHeight: 30
    });
}

function isIOS() {
    return (kony.os.deviceInfo().name.localeCompare("iPad") == 0 || kony.os.deviceInfo().name.localeCompare("iPhone") == 0 || kony.os.deviceInfo().name.localeCompare("iPod touch") == 0);
}


function obtenerIdSitio() {
    return "A";
}

function obtenerIdNotificacionParquimetro() {
    return "01";
}

function callBackNotificationOnline(notificationobject, actionid) {
    if (obtenerIdNotificacionParquimetro().localeCompare(notificationobject.notificationId) == 0) {
        //alert("Su Parquimetro esta por expirar.");
        popupParquimetro.show();
        var cfgParqui = kony.store.getItem("pqm_prev");
        var fechaAlerta = new Date();
        fechaAlerta.setDate(fechaAlerta.getDate() + 1);
        fechaAlerta.setHours(cfgParqui.fechaAlerta.hora, cfgParqui.fechaAlerta.minuto, 0, 0);
        encenderAlarma(fechaAlerta, new Date());
    }
}

function callBackNotificationOffline(notificationobject, actionid) {
 if (obtenerIdNotificacionParquimetro().localeCompare(notificationobject.notificationId) == 0) {
		if(!isIOS()){
			Alarm.stopAlarm();
		}      
    }


}


/*
        1000- Unknown Error while connecting (If the platform cannot differentiate between the various kinds of network errors, the platform reports this error code by default).
        1011 - Device has no WIFI or mobile connectivity. Please try the operation after establishing connectivity.
        1012 - Request Failed.
        1013 - Middleware returned invalid JSON string.
        1014 - Request timed out.
        1015 - Cannot find host.
        1016 - Cannot connect to host.
        1200 - SSL - Certificate related error codes.
            */
function peticionServer(actionFunction, inputparam, failFunction, data) {
    if (!inputparam.httpconfig) {
        inputparam.httpconfig = {
            timeout: 20
        };

    }
    inputparam.httpheaders = {};

    appmiddlewareinvokerasync(inputparam, function(status, result) {
        if (result != null) {
            if (result.errmsg != undefined) {
                kony.application.dismissLoadingScreen();
                alert('Se presento un error : ' + result.errmsg + "(" + result.httpresponse.responsecode + ")");
            } else if (result.codigo != null) {
                if (result.codigo != 200) {
                    if (failFunction) {
                        failFunction(result);
                    } else {
                        alert(obtenerMensaje(result.codigo));
                    }
                    kony.application.dismissLoadingScreen();
                } else {
                    actionFunction(result, data);
                    kony.application.dismissLoadingScreen();
                }
            }
        }
    });
}


function runAplication() {
    var accessTC = kony.store.getItem("access-tc");
    kony.store.removeItem("modelosIniciado");
    kony.store.setItem("recargarClases", true);
    //var accessAP = kony.store.getItem("access-ap");
    if (accessTC) {
        //inicio.show();
        showFrm(inicio);
    } else {
        var primerArranque = kony.store.getItem("primerArranque");
        if (primerArranque == null || primerArranque == undefined || primerArranque == true) {
            //kony.store.setItem("primerArranque",true);
            init_terminosCondiciones();
        } else {
            alert('Estimado Cliente para poder accesar a la información es necesario tener su consentimiento en cuanto a nuestros terminos y condiciones, el cual lo podrá encontrar en el ícono de "i"');
        }
    }
}

function setScrollByTextBox(form) {
    if (form.flexMain) {
        var h = kony.os.deviceInfo().deviceHeight,
            header = 0;

        if (form.headers[0]) {
            header = parseInt(form.headers[0].height);
        }
        h = h - (((header + 5) * .01) * h);
        form.flexMain.height = h + "px";
    }
}