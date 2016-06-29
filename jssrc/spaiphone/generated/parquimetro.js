function addWidgetsparquimetro() {
    parquimetro.setDefaultUnit(kony.flex.DP);
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
        "height": "105%",
        "id": "flexContent",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "top": "-5%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flexContent.setDefaultUnit(kony.flex.DP);
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
        "text": "Parquimetro",
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
    flexContainerTitle.add(CopylblTitle0c3b00f841d144d);
    var flexContainerParquimetro = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "58%",
        "id": "flexContainerParquimetro",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "top": "20%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flexContainerParquimetro.setDefaultUnit(kony.flex.DP);
    var flexContainerTituloParqu = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "12.50%",
        "id": "flexContainerTituloParqu",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flexContainerTituloParqu.setDefaultUnit(kony.flex.DP);
    var Image0931276c435974e = new kony.ui.Image2({
        "height": "100%",
        "id": "Image0931276c435974e",
        "isVisible": true,
        "left": "0dp",
        "src": "tituloparquimetro.png",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblTituloParquimetro = new kony.ui.Label({
        "centerY": "50%",
        "height": "100%",
        "id": "lblTituloParquimetro",
        "isVisible": true,
        "left": "0dp",
        "text": "Hora de Programacion 5:10 pm",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [5, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    flexContainerTituloParqu.add(Image0931276c435974e, lblTituloParquimetro);
    var flexContainerContentParquimetro = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "89%",
        "id": "flexContainerContentParquimetro",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "top": "12%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flexContainerContentParquimetro.setDefaultUnit(kony.flex.DP);
    var Image0b2e686d3b3b444 = new kony.ui.Image2({
        "height": "100%",
        "id": "Image0b2e686d3b3b444",
        "isVisible": true,
        "left": "0dp",
        "src": "tabparquimetro.png",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var containerContentTop = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "33%",
        "id": "containerContentTop",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    containerContentTop.setDefaultUnit(kony.flex.DP);
    var lblHoras = new kony.ui.Label({
        "id": "lblHoras",
        "isVisible": true,
        "left": "0dp",
        "text": "Horas",
        "top": "25%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [5, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var lblSliderTopMax = new kony.ui.Label({
        "height": "20%",
        "id": "lblSliderTopMax",
        "isVisible": true,
        "left": "0dp",
        "text": "23",
        "top": "65%",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "padding": [0, 0, 10, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var lblSliderTopMin = new kony.ui.Label({
        "height": "20%",
        "id": "lblSliderTopMin",
        "isVisible": true,
        "left": "0dp",
        "text": "0",
        "top": "65%",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [10, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var sliderHoras = new kony.ui.Slider({
        "centerX": "50%",
        "height": "30%",
        "id": "sliderHoras",
        "isVisible": true,
        "left": "73dp",
        "max": 23,
        "min": 0,
        "selectedValue": 23,
        "step": 1,
        "thumbImage": "slider.png",
        "top": "40%",
        "width": "75%",
        "zIndex": 1
    }, {}, {
        "thickness": 1
    });
    containerContentTop.add(lblHoras, lblSliderTopMax, lblSliderTopMin, sliderHoras);
    var containerContentMid = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "33%",
        "id": "containerContentMid",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "top": "33%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    containerContentMid.setDefaultUnit(kony.flex.DP);
    var lblMinutos = new kony.ui.Label({
        "id": "lblMinutos",
        "isVisible": true,
        "left": "0dp",
        "text": "Minutos",
        "top": "25%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [5, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var lblSliderBotMin = new kony.ui.Label({
        "height": "20%",
        "id": "lblSliderBotMin",
        "isVisible": true,
        "left": "0dp",
        "text": "0",
        "top": "65%",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [10, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var lblSliderBotMax = new kony.ui.Label({
        "height": "20%",
        "id": "lblSliderBotMax",
        "isVisible": true,
        "left": "0dp",
        "text": "59",
        "top": "65%",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "padding": [0, 0, 10, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var sliderMinutos = new kony.ui.Slider({
        "centerX": "50%",
        "height": "30%",
        "id": "sliderMinutos",
        "isVisible": true,
        "left": "73dp",
        "max": 59,
        "min": 0,
        "selectedValue": 40,
        "step": 1,
        "thumbImage": "slider.png",
        "top": "40%",
        "width": "75%",
        "zIndex": 1
    }, {}, {
        "thickness": 1
    });
    containerContentMid.add(lblMinutos, lblSliderBotMin, lblSliderBotMax, sliderMinutos);
    var containerContentBot = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "33%",
        "id": "containerContentBot",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "top": "66%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    containerContentBot.setDefaultUnit(kony.flex.DP);
    var textLeft = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "centerY": "50%",
        "height": "50%",
        "id": "textLeft",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "25%",
        "secureTextEntry": false,
        "text": "5",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_NUMERIC,
        "top": "0%",
        "width": "20%",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "autoComplete": false,
        "autoCorrect": false
    });
    var textRight = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "centerY": "50%",
        "height": "50%",
        "id": "textRight",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "55%",
        "secureTextEntry": false,
        "text": "10",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_NUMERIC,
        "top": "0%",
        "width": "20%",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "autoComplete": false,
        "autoCorrect": false
    });
    containerContentBot.add(textLeft, textRight);
    flexContainerContentParquimetro.add(Image0b2e686d3b3b444, containerContentTop, containerContentMid, containerContentBot);
    flexContainerParquimetro.add(flexContainerTituloParqu, flexContainerContentParquimetro);
    var btnEnviar = new kony.ui.Button({
        "centerX": "50%",
        "height": "6%",
        "id": "btnEnviar",
        "isVisible": true,
        "left": "80dp",
        "text": "Continuar",
        "top": "88%",
        "width": "27%",
        "zIndex": 2
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flexContent.add(flexContainerTitle, flexContainerParquimetro, btnEnviar);
    flexMain.add(flexContent);
    parquimetro.add(flexMain);
};

function parquimetroGlobals() {
    parquimetro = new kony.ui.Form2({
        "addWidgets": addWidgetsparquimetro,
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "bounces": false,
        "enableScrolling": false,
        "enabledForIdleTimeout": false,
        "horizontalScrollIndicator": true,
        "id": "parquimetro",
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
    parquimetro.info = {
        "kuid": "p2kwiet19724036342378"
    };
};