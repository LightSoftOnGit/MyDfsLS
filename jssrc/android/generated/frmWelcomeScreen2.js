function addWidgetsfrmWelcomeScreen2() {
    frmWelcomeScreen2.setDefaultUnit(kony.flex.DP);
    var WelcomeScreen = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": 0,
        "clipBounds": true,
        "height": "100%",
        "id": "WelcomeScreen",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "right": 0,
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%"
    }, {}, {});
    WelcomeScreen.setDefaultUnit(kony.flex.DP);
    var Background = new kony.ui.Image2({
        "bottom": "0px",
        "height": "100%",
        "id": "Background",
        "isVisible": true,
        "left": "0px",
        "right": "0px",
        "src": "distbacksplash.png",
        "top": "0px",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var LogoDaimler = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "85dp",
        "id": "LogoDaimler",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "72dp",
        "skin": "slFbox",
        "top": "60dp",
        "width": "61.50%",
        "zIndex": 1
    }, {}, {});
    LogoDaimler.setDefaultUnit(kony.flex.DP);
    var Image06b9ccad354fc43 = new kony.ui.Image2({
        "height": "100%",
        "id": "Image06b9ccad354fc43",
        "isVisible": true,
        "left": "3dp",
        "src": "distlogodaimlersplash.png",
        "top": "-4dp",
        "width": "100%"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    LogoDaimler.add(Image06b9ccad354fc43);
    var Label042b1fa0375ca49 = new kony.ui.Label({
        "id": "Label042b1fa0375ca49",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslLabel00e8ec3389cf74c",
        "text": "Daimler Financial Services",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "125dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var infobutton = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "6.61%",
        "id": "infobutton",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "onTouchStart": AS_FlexContainer_1694d1ed13094a1494fbbb74710fbb20,
        "right": 8,
        "top": "8dp",
        "width": "10.19%",
        "zIndex": 1
    }, {}, {});
    infobutton.setDefaultUnit(kony.flex.DP);
    var Image056417fcb897a4e = new kony.ui.Image2({
        "height": "100%",
        "id": "Image056417fcb897a4e",
        "isVisible": true,
        "left": "0dp",
        "onTouchStart": AS_Image_4c4ef53aa4354bba90fc9629f59b4200,
        "src": "disticonoinformacion.png",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    infobutton.add(Image056417fcb897a4e);
    WelcomeScreen.add(Background, LogoDaimler, Label042b1fa0375ca49, infobutton);
    frmWelcomeScreen2.add(WelcomeScreen);
};

function frmWelcomeScreen2Globals() {
    frmWelcomeScreen2 = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmWelcomeScreen2,
        "allowHorizontalBounce": false,
        "bounces": false,
        "enableScrolling": false,
        "enabledForIdleTimeout": false,
        "footers": [FlexContainer099041029e4bc45],
        "id": "frmWelcomeScreen2",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "postShow": AS_Form_06499025be3742aebfc941693e1f23b2,
        "skin": "flexContainerTerminos"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "footerOverlap": false,
        "headerOverlap": false,
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
        "onDeviceBack": AS_Form_a9721a32ad19421084b49440c912c402,
        "retainScrollPosition": false,
        "titleBar": true,
        "titleBarSkin": "slTitleBar",
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE
    });
    frmWelcomeScreen2.info = {
        "notesId": "9e48e9bbfdb4450f963823a0be5e6cf6",
        "kuid": "9e48e9bbfdb4450f963823a0be5e6cf6"
    };
};