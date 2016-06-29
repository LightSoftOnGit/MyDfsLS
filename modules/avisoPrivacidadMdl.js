function init_avisoPrivacidad() {
    showLoading();
    var inputParamAvisoPrivacidad = {
        serviceID: "obtenerAvisoPrivacidad",
        idSitio: obtenerIdSitio()
    };
    frmAvisoPrivacidad.btnAceptar.setEnabled(true);

    peticionServer(function(result) {
        frmAvisoPrivacidad.richTextTxt.text = result.contenido;
        frmAvisoPrivacidad.btnAceptar.onClick = aceptarAvisoPrivacidad;
        // frmAvisoPrivacidad.btnCancelar.onClick = declinarAvisoPrivacidad;
      //  frmAvisoPrivacidad.scrollContainerTC.onScrolling = desblockButtonAceptarAP;
        //frmAvisoPrivacidad.show();
        showFrm(frmAvisoPrivacidad);	
    }, inputParamAvisoPrivacidad);
}

function desblockButtonAceptarAP(event) {
    var h = (frmAvisoPrivacidad.richTextTxt.frame.height - frmAvisoPrivacidad.richTextTxt.parent.frame.height) - (+(event['contentOffsetMeasured']['y'])) < 5;
    if (h) {
        frmAvisoPrivacidad.btnAceptar.setEnabled(true);
    }
}

function aceptarAvisoPrivacidad() {
    init_informacion();
/*
     var primerArranque = kony.store.getItem("primerArranque");
	if(primerArranque == null || primerArranque == undefined || primerArranque ==  true){
		 kony.store.setItem("access-ap", true);
		 inicio.show();		 
		 kony.store.setItem("primerArranque",false);
		 
	} else {
	    kony.store.setItem("access-ap", true);
	    init_informacion();
    }
    */
}

function declinarAvisoPrivacidad() {
    //kony.store.setItem("access-ap", false);
    //init_informacion();
    var primerArranque = kony.store.getItem("primerArranque");
    if (primerArranque == null || primerArranque == undefined || primerArranque == true) {
        kony.store.setItem("access-ap", false);
        kony.store.setItem("primerArranque", false);
        //frmWelcomeScreen2.show();
        showFrm(frmWelcomeScreen2);
        //frmInformacion.show();
        //init_informacion();
    } else {
        kony.store.setItem("access-ap", false);
        init_informacion();
    }

    //  init_informacion();
}