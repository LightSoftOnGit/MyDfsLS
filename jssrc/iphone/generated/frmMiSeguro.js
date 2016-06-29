function addWidgetsfrmMiSeguro() {
    frmMiSeguro.setDefaultUnit(kony.flex.DP);
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
    var FlexContainer06f3ab4c0569243 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "70%",
        "id": "FlexContainer06f3ab4c0569243",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox0b068ca7e29b44a",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    FlexContainer06f3ab4c0569243.setDefaultUnit(kony.flex.DP);
    FlexContainer06f3ab4c0569243.add();
    var lblTitle = new kony.ui.Label({
        "centerX": "50%",
        "id": "lblTitle",
        "isVisible": true,
        "skin": "lblTitle",
        "text": "Seguros",
        "top": "13%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
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
        "onClick": p2kwiet19724036341937_btnBack_onClick_seq0,
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
    flexContainerTitle.add(FlexContainer06f3ab4c0569243, lblTitle, btnBack);
    var flexContainerTop = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "31.50%",
        "id": "flexContainerTop",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "top": "20%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flexContainerTop.setDefaultUnit(kony.flex.DP);
    var imgBg = new kony.ui.Image2({
        "height": "100%",
        "id": "imgBg",
        "isVisible": true,
        "left": "0dp",
        "src": "fotoseguros.png",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
    });
    flexContainerTop.add(imgBg);
    var flexContainerBottom = new kony.ui.FlexContainer({
        "centerX": "50%",
        "clipBounds": true,
        "height": "50%",
        "id": "flexContainerBottom",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "newFlexContainerWhite",
        "top": "50%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flexContainerBottom.setDefaultUnit(kony.flex.DP);
    var imgTelefono = new kony.ui.Image2({
        "height": "7%",
        "id": "imgTelefono",
        "isVisible": true,
        "left": "6%",
        "src": "iconotelefono.png",
        "top": "8%",
        "width": "10%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
    });
    var richTextAsegurado = new kony.ui.RichText({
        "height": "10%",
        "id": "richTextAsegurado",
        "isVisible": true,
        "left": "5%",
        "skin": "richTextSegurosGris",
        "text": "Asegurado",
        "top": "31%",
        "width": "25%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var richTextNombreAsegurado = new kony.ui.RichText({
        "height": "9.75%",
        "id": "richTextNombreAsegurado",
        "isVisible": true,
        "right": "5.0%",
        "skin": "richTextSegurosGris",
        "text": "XXXXXXXX",
        "top": "30.51%",
        "width": "65%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var richTextContrato = new kony.ui.RichText({
        "height": "10%",
        "id": "richTextContrato",
        "isVisible": true,
        "left": "5%",
        "skin": "richTextSegurosGris",
        "text": "Contrato",
        "top": "48%",
        "width": "25%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var richTextNoContrato = new kony.ui.RichText({
        "height": "10%",
        "id": "richTextNoContrato",
        "isVisible": true,
        "right": "5%",
        "skin": "richTextSegurosGris",
        "text": "00000000",
        "top": "48%",
        "width": "65%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var richTextPoliza = new kony.ui.RichText({
        "height": "10%",
        "id": "richTextPoliza",
        "isVisible": true,
        "left": "5%",
        "skin": "richTextSegurosGris",
        "text": "No. Póliza",
        "top": "65%",
        "width": "25%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var richTextNoPoliza = new kony.ui.RichText({
        "height": "10%",
        "id": "richTextNoPoliza",
        "isVisible": true,
        "right": "5%",
        "skin": "richTextSegurosGris",
        "text": "00000000",
        "top": "65%",
        "width": "65%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var richTextSerie = new kony.ui.RichText({
        "height": "15%",
        "id": "richTextSerie",
        "isVisible": true,
        "left": "5%",
        "skin": "richTextSegurosGris",
        "text": "No. de<br>\nSerie/VIN",
        "top": "82%",
        "width": "25%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var richTextNoSerie = new kony.ui.RichText({
        "height": "10%",
        "id": "richTextNoSerie",
        "isVisible": true,
        "right": "5%",
        "skin": "richTextSegurosGris",
        "text": "XXXXXXXX",
        "top": "83%",
        "width": "65%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var CopyFlexContainer023fa4f12ff484c = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "25%",
        "id": "CopyFlexContainer023fa4f12ff484c",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "onTouchStart": p2kwiet19724036341937_CopyFlexContainer023fa4f12ff484c_onTouchStart_seq0,
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    CopyFlexContainer023fa4f12ff484c.setDefaultUnit(kony.flex.DP);
    var CopyrichTextCorreo01b533fe2e4254f = new kony.ui.RichText({
        "height": "50%",
        "id": "CopyrichTextCorreo01b533fe2e4254f",
        "isVisible": true,
        "left": "20%",
        "skin": "richTextContacto",
        "text": "Aseguradora Qualitas",
        "top": "10%",
        "width": "90%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var lblTelefono = new kony.ui.Button({
        "bottom": "0",
        "height": "50%",
        "id": "lblTelefono",
        "isVisible": true,
        "left": "20%",
        "skin": "btnTelefonoContacto",
        "text": "01 800 262 66 66",
        "width": "85%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    CopyFlexContainer023fa4f12ff484c.add(CopyrichTextCorreo01b533fe2e4254f, lblTelefono);
    var Image0507e78bc115b48 = new kony.ui.Image2({
        "height": "5%",
        "id": "Image0507e78bc115b48",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "rayanegra.png",
        "top": "25%",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopyImage06ee6b5ec4fa74d = new kony.ui.Image2({
        "height": "5%",
        "id": "CopyImage06ee6b5ec4fa74d",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "rayanegra.png",
        "top": "42%",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopyImage0ac0bb9aa73664b = new kony.ui.Image2({
        "height": "5%",
        "id": "CopyImage0ac0bb9aa73664b",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "rayanegra.png",
        "top": "60%",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopyImage0d8280ce9ba0844 = new kony.ui.Image2({
        "height": "5%",
        "id": "CopyImage0d8280ce9ba0844",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "rayanegra.png",
        "top": "77%",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flexContainerBottom.add(imgTelefono, richTextAsegurado, richTextNombreAsegurado, richTextContrato, richTextNoContrato, richTextPoliza, richTextNoPoliza, richTextSerie, richTextNoSerie, CopyFlexContainer023fa4f12ff484c, Image0507e78bc115b48, CopyImage06ee6b5ec4fa74d, CopyImage0ac0bb9aa73664b, CopyImage0d8280ce9ba0844);
    flexContent.add(flexContainerTitle, flexContainerTop, flexContainerBottom);
    flexMain.add(flexContent);
    frmMiSeguro.add(flexMain);
};

function frmMiSeguroGlobals() {
    frmMiSeguro = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmMiSeguro,
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "bounces": false,
        "enableScrolling": false,
        "enabledForIdleTimeout": false,
        "footers": [FlexContainer099041029e4bc45],
        "headers": [CopyFlexContainer09da0f5890f1a44],
        "horizontalScrollIndicator": true,
        "id": "frmMiSeguro",
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
    frmMiSeguro.info = {
        "kuid": "p2kwiet19724036341937"
    };
};