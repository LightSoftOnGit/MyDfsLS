function initializesaldosContenido() {
    flexContainerContenido = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "25%",
        "id": "flexContainerContenido",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "45%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flexContainerContenido.setDefaultUnit(kony.flex.DP);
    var colFecha = new kony.ui.Label({
        "centerY": "50%",
        "height": "100%",
        "id": "colFecha",
        "isVisible": true,
        "left": "0%",
        "skin": "saldosLabel",
        "text": "FECHA",
        "width": "30%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var colDescripcion = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "50%",
        "height": "100%",
        "id": "colDescripcion",
        "isVisible": true,
        "skin": "saldosLabel",
        "text": "DESCRIPCION",
        "width": "40%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var colTransaccion = new kony.ui.Label({
        "centerY": "50%",
        "height": "100%",
        "id": "colTransaccion",
        "isVisible": true,
        "right": "0%",
        "skin": "saldosLabel",
        "text": "ULTIMAS TRANSACCIONES",
        "width": "30%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var colRenta = new kony.ui.Label({
        "centerY": "50.0%",
        "height": "100%",
        "id": "colRenta",
        "isVisible": false,
        "right": "0%",
        "text": "FECHA",
        "width": "5%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var colCoA = new kony.ui.Label({
        "centerY": "50.0%",
        "height": "100%",
        "id": "colCoA",
        "isVisible": false,
        "right": "0%",
        "text": "FECHA",
        "width": "5%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var colIdPago = new kony.ui.Label({
        "centerY": "50.0%",
        "height": "100%",
        "id": "colIdPago",
        "isVisible": false,
        "right": "0%",
        "text": "FECHA",
        "width": "5%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    flexContainerContenido.add(colFecha, colDescripcion, colTransaccion, colRenta, colCoA, colIdPago);
}