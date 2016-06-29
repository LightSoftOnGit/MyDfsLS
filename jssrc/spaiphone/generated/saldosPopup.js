function initializesaldosPopup() {
    FlexContainer0448f4f69aa7749 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "100%",
        "id": "FlexContainer0448f4f69aa7749",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "zIndex": 1
    }, {}, {});
    FlexContainer0448f4f69aa7749.setDefaultUnit(kony.flex.DP);
    var Image0e493200375904c = new kony.ui.Image2({
        "height": "100%",
        "id": "Image0e493200375904c",
        "isVisible": true,
        "left": "0dp",
        "src": "ventanapopup.png",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var Button0a6fad54cab9348 = new kony.ui.Button({
        "height": "4%",
        "id": "Button0a6fad54cab9348",
        "isVisible": true,
        "left": "3%",
        "top": "27.50%",
        "width": "8%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    FlexContainer0448f4f69aa7749.add(Image0e493200375904c, Button0a6fad54cab9348);
}