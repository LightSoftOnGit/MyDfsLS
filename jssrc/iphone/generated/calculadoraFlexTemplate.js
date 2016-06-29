function initializecalculadoraFlexTemplate() {
    CopyFlexContainer02464457a3a964c = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "50dp",
        "id": "CopyFlexContainer02464457a3a964c",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "zIndex": 1
    }, {}, {});
    CopyFlexContainer02464457a3a964c.setDefaultUnit(kony.flex.DP);
    var lblContent = new kony.ui.Label({
        "id": "lblContent",
        "isVisible": true,
        "left": "0dp",
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
        "left": "112dp",
        "text": "Label",
        "top": "4dp",
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
    var lblIdPlan = new kony.ui.Label({
        "height": "26dp",
        "id": "lblIdPlan",
        "isVisible": false,
        "left": "215dp",
        "text": "Label",
        "top": "3dp",
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
    var lblEsPlanAlternativo = new kony.ui.Label({
        "height": "26dp",
        "id": "lblEsPlanAlternativo",
        "isVisible": false,
        "left": "230dp",
        "text": "Label",
        "top": "30dp",
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
    var lblDescripcionPlan = new kony.ui.Label({
        "height": "26dp",
        "id": "lblDescripcionPlan",
        "isVisible": false,
        "left": "118dp",
        "text": "Label",
        "top": "33dp",
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
    CopyFlexContainer02464457a3a964c.add(lblContent, imgIcon, lblId, lblIdPlan, lblEsPlanAlternativo, lblDescripcionPlan);
}