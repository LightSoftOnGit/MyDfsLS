function initializebuttonCalculadoraTemplate() {
    FlexContainer03016e2173a0b42 = new kony.ui.FlexContainer({
        "centerX": "50%",
        "centerY": "50.0%",
        "clipBounds": true,
        "height": "100%",
        "id": "FlexContainer03016e2173a0b42",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "width": "33%",
        "zIndex": 1
    }, {}, {});
    FlexContainer03016e2173a0b42.setDefaultUnit(kony.flex.DP);
    var lblClase = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "50.0%",
        "height": "100.0%",
        "id": "lblClase",
        "isVisible": true,
        "text": "Label",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var lblId = new kony.ui.Label({
        "bottom": "0%",
        "centerX": "50%",
        "id": "lblId",
        "isVisible": false,
        "text": "Label",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    FlexContainer03016e2173a0b42.add(lblClase, lblId);
}