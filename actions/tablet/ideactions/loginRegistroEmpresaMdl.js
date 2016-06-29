function init_loginRegistroEmpresa(nombre) {
    limpiarCamposRegistroEmpresa();
    showLoading();
    var codigoCorreo;
    var codigoCelular;

    peticionServer(function(result) {
        loginRegistroEmpresa.lblNombreregistra.text = nombre;
        var listEmpresas = result.lstEmpresas;
        if (listEmpresas && listEmpresas.length > 0) {
            var auxMasterData = [];
            listEmpresas.forEach(function(empresa) {
                auxMasterData.push([empresa.idRemoto, empresa.nombre]);
            });
            loginRegistroEmpresa.listEmpresas.masterData = auxMasterData;
            loginRegistroEmpresa.listEmpresas.selectedKey = 1;
        }

        loginRegistroEmpresa.textFieldPassword.onTextChange = checkContraseniaRegistroEmpresa;
        loginRegistroEmpresa.textFieldConfirmarPassword.onTextChange = checkContraseniaRegistroEmpresa;

        //loginRegistroEmpresa.show();
        showFrm(loginRegistroEmpresa);
        setScrollByTextBox(loginRegistroEmpresa);

        //Envio de correo de verificación
        loginRegistroEmpresa.textFieldUsuario.onEndEditing = function() {
            var correo = loginRegistroEmpresa.textFieldUsuario.text.trim();
            if (verificarCorreo(correo)) {
                var auxCorreo = kony.store.getItem("prev-correo");
                if (auxCorreo == null || correo.localeCompare(auxCorreo) != 0) {
                    showLoading();
                    var empresa = loginRegistroEmpresa.listEmpresas.selectedKey;
                    loginRegistroEmpresa.textFieldCodigo2.skin = 'textBoxCodigoMal';
                    peticionServer(function(result) {
                        codigoCorreo = result.codigoCorreo;
                        alert("Ha enviado un código de confirmación al correo: " + correo + ". Favor de ingresarlo en el siguiente campo ");
                        kony.store.setItem("prev-correo", correo);
                        kony.application.dismissLoadingScreen();
                    }, {
                        'serviceID': 'enviarCorreoCodigoVerificacion',
                        'nombre': nombre,
                        'correo': correo,
                        'idEmpresa': Math.floor(empresa).toString(),
                        'sitio': obtenerIdSitio()
                    });
                }
            }
        }

        //Envio de mensaje de verificación: 
        loginRegistroEmpresa.textFieldCelular.onEndEditing = function() {
            var numcel = loginRegistroEmpresa.textFieldCelular.text;
            if (numcel != null && numcel.length == 10) {
                var auxCel = kony.store.getItem("prev-cel");
                if (auxCel == null || numcel.localeCompare(auxCel) != 0) {
                    showLoading();
                    loginRegistroEmpresa.textFieldCodigo1.skin = 'textBoxCodigoMal';
                    var empresa = loginRegistroEmpresa.listEmpresas.selectedKey;
                    peticionServer(function(result) {
                        codigoCelular = result.codigoSMS;
                        alert("He enviado un código de confirmación al número " + numcel + ". Favor de ingresarlo en el siguiente campo. ");
                        kony.store.setItem("prev-cel", numcel);
                        kony.application.dismissLoadingScreen();
                    }, {
                        'serviceID': 'enviarSMSCodigoVerificacion',
                        'nombre': nombre,
                        'telefono': numcel,
                        'sitio': obtenerIdSitio()
                    });
                }
            } else if (numcel != null && numcel.length > 0) {
                alert("Ingresa un numero de 10 digitos");
                kony.application.dismissLoadingScreen();
            }
        }


        loginRegistroEmpresa.textFieldCodigo2.onTextChange = function() {
            var ccusuario = loginRegistroEmpresa.textFieldCodigo2.text;
            if (codigoCorreo != null && codigoCorreo.localeCompare(ccusuario) == 0) {
                loginRegistroEmpresa.textFieldCodigo2.skin = 'textBoxCodigoBien'
            } else if (ccusuario != null && ccusuario.length > 0) {
                loginRegistroEmpresa.textFieldCodigo2.skin = 'textBoxCodigoMal';
            }
        };

        loginRegistroEmpresa.textFieldCodigo1.onTextChange = function() {
            var cpusuario = loginRegistroEmpresa.textFieldCodigo1.text;
            if (codigoCelular != null && codigoCelular.localeCompare(cpusuario) == 0) {
                loginRegistroEmpresa.textFieldCodigo1.skin = 'textBoxCodigoBien'
            } else if (cpusuario != null && cpusuario.length > 0) {
                loginRegistroEmpresa.textFieldCodigo1.skin = 'textBoxCodigoMal';
            }
        };

        loginRegistroEmpresa.btnContinuar.onClick = function() {
            showLoading();
            var numContrato = loginRegistroEmpresa.textFieldContrato.text.trim().toUpperCase();
            var usuarioCorreo = loginRegistroEmpresa.textFieldUsuario.text.trim();
            var veriCodigoCorreo = (loginRegistroEmpresa.textFieldCodigo2.skin.localeCompare("textBoxCodigoBien") == 0) && (usuarioCorreo != null && usuarioCorreo.length > 0);
            var celular = loginRegistroEmpresa.textFieldCelular.text.trim();
            var veriCodigoCel = (loginRegistroEmpresa.textFieldCodigo1.skin.localeCompare("textBoxCodigoBien") == 0) && (celular != null && celular.length > 0);
            var contrasena = loginRegistroEmpresa.textFieldPassword.text;
            var confirmarContrasena = loginRegistroEmpresa.textFieldConfirmarPassword.text;
            var empresa = loginRegistroEmpresa.listEmpresas.selectedKey;

            if (numContrato && numContrato.length > 0) {
                if (verificarCorreo(usuarioCorreo) && validarContrasenia(contrasena, confirmarContrasena)) {
                    if ((veriCodigoCel || celular == null || celular.length == 0)) {
                        if (veriCodigoCorreo) {
                            peticionServer(function(result) {
                                var nuevoUsuario = {};
                                nuevoUsuario.rfc = '';
                                nuevoUsuario.nombre = nombre;
                                nuevoUsuario.usuario = usuarioCorreo;
                                nuevoUsuario.contrasena = calcMD5(contrasena);
                                nuevoUsuario.correo = usuarioCorreo;
                                nuevoUsuario.celular = celular;
                                nuevoUsuario.contrato = numContrato;
                                nuevoUsuario.empresa = Math.floor(empresa).toString();
                                nuevoUsuario.sitio = obtenerIdSitio();

                                limpiarCamposRegistroEmpresa();
                                init_loginTerminosCondiciones(nuevoUsuario);
                                kony.application.dismissLoadingScreen();
                            }, {
                                'serviceID': 'validarContrato',
                                'nombre': nombre,
                                'contrato': numContrato,
                                'empresa': Math.floor(empresa).toString()
                            });

                        } else {
                            alert("Favor de verificar la autenticidad del correo electrónico capturado.");
                            kony.application.dismissLoadingScreen();
                        }

                    } else {
                        alert("Favor de verificar la autenticidad del telefono celular capturado.");
                        kony.application.dismissLoadingScreen();
                    }
                } else {
                    kony.application.dismissLoadingScreen();
                }
            } else {
                alert("Favor de verificar su número de contrato.");
                kony.application.dismissLoadingScreen();
            }
        }
    }, {
        'serviceID': "obtenerEmpresas"
    });
}

