function addWidgetsloginFacturacion() {
    loginFacturacion.setDefaultUnit(kony.flex.DP);
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
    var richTextCorreo = new kony.ui.RichText({
        "height": "5%",
        "id": "richTextCorreo",
        "isVisible": true,
        "left": "5%",
        "text": "Enviar a correo electrónico:",
        "top": "60%",
        "width": "90%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var lblEnviar = new kony.ui.Button({
        "height": "8%",
        "id": "lblEnviar",
        "isVisible": true,
        "left": "6%",
        "skin": "newBtnEnviarGray",
        "text": "Enviar XML y PDF",
        "top": "85%",
        "width": "40%",
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
    var flexContainerTitle = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "11.50%",
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
        "text": "Facturacion Electronica",
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
        "height": "25%",
        "id": "btnBack",
        "isVisible": true,
        "left": "8%",
        "onClick": p2kwiet19724036342150_btnBack_onClick_seq0,
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
        "glowEffect": false,
        "showProgressIndicator": true
    });
    flexContainerTitle.add(FlexContainer0087bc141411a45, CopylblTitle0c3b00f841d144d, btnBack);
    var txtFieldEmail = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "height": "5%",
        "id": "txtFieldEmail",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "5%",
        "placeholder": "example@mail.com",
        "secureTextEntry": false,
        "skin": "placeHolderGreen",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "64%",
        "width": "60%",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "autoCorrect": false,
        "closeButtonRequired": true,
        "closeButtonText": "Done",
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
        "pasteboardType": constants.TEXTBOX_PASTE_BOARD_TYPE_NO_PASTE_BOARD,
        "placeholderSkin": "placeHolderGreen",
        "showClearButton": true,
        "showCloseButton": true,
        "showProgressIndicator": true,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var lblDescargar = new kony.ui.Button({
        "height": "8%",
        "id": "lblDescargar",
        "isVisible": true,
        "right": "6%",
        "skin": "newBtnEnviarGray",
        "text": "Descargar PDF",
        "top": "85%",
        "width": "40%",
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
    var flexFacturacion = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "34.50%",
        "id": "flexFacturacion",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "top": "14%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flexFacturacion.setDefaultUnit(kony.flex.DP);
    var flexExtado1 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "33%",
        "id": "flexExtado1",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flexExtado1.setDefaultUnit(kony.flex.DP);
    var switch1 = new kony.ui.Switch({
        "centerY": "65%",
        "height": "75%",
        "id": "switch1",
        "isVisible": true,
        "leftSideText": "ON",
        "right": "0%",
        "rightSideText": "OFF",
        "selectedIndex": 0,
        "skin": "switchEstadosDeCuenta",
        "top": "7%",
        "width": "20%",
        "zIndex": 1
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblTop = new kony.ui.Label({
        "centerY": "50%",
        "height": "100%",
        "id": "lblTop",
        "isVisible": true,
        "left": "5%",
        "text": "Agosto 2015",
        "top": "11%",
        "width": "70%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
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
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
    });
    flexExtado1.add(switch1, lblTop, image2980441492124262);
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
    var switch2 = new kony.ui.Switch({
        "centerY": "65%",
        "height": "75%",
        "id": "switch2",
        "isVisible": true,
        "leftSideText": "ON",
        "right": "0%",
        "rightSideText": "OFF",
        "selectedIndex": 0,
        "skin": "switchEstadosDeCuenta",
        "top": "42%",
        "width": "20%",
        "zIndex": 1
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblMid = new kony.ui.Label({
        "centerY": "50%",
        "height": "100%",
        "id": "lblMid",
        "isVisible": true,
        "left": "5%",
        "text": "Septiembre 2015",
        "top": "45%",
        "width": "70%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var Copyimage0a3cee9fc6f504e = new kony.ui.Image2({
        "bottom": "0%",
        "centerX": "50%",
        "height": "5.0%",
        "id": "Copyimage0a3cee9fc6f504e",
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
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
    });
    flexEstado2.add(switch2, lblMid, Copyimage0a3cee9fc6f504e);
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
    var switch3 = new kony.ui.Switch({
        "centerY": "65%",
        "height": "75%",
        "id": "switch3",
        "isVisible": true,
        "leftSideText": "ON",
        "right": "0%",
        "rightSideText": "OFF",
        "skin": "switchEstadosDeCuenta",
        "top": "75%",
        "width": "20%",
        "zIndex": 1
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblBot = new kony.ui.Label({
        "centerY": "50%",
        "height": "100%",
        "id": "lblBot",
        "isVisible": true,
        "left": "5%",
        "text": "Octubre 2015",
        "top": "77%",
        "width": "70%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var Copyimage05b1cd90fceb641 = new kony.ui.Image2({
        "bottom": "0%",
        "centerX": "50%",
        "height": "5.0%",
        "id": "Copyimage05b1cd90fceb641",
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
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
    });
    flexEstado3.add(switch3, lblBot, Copyimage05b1cd90fceb641);
    flexFacturacion.add(flexExtado1, flexEstado2, flexEstado3);
    flexContent.add(richTextCorreo, lblEnviar, flexContainerTitle, txtFieldEmail, lblDescargar, flexFacturacion);
    flexMain.add(flexContent);
    loginFacturacion.add(flexMain);
};

function loginFacturacionGlobals() {
    loginFacturacion = new kony.ui.Form2({
        "addWidgets": addWidgetsloginFacturacion,
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "bounces": false,
        "enableScrolling": false,
        "enabledForIdleTimeout": false,
        "footers": [FlexContainer099041029e4bc45],
        "headers": [CopyFlexContainer09da0f5890f1a44],
        "horizontalScrollIndicator": true,
        "id": "loginFacturacion",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "pagingEnabled": false,
        "skin": "flexContainerTerminos",
        "verticalScrollIndicator": true
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "bounces": false,
        "configureExtendBottom": false,
        "configureExtendTop": false,
        "configureStatusBarStyle": false,
        "footerOverlap": false,
        "formTransparencyDuringPostShow": "100",
        "headerOverlap": false,
        "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_DEFAULT,
        "inTransitionConfig": {
            "transitionDirection": "none",
            "transitionEffect": "none"
        },
        "maxZoomScale": 1,
        "minZoomScale": 1,
        "needsIndicatorDuringPostShow": false,
        "outTransitionConfig": {
            "transitionDirection": "none",
            "transitionEffect": "none"
        },
        "retainScrollPosition": false,
        "titleBar": false,
        "zoomScale": 1
    });
    loginFacturacion.info = {
        "kuid": "p2kwiet19724036342150"
    };
};