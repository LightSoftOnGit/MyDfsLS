function initializecontentTemplate() {
    flexContentTemplate = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "50dp",
        "id": "flexContentTemplate",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "zIndex": 1
    }, {}, {});
    flexContentTemplate.setDefaultUnit(kony.flex.DP);
    var lblContent = new kony.ui.Label({
        "height": "50dp",
        "id": "lblContent",
        "isVisible": true,
        "left": "2%",
        "right": "2%",
        "text": "Label",
        "top": "0dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [2, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    flexContentTemplate.add(lblContent);
}