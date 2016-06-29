function init_estadoscuentas(contratoSeleccionado, numCliente) {
    showLoading();
    resetComponentEstadosCuenta();
    var user = kony.store.getItem("user");
    if (user) {

        var theLastEmail = user.correo;
        loginEstadosCuenta.txtFieldEmail.text = theLastEmail;

        loginEstadosCuenta.txtFieldEmail.onTouchStart = function() {
            this.text = "";
        }

        loginEstadosCuenta.txtFieldEmail.onDone = function() {
            if (!this.text) {
                this.text = theLastEmail;
            } else if (theLastEmail.localeCompare(this.text) != 0) {
                theLastEmail = this.text;
            }
        }
        
        var inputObtenerEstadosCuentas = {
            serviceID: 'obtenerEstadosDeCuenta',
            numCliente: numCliente + "",
            contrato: contratoSeleccionado.numeroContrato
        }

        peticionServer(showEstadosCuentas, inputObtenerEstadosCuentas,null,numCliente);

        //loginEstadosCuenta.show();
        showFrm(loginEstadosCuenta);
    }
}

function showEstadosCuentas(result,numCliente) {
    if (result.periodos != null && result.periodos.length > 0) {
        var isIos = isIOS(),
            periodos = result.periodos,
            btnDescargar = loginEstadosCuenta.lblDesccargar,
            btnEnviar = loginEstadosCuenta.lblEnviar,
            txtCorreo = loginEstadosCuenta.txtFieldEmail,
            periodosSeleccionados = [];

        result.periodos.forEach(function(periodo) {
            switch (periodo.numero) {
            case "1":
                {
                    if (periodo.link.localeCompare("404") != 0) {
                        loginEstadosCuenta.flexEstado1.setVisibility(true);
                    }
                    break;
                }
            case "2":
                {

                    if (periodo.link.localeCompare("404") != 0) {
                        loginEstadosCuenta.flexEstado2.setVisibility(true);
                    }
                    break;
                }
            case "3":
                {
                    if (periodo.link.localeCompare("404") != 0) {
                        loginEstadosCuenta.flexEstado3.setVisibility(true);
                    }
                    break;
                }
            };
            periodo.isSelect = false;
        });

        var actionSelect1 = function() {
            periodos[0].isSelect = !periodos[0].isSelect;
            periodosSeleccionados = obtenerPeriodosSeleccionados(periodos);
            btnDescargar.setEnabled(periodosSeleccionados.length > 0);
            btnEnviar.setEnabled(periodosSeleccionados.length > 0);
        };

        var actionSelect2 = function() {
            periodos[1].isSelect = !periodos[1].isSelect;
            periodosSeleccionados = obtenerPeriodosSeleccionados(periodos);
            btnDescargar.setEnabled(periodosSeleccionados.length > 0);
            btnEnviar.setEnabled(periodosSeleccionados.length > 0);
        };

        var actionSelect3 = function() {
            periodos[2].isSelect = !periodos[2].isSelect;
            periodosSeleccionados = obtenerPeriodosSeleccionados(periodos);
            btnDescargar.setEnabled(periodosSeleccionados.length > 0);
            btnEnviar.setEnabled(periodosSeleccionados.length > 0);

        };

        if (!isIos) {
            loginEstadosCuenta.checkBox1.onSelection = actionSelect1;
            loginEstadosCuenta.checkBox2.onSelection = actionSelect2;
            loginEstadosCuenta.checkBox3.onSelection = actionSelect3;

            btnDescargar.onClick = function() {
                descargarPeriodos(periodosSeleccionados);
            };

        } else {
            loginEstadosCuenta.switchTop.onSlide = actionSelect1;
            loginEstadosCuenta.switchMid.onSlide = actionSelect2;
            loginEstadosCuenta.switchBot.onSlide = actionSelect3;

            btnDescargar.onClick = function() {
                periodosSeleccionados = obtenerPeriodosSeleccionados(periodos);
                descargarPeriodosIos(periodosSeleccionados);
            };
        }

        btnEnviar.onClick = function() {
            enviarPeriodos(periodosSeleccionados, result.numeroContrato, txtCorreo.text,numCliente);
        }

    } else {
        alert("No se encontraron Estados de cuenta");
    }

}

function descargarPeriodos(periodos) {
   alert("Iniciando descarga...");

}

function descargarPeriodosIos(periodos) {

   alert("Iniciando descarga...");

}

function enviarPeriodos(periodosSeleccionados, numeroContrato, correo,numCliente) {
    if (verificarCorreo(correo)) {
        showLoading();
        var periodosTxt = "";

        periodosSeleccionados.forEach(function(periodo, index) {
            periodosTxt += periodo.numero + (index < periodosSeleccionados.length - 1 ? "|" : "");
        });

        var paramEnviarContrato = {
            serviceID: 'enviarEstadosDeCuenta',
            contrato: numeroContrato,
            numeroCliente: numCliente+"",
            periodos: periodosTxt,
            idSitio: obtenerIdSitio(),
            correoElectronico: correo
        }

        peticionServer(function(result) {
          alert("Ha enviado los documentos al correo: "+correo);
            kony.application.dismissLoadingScreen();
        }, paramEnviarContrato);
    }
}

function obtenerPeriodosSeleccionados(listPeriodos) {
    var periodosSelect = [];
    listPeriodos.forEach(function(periodo) {
        if (periodo.isSelect) {
            periodosSelect.push(periodo);
        }
    });
    return periodosSelect;
}

function resetComponentEstadosCuenta() {

    var btnDescargar = loginEstadosCuenta.lblDesccargar,
        btnEnviar = loginEstadosCuenta.lblEnviar;

    loginEstadosCuenta.flexEstado1.setVisibility(false);
    loginEstadosCuenta.flexEstado2.setVisibility(false);
    loginEstadosCuenta.flexEstado3.setVisibility(false);

    if (!isIOS()) {
        loginEstadosCuenta.checkBox1.selectedKeys = null;
        loginEstadosCuenta.checkBox2.selectedKeys = null;
        loginEstadosCuenta.checkBox3.selectedKeys = null;
    } else {
        loginEstadosCuenta.switchBot.selectedIndex = 1;
        loginEstadosCuenta.switchTop.selectedIndex = 1;
        loginEstadosCuenta.switchMid.selectedIndex = 1;
    }


    btnDescargar.setEnabled(false);
    btnEnviar.setEnabled(false);
}