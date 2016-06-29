function init_loginRegistroNombre() {
    showFrm(loginRegistroNombre);
    setScrollByTextBox(loginRegistroNombre);
}


function validarRegistroNuevoUsuario() {

    var rfc = loginRegistroNombre.txtrfc.text;
    var nombre = loginRegistroNombre.txtnombre.text;
    if (rfc != null || nombre != null) {
        showLoading();
        var inputparam = {};
        inputparam["serviceID"] = "validarRFCNombre";
        inputparam["rfc"] = rfc ? rfc.trim() : '';
        inputparam["nombre"] = nombre ? nombre.trim() : '';

        peticionServer(function(result) {
            var nombre = result.nombre;
            var rfc = result.rfc;
            if ((nombre != null && nombre.length > 0) || (rfc != null && rfc.length > 0)) {
                init_loginRegistroEmpresa(nombre);
                loginRegistroNombre.txtrfc = "";
                loginRegistroNombre.txtnombre = "";
                kony.application.dismissLoadingScreen();
            }
        }, inputparam);
    } else {
        alert("Favor de capturar su nombre o su RFC para continuar.");
    }

}