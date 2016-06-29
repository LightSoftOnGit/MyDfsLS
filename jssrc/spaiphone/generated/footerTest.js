function initializefooterTest() {
    FlexContainer099041029e4bc45 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "60dp",
        "id": "FlexContainer099041029e4bc45",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "slFbox"
    }, {}, {});
    FlexContainer099041029e4bc45.setDefaultUnit(kony.flex.DP);
    var FlexContainerBackground = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "FlexContainerBackground",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    FlexContainerBackground.setDefaultUnit(kony.flex.DP);
    var Image0b40b790e00454f = new kony.ui.Image2({
        "height": "100%",
        "id": "Image0b40b790e00454f",
        "isVisible": true,
        "left": "0dp",
        "src": "distfooter.png",
        "top": "0dp",
        "width": "100%"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    FlexContainerBackground.add(Image0b40b790e00454f);
    var FlexContainerImagenCentral = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "50dp",
        "id": "FlexContainerImagenCentral",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "150dp",
        "skin": "slFbox",
        "top": "4dp",
        "width": "17.33%"
    }, {}, {});
    FlexContainerImagenCentral.setDefaultUnit(kony.flex.DP);
    var Image06a1c59a0f9554d = new kony.ui.Image2({
        "centerX": "50%",
        "height": "100%",
        "id": "Image06a1c59a0f9554d",
        "isVisible": true,
        "left": "0dp",
        "src": "distdfsfooter.png",
        "top": "0dp",
        "width": "100%"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    FlexContainerImagenCentral.add(Image06a1c59a0f9554d);
    FlexContainer099041029e4bc45.add(FlexContainerBackground, FlexContainerImagenCentral);
}