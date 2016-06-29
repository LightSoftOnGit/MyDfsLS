function contactoTelefono() {
    var telefono = frmContacto.btnTelefono.text;
    kony.phone.dial(telefono);
}

function contactoCorreoElectronico() {
    var correo = frmContacto.btnCorreo.text;
    kony.phone.openEmail(["victor.venegas@daimler.com"], [], [], 'Mensaje enviado desde myMBF', "Titulo \n contenido del correo", false)
}

function contactoChat() {
    showFrm(frmConstruccion);
}

function contactoDistribuidor() {
    gpsVerDistribuidores();
}