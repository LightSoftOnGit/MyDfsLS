function initializepromocionesTemplate() {
    FlexContainer0aea82f7aecae44 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "FlexContainer0aea82f7aecae44",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "slFbox"
    }, {}, {});
    FlexContainer0aea82f7aecae44.setDefaultUnit(kony.flex.DP);
    var Image0bd968c8c9edd41 = new kony.ui.Image2({
        "height": "92%",
        "id": "Image0bd968c8c9edd41",
        "isVisible": true,
        "left": "0dp",
        "src": "distfotoinicio.png",
        "top": "0dp",
        "width": "100%"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var FlexContainer01f578faceaf84d = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "7.50%",
        "id": "FlexContainer01f578faceaf84d",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "88%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    FlexContainer01f578faceaf84d.setDefaultUnit(kony.flex.DP);
    var lblPromocion = new kony.ui.Label({
        "centerY": "50%",
        "height": "100%",
        "id": "lblPromocion",
        "isVisible": true,
        "left": "0dp",
        "skin": "labelPromociones",
        "text": "Promocion 1",
        "top": "0dp",
        "width": "100%",
        "zIndex": 3
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [5, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var btnPromocion = new kony.ui.Button({
        "focusSkin": "focusBlackButton",
        "height": "100%",
        "id": "btnPromocion",
        "isVisible": true,
        "left": "0dp",
        "skin": "newBtnBlack",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var imgFlecha = new kony.ui.Image2({
        "centerY": "50%",
        "height": "40%",
        "id": "imgFlecha",
        "isVisible": true,
        "right": "5%",
        "src": "distflechaup.png",
        "top": "0dp",
        "width": "10%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    FlexContainer01f578faceaf84d.add(lblPromocion, btnPromocion, imgFlecha);
    FlexContainer0aea82f7aecae44.add(Image0bd968c8c9edd41, FlexContainer01f578faceaf84d);
}