function init_facturacion(contratoSeleccionado) {
    //showLoading();
	//showLoader();
    	kony.application.showLoadingScreen("sknLblLoading", "Cargando...", constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true, {
                shouldShowLabelInBottom: true,
                seperatorHeight: 30
            });

  	resetComponentFacturacion();

    var user = kony.store.getItem("user");

    if (user && contratoSeleccionado) {

        var inputObtenerFacturas = {
            serviceID: 'obtenerFacturas',
            contrato: contratoSeleccionado.numeroContrato,
            empresa: contratoSeleccionado.empresa
        }
        var theLastEmail = user.correo;

        loginFacturacion.txtFieldEmail.text = theLastEmail;
        loginFacturacion.txtFieldEmail.onTouchStart = function() {
            this.text = "";
        }

        loginFacturacion.txtFieldEmail.onDone = function() {
            if (!this.text) {
                this.text = theLastEmail;
            } else if (theLastEmail.localeCompare(this.text) != 0) {
                theLastEmail = this.text;
            }
        };

        peticionServer(showFacturas, inputObtenerFacturas, null, contratoSeleccionado);

    }
    //loginFacturacion.show();
    showFrm(loginFacturacion);
}

function showFacturas(result, contratoSeleccionado) {
    if (result.periodos != null && result.periodos.length > 0) {
        kony.print("Recibo Facturas");
        var periodo, periodos = result.periodos,
            isIos = isIOS(),
            periodosSeleccionados, btnDescargar = loginFacturacion.lblDescargar,
            btnEnviar = loginFacturacion.lblEnviar;

        for (index in periodos) {
            periodo = periodos[index];
            //kony.print(JSON.stringify(periodo));
            if (index == 0) {
                loginFacturacion.lblBot.text = periodo.nombre;
                loginFacturacion.flexExtado1.setVisibility(true);
            }
            if (index == 1) {
                loginFacturacion.lblMid.text = periodo.nombre;
                loginFacturacion.flexEstado2.setVisibility(true);

            }
            if (index == 2) {
                loginFacturacion.lblTop = periodo.nombre;
                loginFacturacion.flexEstado3.setVisibility(true);
            }

            periodo.isSelect = false;
        }

        var actionSelectTop = function() {
            periodos[periodos.length - 1].isSelect = !periodos[periodos.length - 1].isSelect;
            periodosSeleccionados = obtenerPeriodosSeleccionados(periodos);
            btnDescargar.setEnabled(periodosSeleccionados.length > 0);
            btnEnviar.setEnabled(periodosSeleccionados.length > 0);
        }

        var actionSelectMid = function() {
            periodos[1].isSelect = !periodos[1].isSelect;
            periodosSeleccionados = obtenerPeriodosSeleccionados(periodos);
            btnDescargar.setEnabled(periodosSeleccionados.length > 0);
            btnEnviar.setEnabled(periodosSeleccionados.length > 0);
        }

        var actionSelectBot = function() {
            periodos[0].isSelect = !periodos[0].isSelect;
            periodosSeleccionados = obtenerPeriodosSeleccionados(periodos);
            btnDescargar.setEnabled(periodosSeleccionados.
            length > 0);
            btnEnviar.setEnabled(periodosSeleccionados.length > 0);
        }

        if (!isIos) {
            loginFacturacion.checkBox1.onSelection = actionSelectTop;
            loginFacturacion.checkBox2.onSelection = actionSelectMid;
            loginFacturacion.checkBox3.onSelection = actionSelectBot;

            btnDescargar.onClick = function() {
                downloadFacturasPdfAndroid(periodosSeleccionados);
            }
        } else {

            loginFacturacion.switch1.onSlide = actionSelectTop;
            loginFacturacion.switch2.onSlide = actionSelectMid;
            loginFacturacion.switch3.onSlide = actionSelectBot;

            btnDescargar.onClick = function() {
                downloadPdfIOS(periodosSeleccionados);
            }
        }

        btnEnviar.onClick = function() {
            enviarFacturas(periodosSeleccionados, loginFacturacion.txtFieldEmail.text, result.numeroContrato, contratoSeleccionado.empresa);
        }

    } else {
        alert("No se encontraron facturas");
    }
}

function downloadFacturasPdfAndroid(periodos) {
    var separatorPath = DownloadPdf.getSeparatorPath(),
        path = "MyMBF" + separatorPath + "Facturas",
        lstFacturas = [];

    periodos.forEach(function(periodo) {
        periodo.facturas.forEach(function(factura) {
            lstFacturas.push({
                url: factura.linkPDF,
                path: path + separatorPath + periodo.nombre,
                nameFile: factura.nombre,
                description: "Descargando factura",
                title: "Factura " + factura.folio
            });
        });
    });

    DownloadPdf.getListPdf(lstFacturas);
}

