function addWidgetslogin() {
    login.setDefaultUnit(kony.flex.DP);
    var flexMain = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flexMain",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%"
    }, {}, {});
    flexMain.setDefaultUnit(kony.flex.DP);
    var flexContent = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flexContent",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "flexContent",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flexContent.setDefaultUnit(kony.flex.DP);
    flexContent.add();
    var flexLogin = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": true,
        "allowVerticalBounce": true,
        "bounces": false,
        "clipBounds": true,
        "enableScrolling": true,
        "height": "105%",
        "horizontalScrollIndicator": true,
        "id": "flexLogin",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "pagingEnabled": false,
        "scrollDirection": kony.flex.SCROLL_HORIZONTAL,
        "skin": "slFSbox",
        "top": "-5%",
        "verticalScrollIndicator": true,
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flexLogin.setDefaultUnit(kony.flex.DP);
    var FlexContainer01bda65d913bc4d = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "65%",
        "id": "FlexContainer01bda65d913bc4d",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "7dp",
        "skin": "dfsFlexContainerMetalTexture",
        "top": "121dp",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    FlexContainer01bda65d913bc4d.setDefaultUnit(kony.flex.DP);
    FlexContainer01bda65d913bc4d.add();
    var CopyflexContent058c0354f4a7043 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "CopyflexContent058c0354f4a7043",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "flexContent",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    CopyflexContent058c0354f4a7043.setDefaultUnit(kony.flex.DP);
    var textBoxNombre = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "centerX": "50%",
        "focusSkin": "textFieldLogin",
        "height": "8%",
        "id": "textBoxNombre",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_EMAIL,
        "maxTextLength": null,
        "placeholder": "Usuario",
        "secureTextEntry": false,
        "skin": "textBoxWhite",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "33%",
        "width": "80%",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [3, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "autoFilter": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
        "placeholderSkin": "CopytextBoxWhite067e7f8fdd44b4d",
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var textBoxPassword = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "centerX": "50%",
        "focusSkin": "textFieldLogin",
        "height": "8%",
        "id": "textBoxPassword",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_EMAIL,
        "maxTextLength": null,
        "onDone": AS_TextField_434af44c739848c2aef33e9e9b84131d,
        "placeholder": "Password",
        "secureTextEntry": true,
        "skin": "textBoxWhite",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "44%",
        "width": "80%",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [3, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "autoFilter": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
        "placeholderSkin": "CopytextBoxWhite0aac2118f2c914b",
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var CopybtnRecuperarContrasena04c3512f4daea42 = new kony.ui.Button({
        "focusSkin": "newFocusAzul",
        "height": "4%",
        "id": "CopybtnRecuperarContrasena04c3512f4daea42",
        "isVisible": true,
        "onClick": AS_Button_233ed0f5c0144a37a4492d0719aed108,
        "right": "11.97%",
        "skin": "btnRecuperarContrasena",
        "text": "Olvidaste tu contrasena?",
        "top": "53.50%",
        "width": "80%",
        "zIndex": 2
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var btnEntrar = new kony.ui.Button({
        "centerX": "50%",
        "focusSkin": "focusGrayButton",
        "height": "8%",
        "id": "btnEntrar",
        "isVisible": true,
        "left": "80dp",
        "onClick": AS_Button_a0a9b54ba5f24154ac958a81b6a19ddd,
        "skin": "btnEnviarLoginBig",
        "text": "Entrar",
        "top": "68%",
        "width": "50%",
        "zIndex": 2
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopylblNoTienesCuenta0740637a71a7b48 = new kony.ui.Label({
        "id": "CopylblNoTienesCuenta0740637a71a7b48",
        "isVisible": true,
        "left": "9.97%",
        "skin": "lblNoCuentaLogin",
        "text": "No tienes cuenta?",
        "top": "81%",
        "width": "32%",
        "zIndex": 2
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var CopybtnRegistrate05522792b42c34e = new kony.ui.Button({
        "focusSkin": "newFocusAzul",
        "id": "CopybtnRegistrate05522792b42c34e",
        "isVisible": true,
        "left": "42%",
        "onClick": AS_Button_296103e861644ca0864d8a4430f96f09,
        "skin": "btnRegistrateLogin",
        "text": "Registrate aqui",
        "top": "81%",
        "width": "30%",
        "zIndex": 2
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var Image0769167cf5ba34f = new kony.ui.Image2({
        "height": "2%",
        "id": "Image0769167cf5ba34f",
        "isVisible": true,
        "left": "67%",
        "src": "flechabotongris2.png",
        "top": "71%",
        "width": "1.50%",
        "zIndex": 2
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopylblNoTienesCuenta0699700c9bb374c = new kony.ui.Label({
        "id": "CopylblNoTienesCuenta0699700c9bb374c",
        "isVisible": true,
        "left": "9.97%",
        "skin": "LabelLogin",
        "text": "Acceso a Distribuidores",
        "top": "60%",
        "width": "80%",
        "zIndex": 2
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var Switch0eec0007469fc45 = new kony.ui.Switch({
        "height": "32dp",
        "id": "Switch0eec0007469fc45",
        "isVisible": true,
        "left": "70%",
        "selectedIndex": 1,
        "skin": "CopyslSwitch0e71ebaf8799941",
        "top": "59%",
        "width": "14%",
        "zIndex": 2
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    CopyflexContent058c0354f4a7043.add(textBoxNombre, textBoxPassword, CopybtnRecuperarContrasena04c3512f4daea42, btnEntrar, CopylblNoTienesCuenta0740637a71a7b48, CopybtnRegistrate05522792b42c34e, Image0769167cf5ba34f, CopylblNoTienesCuenta0699700c9bb374c, Switch0eec0007469fc45);
    flexLogin.add(FlexContainer01bda65d913bc4d, CopyflexContent058c0354f4a7043);
    var flexContainerTitle = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "11.50%",
        "id": "flexContainerTitle",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "2%",
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
        "text": "Login",
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
    var btnBack = new kony.ui.Button({
        "focusSkin": "focusBtnBackArrendamiento",
        "height": "25%",
        "id": "btnBack",
        "isVisible": true,
        "left": "8%",
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
    flexContainerTitle.add(FlexContainer0087bc141411a45, CopylblTitle0c3b00f841d144d, btnBack);
    flexMain.add(flexContent, flexLogin, flexContainerTitle);
    login.add(flexMain);
};

function loginGlobals() {
    login = new kony.ui.Form2({
        "addWidgets": addWidgetslogin,
        "allowHorizontalBounce": false,
        "bounces": false,
        "enableScrolling": false,
        "enabledForIdleTimeout": false,
        "footers": [FlexContainer099041029e4bc45],
        "headers": [CopyFlexContainer09da0f5890f1a44],
        "id": "login",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
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
        "onDeviceBack": AS_Form_cd54b35580b447359f3b710449dbe9ff,
        "retainScrollPosition": false,
        "titleBar": true,
        "titleBarSkin": "slTitleBar",
        "windowSoftInputMode": constants.FORM_ADJUST_PAN
    });
    login.info = {
        "notesId": "fa3a2f6d755440d48e35b1194782d575",
        "kuid": "fa3a2f6d755440d48e35b1194782d575"
    };
};