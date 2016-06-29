function initializeinformacionTemplate() {
    FlexContainer034063ca903574b = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "focusSkin": "focusNewFlexContainerBlack",
        "height": "20%",
        "id": "FlexContainer034063ca903574b",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "newFlexContainerBlack"
    }, {}, {});
    FlexContainer034063ca903574b.setDefaultUnit(kony.flex.DP);
    var Label01faf6da6323344 = new kony.ui.Label({
        "centerY": "50%",
        "height": "50%",
        "id": "Label01faf6da6323344",
        "isVisible": true,
        "left": "0dp",
        "skin": "lblInformacion",
        "text": "Label",
        "top": "92dp",
        "width": "100%",
        "zIndex": 2
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [5, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var Button00498a06e43c54e = new kony.ui.Button({
        "centerY": "50%",
        "focusSkin": "focusBlackButton",
        "height": "20%",
        "id": "Button00498a06e43c54e",
        "isVisible": true,
        "left": "90%",
        "right": "10%",
        "skin": "newBtnWhite",
        "top": "21%",
        "width": "3%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    FlexContainer034063ca903574b.add(Label01faf6da6323344, Button00498a06e43c54e);
}