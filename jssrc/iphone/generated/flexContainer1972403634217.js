function initializeflexContainer1972403634217() {
    flexContainer1972403634217 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "100%",
        "id": "flexContainer1972403634217",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flexContainer1972403634217.setDefaultUnit(kony.flex.DP);
    var segmentImage = new kony.ui.Image2({
        "height": "100%",
        "id": "segmentImage",
        "isVisible": true,
        "left": "0px",
        "src": "foto_promociones_inicio.png",
        "top": "-2.71%",
        "width": "100%",
        "zIndex": 1
    }, {
        "containerWeight": 100,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
    });
    flexContainer1972403634217.add(segmentImage);
}