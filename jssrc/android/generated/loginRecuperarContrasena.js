function addWidgetsloginRecuperarContrasena() {
    loginRecuperarContrasena.setDefaultUnit(kony.flex.DP);
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
        "height": "105%",
        "id": "flexContent",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "flexContent",
        "top": "-5%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flexContent.setDefaultUnit(kony.flex.DP);
    var FlexContainer0d8f88386897341 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "70%",
        "id": "FlexContainer0d8f88386897341",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "flexContainerLightGray",
        "top": "20%",
        "width": "93%",
        "zIndex": 2
    }, {}, {});
    FlexContainer0d8f88386897341.setDefaultUnit(kony.flex.DP);
    var lblRecuperar = new kony.ui.Label({
        "id": "lblRecuperar",
        "isVisible": true,
        "left": "5%",
        "skin": "lblRecuperar",
        "text": "Recuperar contrasena",
        "top": "3%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 2
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 5, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var richTextTop = new kony.ui.RichText({
        "centerX": "50%",
        "height": "35%",
        "id": "richTextTop",
        "isVisible": true,
        "left": "0dp",
        "skin": "richTextRecuperar",
        "text": "Para recuperar su contraseña será necesario que escriba el correo electrónico con el cual se registró.<br><br>A dicho correo le llegará una contraseña temporal.",
        "top": "18%",
        "width": "95%",
        "zIndex": 2
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "padding": [3, 5, 0, 0],
        "paddingInPixel": false
    }, {});
    var txtFieldCorreo = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "focusSkin": "CopynewTextBoxGray0f8b884963fad4b",
        "height": "7%",
        "id": "txtFieldCorreo",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "5%",
        "secureTextEntry": false,
        "skin": "newTextBoxGray",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "60%",
        "width": "80%",
        "zIndex": 2
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [3, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "autoFilter": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var lblCorreo = new kony.ui.Label({
        "id": "lblCorreo",
        "isVisible": true,
        "left": "2%",
        "skin": "lblCorreoRecuperar",
        "text": "Correo:",
        "top": "55%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 2
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [3, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var Image04ce5f3e3031b49 = new kony.ui.Image2({
        "height": "5%",
        "id": "Image04ce5f3e3031b49",
        "isVisible": true,
        "left": "0dp",
        "src": "rayanegra.png",
        "top": "8%",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    FlexContainer0d8f88386897341.add(lblRecuperar, richTextTop, txtFieldCorreo, lblCorreo, Image04ce5f3e3031b49);
    var flexContainerTitle = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "10%",
        "id": "flexContainerTitle",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "6%",
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
    var lblTitle = new kony.ui.Label({
        "centerX": "50%",
        "id": "lblTitle",
        "isVisible": true,
        "skin": "lblTitle",
        "text": "Registro",
        "top": "13%",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
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
        "onClick": AS_Button_f809299ff78540d7a913384c508c886c,
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
    flexContainerTitle.add(FlexContainer0087bc141411a45, lblTitle, btnBack);
    var btnEnviar = new kony.ui.Button({
        "centerX": "50%",
        "focusSkin": "focusGrayButton",
        "height": "6%",
        "id": "btnEnviar",
        "isVisible": true,
        "left": "80dp",
        "onClick": AS_Button_f5904ea8f9c74a9eb7e8f1a33f715d8e,
        "skin": "newBtnEnviarGray",
        "text": "Enviar",
        "top": "77%",
        "width": "30%",
        "zIndex": 2
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "displayText": true,
        "padding": [8, 0, 3, 0],
        "paddingInPixel": false
    }, {});
    var CopyImage0cb7156476cc04d = new kony.ui.Image2({
        "height": "2%",
        "id": "CopyImage0cb7156476cc04d",
        "isVisible": true,
        "left": "60%",
        "src": "flechabotongris2.png",
        "top": "79%",
        "width": "1.50%",
        "zIndex": 5
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flexContent.add(FlexContainer0d8f88386897341, flexContainerTitle, btnEnviar, CopyImage0cb7156476cc04d);
    flexMain.add(flexContent);
    loginRecuperarContrasena.add(flexMain);
};

function loginRecuperarContrasenaGlobals() {
    loginRecuperarContrasena = new kony.ui.Form2({
        "addWidgets": addWidgetsloginRecuperarContrasena,
        "allowHorizontalBounce": false,
        "bounces": false,
        "enableScrolling": false,
        "enabledForIdleTimeout": false,
        "footers": [FlexContainer099041029e4bc45],
        "headers": [CopyFlexContainer09da0f5890f1a44],
        "id": "loginRecuperarContrasena",
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
        "onDeviceBack": AS_Form_7a4286842bec4465a635acbe266b9d8c,
        "retainScrollPosition": false,
        "titleBar": true,
        "titleBarSkin": "slTitleBar",
        "windowSoftInputMode": constants.FORM_ADJUST_PAN
    });
    loginRecuperarContrasena.info = {
        "notesId": "5f14a7052fc1494684002708fe6fede6",
        "kuid": "5f14a7052fc1494684002708fe6fede6"
    };
};