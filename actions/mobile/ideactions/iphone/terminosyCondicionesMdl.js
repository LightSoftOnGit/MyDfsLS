function init_terminosCondiciones() {
    showLoading();
    frmTermsAndConditions2.btnAceptar.setEnabled(false);
    var inputTermCondiciones = {
        serviceID: "obtenerTerminosCondiciones",
        idSitio: obtenerIdSitio()
    };
    peticionServer(function(result) {
        frmTermsAndConditions2.richTextTxt.text = result.contenido;
        frmTermsAndConditions2.btnAceptar.onClick = aceptar;
        frmTermsAndConditions2.btnCancelar.onClick = cancelar;
        frmTermsAndConditions2.scrollContainerTC.onScrolling = desblockButtonAceptar;
        //frmTermsAndConditions2.show();
        showFrm(frmTermsAndConditions2);
    }, inputTermCondiciones);
}

function desblockButtonAceptar(event) {
    var h = (frmTermsAndConditions2.richTextTxt.frame.height - frmTermsAndConditions2.richTextTxt.parent.frame.height) - (+(event['contentOffsetMeasured']['y'])) < 5;
    if (h) {
        frmTermsAndConditions2.btnAceptar.setEnabled(true);
    }
}

function aceptar() {
    var primerArranque = kony.store.getItem("primerArranque");
    if (primerArranque == null || primerArranque == undefined || primerArranque == true) {
        kony.store.setItem("access-tc", true);
        kony.store.setItem("primerArranque", false);
        //inicio.show()
        showFrm(inicio);
    } else {
        kony.store.setItem("access-tc", true);
        init_informacion();
    }
}

function cancelar() {
    var primerArranque = kony.store.getItem("primerArranque");
    if (primerArranque == null || primerArranque == undefined || primerArranque == true) {
        kony.store.setItem("primerArranque", false);
    }
    kony.store.setItem("access-tc", false);
    //  init_informacion();
    //frmWelcomeScreen2.show();
    showFrm(frmWelcomeScreen2);
}