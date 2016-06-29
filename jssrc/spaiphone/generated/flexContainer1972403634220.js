function initializeflexContainer1972403634220() {
    flexContainer1972403634220 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "14.0%",
        "id": "flexContainer1972403634220",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flexContainer1972403634220.setDefaultUnit(kony.flex.DP);
    var flexContainer186678246918037 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "100%",
        "id": "flexContainer186678246918037",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0%",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flexContainer186678246918037.setDefaultUnit(kony.flex.DP);
    var lblOpcion = new kony.ui.Label({
        "height": "100.0%",
        "id": "lblOpcion",
        "isVisible": true,
        "left": "10.0%",
        "text": "Label",
        "top": "0%",
        "width": "70%",
        "zIndex": 1
    }, {
        "containerWeight": 0,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var imgOpcion = new kony.ui.Image2({
        "centerY": "50%",
        "height": "50.0%",
        "id": "imgOpcion",
        "isVisible": true,
        "left": "0dp",
        "top": "0dp",
        "width": "20%",
        "zIndex": 1
    }, {
        "containerWeight": 0,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    flexContainer186678246918037.add(lblOpcion, imgOpcion);
    flexContainer1972403634220.add(flexContainer186678246918037);
}