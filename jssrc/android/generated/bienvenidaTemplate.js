function initializebienvenidaTemplate() {
    flexContainerPagos = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "16%",
        "id": "flexContainerPagos",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "flexContainerBienvenida",
        "top": "3%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flexContainerPagos.setDefaultUnit(kony.flex.DP);
    var lblPagosEnLinea = new kony.ui.Button({
        "centerX": "50%",
        "centerY": "50%",
        "focusSkin": "skinLblBienvenidaFocus",
        "height": "100%",
        "id": "lblPagosEnLinea",
        "isVisible": false,
        "left": "70%",
        "skin": "skinlblBienvenida",
        "text": "PAGOS EN LINEA",
        "top": "0%",
        "width": "100%",
        "zIndex": 2
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "displayText": true,
        "padding": [9, 2, 0, 1],
        "paddingInPixel": false
    }, {});
    var imgFlechaPagos = new kony.ui.Image2({
        "centerY": "50%",
        "height": "40%",
        "id": "imgFlechaPagos",
        "isVisible": true,
        "left": "85%",
        "src": "flecha.png",
        "width": "10%",
        "zIndex": 2
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var Label0425032fbc16b49 = new kony.ui.Label({
        "centerY": "50%",
        "height": "100%",
        "id": "Label0425032fbc16b49",
        "isVisible": true,
        "left": "9%",
        "skin": "lblBienvenida",
        "text": "Label",
        "top": "38%",
        "width": "100%",
        "zIndex": 2
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flexContainerPagos.add(lblPagosEnLinea, imgFlechaPagos, Label0425032fbc16b49);
}