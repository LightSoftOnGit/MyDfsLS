function activarBtonAceptar(event) {
    var h = +(loginTerminosCondiciones.scrollTerminos.height.match(/\d+/)[0]);
    var sc = +(event['contentOffsetMeasured']['y']);

    if (h == sc) {
        loginTerminosCondiciones.btnAceptar.setEnabled(true);
    }

}

function init_loginTerminosCondiciones(usuarioNuevo) {
//loginTerminosCondiciones.btnAceptar.setEnabled(false);
//loginTerminosCondiciones.FlexScrollContainer028cd3de0354244.onScrollEnd= activarBtonAceptar;
    if (usuarioNuevo != null) {
        loginTerminosCondiciones.btnAceptar.onClick = function() {
            showLoading();
            usuarioNuevo.serviceID = 'registrarCliente';
            peticionServer(function(result) {
                //login.show();
                showFrm(login);
            }, usuarioNuevo);
        }
        //loginTerminosCondiciones.show();
        showFrm(loginTerminosCondiciones);
    } else {
        kony.application.dismissLoadingScreen();
    }
    
}