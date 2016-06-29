function initializesaldosPaginado() {
    FlexContainer013472758338b4f = new kony.ui.FlexContainer({
        "centerX": "50%",
        "centerY": "50%",
        "clipBounds": true,
        "height": "100%",
        "id": "FlexContainer013472758338b4f",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "width": "8%",
        "zIndex": 1
    }, {}, {});
    FlexContainer013472758338b4f.setDefaultUnit(kony.flex.DP);
    var lblIndice = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "50%",
        "id": "lblIndice",
        "isVisible": true,
        "skin": "saldosLabel",
        "text": "1",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    FlexContainer013472758338b4f.add(lblIndice);
}