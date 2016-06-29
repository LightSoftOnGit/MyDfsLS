function cotizadorEnviar2_init() {
    cargarDatosEnvio2();
    cargarDistribuidorCercano2();
}

function cargarDatosEnvio2() {
    cotizadorEnviar2.richTextDireccion.text = "";
    if (isIOS()) {
        cotizadorEnviar2.switchCredito.selectedIndex = 1;
    }
    cotizadorEnviar2.forceLayout();
}

function cotizadorEnviar2_preShow() {
    cargarDatosEnvio2();
    cargarDistribuidorCercano2();
}

function validarPreShow() {
    var distribuidorSel = kony.store.getItem('distribuidorSeleccionado');
    if (distribuidorSel == null || distribuidorSel == undefined) {
        cargarDatosEnvio2();
        cargarDistribuidorCercano2();
    }
}

function cotizadorEnviar2_postShow() {
    //kony.application.showLoadingScreen("sknLblLoading", "Cargando...", constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true,{shouldShowLabelInBottom: true, seperatorHeight: 30});	
    cotizadorEnviar2.lblUnidad.text = kony.store.getItem("lblModeloSeleccionado");
    var distribuidorSel = kony.store.getItem('distribuidorSeleccionado');
    if (distribuidorSel != null && distribuidorSel != undefined) {
        cargarDatosDistribuidorSeleccionado2(distribuidorSel);
    }
}

function cargarDistribuidorCercano2() {
    kony.store.setItem("distribuidorCercano", true);
    cargarDatosEnvio2();
    geoPosicion();
}

function cargarDatosDistribuidorSeleccionado2(distribuidor) {
    var datosDistribuidor = "";
    datosDistribuidor = datosDistribuidor + distribuidor[0].nombre;
    datosDistribuidor = datosDistribuidor + "\n" + distribuidor[0].calle;
    datosDistribuidor = datosDistribuidor + "\n" + distribuidor[0].plaza + " " + distribuidor[0].telefono;
    cotizadorEnviar2.richTextDireccion.text = datosDistribuidor;
    kony.store.removeItem('distribuidorSeleccionado');
}

function seleccionarDistribuidorEnvio2() {
    kony.store.setItem("distribuidorEstado", true);
    //cambiar por frmShow()
    optenerEstados();
}

function limpiarParametrosEnvio() {
    try {
        cotizadorEnviar2.txtApellido.text = "";
        cotizadorEnviar2.txtEmail.text = "";
        cotizadorEnviar2.txtNombre.text = "";
        cotizadorEnviar2.txtTelefono.text = "";
        cotizadorEnviar2.txtDireccion.text = "";
        cotizadorEnviar2.richTextDireccion.text = "";
        cotizadorEnviar2.listBoxContacto.selectedKey = "0";
    } catch (e) {}
}

function validarParametrosEnvio2() {
    var valor = cotizadorEnviar2.listBoxContacto.selectedKeyValue[0].toString();
    var res = false;
    if (valor == '0') {
        res = (cotizadorEnviar2.txtEmail.text != null && cotizadorEnviar2.txtEmail.text.length > 0) && (cotizadorEnviar2.txtApellido.text != null && cotizadorEnviar2.txtApellido.text.length > 0) && (cotizadorEnviar2.txtNombre.text != null && cotizadorEnviar2.txtNombre.text.length > 0);
    } else {
        res = (cotizadorEnviar2.txtEmail.text != null && cotizadorEnviar2.txtEmail.text.length > 0) && (cotizadorEnviar2.txtApellido.text != null && cotizadorEnviar2.txtApellido.text.length > 0) && (cotizadorEnviar2.txtNombre.text != null && cotizadorEnviar2.txtNombre.text.length > 0) && (cotizadorEnviar2.txtTelefono.text != null && cotizadorEnviar2.txtTelefono.text.length > 0);
    }
    return res;
}

