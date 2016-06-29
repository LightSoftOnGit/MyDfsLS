function initializefacturacionElectronicaTemplate() {
    facturacionElectronicaContainer = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "60dp",
        "id": "facturacionElectronicaContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "zIndex": 1
    }, {}, {});
    facturacionElectronicaContainer.setDefaultUnit(kony.flex.DP);
    var lblFacturacion = new kony.ui.Label({
        "centerX": "15%",
        "centerY": "50%",
        "id": "lblFacturacion",
        "isVisible": true,
        "left": "69dp",
        "text": "Label",
        "top": "0%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var switchTop = new kony.ui.Switch({
        "centerY": "50%",
        "height": "60%",
        "id": "switchTop",
        "isVisible": true,
        "leftSideText": "ON",
        "right": "0%",
        "rightSideText": "OFF",
        "top": "7%",
        "width": "20%",
        "zIndex": 1
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    facturacionElectronicaContainer.add(lblFacturacion, switchTop);
}