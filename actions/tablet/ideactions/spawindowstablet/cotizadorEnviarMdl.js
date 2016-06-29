function cotizadorEnviar_init() {
    cargarDistribuidorCercano();
}

function cotizadorEnviar_preShow() {
    cotizadorEnviar.forceLayout();
    var distribuidorSel = kony.store.getItem('distribuidorGps');
    if (distribuidorSel != null && distribuidorSel != undefined) {
        cargarDatosDistribuidorCercano(distribuidorSel);
    } else {
        distribuidorSel = kony.store.getItem('distribuidorSeleccionado');
        if (distribuidorSel != null && distribuidorSel != undefined) {
            cargarDatosDistribuidorSeleccionado(distribuidorSel);
        }
    }
}

function cotizadorEnviar_postShow() {
    var distribuidorSel = kony.store.getItem('distribuidorSeleccionado');
    if (distribuidorSel != null && distribuidorSel != undefined) {
        cargarDatosDistribuidorSeleccionado(distribuidorSel);
    }
}

function cargarDistribuidorCercano() {
    kony.store.setItem("distribuidorCercano", true);
    geoPosicion();
}

function cargarDatosDistribuidorSeleccionado(distribuidor) {
    cotizadorEnviar.lblNombreDistribuidor.text = distribuidor[0].nombre;
    cotizadorEnviar.lblDireccion.text = distribuidor[0].calle;
    cotizadorEnviar.lblCiudadTelefono.text = distribuidor[0].plaza + " " + distribuidor[0].telefono;
    cotizadorEnviar.lblCorreoElectronico.text = distribuidor[0].email;
    kony.store.setItem("nombreDistribuidorEnvio", distribuidor[0].nombre);
    kony.store.setItem("calleDistribuidorEnvio", distribuidor[0].calle);
    kony.store.setItem("plazaDistribuidorEnvio", distribuidor[0].plaza);
    kony.store.setItem("telefonoDistribuidorEnvio", distribuidor[0].telefono);
    kony.store.setItem("emailDistribuidorEnvio", distribuidor[0].email);
}

function seleccionarDistribuidorEnvio() {
    kony.store.setItem("distribuidorEstado", true);
    optenerEstados();
}

function validarParametrosEnvio() {
    var res = (cotizadorEnviar.txtUserEmail.text != null && cotizadorEnviar.txtUserEmail.text.length > 0) && (cotizadorEnviar.txtUserLastName.text != null && cotizadorEnviar.txtUserLastName.text.length > 0) && (cotizadorEnviar.txtUserName.text != null && cotizadorEnviar.txtUserName.text.length > 0) && (cotizadorEnviar.txtUserPhone.text != null && cotizadorEnviar.txtUserPhone.text.length > 0);
    return res;
}

function onClickCotizacionEnviar() {
    kony.application.showLoadingScreen("sknLblLoading", "Cargando...", constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true, {
        shouldShowLabelInBottom: true,
        seperatorHeight: 30
    });
    if (validarParametrosEnvio()) {
        if (verificarCorreo(cotizadorEnviar.txtUserEmail.text)) {
            var inputparam = {};
            inputparam["serviceID"] = "enviarCotizacion";
            var cotizacion = kony.store.getItem("resultCotizacion");
            inputparam["nombreTipo"] = cotizadorCalculo.lblUnidad.text;
            inputparam["nombreImagen"] = cotizadorCotizacion.imageClaseCotizacion.src.toString().replace(".png", ".jpg");
            inputparam["nombrePlan"] = cotizadorCalculo.lblPlan.text;
            inputparam["nombreFinanciamiento"] = kony.store.getItem('nombreFinanciamientoSelccionado');
            inputparam["enviarSolicitudCredito"] = cotizadorEnviar.chkSolicitudCredito.selectedKeys != null;
            inputparam["tipoPersona"] = cotizadorCalculo.radioPersona.selectedKey.toString();
            inputparam["plazo"] = cotizadorCalculo.sliderPlazos.selectedValue + " meses";
            inputparam["mensualidad"] = cotizacion.smensualidad.toString();
            inputparam["totalAnticipo"] = cotizacion.sEnganche.toString();
            inputparam["nombreDistribuidor"] = kony.store.getItem("nombreDistribuidorEnvio");
            inputparam["correoDistribuidor"] = kony.store.getItem("emailDistribuidorEnvio");
            inputparam["calleDistribuidor"] = kony.store.getItem("calleDistribuidorEnvio");
            inputparam["plazazDistribuidor"] = kony.store.getItem("plazaDistribuidorEnvio");
            inputparam["ciudadDistribuidor"] = '';
            inputparam["telefonoDistribuidor"] = kony.store.getItem("telefonoDistribuidorEnvio");
            inputparam["leyendaLegal"] = cotizacion.leyenda.toString();
            inputparam["url"] = "https://www.mercedesbenzfinancial.com.mx/";
            inputparam["nombreCliente"] = cotizadorEnviar.txtUserName.text;
            inputparam["apellidoCliente"] = cotizadorEnviar.txtUserLastName.text;
            inputparam["metodoContactoCliente"] = cotizadorEnviar.lbMetodoContacto.selectedKeyValue[1].toString();
            inputparam["emailCliente"] = cotizadorEnviar.txtUserEmail.text;
            inputparam["telefonoCliente"] = cotizadorEnviar.txtUserPhone.text;
            appmiddlewareinvokerasync(inputparam, enviarCotizacionCallback);
        }
    } else {
        alert("Los campos marcados con asterisco (*) son obligatorios");
    }
}

function enviarCotizacionCallback(status, result) {
    if (result.errmsg != undefined) {
        alert('Se presento un error al enviar el correo electronico: ' + result.errmsg);
        kony.application.dismissLoadingScreen();
    } else {
        if (result.codigo != null && result.codigo != undefined && result.codigo == 1) {
            if (result.resultado != undefined) {
                if (result.resultado == true) {
                    kony.application.dismissLoadingScreen();
                    alert("Estimado(a) " + cotizadorEnviar.txtUserName.text + " tan pronto sea posible nos pondremos en contacto con usted .");
                    //cotizadorModelos.show();
                    showFrm(cotizadorModelos);
                } else {
                    alert("No fue posible enviar su cotizacion, por favor intenta nuevamente.");
                }
            } else {
                alert('No hubo resultados');
            }
        } else {
            if (result.codigo != null && result.codigo != undefined) {
                alert(result.codigo);
            }
        }
    }
}