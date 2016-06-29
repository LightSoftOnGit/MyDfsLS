function p2kwiet19724036342443_smgtoOpciones_onRowClick_seq0(eventobject, sectionNumber, rowNumber) {
    contactoOpcionesNav.call(this);
};

function p2kwiet19724036342471_cotizadorCalculo_postshow_seq0(eventobject) {
    cargarDatosParaCalculo.call(this);
};

function p2kwiet19724036342471_cotizadorCalculo_init_seq0(eventobject) {
    cotizadorCalculo_init.call(this);
};

function p2kwiet19724036342471_txtPrecio_onDone_seq0(eventobject, changedtext) {
    validarPrecioUnidad.call(this);
};

function p2kwiet19724036342471_radioPersona_onSelection_seq0(eventobject) {
    validarPrecioUnidad.call(this);
};

function p2kwiet19724036342471_sliderEnganche_onslide_seq0(eventobject, selectedvalue) {
    onSliderEngancheSelect.call(this);
    validarPrecioUnidad.call(this);
};

function p2kwiet19724036342471_btnCalcular_onClick_seq0(eventobject) {
    obtenerCotizacion.call(this);
};

function p2kwiet19724036342471_lbEstados_onTouchStart_seq0(eventobject, x, y, contextInfo) {
    validarPrecioUnidad.call(this);
};

function p2kwiet19724036342471_sliderPlazos_onslide_seq0(eventobject, selectedvalue) {
    onSliderSelection.call(this, eventobject);
    validarPrecioUnidad.call(this);
};

function p2kwiet19724036342488_cotizadorCotizacion_postshow_seq0(eventobject) {
    limpiarCotizacion.call(this);
    cargarCotizacion.call(this);
};

function p2kwiet19724036342488_btnQuote_onClick_seq0(eventobject) {
    cotizadorEnviar.show();
};

function p2kwiet19724036342488_btnRegresar_onClick_seq0(eventobject) {
    cotizadorCalculo.show();
};

function p2kwiet19724036342488_btnTerminos_onClick_seq0(eventobject) {};

function p2kwiet19724036342488_lblFichaTecnica_onTouchEnd_seq0(eventobject, x, y, contextInfo) {
    alternarFichaTecnica.call(this);
};

function p2kwiet19724036342520_cotizadorEnviar_postshow_seq0(eventobject) {
    cotizadorEnviar_postShow.call(this);
};

function p2kwiet19724036342520_cotizadorEnviar_init_seq0(eventobject) {
    cargarDistribuidorCercano.call(this);
};

function p2kwiet19724036342520_segmentRedirect_onRowClick_seq0(eventobject, sectionNumber, rowNumber) {
    seleccionarDistribuidorEnvio.call(this);
};

function p2kwiet19724036342520_btnUserSent_onClick_seq0(eventobject) {
    /* 
cargarDistribuidorCercano.call(this);

 */
    onClickCotizacionEnviar.call(this);
};

function p2kwiet19724036342535_cotizadorFinanciamiento_postshow_seq0(eventobject) {
    cotizadorFinanciamiento_init.call(this);
};

function p2kwiet19724036342535_cotizadorFinanciamiento_init_seq0(eventobject) {
    /* 
limpiarControlesFinanciamiento.call(this);

 */
};

function p2kwiet19724036342535_segmentList_onRowClick_seq0(eventobject, sectionNumber, rowNumber) {
    setFinanciamientoSeleccionado.call(this);
    /* 
cotizadorPlanes.show();
	
 */
    /* 
cotizadorPlanes_init.call(this);

 */
};

function p2kwiet19724036342554_cotizadorModelos_postshow_seq0(eventobject) {
    cotizadorModelos_init.call(this);
};

function p2kwiet19724036342554_cotizadorModelos_init_seq0(eventobject) {
    limpiarControles.call(this);
};

function p2kwiet19724036342554_segmentClases_onRowClick_seq0(eventobject, sectionNumber, rowNumber) {
    onSwipeCallBack.call(this, rowNumber);
};

function p2kwiet19724036342554_segmentClases_onswipe_seq0(seguiWidget, sectionIndex, rowIndex) {
    onSwipeCallBack.call(this, rowIndex);
};

function p2kwiet19724036342554_segmentList_onRowClick_seq0(eventobject, sectionNumber, rowNumber) {
    cotizadorFinanciamiento.show();
    /* 
cotizadorFinanciamiento_init.call(this);

 */
};

function p2kwiet19724036342569_segmentList_onRowClick_seq0(eventobject, sectionNumber, rowNumber) {
    establecerPlanSeleccionado.call(this);
    cotizadorCalculo.show();
};

function p2kwiet19724036342582_gpsDistribuidor_postshow_seq0(eventobject) {
    gpsValoresOpcionesNav.call(this);
};

function p2kwiet19724036342582_smgtoOpciones_onRowClick_seq0(eventobject, sectionNumber, rowNumber) {
    gpsDistribuidorOpcionesNav.call(this, eventobject, sectionNumber, rowNumber);
};

function p2kwiet19724036342605_smgtoOpciones_onRowClick_seq0(eventobject, sectionNumber, rowNumber) {
    gpsVerPopUpMenu.call(this);
};

function p2kwiet19724036342605_lstEstados_onSelection_seq0(eventobject) {
    gpsObtenerDistribuidorPorEstado.call(this);
};

function p2kwiet19724036342627_smgtoOpciones_onRowClick_seq0(eventobject, sectionNumber, rowNumber) {
    gpsVerPopUpMenu.call(this);
};

