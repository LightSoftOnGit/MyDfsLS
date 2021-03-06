function addWidgetschat() {
    chat.setDefaultUnit(kony.flex.DP);
    var imgBackground = new kony.ui.Image2({
        "bottom": "0px",
        "height": "100%",
        "id": "imgBackground",
        "isVisible": true,
        "left": "0px",
        "right": "0px",
        "src": "bgmercedez.png",
        "top": "-10%",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var FlexMainContainer = new kony.ui.FlexContainer({
        "bottom": "0",
        "clipBounds": true,
        "height": "100%",
        "id": "FlexMainContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "right": "0",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    FlexMainContainer.setDefaultUnit(kony.flex.DP);
    var FlexContainer = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "100%",
        "id": "FlexContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    FlexContainer.setDefaultUnit(kony.flex.DP);
    var flexContainerHeader = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "10%",
        "id": "flexContainerHeader",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "top": "3%",
        "width": "100%",
        "zIndex": 3
    }, {}, {});
    flexContainerHeader.setDefaultUnit(kony.flex.DP);
    var lbltitle = new kony.ui.Label({
        "centerX": "50%",
        "id": "lbltitle",
        "isVisible": true,
        "text": "Chat",
        "top": "13%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var btnRegresar = new kony.ui.Button({
        "height": "55%",
        "id": "btnRegresar",
        "isVisible": true,
        "left": "8%",
        "top": "10%",
        "width": "10%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var btnSalir = new kony.ui.Button({
        "height": "55.0%",
        "id": "btnSalir",
        "isVisible": false,
        "right": "8%",
        "text": "Salir",
        "top": "10.0%",
        "width": "10%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flexContainerHeader.add(lbltitle, btnRegresar, btnSalir);
    var flexContainerTop = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "90%",
        "id": "flexContainerTop",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "top": "0dp",
        "width": "100%",
        "zIndex": 2
    }, {}, {});
    flexContainerTop.setDefaultUnit(kony.flex.DP);
    var image218667831541809 = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "40%",
        "height": "150dp",
        "id": "image218667831541809",
        "isVisible": true,
        "left": "155dp",
        "src": "chatimage.png",
        "top": "214dp",
        "width": "150dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var richtext18667831541811 = new kony.ui.RichText({
        "centerX": "50%",
        "centerY": "65%",
        "height": "30%",
        "id": "richtext18667831541811",
        "isVisible": true,
        "text": "Bienvenido a <br>\nMercedes-Benz Financial Chat.<br>\n¿En qué podemos ayudarle?",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flexContainerTop.add(image218667831541809, richtext18667831541811);
    var flexScrollContainerLog = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "bounces": true,
        "enableScrolling": true,
        "height": "80%",
        "horizontalScrollIndicator": true,
        "id": "flexScrollContainerLog",
        "isVisible": false,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "pagingEnabled": false,
        "scrollDirection": kony.flex.SCROLL_VERTICAL,
        "top": "57dp",
        "verticalScrollIndicator": true,
        "width": "100%",
        "zIndex": 2
    }, {}, {});
    flexScrollContainerLog.setDefaultUnit(kony.flex.DP);
    flexScrollContainerLog.add();
    var flexContainerChatDisabled = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "100.0%",
        "id": "flexContainerChatDisabled",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "top": "0dp",
        "width": "100%",
        "zIndex": 2
    }, {}, {});
    flexContainerChatDisabled.setDefaultUnit(kony.flex.DP);
    var image218667831542360 = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "40%",
        "height": "150dp",
        "id": "image218667831542360",
        "isVisible": true,
        "left": "155dp",
        "src": "chatimage.png",
        "top": "214dp",
        "width": "150dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var richtext18667831542362 = new kony.ui.RichText({
        "centerX": "50%",
        "centerY": "65%",
        "height": "30%",
        "id": "richtext18667831542362",
        "isVisible": true,
        "text": "Horario de atenci&oacute;n: <br>\nLunes a Viernes, 08:00 a 17:00 hrs. <br>\nHora Cd. de M&eacute;xico",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flexContainerChatDisabled.add(image218667831542360, richtext18667831542362);
    var flexContainerEscribir = new kony.ui.FlexContainer({
        "bottom": "0%",
        "clipBounds": true,
        "height": "10%",
        "id": "flexContainerEscribir",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flexContainerEscribir.setDefaultUnit(kony.flex.DP);
    var btnEnviarChat2 = new kony.ui.Button({
        "height": "100%",
        "id": "btnEnviarChat2",
        "isVisible": true,
        "right": "2%",
        "text": "Enviar",
        "top": "0dp",
        "width": "15%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var txtmensaje = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "centerY": "50%",
        "height": "63%",
        "id": "txtmensaje",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_CHAT,
        "left": "13%",
        "placeholder": "Texto",
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "12dp",
        "width": "55%",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_DEFAULT_PLATFORM_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [3, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "autoComplete": false,
        "autoCorrect": false
    });
    var btnClip = new kony.ui.Button({
        "centerY": "50%",
        "height": "45%",
        "id": "btnClip",
        "isVisible": true,
        "left": "5%",
        "top": "0dp",
        "width": "3.50%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flexContainerEscribir.add(btnEnviarChat2, txtmensaje, btnClip);
    FlexContainer.add(flexContainerHeader, flexContainerTop, flexScrollContainerLog, flexContainerChatDisabled, flexContainerEscribir);
    FlexMainContainer.add(FlexContainer);
    chat.add(imgBackground, FlexMainContainer);
};

function chatGlobals() {
    chat = new kony.ui.Form2({
        "addWidgets": addWidgetschat,
        "allowHorizontalBounce": true,
        "allowVerticalBounce": true,
        "bounces": true,
        "enableScrolling": true,
        "enabledForIdleTimeout": false,
        "horizontalScrollIndicator": true,
        "id": "chat",
        "init": p2kwiet19724036341405_chat_init_seq0,
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": true,
        "pagingEnabled": false,
        "verticalScrollIndicator": true
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_BOTH,
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
    chat.info = {
        "kuid": "p2kwiet19724036341405"
    };
};