function enviarFacturas(periodos, correo, numContrato, empresa) {
    if (verificarCorreo(correo)) {
        //showLoading();
		showLoader();
        var periodosText = "";

        periodos.forEach(function(periodo, index) {
            periodosText += periodo.descripcion + (index < periodos.length - 1 ? "|" : "");
        });

        var paramInputEnviarFacturas = {
            serviceID: "enviarFacturas",
            contrato: numContrato,
            empresa: empresa,
            periodos: periodosText,
            correoElectronico: correo,
            idSitio: obtenerIdSitio(),
            httpconfig: {
                timeout: 30
            }
        };

        peticionServer(function(result) {
            alert("Ha enviado los documentos al correo: " + correo);
        }, paramInputEnviarFacturas);
    }
}


function downloadPdfIOS(lstPeriodos) {
    if (lstPeriodos != null && lstPeriodos.length > 0) {
        var auxLstPeriodos = [];
        var lstPdf = [];
        lstPeriodos.forEach(function(periodo) {
            if (periodo.facturas.length == 1) {
                kony.print(JSON.stringify(periodo));
                lstPdf.push(periodo.facturas[0].linkPDF);
            } else {
                auxLstPeriodos.push(periodo);
            }
        });

        if (!auxLstPeriodos.length > 0) {
            showPdfWeb(lstPdf);
        } else {
            initAuxFacturas(auxLstPeriodos, lstPdf);
        }
    }
}

function initAuxFacturas(lstPeriodos, lstPdf) {
    if (lstPeriodos.length > 0) {
        var lblTop = loginFacturacionAux.lblTop,
            lblMid = loginFacturacionAux.lblMid,
            lblBot = loginFacturacionAux.lblBot,
            switchTop = loginFacturacionAux.switch1,
            switchMid = loginFacturacionAux.switch2,
            switchBot = loginFacturacionAux.switch3,
            periodo = lstPeriodos[lstPeriodos.length - 1],
            lstLbl = [{
                lbl: lblTop,
                container: loginFacturacionAux.flexExtado1,
                swich: switchTop
            },
            {
                lbl: lblMid,
                container: loginFacturacionAux.flexExtado2,
                swich: switchMid
            },
            {
                lbl: lblBot,
                container: loginFacturacionAux.flexExtado3,
                swich: switchBot
            }],
            auxLbl;

        lstPeriodos.splice(lstPeriodos.length - 1, 1);

        periodo.facturas.forEach(function(factura, index) {
            factura.isSelect = false;
            auxLbl = lstLbl[index];
            auxLbl.lbl.text = periodo.nombre + factura.folio;
            auxLbl.container.setVisibility(true);
            auxLbl.swich.onSlide = function() {
                onSlideIOS(factura, periodo);
            }
        });

        loginFacturacionAux.btnEnviar.onClick = function() {
            obtenerFacturasSeleccionadas(periodo.facturas).forEach(function(factura) {
                lstPdf.push(factura.linkPDF);
            });

            if (lstPeriodos.length > 0) {
                initAuxFacturas(lstPeriodos, lstPdf);
            } else {
                showPdfWeb(lstPdf);
                //loginFacturacion.show();
                showFrm(loginFacturacion);
            }

        }

        //loginFacturacionAux.show();
        showFrm(loginFacturacion);
    }
}

function onSlideFacturasIOS(factura, periodo) {
    factura.isSelect = !factura.isSelect;
    loginFacturacionAux.btnEnviar.setEnabled(obtenerFacturasSeleccionadas(periodo.facturas).length > 0);
}

function obtenerFacturasSeleccionadas(lstFacturas) {
    var facturasSeleccionadas = [];
    lstFacturas.forEach(function(factura) {
        if (factura.isSelect) {
            facturasSeleccionadas.push(factura);
        }
    });
    return facturasSeleccionadas;
}

function showPdfWeb(lstPdf) {
    if (lstPdf != null && lstPdf.length > 0) {
        var i = lstPdf.length - 1;
        kony.application.openURL(lstPdf[i]);
        lstPdf.splice(i, 1);

        kony.application.setApplicationCallbacks({
            onforeground: function() {
                i = lstPdf.length - 1;
                if (i > -1) {
                    kony.application.openURL(lstPdf[i]);
                    lstPdf.splice(i, 1);
                }
            }
        });
    }
}

function resetComponentFacturacion() {
    loginFacturacion.lblDescargar.setEnabled(false);
    loginFacturacion.lblEnviar.setEnabled(false);


    if (!isIOS()) {
        loginFacturacion.checkBox1.selectedKeys = null;
        loginFacturacion.checkBox2.selectedKeys = null;
        loginFacturacion.checkBox3.selectedKeys = null;
    } else {
        loginFacturacion.switch1.selectedIndex = 1;
        loginFacturacion.switch2.selectedIndex = 1;
        loginFacturacion.switch3.selectedIndex = 1;
    }

    loginFacturacion.flexExtado1.setVisibility(false);
    loginFacturacion.flexEstado2.setVisibility(false);
    loginFacturacion.flexEstado3.setVisibility(false);

}
