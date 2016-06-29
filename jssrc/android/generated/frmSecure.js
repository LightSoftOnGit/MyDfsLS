function addWidgetsfrmSecure() {
    frmSecure.setDefaultUnit(kony.flex.DP);
    var containerCalculator = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "100%",
        "id": "containerCalculator",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    containerCalculator.setDefaultUnit(kony.flex.DP);
    var titleSegment = new kony.ui.Label({
        "id": "titleSegment",
        "isVisible": true,
        "left": "3%",
        "text": "Seguros",
        "top": "3%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var content = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "90%",
        "id": "content",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0.00%",
        "top": "10%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    content.setDefaultUnit(kony.flex.DP);
    var imgTitle = new kony.ui.Image2({
        "height": "40%",
        "id": "imgTitle",
        "isVisible": true,
        "left": "5%",
        "src": "contacttitle.png",
        "top": "0%",
        "width": "90%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var FlexContainer0dbfdb08495334d = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "10%",
        "id": "FlexContainer0dbfdb08495334d",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "5%",
        "top": "40%",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    FlexContainer0dbfdb08495334d.setDefaultUnit(kony.flex.DP);
    var Label02073df2011e845 = new kony.ui.Label({
        "id": "Label02073df2011e845",
        "isVisible": true,
        "left": "3%",
        "text": "Contrato",
        "top": "6%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var Label03064e40e07384d = new kony.ui.Label({
        "id": "Label03064e40e07384d",
        "isVisible": true,
        "left": "3%",
        "text": "34859-CD",
        "top": "45%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    FlexContainer0dbfdb08495334d.add(Label02073df2011e845, Label03064e40e07384d);
    var CopyFlexContainer0490155b1631140 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "10%",
        "id": "CopyFlexContainer0490155b1631140",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "5.00%",
        "top": "51.09%",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    CopyFlexContainer0490155b1631140.setDefaultUnit(kony.flex.DP);
    var CopyLabel0c927c176fcbf4c = new kony.ui.Label({
        "id": "CopyLabel0c927c176fcbf4c",
        "isVisible": true,
        "left": "3%",
        "text": "No de Poliza",
        "top": "6%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var CopyLabel021f2bb86ec5d44 = new kony.ui.Label({
        "id": "CopyLabel021f2bb86ec5d44",
        "isVisible": true,
        "left": "3%",
        "text": "59684626",
        "top": "45%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    CopyFlexContainer0490155b1631140.add(CopyLabel0c927c176fcbf4c, CopyLabel021f2bb86ec5d44);
    var CopyFlexContainer0723677dd0a504f = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "10%",
        "id": "CopyFlexContainer0723677dd0a504f",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "5.00%",
        "top": "62.03%",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    CopyFlexContainer0723677dd0a504f.setDefaultUnit(kony.flex.DP);
    var CopyLabel09898b5bd37ed42 = new kony.ui.Label({
        "centerY": "50%",
        "id": "CopyLabel09898b5bd37ed42",
        "isVisible": true,
        "left": "3%",
        "text": "Aseguradora Qualitas",
        "top": "6%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var Button0685bd1731efd4a = new kony.ui.Button({
        "centerY": "50%",
        "height": "70%",
        "id": "Button0685bd1731efd4a",
        "isVisible": true,
        "right": "3%",
        "width": "10%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    CopyFlexContainer0723677dd0a504f.add(CopyLabel09898b5bd37ed42, Button0685bd1731efd4a);
    var CopyFlexContainer00c18cedcc1c946 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "10%",
        "id": "CopyFlexContainer00c18cedcc1c946",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "5.00%",
        "top": "72.73%",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    CopyFlexContainer00c18cedcc1c946.setDefaultUnit(kony.flex.DP);
    var CopyLabel0b2e2778912f443 = new kony.ui.Label({
        "id": "CopyLabel0b2e2778912f443",
        "isVisible": true,
        "left": "3%",
        "text": "Vencimiento",
        "top": "6%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var CopyLabel0414bb55a564545 = new kony.ui.Label({
        "id": "CopyLabel0414bb55a564545",
        "isVisible": true,
        "left": "3%",
        "text": "26/06/2015",
        "top": "45%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var Button0f834ee0b25fd44 = new kony.ui.Button({
        "centerY": "50%",
        "height": "70%",
        "id": "Button0f834ee0b25fd44",
        "isVisible": true,
        "right": "3",
        "text": "Renovar >",
        "width": "20%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    CopyFlexContainer00c18cedcc1c946.add(CopyLabel0b2e2778912f443, CopyLabel0414bb55a564545, Button0f834ee0b25fd44);
    var CopyFlexContainer025f9b59f15c44b = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "10%",
        "id": "CopyFlexContainer025f9b59f15c44b",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "5.00%",
        "top": "83.64%",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    CopyFlexContainer025f9b59f15c44b.setDefaultUnit(kony.flex.DP);
    var CopyLabel0ecb25d447d8d42 = new kony.ui.Label({
        "centerY": "50%",
        "id": "CopyLabel0ecb25d447d8d42",
        "isVisible": true,
        "left": "3%",
        "text": "Siniestros",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var CopyButton01d3379f004e24a = new kony.ui.Button({
        "centerY": "50%",
        "height": "70%",
        "id": "CopyButton01d3379f004e24a",
        "isVisible": true,
        "right": "3%",
        "width": "10%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    CopyFlexContainer025f9b59f15c44b.add(CopyLabel0ecb25d447d8d42, CopyButton01d3379f004e24a);
    content.add(imgTitle, FlexContainer0dbfdb08495334d, CopyFlexContainer0490155b1631140, CopyFlexContainer0723677dd0a504f, CopyFlexContainer00c18cedcc1c946, CopyFlexContainer025f9b59f15c44b);
    containerCalculator.add(titleSegment, content);
    frmSecure.add(containerCalculator);
};

function frmSecureGlobals() {
    frmSecure = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmSecure,
        "allowHorizontalBounce": true,
        "allowVerticalBounce": true,
        "bounces": true,
        "enableScrolling": true,
        "enabledForIdleTimeout": false,
        "footers": [FlexContainer099041029e4bc45],
        "headers": [CopyFlexContainer09da0f5890f1a44],
        "horizontalScrollIndicator": true,
        "id": "frmSecure",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "pagingEnabled": false,
        "verticalScrollIndicator": true
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_BOTH,
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "footerOverlap": false,
        "headerOverlap": false,
        "inTransitionConfig": {
            "formAnimation": 0
        },
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
        "outTransitionConfig": {
            "formAnimation": 0
        },
        "retainScrollPosition": false,
        "showActionBar": true,
        "showActionBarIcon": true,
        "titleBar": true,
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE
    });
    frmSecure.info = {
        "kuid": "p2kwiet19724036341959"
    };
};