function initializeheaderMenu() {
    CopyFlexContainer09da0f5890f1a44 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "15%",
        "id": "CopyFlexContainer09da0f5890f1a44",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "flexContainerBlackExtra"
    }, {}, {});
    CopyFlexContainer09da0f5890f1a44.setDefaultUnit(kony.flex.DP);
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
        "onTouchEnd": AS_FlexContainer_979de21bbad94d8082f1fafde1f0b21e,
        "skin": "slFbox",
        "top": "0dp",
        "width": "15%",
        "zIndex": 1
    }, {}, {});
    btnMenuInfo.setDefaultUnit(kony.flex.DP);
    var btnMenu = new kony.ui.Button({
        "centerX": "50%",
        "height": "40%",
        "id": "btnMenu",
        "isVisible": true,
        "left": "4.50%",
        "top": "25%",
        "width": "50%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    btnMenuInfo.add(btnMenu);
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
    var FlexContainer04ec52b4e49ff4f = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerY": "50%",
        "clipBounds": true,
        "height": "100%",
        "id": "FlexContainer04ec52b4e49ff4f",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "onTouchEnd": AS_FlexContainer_72fc97e75b964288a54208eb418de7aa,
        "skin": "slFbox",
        "top": "0dp",
        "width": "15%",
        "zIndex": 1
    }, {}, {});
    FlexContainer04ec52b4e49ff4f.setDefaultUnit(kony.flex.DP);
    var imgInfo = new kony.ui.Image2({
        "centerX": "50%",
        "height": "30%",
        "id": "imgInfo",
        "isVisible": true,
        "src": "disticonoinformacion.png",
        "top": "35%",
        "width": "50%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    FlexContainer04ec52b4e49ff4f.add(imgInfo);
    flexHeader.add(btnMenuInfo, FlexContainer097c370fc3eec4d, FlexContainer04ec52b4e49ff4f);
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
    CopyFlexContainer09da0f5890f1a44.add(flexContainerHeader);
}