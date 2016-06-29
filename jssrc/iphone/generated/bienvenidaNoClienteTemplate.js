function initializebienvenidaNoClienteTemplate() {
    templateContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "templateContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "newFlexContainerLightGray"
    }, {}, {});
    templateContainer.setDefaultUnit(kony.flex.DP);
    var lblNoCliente = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "50%",
        "height": "100%",
        "id": "lblNoCliente",
        "isVisible": true,
        "left": "0dp",
        "skin": "lblNoCliente",
        "text": "No Cliente: 000000",
        "top": "0dp",
        "width": "100%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    templateContainer.add(lblNoCliente);
}