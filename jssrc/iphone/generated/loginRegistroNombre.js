function addWidgetsloginRegistroNombre() {
    loginRegistroNombre.setDefaultUnit(kony.flex.DP);
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
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "flexContent",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flexContent.setDefaultUnit(kony.flex.DP);
    var frmMain = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "90%",
        "id": "frmMain",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "slFbox",
        "top": "20%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    frmMain.setDefaultUnit(kony.flex.DP);
    var richTextTop = new kony.ui.RichText({
        "centerX": "50%",
        "height": "30%",
        "id": "richTextTop",
        "isVisible": true,
        "left": "0dp",
        "skin": "richTextRecuperar",
        "text": "Bienvenido a la aplicación móvil de Mercedes-Benz Financial para continuar, favor de ingresar los siguientes datos tal y como aparecen en su contrato.",
        "top": "0%",
        "width": "100%",
        "zIndex": 3
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "padding": [5, 5, 5, 0],
        "paddingInPixel": false
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var richTextBottom = new kony.ui.RichText({
        "centerX": "50%",
        "height": "20%",
        "id": "richTextBottom",
        "isVisible": true,
        "left": "0dp",
        "skin": "richTextRecuperar",
        "text": "Escriba su nombre empezando por apellidos, en caso de ser persona moral, favor de incluir puntos y comas.",
        "top": "43%",
        "width": "100%",
        "zIndex": 3
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "padding": [5, 5, 5, 0],
        "paddingInPixel": false
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var FlexContainer036eba810bf0e4a = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "90%",
        "id": "FlexContainer036eba810bf0e4a",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "flexContainerLightGray",
        "top": "0%",
        "width": "100%",
        "zIndex": 2
    }, {}, {});
    FlexContainer036eba810bf0e4a.setDefaultUnit(kony.flex.DP);
    FlexContainer036eba810bf0e4a.add();
    frmMain.add(richTextTop, richTextBottom, FlexContainer036eba810bf0e4a);
    var flexContainerTitle = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "10%",
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
        "text": "Registro",
        "top": "13%",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var btnBack = new kony.ui.Button({
        "focusSkin": "focusBtnBackArrendamiento",
        "height": "25%",
        "id": "btnBack",
        "isVisible": true,
        "left": "8%",
        "onClick": AS_Button_4e285c2b0ae84f08876fb1002d29852c,
        "skin": "btnBack",
        "top": "20%",
        "width": "2%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    flexContainerTitle.add(FlexContainer0087bc141411a45, CopylblTitle0c3b00f841d144d, btnBack);
    var btnContinuarRegistro = new kony.ui.Button({
        "centerX": "49.30%",
        "focusSkin": "focusGrayButton",
        "height": "7%",
        "id": "btnContinuarRegistro",
        "isVisible": true,
        "left": "80dp",
        "onClick": AS_Button_9ce0ce20d8184a5891e47809d418bde7,
        "skin": "newBtnEnviarGray",
        "text": "Continuar",
        "top": "78%",
        "width": "28%",
        "zIndex": 3
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    var frmMid = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "20%",
        "id": "frmMid",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "16dp",
        "skin": "slFbox",
        "top": "38%",
        "width": "100%",
        "zIndex": 2
    }, {}, {});
    frmMid.setDefaultUnit(kony.flex.DP);
    var lblO = new kony.ui.Label({
        "height": "20%",
        "id": "lblO",
        "isVisible": true,
        "left": "5%",
        "skin": "lblCorreoRecuperar",
        "text": "O",
        "top": "30%",
        "width": "100%",
        "zIndex": 2
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var textFieldRFC = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "height": "30%",
        "id": "textFieldRFC",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "3%",
        "placeholder": "RFC",
        "secureTextEntry": false,
        "skin": "newTextBoxGray",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "0dp",
        "width": "85%",
        "zIndex": 2
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [1, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "autoCorrect": false,
        "closeButtonRequired": true,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
        "placeholderSkin": "placeHolder4",
        "showClearButton": true,
        "showCloseButton": true,
        "showProgressIndicator": true,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var CopytextFieldRFC05b59cc97ccf448 = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "height": "30%",
        "id": "CopytextFieldRFC05b59cc97ccf448",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "3%",
        "placeholder": "Nombre",
        "secureTextEntry": false,
        "skin": "newTextBoxGray",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "50%",
        "width": "85%",
        "zIndex": 2
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [1, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "autoCorrect": false,
        "closeButtonRequired": true,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
        "placeholderSkin": "placeHolder4",
        "showClearButton": true,
        "showCloseButton": true,
        "showProgressIndicator": true,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    frmMid.add(lblO, textFieldRFC, CopytextFieldRFC05b59cc97ccf448);
    var CopyImage0cb7156476cc04d = new kony.ui.Image2({
        "height": "2%",
        "id": "CopyImage0cb7156476cc04d",
        "isVisible": true,
        "left": "60%",
        "src": "flechabotongris2.png",
        "top": "80.60%",
        "width": "1.50%",
        "zIndex": 5
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var flexContainerTop = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "10%",
        "id": "flexContainerTop",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "9%",
        "width": "100%",
        "zIndex": 3
    }, {}, {});
    flexContainerTop.setDefaultUnit(kony.flex.DP);
    var lblMyMBF = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "53.76%",
        "height": "100%",
        "id": "lblMyMBF",
        "isVisible": true,
        "left": "5%",
        "skin": "lblTitle",
        "text": "myDFS",
        "top": "0%",
        "width": "100%",
        "zIndex": 2
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    flexContainerTop.add(lblMyMBF);
    flexContent.add(frmMain, flexContainerTitle, btnContinuarRegistro, frmMid, CopyImage0cb7156476cc04d, flexContainerTop);
    flexMain.add(flexContent);
    loginRegistroNombre.add(flexMain);
};

function loginRegistroNombreGlobals() {
    loginRegistroNombre = new kony.ui.Form2({
        "addWidgets": addWidgetsloginRegistroNombre,
        "allowHorizontalBounce": false,
        "bounces": false,
        "enableScrolling": false,
        "enabledForIdleTimeout": false,
        "footers": [FlexContainer099041029e4bc45],
        "headers": [CopyFlexContainer09da0f5890f1a44],
        "id": "loginRegistroNombre",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "skin": "flexContainerTerminos"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "bounces": false,
        "configureExtendBottom": false,
        "configureExtendTop": false,
        "configureStatusBarStyle": true,
        "footerOverlap": false,
        "formTransparencyDuringPostShow": "100",
        "headerOverlap": false,
        "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_CANCEL,
        "needsIndicatorDuringPostShow": false,
        "retainScrollPosition": false,
        "statusBarStyle": constants.STATUS_BAR_STYLE_DEFAULT,
        "titleBar": false
    });
    loginRegistroNombre.info = {
        "notesId": "bcd9e2b237e44de494e5d133cc7fde19",
        "kuid": "bcd9e2b237e44de494e5d133cc7fde19"
    };
};