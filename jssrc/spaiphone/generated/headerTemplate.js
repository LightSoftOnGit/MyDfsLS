function initializeheaderTemplate() {
    flexContainerHeader = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "100%",
        "id": "flexContainerHeader",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "zIndex": 1
    }, {}, {});
    flexContainerHeader.setDefaultUnit(kony.flex.DP);
    var flexHeader = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "9%",
        "id": "flexHeader",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flexHeader.setDefaultUnit(kony.flex.DP);
    var imgMenu = new kony.ui.Image2({
        "height": "40%",
        "id": "imgMenu",
        "isVisible": true,
        "left": "3%",
        "src": "menuhamburguesa.png",
        "top": "20%",
        "width": "10%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var btnMenu = new kony.ui.Button({
        "height": "50dp",
        "id": "btnMenu",
        "isVisible": true,
        "left": "0%",
        "top": "0%",
        "width": "50dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var imgLogo = new kony.ui.Image2({
        "centerX": "50%",
        "height": "65%",
        "id": "imgLogo",
        "isVisible": true,
        "left": "0%",
        "src": "mymbflogo.png",
        "top": "10dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var imgInfo = new kony.ui.Image2({
        "height": "40%",
        "id": "imgInfo",
        "isVisible": true,
        "right": "2%",
        "src": "iconoinformacion.png",
        "top": "20%",
        "width": "10%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flexHeader.add(imgMenu, btnMenu, imgLogo, imgInfo);
    flexContainerHeader.add(flexHeader);
}