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
        "top": "22%",
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
    var switchTop = new kony.ui.Switch({
        "centerY": "65%",
        "height": "75%",
        "id": "switchTop",
        "isVisible": true,
        "leftSideText": "ON",
        "right": "0%",
        "rightSideText": "OFF",
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
        "text": "Actual:",
        "top": "11%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    flexEstado1.add(switchTop, lblTop);
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
    var switchBot = new kony.ui.Switch({
        "centerY": "65%",
        "height": "75%",
        "id": "switchBot",
        "isVisible": true,
        "leftSideText": "ON",
        "right": "0%",
        "rightSideText": "OFF",
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
        "text": "Dos Anteriores:",
        "top": "77%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    flexEstado3.add(switchBot, lblBot);
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
    var switchMid = new kony.ui.Switch({
        "centerY": "65%",
        "height": "75%",
        "id": "switchMid",
        "isVisible": true,
        "leftSideText": "ON",
        "right": "0%",
        "rightSideText": "OFF",
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
        "text": "Anterior:",
        "top": "45%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    flexEstado2.add(switchMid, lblMid);
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
        "text": "Enviar",
        "top": "80%",
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
        "text": "Descargar",
        "top": "80%",
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
        "top": "10%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flexContainerTitle.setDefaultUnit(kony.flex.DP);
    var CopylblTitle0c3b00f841d144d = new kony.ui.Label({
        "centerX": "50%",
        "id": "CopylblTitle0c3b00f841d144d",
        "isVisible": true,
        "text": "Estados de Cuenta",
        "top": "13%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var CopybtnBack0a860d4ad009f49 = new kony.ui.Button({
        "height": "50%",
        "id": "CopybtnBack0a860d4ad009f49",
        "isVisible": true,
        "left": "8%",
        "onClick": p2kwiet19724036342126_CopybtnBack0a860d4ad009f49_onClick_seq0,
        "top": "10%",
        "width": "10%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flexContainerTitle.add(CopylblTitle0c3b00f841d144d, CopybtnBack0a860d4ad009f49);
    var txtFieldEmail = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "height": "5%",
        "id": "txtFieldEmail",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "5%",
        "placeholder": "example@mail.com",
        "secureTextEntry": false,
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
        "autoComplete": false,
        "autoCorrect": false
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
        "inTransitionConfig": {
            "formTransition": "none"
        },
        "outTransitionConfig": {
            "formTransition": "none"
        },
        "retainScrollPosition": false
    });
    loginEstadosCuenta.info = {
        "kuid": "p2kwiet19724036342126"
    };
};