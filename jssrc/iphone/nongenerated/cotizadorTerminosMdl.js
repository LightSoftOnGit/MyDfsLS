function mostrarTerminosCondiciones() {
    var leyendaLegal = kony.store.getItem('cotizadorTerminos').toString();
    leyendaLegal = leyendaLegal.replaceAll("&lt;/style>", "");
    leyendaLegal = leyendaLegal.replaceAll('&lt;style isBold="true" pdfFontName="Helvetica-Bold" size="13.5">', '');
    //cotizadorTerminos.rtextTerminos.text=leyendaLegal;
    cotizadorTerminosCondiciones.RichText05efd7036dac146.text = leyendaLegal;
    cotizadorTerminosCondiciones.forceLayout();
}

function ocultarTerminosCondiciones() {
    //cambiar por frmShow
    //cotizadorCotizacion2.show();
    showFrm(cotizadorCotizacion2);
}