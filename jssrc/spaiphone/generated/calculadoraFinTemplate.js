function initializecalculadoraFinTemplate() {
    CopyFlexContainer045dabc78633841 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "50dp",
        "id": "CopyFlexContainer045dabc78633841",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "zIndex": 1
    }, {}, {});
    CopyFlexContainer045dabc78633841.setDefaultUnit(kony.flex.DP);
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
        "renderAsAnchor": false,
        "textCopyable": false
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
    }, {});
    CopyFlexContainer045dabc78633841.add(lblCalculadoraItem, imgIcon);
}