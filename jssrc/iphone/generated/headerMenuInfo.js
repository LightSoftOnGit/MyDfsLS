function initializeheaderMenuInfo() {
    CopyFlexContainer0b3e7bf80ae8148 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "10%",
        "id": "CopyFlexContainer0b3e7bf80ae8148",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "flexContainerBlackExtra"
    }, {}, {});
    CopyFlexContainer0b3e7bf80ae8148.setDefaultUnit(kony.flex.DP);
    var flexContainerHeader = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flexContainerHeader",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0",
        "skin": "CopyslFbox0dd7b4522112c44",
        "top": "0",
        "width": "100%"
    }, {}, {});
    flexContainerHeader.setDefaultUnit(kony.flex.DP);
    var flexHeader = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flexHeader",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "top": "0dp",
        "width": "100%",
        "zIndex": 2
    }, {}, {});
    flexHeader.setDefaultUnit(kony.flex.DP);
    var btnMenuInfo = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "btnMenuInfo",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "onTouchEnd": AS_FlexContainer_f8bbf748927f4b0faa33810f0acceadf,
        "skin": "slFbox",
        "top": "0dp",
        "width": "15%",
        "zIndex": 1
    }, {}, {});
    btnMenuInfo.setDefaultUnit(kony.flex.DP);
    var btnDesMenu = new kony.ui.Button({
        "centerX": "50%",
        "height": "40%",
        "id": "btnDesMenu",
        "isVisible": true,
        "left": "4.50%",
        "skin": "btnMenu",
        "top": "25%",
        "width": "50%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    btnMenuInfo.add(btnDesMenu);
    var FlexContainer097c370fc3eec4d = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "FlexContainer097c370fc3eec4d",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "70.67%",
        "zIndex": 1
    }, {}, {});
    FlexContainer097c370fc3eec4d.setDefaultUnit(kony.flex.DP);
    var imgLogo = new kony.ui.Image2({
        "centerX": "50%",
        "height": "80%",
        "id": "imgLogo",
        "isVisible": true,
        "left": "0%",
        "src": "distdaimlerlogoheader.png",
        "top": "5dp",
        "width": "60%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    FlexContainer097c370fc3eec4d.add(imgLogo);
    flexHeader.add(btnMenuInfo, FlexContainer097c370fc3eec4d);
    var Background = new kony.ui.Image2({
        "height": "100%",
        "id": "Background",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslImage085db2298b13a4a",
        "src": "distheader.png",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flexContainerHeader.add(flexHeader, Background);
    CopyFlexContainer0b3e7bf80ae8148.add(flexContainerHeader);
}