function addWidgetsloginEstadosCuenta() {
    loginEstadosCuenta.setDefaultUnit(kony.flex.DP);
    var flexMain = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "100%",
        "id": "flexMain",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flexMain.setDefaultUnit(kony.flex.DP);
    var flexContent = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "100%",
        "id": "flexContent",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "top": "0.00%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flexContent.setDefaultUnit(kony.flex.DP);
    var FlexContainer0bddb570fd8234f = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "30%",
        "id": "FlexContainer0bddb570fd8234f",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "top": "12%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    FlexContainer0bddb570fd8234f.setDefaultUnit(kony.flex.DP);
    var flexEstado1 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "33%",
        "id": "flexEstado1",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flexEstado1.setDefaultUnit(kony.flex.DP);
    var checkBox1 = new kony.ui.CheckBoxGroup({
        "centerY": "50%",
        "height": "75%",
        "id": "checkBox1",
        "isVisible": true,
        "left": "80%",
        "masterData": [
            ["cbg1", "Checkbox One"]
        ],
        "selectedKeyValues": [
            ["cbg1", "Checkbox One"]
        ],
        "selectedKeys": ["cbg1"],
        "top": "5%",
        "width": "10%",
        "zIndex": 1
    }, {
        "itemOrientation": constants.CHECKBOX_ITEM_ORIENTATION_VERTICAL,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblTop = new kony.ui.Label({
        "centerY": "50%",
        "height": "100%",
        "id": "lblTop",
        "isVisible": true,
        "left": "5%",
        "text": "Actual:",
        "top": "11%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var image2980441492124262 = new kony.ui.Image2({
        "bottom": "0%",
        "centerX": "50%",
        "height": "5.0%",
        "id": "image2980441492124262",
        "isVisible": true,
        "left": "0%",
        "skin": "slImage",
        "src": "rayanegra.png",
        "width": "90%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flexEstado1.add(checkBox1, lblTop, image2980441492124262);
    var flexEstado3 = new kony.ui.FlexContainer({
        "bottom": "0",
        "clipBounds": true,
        "height": "34%",
        "id": "flexEstado3",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flexEstado3.setDefaultUnit(kony.flex.DP);
    var checkBox3 = new kony.ui.CheckBoxGroup({
        "centerY": "50%",
        "height": "75%",
        "id": "checkBox3",
        "isVisible": true,
        "left": "80%",
        "masterData": [
            ["cbg1", "Checkbox One"]
        ],
        "top": "0%",
        "width": "10%",
        "zIndex": 1
    }, {
        "itemOrientation": constants.CHECKBOX_ITEM_ORIENTATION_VERTICAL,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblBot = new kony.ui.Label({
        "centerY": "50%",
        "height": "100%",
        "id": "lblBot",
        "isVisible": true,
        "left": "5%",
        "text": "Dos Anteriores:",
        "top": "77%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var Copyimage090f2df59e8324e = new kony.ui.Image2({
        "bottom": "0%",
        "centerX": "50%",
        "height": "5.0%",
        "id": "Copyimage090f2df59e8324e",
        "isVisible": true,
        "left": "0%",
        "skin": "slImage",
        "src": "rayanegra.png",
        "width": "90%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flexEstado3.add(checkBox3, lblBot, Copyimage090f2df59e8324e);
    var flexEstado2 = new kony.ui.FlexContainer({
        "bottom": "0",
        "clipBounds": true,
        "height": "33%",
        "id": "flexEstado2",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "top": "33%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flexEstado2.setDefaultUnit(kony.flex.DP);
    var checkBox2 = new kony.ui.CheckBoxGroup({
        "centerY": "50%",
        "height": "75%",
        "id": "checkBox2",
        "isVisible": true,
        "left": "80%",
        "masterData": [
            ["cbg1", "Checkbox One"]
        ],
        "top": "38%",
        "width": "10%",
        "zIndex": 1
    }, {
        "itemOrientation": constants.CHECKBOX_ITEM_ORIENTATION_VERTICAL,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblMid = new kony.ui.Label({
        "centerY": "50%",
        "height": "100%",
        "id": "lblMid",
        "isVisible": true,
        "left": "5%",
        "text": "Anterior:",
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
    var Copyimage008a96cf87cb548 = new kony.ui.Image2({
        "bottom": "0%",
        "centerX": "50%",
        "height": "5.0%",
        "id": "Copyimage008a96cf87cb548",
        "isVisible": true,
        "left": "0%",
        "skin": "slImage",
        "src": "rayanegra.png",
        "width": "90%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flexEstado2.add(checkBox2, lblMid, Copyimage008a96cf87cb548);
    FlexContainer0bddb570fd8234f.add(flexEstado1, flexEstado3, flexEstado2);
    var richTextCorreo = new kony.ui.RichText({
        "height": "4%",
        "id": "richTextCorreo",
        "isVisible": true,
        "left": "5%",
        "text": "Enviar a correo electrónico:\n",
        "top": "58%",
        "width": "60%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblEnviar = new kony.ui.Button({
        "height": "7%",
        "id": "lblEnviar",
        "isVisible": true,
        "left": "16%",
        "skin": "newBtnEnviarGray",
        "text": "Enviar",
        "top": "85%",
        "width": "30%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblDesccargar = new kony.ui.Button({
        "height": "7%",
        "id": "lblDesccargar",
        "isVisible": true,
        "right": "16%",
        "skin": "newBtnEnviarGray",
        "text": "Descargar",
        "top": "85%",
        "width": "30%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var flexContainerTitle = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "10%",
        "id": "flexContainerTitle",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "top": "3%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flexContainerTitle.setDefaultUnit(kony.flex.DP);
    var FlexContainer0087bc141411a45 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "70%",
        "id": "FlexContainer0087bc141411a45",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox0b068ca7e29b44a",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    FlexContainer0087bc141411a45.setDefaultUnit(kony.flex.DP);
    FlexContainer0087bc141411a45.add();
    var CopylblTitle0c3b00f841d144d = new kony.ui.Label({
        "centerX": "50%",
        "id": "CopylblTitle0c3b00f841d144d",
        "isVisible": true,
        "skin": "lblTitle",
        "text": "Estados de Cuenta",
        "top": "13%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var CopybtnBack0a860d4ad009f49 = new kony.ui.Button({
        "height": "25%",
        "id": "CopybtnBack0a860d4ad009f49",
        "isVisible": true,
        "left": "8%",
        "onClick": p2kwiet19724036342126_CopybtnBack0a860d4ad009f49_onClick_seq0,
        "skin": "btnBack",
        "top": "20%",
        "width": "2%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flexContainerTitle.add(FlexContainer0087bc141411a45, CopylblTitle0c3b00f841d144d, CopybtnBack0a860d4ad009f49);
    var txtFieldEmail = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "height": "5%",
        "id": "txtFieldEmail",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "5%",
        "placeholder": "example@mail.com",
        "secureTextEntry": false,
        "skin": "focusTextBoxMail",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "63%",
        "width": "260dp",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "autoFilter": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
        "placeholderSkin": "placeHolderGreen",
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    flexContent.add(FlexContainer0bddb570fd8234f, richTextCorreo, lblEnviar, lblDesccargar, flexContainerTitle, txtFieldEmail);
    flexMain.add(flexContent);
    loginEstadosCuenta.add(flexMain);
};

function loginEstadosCuentaGlobals() {
    loginEstadosCuenta = new kony.ui.Form2({
        "addWidgets": addWidgetsloginEstadosCuenta,
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "bounces": false,
        "enableScrolling": false,
        "enabledForIdleTimeout": false,
        "footers": [FlexContainer099041029e4bc45],
        "headers": [CopyFlexContainer09da0f5890f1a44],
        "horizontalScrollIndicator": true,
        "id": "loginEstadosCuenta",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "pagingEnabled": false,
        "verticalScrollIndicator": true
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
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
        "onDeviceBack": p2kwiet19724036342126_loginEstadosCuenta_Android_onDeviceBack_seq0,
        "outTransitionConfig": {
            "formAnimation": 0
        },
        "retainScrollPosition": false,
        "showActionBar": true,
        "showActionBarIcon": true,
        "titleBar": true,
        "windowSoftInputMode": constants.FORM_ADJUST_PAN
    });
    loginEstadosCuenta.info = {
        "kuid": "p2kwiet19724036342126"
    };
};