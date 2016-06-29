function initializemenuTemplate() {
    flexMenuTemplate = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "58dp",
        "id": "flexMenuTemplate",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "zIndex": 1
    }, {}, {});
    flexMenuTemplate.setDefaultUnit(kony.flex.DP);
    var imgIcon = new kony.ui.Image2({
        "height": "80%",
        "id": "imgIcon",
        "isVisible": true,
        "left": "3%",
        "src": "option1.png",
        "top": "0dp",
        "width": "20%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblMenuItem = new kony.ui.Label({
        "height": "50dp",
        "id": "lblMenuItem",
        "isVisible": true,
        "left": "25%",
        "right": "5dp",
        "text": "INICIO",
        "top": "0dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var segBtn = new kony.ui.Button({
        "height": "100%",
        "id": "segBtn",
        "isVisible": true,
        "left": "0dp",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flexMenuTemplate.add(imgIcon, lblMenuItem, segBtn);
}