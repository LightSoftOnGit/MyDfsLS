function init_loginRecuperarContrasena() {
    loginRecuperarContrasena.txtFieldCorreo.text = "";
    showFrm(loginRecuperarContrasena);
    setScrollByTextBox(loginRecuperarContrasena);
}

function recuperarContrasena() {
    showLoading();
    var email = loginRecuperarContrasena.txtFieldCorreo.text;
    if (verificarCorreo(email)) {
        var inputparam = {};
        inputparam["serviceID"] = "recuperarContrasena";
        inputparam["correoElectronico"] = email;
        inputparam["idSitio"] = obtenerIdSitio();
        peticionServer(function() {
            alert("Se le ha enviado una contraseña temporal a la dirección de correo electrónico: " + email);
            //login.show();
            showFrm(login);
            loginRecuperarContrasena.txtFieldCorreo.text = "";
            kony.application.dismissLoadingScreen();
        }, inputparam);
    }
}

function verificarCorreo(correo) {
    var patt = new RegExp('^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$');
    if (correo != undefined && correo.trim().length > 0 && patt.test(correo)) {
        return true;
    }
    alert(kony.i18n.getLocalizedString("205"));
    kony.application.dismissLoadingScreen();
    return false;
}