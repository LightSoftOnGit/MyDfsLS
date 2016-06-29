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
        "textCopyable": false
    });
    facturacionElectronicaContainer.add(lblFacturacion);
}