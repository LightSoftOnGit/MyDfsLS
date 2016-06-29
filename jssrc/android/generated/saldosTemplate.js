function initializesaldosTemplate() {
    FlexContainer06f1673fb42b04f = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "25%",
        "id": "FlexContainer06f1673fb42b04f",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "zIndex": 1
    }, {}, {});
    FlexContainer06f1673fb42b04f.setDefaultUnit(kony.flex.DP);
    var segmentLeft = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "100%",
        "id": "segmentLeft",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "top": "0dp",
        "width": "33.33%",
        "zIndex": 1
    }, {}, {});
    segmentLeft.setDefaultUnit(kony.flex.DP);
    var Label0e43b03957c054f = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "50%",
        "id": "Label0e43b03957c054f",
        "isVisible": true,
        "left": "0dp",
        "text": "01/01/16",
        "top": "0dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    segmentLeft.add(Label0e43b03957c054f);
    var segmentMiddle = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "100%",
        "id": "segmentMiddle",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "33.33%",
        "top": "0dp",
        "width": "33.33%",
        "zIndex": 1
    }, {}, {});
    segmentMiddle.setDefaultUnit(kony.flex.DP);
    var CopyLabel0ea7ad6a2451542 = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "50%",
        "id": "CopyLabel0ea7ad6a2451542",
        "isVisible": true,
        "left": "0dp",
        "text": "01/01/16",
        "top": "0dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    segmentMiddle.add(CopyLabel0ea7ad6a2451542);
    var segmentRight = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "100%",
        "id": "segmentRight",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "66.66%",
        "right": "0",
        "top": "0dp",
        "width": "33.33%",
        "zIndex": 1
    }, {}, {});
    segmentRight.setDefaultUnit(kony.flex.DP);
    var CopyLabel0c35ee05b053742 = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "50%",
        "id": "CopyLabel0c35ee05b053742",
        "isVisible": true,
        "left": "0dp",
        "text": "01/01/16",
        "top": "0dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    segmentRight.add(CopyLabel0c35ee05b053742);
    FlexContainer06f1673fb42b04f.add(segmentLeft, segmentMiddle, segmentRight);
}