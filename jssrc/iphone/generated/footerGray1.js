function initializefooterGray1() {
    FlexContainerFoot1 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "60dp",
        "id": "FlexContainerFoot1",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "zIndex": 1
    }, {}, {});
    FlexContainerFoot1.setDefaultUnit(kony.flex.DP);
    var btnHome = new kony.ui.Button({
        "height": "80%",
        "id": "btnHome",
        "isVisible": true,
        "left": "0.50%",
        "top": "10%",
        "width": "16%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    var btnCalc = new kony.ui.Button({
        "height": "80%",
        "id": "btnCalc",
        "isVisible": true,
        "left": "17%",
        "onClick": p2kwiet19724036343161_btnCalc_onClick_seq0,
        "top": "10%",
        "width": "16%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    var btnLogin = new kony.ui.Button({
        "height": "80%",
        "id": "btnLogin",
        "isVisible": true,
        "left": "33.50%",
        "onClick": p2kwiet19724036343161_btnLogin_onClick_seq0,
        "top": "10%",
        "width": "16%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    var btnLocation = new kony.ui.Button({
        "height": "80%",
        "id": "btnLocation",
        "isVisible": true,
        "left": "50%",
        "onClick": p2kwiet19724036343161_btnLocation_onClick_seq0,
        "top": "10%",
        "width": "16%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    var btnContact = new kony.ui.Button({
        "height": "80%",
        "id": "btnContact",
        "isVisible": true,
        "left": "66%",
        "top": "10%",
        "width": "16%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    var btnDfs = new kony.ui.Button({
        "height": "80%",
        "id": "btnDfs",
        "isVisible": true,
        "left": "84%",
        "top": "10%",
        "width": "15%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    FlexContainerFoot1.add(btnHome, btnCalc, btnLogin, btnLocation, btnContact, btnDfs);
}