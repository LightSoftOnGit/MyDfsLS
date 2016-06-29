function init_informacion() {
    var optionMaster = [{
        "Label01faf6da6323344": "Términos y Condiciones"
    }, {
        "Label01faf6da6323344": "Solicitud de Derechos ARCO"
    }, {
        "Label01faf6da6323344": "Aviso de Privacidad Integral"
    }];
    showLoading();
    frmInformacion.richTextDireccion.text = "";
    //alertame();
    if (kony.store.getItem("access-tc")) {
        kony.print("Entro");
        var concatOption = [{
            "Label01faf6da6323344": "Ajustes de Ubicación"
        }, {
            "Label01faf6da6323344": "Ajustes de Parquímetro"
        }];
        frmInformacion.headers[0].btnMenuInfo.setVisibility(true);
        optionMaster = optionMaster.concat(concatOption);
    } else {
        frmInformacion.headers[0].btnMenuInfo.setVisibility(false);
    }
    frmInformacion.segmentInformacion.data = optionMaster;
    var inputParamInfoContacto = {
        serviceID: "obtenerInformacionContacto",
        idSitio: obtenerIdSitio()
    }
    frmInformacion.segmentInformacion.onRowClick = function(seguiWidget, sectionIndex, rowIndex) {
        switch (rowIndex) {
            case 0:
                init_terminosCondiciones();
                break;
            case 1:
                popUpArco.show();
                break;
            case 2:
                init_avisoPrivacidad();
                break;
            case 3:
                infUbicacionVer();
                break;
            default:
                //frmConstruccion.show();
                showFrm(frmConstruccion);
                break;
        }
    };
    peticionServer(inyectContenidoInformacion, inputParamInfoContacto);
}

function inyectContenidoInformacion(result) {
    frmInformacion.richTextDireccion.text = result.contenido;
    //frmInformacion.show();
    showFrm(frmInformacion);
}

function descargarArco() {
    showLoading();
    inputParamObtenerArco = {
        serviceID: "obtenerSolicitudDerechosArco",
        idSitio: obtenerIdSitio()
    };
    peticionServer(function(result) {
        var url = result.linkPDF;
        kony.print(url);
        if (!isIOS()) {
            var separator = DownloadPdf.getSeparatorPath(),
                path = "MyMBF" + separator + "ARCO";
            //DownloadPdf.getPdf(url, path, "ARCO", "Descarga", "ARCO");
            var auxDescarga = [{
                url: url,
                path: path,
                nameFile: "ARCO",
                description: "Descarga documento ARCO",
                title: "ARCO"
            }];
            DownloadPdf.getListPdf(auxDescarga);
        } else {
            kony.application.openURL(url);
        }
    }, inputParamObtenerArco);
}

function enviarArco() {
    showLoading();
    var correo = popUpArco.txtCorreo.text;
    if (verificarCorreo(correo)) {
        var inputParamEnviarArco = {
            serviceID: "enviarSolicitudDerechosArco",
            correo: correo,
            idSitio: obtenerIdSitio()
        };
        peticionServer(function(result) {
            alert("Documento enviado a " + correo);
        }, inputParamEnviarArco);
    }
}