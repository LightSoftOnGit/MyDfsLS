function initializecotizadorCotizacionTemplate() {
    FlexContainer0cb4bee6f7d0d4d = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "20%",
        "id": "FlexContainer0cb4bee6f7d0d4d",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "zIndex": 1
    }, {}, {});
    FlexContainer0cb4bee6f7d0d4d.setDefaultUnit(kony.flex.DP);
    var lblContenido = new kony.ui.Label({
        "centerX": "50.0%",
        "centerY": "50.0%",
        "id": "lblContenido",
        "isVisible": true,
        "text": "Label",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    FlexContainer0cb4bee6f7d0d4d.add(lblContenido);
}