function p2kwiet19724036342646_smgtoOpciones_onRowClick_seq0(eventobject, sectionNumber, rowNumber) {
    infOpcionesNav.call(this);
};

function p2kwiet19724036342656_infUbicacion_init_seq0(eventobject) {
    infUbicacionCheckValor.call(this);
};

function p2kwiet19724036342656_checkUbicacion_onSelection_seq0(eventobject) {
    infGpsVisible.call(this);
};

function p2kwiet19724036342661_inicio_init_seq0(eventobject) {
    inicioSlider.call(this);
};

function p2kwiet19724036342676_btnRegister_onClick_seq0(eventobject) {
    loginRegistroNombre.show();
};

function p2kwiet19724036342676_btnLogin_onClick_seq0(eventobject) {
    validateUser.call(this);
};

function p2kwiet19724036342676_lblOlvidoContrasena_onTouchEnd_seq0(eventobject, x, y, contextInfo) {
    loginRecuperarContrasena.show();
};

function p2kwiet19724036342720_txtPassword_onTextChange_seq0(eventobject, changedtext) {
    checkValidacion.call(this);
};

function p2kwiet19724036342720_btnLogin_onClick_seq0(eventobject) {
    cambiarContrasenia.call(this);
};

function p2kwiet19724036342720_txtPasswordconfir_onTextChange_seq0(eventobject, changedtext) {
    checkValidacion.call(this);
};

function p2kwiet19724036342817_btnEnviar_onClick_seq0(eventobject) {};

function p2kwiet19724036342817_numberPhone_onTouchEnd_seq0(eventobject, x, y, contextInfo) {
    try {
        kony.phone.dial(loginLoyalty.numberPhone.text);
    } catch (err) {
        alert("Error en la llamada:" + err);
    }
};

function p2kwiet19724036342829_btnLogin_onClick_seq0(eventobject) {
    recuperarContrasena.call(this);
};

function p2kwiet19724036342873_txtcontrasenia_onTextChange_seq0(eventobject, changedtext) {
    checkContraseniaRegistroEmpresa.call(this);
};

function p2kwiet19724036342873_txtrepetcontrasena_onTextChange_seq0(eventobject, changedtext) {
    checkContraseniaRegistroEmpresa.call(this);
};

function p2kwiet19724036342886_btnLogin_onClick_seq0(eventobject) {
    validarRegistroNuevoUsuario.call(this);
};

function p2kwiet19724036342895_scrollTerminos_onScrollEnd_seq0(eventobject) {
    activarBtonAceptar.call(this, eventobject);
};

function p2kwiet19724036342895_button46710320987084_onClick_seq0(eventobject) {
    login.show();
};

function p2kwiet19724036342942_btnIr_onClick_seq0(eventobject) {
    saldosMovimientosRango.call(this);
};

function p2kwiet19724036342942_btnDescargarPdf_onClick_seq0(eventobject) {
    saldosMovimientosVerCorreo.call(this);
};

function p2kwiet19724036342942_radioButtonPaginado_onSelection_seq0(eventobject) {
    saldosMovimientosSeleccionarPagina.call(this);
};

function p2kwiet19724036342942_btnUltimo_onClick_seq0(eventobject) {
    saldosMovimientosUltimo.call(this);
};

function p2kwiet19724036342942_btnSiguiente_onClick_seq0(eventobject) {
    saldosMovimientosSiguiente.call(this);
};

function p2kwiet19724036342942_btnPrimero_onClick_seq0(eventobject) {
    saldosMovimientosPrimero.call(this);
};

function p2kwiet19724036342942_btnAnterior_onClick_seq0(eventobject) {
    saldosMovimientosAnterior.call(this);
};

function p2kwiet19724036342942_dataGridContenido_onRowSelected_seq0(eventobject) {
    verSaldosMovimientosDetalle.call(this);
};

function p2kwiet19724036343050_cotizadorTerminos_init_seq0(eventobject, neworientation) {
    mostrarTerminosCondiciones.call(this);
};

function p2kwiet19724036343050_btnAceptar_onClick_seq0(eventobject) {
    cerrarTerminos.call(this);
};

function p2kwiet19724036343058_smgtoOpciones_onRowClick_seq0(eventobject, sectionNumber, rowNumber) {
    gpsPopUpOpcionesNav.call(this);
};

function p2kwiet19724036343106_btnCerrar_onClick_seq0(eventobject) {
    saldosMovimientosDetalleCerrar.call(this);
};

function p2kwiet19724036343130_btnAtras_onClick_seq0(eventobject) {
    infAtras.call(this);
};

function p2kwiet19724036343130_btnInformacion_onClick_seq0(eventobject) {
    infVerInformacion.call(this);
};

function p2kwiet19724036343190_btnInicio_onClick_seq0(eventobject) {
    menuVerInicio.call(this);
};

function p2kwiet19724036343190_btnCotizador_onClick_seq0(eventobject) {
    menuVerLogin.call(this);
};

function p2kwiet19724036343190_btnLoginMenu_onClick_seq0(eventobject) {
    cotizadorModelos.show();
    cotizadorModelos_init.call(this);
};

function p2kwiet19724036343190_btnGps_onClick_seq0(eventobject) {
    menuVerGpsDistribuidor.call(this);
};

function p2kwiet19724036343190_btnContacto_onClick_seq0(eventobject) {
    menuVerContacto.call(this);
};

function p2kwiet19724036343190_btnParquimetro_onClick_seq0(eventobject) {
    menuVerParquimetro.call(this);
};