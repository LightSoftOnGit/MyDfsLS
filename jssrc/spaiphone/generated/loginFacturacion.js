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
    }, {});
    var lblEnviar = new kony.ui.Button({
        "height": "8%",
        "id": "lblEnviar",
        "isVisible": true,
        "left": "6%",
        "text": "Enviar XML y PDF",
        "top": "80%",
        "width": "40%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var flexContainerTitle = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "11.50%",
        "id": "flexContainerTitle",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "top": "5%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flexContainerTitle.setDefaultUnit(kony.flex.DP);
    var CopylblTitle0c3b00f841d144d = new kony.ui.Label({
        "centerX": "50%",
        "id": "CopylblTitle0c3b00f841d144d",
        "isVisible": true,
        "text": "Facturacion Electronica",
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
    var btnBack = new kony.ui.Button({
        "height": "50%",
        "id": "btnBack",
        "isVisible": true,
        "left": "8%",
        "onClick": p2kwiet19724036342150_btnBack_onClick_seq0,
        "top": "10%",
        "width": "10%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flexContainerTitle.add(CopylblTitle0c3b00f841d144d, btnBack);
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
        "top": "64%",
        "width": "60%",
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
    var lblDescargar = new kony.ui.Button({
        "height": "8%",
        "id": "lblDescargar",
        "isVisible": true,
        "right": "6%",
        "text": "Descargar PDF",
        "top": "80%",
        "width": "40%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var flexFacturacion = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "34.50%",
        "id": "flexFacturacion",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "top": "17%",
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
        "renderAsAnchor": false,
        "textCopyable": false
    });
    flexExtado1.add(switch1, lblTop);
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
        "renderAsAnchor": false,
        "textCopyable": false
    });
    flexEstado2.add(switch2, lblMid);
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
        "renderAsAnchor": false,
        "textCopyable": false
    });
    flexEstado3.add(switch3, lblBot);
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
        "horizontalScrollIndicator": true,
        "id": "loginFacturacion",
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
    loginFacturacion.info = {
        "kuid": "p2kwiet19724036342150"
    };
};