function onClickCotizacionEnviar2() {
    kony.application.showLoadingScreen("sknLblLoading", "Cargando...", constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true, {
        shouldShowLabelInBottom: true,
        seperatorHeight: 30
    });
    if (validarParametrosEnvio2()) {
        if (verificarCorreo(cotizadorEnviar2.txtEmail.text.trim().replaceAll(" ", ""))) {
            var inputparam = {};
            inputparam["serviceID"] = "enviarCotizacion";
            inputparam["httpconfig"] = {
                timeout: 20
            };
            var cotizacion = kony.store.getItem("resultCotizacion");
            inputparam["nombreTipo"] = kony.store.getItem("lblModeloSeleccionado");
            inputparam["nombreImagen"] = cotizadorCotizacion2.imageClaseCotizacion.src.toString().replace(".png", ".jpg");
            inputparam["nombrePlan"] = cotizadorCalculo2.lblPlan.text.trim();
            inputparam["nombreFinanciamiento"] = kony.store.getItem('nombreFinanciamientoSelccionado');
            if (isIOS()) {
                inputparam["enviarSolicitudCredito"] = cotizadorEnviar2.switchCredito.selectedIndex == 0;
            } else {
                inputparam["enviarSolicitudCredito"] = cotizadorEnviar2.chkSolicitudCredito.selectedKeys != null;
            }
            inputparam["tipoPersona"] = cotizadorCalculo2.radioPersona.selectedKey.toString();
            inputparam["plazo"] = cotizadorCalculo2.sliderPlazos.selectedValue + " meses";
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
            inputparam["nombreCliente"] = cotizadorEnviar2.txtNombre.text;
            inputparam["apellidoCliente"] = cotizadorEnviar2.txtApellido.text;
            inputparam["metodoContactoCliente"] = cotizadorEnviar2.listBoxContacto.selectedKeyValue[1].toString();
            inputparam["emailCliente"] = cotizadorEnviar2.txtEmail.text.trim();
            inputparam["telefonoCliente"] = cotizadorEnviar2.txtTelefono.text;
            inputparam["direccionCliente"] = cotizadorEnviar2.txtDireccion.text;
            if (kony.store.getItem("emailDistribuidorEnvio") != null && kony.store.getItem("emailDistribuidorEnvio") != undefined && kony.store.getItem("emailDistribuidorEnvio").toString().length > 0) {
                appmiddlewareinvokerasync(inputparam, enviarCotizacionCallback2);
            } else {
                alert("Seleccione un distribuidor antes de enviar su cotización por favor.");
            }
        } else {
            kony.application.dismissLoadingScreen();
        }
    } else {
        alert("Los campos marcados con asterisco (*) son obligatorios");
        kony.application.dismissLoadingScreen();
    }
}

function enviarCotizacionCallback2(status, result) {
    if (result.errmsg != undefined) {
        //alert(status+errmsg);
        alert('No fue posible enviar su cotización, verifique su connexión a intenet y vuelva  a intentarlo mas tarde por favor.');
        kony.application.dismissLoadingScreen();
    } else {
        if (result.codigo != null && result.codigo != undefined && result.codigo == 1) {
            if (result.resultado != undefined) {
                if (result.resultado == true) {
                    kony.application.dismissLoadingScreen();
                    alert("Estimado(a) " + cotizadorEnviar2.txtNombre.text + " tan pronto sea posible nos pondremos en contacto con usted.");
                    var arrSeleccion = [];
                    limpiarParametrosEnvio();
                    seleccionarClase2(0);
                    //cambiar por frmShow()  					
                    //cotizadorModelos2.show();  
                    showFrm(cotizadorModelos2);
                } else {
                    alert("No fue posible enviar su cotización, por favor intenta nuevamente.");
                    kony.application.dismissLoadingScreen();
                }
            } else {
                alert('No hubo resultados');
                kony.application.dismissLoadingScreen();
            }
        } else {
            if (status == 300) {
                alert('No fue posible enviar su cotización, verifique su connexión a intenet y vuelva  a intentarlo mas tarde por favor.');
                kony.application.dismissLoadingScreen();
            } else if (status != 100 && status != 200) {
                alert('No fue posible enviar su cotización, verifique su connexión a intenet y vuelva  a intentarlo mas tarde por favor.');
                kony.application.dismissLoadingScreen();
            } else if (result.codigo != null && result.codigo != undefined) {
                alert('No fue posible enviar su cotización, verifique su connexión a intenet y vuelva  a intentarlo mas tarde por favor.');
                kony.application.dismissLoadingScreen();
            }
        }
    }
}

function selccionarMetodoContacto() {
    var valor = cotizadorEnviar2.listBoxContacto.selectedKeyValue[0].toString();
    if (valor == '0') {
        //cotizadorEnviar2.lblEmailCliente.text=cotizadorEnviar2.lblEmailCliente.text.replace("*", "")+" *";
        cotizadorEnviar2.lblTelefonoCliente.text = cotizadorEnviar2.lblTelefonoCliente.text.replace("*", "");
    } else {
        //cotizadorEnviar2.lblEmailCliente.text=cotizadorEnviar2.lblEmailCliente.text.replace("*", "");
        cotizadorEnviar2.lblTelefonoCliente.text = cotizadorEnviar2.lblTelefonoCliente.text.replace("*", "") + " *";
    }
}