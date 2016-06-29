function init_facturacionIOS(contratoSeleccionado) {
    //showLoading();
    showLoader();
    var user = kony.store.getItem("user");
    loginFacturacionIOS.lblCorreo.text = "Enviar al correo: ";
    loginFacturacionIOS.txtCorreo.text = user.correo;
    if (contratoSeleccionado != null) {
        var inputParam = {
            serviceID: 'obtenerFacturas',
            contrato: contratoSeleccionado.numeroContrato,
            empresa: contratoSeleccionado.empresa
        };
        peticionServer(function(result) {
            if (result.periodos != null && result.periodos.length > 0) {
                loginFacturacionIOS.sgmFacturas.setData(result.periodos.map(function(periodo) {
                    return {
                        lblPeriodo: periodo.nombre
                    };
                }));
                loginFacturacionIOS.sgmEmail.setData(result.periodos.map(function(periodo) {
                    return {
                        imgEmail: "correogris.png"
                    };
                }));
                loginFacturacionIOS.sgmPdf.setData(result.periodos.map(function(periodo) {
                    return {
                        imgPdf: "pdf.png"
                    };
                }));
                loginFacturacionIOS.sgmEmail.onRowClick = function(seguiWidget, sectionIndex, rowIndex) {
                    var correo = loginFacturacionIOS.txtCorreo.text;
                    if (verificarCorreo(correo)) {
                        enviarFacturaEmail([result.periodos[rowIndex]], correo, contratoSeleccionado.numeroContrato, contratoSeleccionado.empresa);
                    }
                };
                loginFacturacionIOS.sgmPdf.onRowClick = function(seguiWidget, sectionIndex, rowIndex) {
                    if (result.periodos[rowIndex].facturas.length == 1) {
                        kony.application.openURL(result.periodos[rowIndex].facturas[0].linkPDF);
                    } else {
                        cargaFacturacionAux(result.periodos[rowIndex].facturas);
                    }
                };
            }
            //kony.application.dismissLoadingScreen();
            dismissLoader();
        }, inputParam);
    }
    //loginFacturacionIOS.show();
    showFrm(loginFacturacionIOS);
}

function cargaFacturacionAux(facturas) {
    loginFacturacionAuxIOS.sgmFacturas.setData(facturas.map(function(factura) {
        return {
            "lblPeriodo": factura.folio
        };
    }));
    loginFacturacionAuxIOS.sgmFacturas.onRowClick = function(seguiWidget, sectionIndex, rowIndex) {
        kony.application.openURL(facturas[rowIndex].linkPDF);
    };
    //loginFacturacionAuxIOS.show();
    showFrm(loginFacturacionAuxIOS);
}