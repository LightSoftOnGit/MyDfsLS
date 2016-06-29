function menuVerInicio() {
    cerrarSesion();
    ocultarMenu();
    showFrm(inicio);
}

function menuVerLogin() {
    cerrarSesion();
    ocultarMenu();
    login.textBoxNombre.text = "";
    showFrm(login);
    setScrollByTextBox(login);
}

function menuVerGpsDistribuidor() {
    cerrarSesion();
    ocultarMenu();
    gpsVerDistribuidores();
}

function menuVerContacto() {
    cerrarSesion();
    ocultarMenu();
    showFrm(frmContacto);
}

function menuVerCotizador() {
    cerrarSesion();
    ocultarMenu();
    cotizadorModelos2_postShow();
}

function menuVerParquimetro() {
    cerrarSesion();
    ocultarMenu();
    showFrm(frmConstruccion);
    //init_parquimetro();
}

function menuCerrarSesion() {
    cerrarSesion();
    ocultarMenu();
    //login.show();
    showFrm(login);
}

function validateSesion() {
    if (!kony.store.getItem("user")) {
        //login.show();
        showFrm(login);
    }
}

function cerrarSesion() {
    kony.store.removeItem("user");
}

function mostrarMenu() {
    var formActual = kony.application.getCurrentForm();
    if (formActual.isShowMenu) {
        return;
    }
    formActual.isShowMenu = true;
    if (formActual.id == 'cotizadorModelos2') {
        cotizadorModelos2.flexImagenClase.top = "150%";
    }
    var flexMain = formActual.flexMain;
    if (kony.store.getItem("user")) {
        menu.btnLogout.setVisibility(true);
        menu.flexOpcConfig.setVisibility(true);
    } else {
        menu.btnLogout.setVisibility(false);
        menu.flexOpcConfig.setVisibility(false);
    }
    formActual.add(menu.headerPato);
    formActual.add(menu.block);
    formActual.add(menu.navigation);
    if (formActual.headers != null && formActual.headers.length > 0 && formActual.headers[0] != null) {
        formActual.headers[0].setVisibility(false);
    } else {
        if (formActual.id == 'cotizadorModelos2') {
            cotizadorModelos2.cabecera.opacity = 0;
        }
    }
    if (flexMain) {
        flexMain.left = "85%";
        flexMain.top = "9%";
    }
    formActual.isShowMenu = true;
}

function ocultarMenu() {
    var formActual = kony.application.getCurrentForm();
    var flexMain = formActual.flexMain;
    formActual.remove(menu.headerPato);
    formActual.remove(menu.block);
    formActual.remove(menu.navigation);
    if (formActual.headers != null && formActual.headers.length > 0 && formActual.headers[0] != null) {
        formActual.headers[0].setVisibility(true);
    } else {
        if (formActual.id == 'cotizadorModelos2') {
            cotizadorModelos2.cabecera.opacity = 1;
            cotizadorModelos2.forceLayout();
        }
    }
    if (flexMain) {
        flexMain.left = 0
        flexMain.top = 0;
    }
    formActual.isShowMenu = false;
}
var arrayScreens = [{
    idPantalla: "login",
    bloqueoPor: ["loginBienvenida"]
}, {
    idPantalla: "loginBienvenida",
    bloqueoPor: ["login", "contacto", "cotizadorModelos2", "inicio", "frmDistribuidores", "cotizadorModelos2", "parquimetro"],
    callback: function() {
        //login.show();
        showFrm(login);
    }
}, {
    idPantalla: "loginTerminosCondiciones",
    bloqueoPor: ["all"]
}, {
    idPantalla: "loginEstadosCuenta",
    bloqueoPor: ["login", "contacto", "cotizadorModelos2", "inicio", "frmDistribuidores", "cotizadorModelos2", "parquimetro"],
    callback: function() {
        //login.show();
        showFrm(login);
    }
}, {
    idPantalla: "loginFacturacion",
    bloqueoPor: ["login", "contacto", "cotizadorModelos2", "inicio", "frmDistribuidores", "cotizadorModelos2", "parquimetro"],
    callback: function() {
        //login.show();
        showFrm(login);
    }
}, {
    idPantalla: "loginLoyalty",
    bloqueoPor: ["login", "contacto", "cotizadorModelos2", "inicio", "frmDistribuidores", "cotizadorModelos2", "parquimetro"],
    callback: function() {
        //login.show();
        showFrm(login);
    }
}, {
    idPantalla: "cotizadorEnviar2",
    bloqueoPor: ["frmDistribuidoresCotizador"]
}];

function backGeneral() {
    var formActual = kony.application.getCurrentForm();
    var flexMain = formActual.flexMain;
    if (!formActual.isShowMenu) {
        var formPrev = kony.application.getPreviousForm(),
            configBlock = null,
            bloqueo = false;
        if (formPrev != null) {
            arrayScreens.forEach(function(config) {
                if (config.idPantalla.localeCompare(formPrev.id) == 0) {
                    configBlock = config;
                }
            });
            if (configBlock != null && configBlock.bloqueoPor != null && configBlock.bloqueoPor.length > 0) {
                for (screenB in configBlock.bloqueoPor) {
                    if (formActual.id.localeCompare(configBlock.bloqueoPor[screenB]) == 0 || configBlock.bloqueoPor[screenB].localeCompare("all") == 0) {
                        bloqueo = true;
                        break;
                    }
                }
                if (!bloqueo) {
                    formPrev.show();
                } else if (configBlock.callback) {
                    configBlock.callback();
                }
            } else {
                formPrev.show();
            }
        }
    } else {
        ocultarMenu();
    }
}