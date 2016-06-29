function initializesegmentPromo() {
    flexContainer1866782415449725 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "100%",
        "id": "flexContainer1866782415449725",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0.0%",
        "top": "0.0%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flexContainer1866782415449725.setDefaultUnit(kony.flex.DP);
    var imageA = new kony.ui.Image2({
        "height": "90.0%",
        "id": "imageA",
        "isVisible": true,
        "left": "0.0%",
        "top": "0.0%",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var imageB = new kony.ui.Image2({
        "height": "40.0%",
        "id": "imageB",
        "isVisible": true,
        "left": "0.0%",
        "top": "80.0%",
        "width": "100%",
        "zIndex": 100
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flexContainer1866782415449725.add(imageA, imageB);
}