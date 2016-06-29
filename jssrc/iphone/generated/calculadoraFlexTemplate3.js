function initializecalculadoraFlexTemplate3() {
    CopyflexContainerCalculadoraFlexTemplate03033d619f67840 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "50dp",
        "id": "CopyflexContainerCalculadoraFlexTemplate03033d619f67840",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "zIndex": 1
    }, {}, {});
    CopyflexContainerCalculadoraFlexTemplate03033d619f67840.setDefaultUnit(kony.flex.DP);
    var lblCalculadoraItem = new kony.ui.Label({
        "id": "lblCalculadoraItem",
        "isVisible": true,
        "left": "0dp",
        "text": "A 180 STYLE",
        "top": "0dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [5, 5, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var imgIcon = new kony.ui.Image2({
        "height": "35%",
        "id": "imgIcon",
        "isVisible": true,
        "right": "5%",
        "src": "flecha.png",
        "top": "35%",
        "width": "10%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
    });
    CopyflexContainerCalculadoraFlexTemplate03033d619f67840.add(lblCalculadoraItem, imgIcon);
}