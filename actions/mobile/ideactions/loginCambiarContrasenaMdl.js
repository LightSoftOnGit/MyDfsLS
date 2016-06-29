function init_loginCambiarContrasena(user) {

    loginCambiarContrasena.Label0ab997e80f00d46.text = user.nombre;
    loginCambiarContrasena.TextField0bccb86d003e644.text = '';
    loginCambiarContrasena.textFieldConfirmacion.text = '';

    loginCambiarContrasena.imgminmayus.src = "bolitaroja.png";
    loginCambiarContrasena.imgminminus.src = "bolitaroja.png";
    loginCambiarContrasena.imgmindig.src = "bolitaroja.png";
    loginCambiarContrasena.imgmincesp.src = "bolitaroja.png";
    loginCambiarContrasena.imgminc.src = "bolitaroja.png";
    loginCambiarContrasena.imgmaxc.src = "bolitaroja.png";
    loginCambiarContrasena.imgallc.src = "bolitaroja.png";
    loginCambiarContrasena.imgccon.src = "bolitaroja.png";

    //loginCambiarContrasena.show();
    showFrm(loginCambiarContrasena);
	setScrollByTextBox(loginCambiarContrasena);
	
    loginCambiarContrasena.TextField0bccb86d003e644.onTextChange = checkValidacion;
    loginCambiarContrasena.textFieldConfirmacion.onTextChange = checkValidacion;


    loginCambiarContrasena.Button0c18d8aa952004a.onClick = function() {
        showLoading();
        var passw = loginCambiarContrasena.TextField0bccb86d003e644.text;
        var passwcop = loginCambiarContrasena.textFieldConfirmacion.text;

        loginCambiarContrasena.TextField0bccb86d003e644.text = '';
        loginCambiarContrasena.textFieldConfirmacion.text = '';

        if (validarContrasenia(passw, passwcop)) {
            var inputparam = {};
            inputparam["serviceID"] = "actualizarContrasena";
            inputparam["contrasena"] = user.pssw;
            inputparam["usuario"] = user.usuario;
            inputparam["nuevaContrasena"] = calcMD5(passw);

            passw = '';
            passwcop = '';

            peticionServer(function(result) {
                kony.application.dismissLoadingScreen();
                alert("Su contraseña ha sido actualizada satisfactoriamente.")
                init_loginBienvenida(user);
            }, inputparam);
        } else {
            kony.application.dismissLoadingScreen();
        }
    }

}

function checkValidacion() {
    var IMG_OK = 'bolitaazul.png';
    var IMG_nok = 'bolitaroja.png';
    var passw = loginCambiarContrasena.TextField0bccb86d003e644.text;

    loginCambiarContrasena.imgminmayus.src = validarMayusculaMinimo(passw) ? IMG_OK : IMG_nok;
    loginCambiarContrasena.imgminminus.src = validarMininusculaMinimo(passw) ? IMG_OK : IMG_nok;
    loginCambiarContrasena.imgmindig.src = validarDigitoMinimo(passw) ? IMG_OK : IMG_nok;
    loginCambiarContrasena.imgmincesp.src = validarCaracterEspecialMinimo(passw) ? IMG_OK : IMG_nok;
    loginCambiarContrasena.imgminc.src = validarTamanioMinimo(passw) ? IMG_OK : IMG_nok;
    loginCambiarContrasena.imgmaxc.src = validarTamanioMaximo(passw) ? IMG_OK : IMG_nok;
    loginCambiarContrasena.imgallc.src = caracteresValidos(passw) ? IMG_OK : IMG_nok;
    loginCambiarContrasena.imgccon.src = contraseiaConcuerda(passw, loginCambiarContrasena.textFieldConfirmacion.text) ? IMG_OK : IMG_nok;

}

function validarContrasenia(passw, passwcop) {
    if (validarTamanioMinimo(passw) && validarTamanioMaximo(passw) && caracteresValidos(passw) && contraseiaConcuerda(passw, passwcop) && validarComposicionContrasenia(passw)) {
        return true;

    } else {
        alert("Su contraseña no cumple con las reglas.");
        return false;
    }
}

function validarComposicionContrasenia(passw) {
    var aux = 0;
    if (validarMayusculaMinimo(passw)) {
        aux++;
    }

    if (validarMininusculaMinimo(passw)) {
        aux++;
    }

    if (validarDigitoMinimo(passw)) {
        aux++;
    }

    if (validarCaracterEspecialMinimo(passw)) {
        aux++;
    }
    return aux >= 3;
}

function validarMayusculaMinimo(txt) {
    return txt != null && txt.match("^.*[A-Z]+.*$") != null;
}

function validarMininusculaMinimo(txt) {
    return txt != null && txt.match("^.*[a-z]+.*$") != null;
}

function validarDigitoMinimo(txt) {
    return txt != null && txt.match("^.*[0-9]+.*$") != null;
}

function validarCaracterEspecialMinimo(txt) {
    return txt != null && txt.match("^.*[-!#$%()*+,/;:=?_@>.]+.*$") != null;
}

//Obligatorias...

function validarTamanioMinimo(txt) {
    return txt != null && txt.trim().length > 0 && txt.length >= 8;
}

function validarTamanioMaximo(txt) {
    return txt != null && (txt.length <= 25 && txt.length != 0);
}

function caracteresValidos(txt) {
    return txt != null && txt.match("^[-A-Za-z0-9!#$%()*+,/;:=?_@>.]+$") != null;

}

function contraseiaConcuerda(txtOrg, txtCop) {
    return txtOrg != null && txtOrg.trim().length > 0 && txtCop != null && txtCop.trim().length > 0 && (txtOrg.localeCompare(txtCop) == 0);
}