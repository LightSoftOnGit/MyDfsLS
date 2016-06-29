function initializecalculadoraFlexTemplate2() {
    CopyflexContainerCalculadoraFlexTemplate097ea1d399fb847 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "50dp",
        "id": "CopyflexContainerCalculadoraFlexTemplate097ea1d399fb847",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "zIndex": 1
    }, {}, {});
    CopyflexContainerCalculadoraFlexTemplate097ea1d399fb847.setDefaultUnit(kony.flex.DP);
    var lblContent = new kony.ui.Label({
        "id": "lblContent",
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
    var lblId = new kony.ui.Label({
        "height": "26dp",
        "id": "lblId",
        "isVisible": false,
        "left": "124dp",
        "text": "Label",
        "top": "8dp",
        "width": "100dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var lblPlanAlternativo = new kony.ui.Label({
        "height": "26dp",
        "id": "lblPlanAlternativo",
        "isVisible": false,
        "left": "237dp",
        "text": "Label",
        "top": "8dp",
        "width": "100dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    CopyflexContainerCalculadoraFlexTemplate097ea1d399fb847.add(lblContent, imgIcon, lblId, lblPlanAlternativo);
}