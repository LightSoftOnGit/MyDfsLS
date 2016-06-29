function init_EstadosCuentaIOS(contratoSeleccionado, numCliente) {
    showLoading();
    var user = kony.store.getItem("user");

    loginEstadosCuentaIOS.lblCorreo.text = "Enviar al correo: ";
    loginEstadosCuentaIOS.txtCorreo.text = user.correo;

    if (contratoSeleccionado != null) {
        var inputParam = {
            serviceID: 'obtenerEstadosDeCuenta',
            numCliente: numCliente + "",
            contrato: contratoSeleccionado.numeroContrato
        };

        peticionServer(function(result) {
            if (result.periodos != null && result.periodos.length > 0) {
                loginEstadosCuentaIOS.sgmFacturas.setData(result.periodos.map(function(periodo) {
                    return {
                        lblPeriodo: periodo.nombre
                    };
                }));

                loginEstadosCuentaIOS.sgmEmail.setData(result.periodos.map(function(periodo) {
                    return {
                        imgEmail: "correogris.png"
                    };
                }));

                loginEstadosCuentaIOS.sgmPdf.setData(result.periodos.map(function(periodo) {
                    return {
                        imgPdf: "pdf.png"
                    };
                }));

                loginEstadosCuentaIOS.sgmEmail.onRowClick = function(seguiWidget, sectionIndex, rowIndex) {
                    enviarEstadosEmail([result.periodos[rowIndex]], numCliente, contratoSeleccionado, loginEstadosCuentaIOS.txtCorreo.text.trim())
                };

                loginEstadosCuentaIOS.sgmPdf.onRowClick = function(seguiWidget, sectionIndex, rowIndex) {
                    kony.application.openURL(result.periodos[rowIndex].link);

                };
            }
            kony.application.dismissLoadingScreen();
        }, inputParam);

    }
    //loginEstadosCuentaIOS.show();
    showFrm(loginEstadosCuentaIOS);
}