function init_loginLoyalty(contratoSeleccionado) {
    //showLoading();
	//showLoader();
	kony.application.showLoadingScreen("sknLblLoading", "Cargando...", constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true, {
                shouldShowLabelInBottom: true,
                seperatorHeight: 30
            });
    loginLoyalty.flexContentContainerTrue.isVisible = false;
    loginLoyalty.flexContentContainerFalse.isVisible = false;

   // loginLoyalty.RichText05efd7036dac146.text = kony.i18n.getLocalizedString("lblLoyaltyFalse");
   // loginLoyalty.richTextTexto.text = kony.i18n.getLocalizedString("lblLoyaltyTrue");

	loginLoyalty.RichText05efd7036dac146.text = "<p align='justify'>En Mercedes-Benz Financial sabemos el esfuerzo y dedicación que realiza para cumplir puntualmente con el financiamiento de su Mercedes o smart.</p><p align='justify'> Dicho esfuerzo merece un reconocimiento, por lo cual hemos desarrollado un programa de lealtad el cual ofrece diversos beneficios, con la finalidad de que disfrute del placer que es volver a estrenar un Mercedes-Benz o smart.</p><p align='justify'>¿Cómo llegar a ser candidato del Programa de Lealtad?</p><p align='justify'>Para poder participar en dicho programa es necesario cumplir con los siguientes requisitos:</p>* 80% de avance en su contrato actual.<br>* Estar al corriente en sus pagos durante toda la vida de su contrato.<br><p align='justify'>Para mayor información contacte a su Distribuidor Autorizado y/o al Centro de Atención a Clientes Daimler Financial Services <a href='number'>01 800 262 66 66</a></p>";
    loginLoyalty.richTextTexto.text = "<p align='justify'> En Mercedes-Benz Financial sabemos el esfuerzo y dedicación que has realizado durante el financiamiento de tu Mercedes o smart.</p><p align='justify'>Dicho compromiso merece un reconocimiento, por lo cual a continuación encontrarás un certificado que avala la pre-aprobación de un crédito a través de Mercedes-Benz Financial; con la finalidad de que lo hagas válido en tu Distribuidor Automotriz Hermer S.A. de C.V. o en Distribuidores Mercedes-Benz autorizados y disfrutes del placer que es volver a estrenar un Mercedes o un smart.</p>";
	

    var user = kony.store.getItem("user");
    if (!isIOS()) {
        var SEPARATOR_PATH = DownloadPdf.getSeparatorPath();
    }
    var inputparam = {
        serviceID: 'obtenerCertificadoLoyalty',
        rfc: user.rfc,
        contrato: contratoSeleccionado.numeroContrato
    };

    peticionServer(function(result) {
        if (result.folio != null) {
            loginLoyalty.flexContentContainerTrue.isVisible = true;
            loginLoyalty.lblNombre.text = user.nombre;
            loginLoyalty.imgCertificado.src = result.linkPNG;

            popupLoginLoyalty.txtCorreo.text = user.correo;
			
            //BOTON ENVIAR.
            popupLoginLoyalty.btnEnvia.onClick = function() {
                //showLoading();
				showLoader();
                var correo = popupLoginLoyalty.txtCorreo.text;
                if (verificarCorreo(correo)) {
                    var inputParaEnviar = {
                        serviceID: "enviarCertificadoLoyalty",
                        folio: result.folio,
                        correoElectronico: correo,
                        destinatario: user.nombre,
                        idSitio: obtenerIdSitio()
                    };
                    peticionServer(function(resultCorreo) {
                        popupLoginLoyalty.destroy();
                        alert("Correo enviado");
                    }, inputParaEnviar);
                }
            };

            loginLoyalty.btnDescargar.onClick = function() {
                if (!isIOS()) {
                    DownloadPdf.getPdf(result.linkPDF, "MyDFS" + SEPARATOR_PATH + "loyalty" + SEPARATOR_PATH + contratoSeleccionado.numeroContrato, result.folio, result.folio, "Loyalty");
                } else {
                    kony.application.openURL(result.linkPDF);
                }
            };

            loginLoyalty.btnEnviar.onClick = function() {
                popupLoginLoyalty.show();
            };
        }
    }, inputparam, function() {
        loginLoyalty.flexContentContainerTrue.isVisible = false;
        loginLoyalty.flexContentContainerFalse.isVisible = true;

    });

    //loginLoyalty.show();
    showFrm(loginLoyalty);
}

function onClicRichs(a, linktext, attributes) {
    if (attributes.href.localeCompare("number") == 0) {
        kony.phone.dial(linktext);
    }
}