function checkContraseniaRegistroEmpresa() {
    var IMG_OK = 'bolitaazul.png';
    var IMG_NOK = 'bolitaroja.png';
    var passw = loginRegistroEmpresa.textFieldPassword.text;

    loginRegistroEmpresa.imgminmayus.src = validarMayusculaMinimo(passw) ? IMG_OK : IMG_NOK;
    loginRegistroEmpresa.imgminminus.src = validarMininusculaMinimo(passw) ? IMG_OK : IMG_NOK;
    loginRegistroEmpresa.imgmindig.src = validarDigitoMinimo(passw) ? IMG_OK : IMG_NOK;
    loginRegistroEmpresa.imgmincesp.src = validarCaracterEspecialMinimo(passw) ? IMG_OK : IMG_NOK;
    loginRegistroEmpresa.imgminc.src = validarTamanioMinimo(passw) ? IMG_OK : IMG_NOK;
    loginRegistroEmpresa.imgmaxc.src = validarTamanioMaximo(passw) ? IMG_OK : IMG_NOK;
    loginRegistroEmpresa.imgallc.src = caracteresValidos(passw) ? IMG_OK : IMG_NOK;
    loginRegistroEmpresa.imgccon.src = contraseiaConcuerda(passw, loginRegistroEmpresa.textFieldConfirmarPassword.text) ? IMG_OK : IMG_NOK;
}

function limpiarCamposRegistroEmpresa() {
    if (kony.store.getItem("prev-correo")) {
        kony.store.removeItem("prev-correo");
    }
    if (kony.store.getItem("prev-cel")) {
        kony.store.removeItem("prev-cel");
    }

    loginRegistroEmpresa.textFieldContrato.text = '';
    loginRegistroEmpresa.textFieldUsuario.text = '';

    loginRegistroEmpresa.textFieldCodigo1.skin = 'textBoxCodigoMal';
    loginRegistroEmpresa.textFieldCodigo2.skin = 'textBoxCodigoMal';

    loginRegistroEmpresa.textFieldCelular.text = '';
    loginRegistroEmpresa.textFieldConfirmarPassword.text = '';
    loginRegistroEmpresa.listEmpresas.selectedKey = 1;
    loginRegistroEmpresa.textFieldPassword.text = '';
    loginRegistroEmpresa.textFieldCodigo2.text = "";
    loginRegistroEmpresa.textFieldCodigo1.text = "";

    var IMG_NOK = 'bolitaroja.png';
    loginRegistroEmpresa.imgminmayus.src = IMG_NOK;
    loginRegistroEmpresa.imgminminus.src = IMG_NOK;
    loginRegistroEmpresa.imgmindig.src = IMG_NOK;
    loginRegistroEmpresa.imgmincesp.src = IMG_NOK;
    loginRegistroEmpresa.imgminc.src = IMG_NOK;
    loginRegistroEmpresa.imgmaxc.src = IMG_NOK;
    loginRegistroEmpresa.imgallc.src = IMG_NOK;
    loginRegistroEmpresa.imgccon.src = IMG_NOK;
}