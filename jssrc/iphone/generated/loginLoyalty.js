function addWidgetsloginLoyalty() {
    loginLoyalty.setDefaultUnit(kony.flex.DP);
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
        "top": "0%",
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
    var lblTitle = new kony.ui.Label({
        "centerX": "50%",
        "id": "lblTitle",
        "isVisible": true,
        "skin": "lblTitle",
        "text": "Loyalty Program",
        "top": "10%",
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
        "onClick": p2kwiet19724036342188_btnBack_onClick_seq0,
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
    flexContainerTitle.add(FlexContainer0087bc141411a45, lblTitle, btnBack);
    var flexContentContainerTrue = new kony.ui.FlexContainer({
        "centerX": "50%",
        "clipBounds": true,
        "height": "61%",
        "id": "flexContentContainerTrue",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "top": "38%",
        "width": "100%",
        "zIndex": 2
    }, {}, {});
    flexContentContainerTrue.setDefaultUnit(kony.flex.DP);
    var flexScrollContainer2 = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": true,
        "allowVerticalBounce": true,
        "bounces": true,
        "enableScrolling": true,
        "height": "78.43%",
        "horizontalScrollIndicator": true,
        "id": "flexScrollContainer2",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "pagingEnabled": false,
        "scrollDirection": kony.flex.SCROLL_VERTICAL,
        "top": "0dp",
        "verticalScrollIndicator": true,
        "width": "100%",
        "zIndex": 1
    }, {}, {
        "bouncesZoom": true,
        "maxZoomScale": 1,
        "minZoomScale": 1,
        "zoomScale": 1
    });
    flexScrollContainer2.setDefaultUnit(kony.flex.DP);
    var richTextTexto = new kony.ui.RichText({
        "height": "80%",
        "id": "richTextTexto",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslRichText067927812614b47",
        "text": "Edgar,\n<br>\n<br>\nEn Daimler Financial Services sabemos el esfuerzo y dedicación que has realizado durante el financiamiento de tu Vehículo.\n<br>\n<br>\nDicho compromiso merece un reconocimiento, por lo cual a continuación encontrarás un certificado que avala la preaprobación de un crédito a Daimler Financial Services México; con la finalidad de que lo hagas válido en tu distribuidor autorizado y disfrutes del placer que es volver a estrenar un Freigtliner o un Mercedes:",
        "top": "18%",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "padding": [4, 4, 4, 4],
        "paddingInPixel": false
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var lblNombre = new kony.ui.Label({
        "height": "10%",
        "id": "lblNombre",
        "isVisible": true,
        "left": "0dp",
        "text": "Nombre",
        "top": "10%",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [4, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var imgCertificado = new kony.ui.Image2({
        "centerX": "50%",
        "height": "52.50%",
        "id": "imgCertificado",
        "isVisible": true,
        "left": "0dp",
        "src": "fotocertificado.png",
        "top": "105%",
        "width": "85%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
    });
    var FlexContainer0273923b0770d4f = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "10%",
        "id": "FlexContainer0273923b0770d4f",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "top": "160%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    FlexContainer0273923b0770d4f.setDefaultUnit(kony.flex.DP);
    FlexContainer0273923b0770d4f.add();
    flexScrollContainer2.add(richTextTexto, lblNombre, imgCertificado, FlexContainer0273923b0770d4f);
    var btnDescargar = new kony.ui.Button({
        "centerX": "70%",
        "height": "9%",
        "id": "btnDescargar",
        "isVisible": true,
        "right": "15%",
        "skin": "newBtnEnviarGray",
        "text": "Descargar",
        "top": "87%",
        "width": "28%",
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
    var btnEnviar = new kony.ui.Button({
        "centerX": "30%",
        "height": "9%",
        "id": "btnEnviar",
        "isVisible": true,
        "right": "15%",
        "skin": "newBtnEnviarGray",
        "text": "Enviar",
        "top": "87%",
        "width": "28%",
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
    flexContentContainerTrue.add(flexScrollContainer2, btnDescargar, btnEnviar);
    var imgContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "27%",
        "id": "imgContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "top": "12%",
        "width": "100%",
        "zIndex": 2
    }, {}, {});
    imgContainer.setDefaultUnit(kony.flex.DP);
    var imgCbz = new kony.ui.Image2({
        "height": "100%",
        "id": "imgCbz",
        "isVisible": true,
        "left": "0dp",
        "src": "fotoloyalty.png",
        "top": "0dp",
        "width": "100%",
        "zIndex": 2
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
    });
    imgContainer.add(imgCbz);
    var flexContentContainerFalse = new kony.ui.FlexContainer({
        "centerX": "50%",
        "clipBounds": true,
        "height": "50%",
        "id": "flexContentContainerFalse",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "top": "34%",
        "width": "100%",
        "zIndex": 2
    }, {}, {});
    flexContentContainerFalse.setDefaultUnit(kony.flex.DP);
    var flexScrollContainer = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": true,
        "allowVerticalBounce": true,
        "bounces": true,
        "enableScrolling": true,
        "height": "100%",
        "horizontalScrollIndicator": true,
        "id": "flexScrollContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "pagingEnabled": false,
        "scrollDirection": kony.flex.SCROLL_HORIZONTAL,
        "top": "0dp",
        "verticalScrollIndicator": true,
        "width": "100%",
        "zIndex": 1
    }, {}, {
        "bouncesZoom": true,
        "maxZoomScale": 1,
        "minZoomScale": 1,
        "zoomScale": 1
    });
    flexScrollContainer.setDefaultUnit(kony.flex.DP);
    var RichText05efd7036dac146 = new kony.ui.RichText({
        "height": "100%",
        "id": "RichText05efd7036dac146",
        "isVisible": true,
        "left": "0dp",
        "onClick": p2kwiet19724036342188_RichText05efd7036dac146_onClick_seq0,
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [4, 4, 4, 4],
        "paddingInPixel": false
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    flexScrollContainer.add(RichText05efd7036dac146);
    flexContentContainerFalse.add(flexScrollContainer);
    flexContent.add(flexContainerTitle, flexContentContainerTrue, imgContainer, flexContentContainerFalse);
    flexMain.add(flexContent);
    loginLoyalty.add(flexMain);
};

function loginLoyaltyGlobals() {
    loginLoyalty = new kony.ui.Form2({
        "addWidgets": addWidgetsloginLoyalty,
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "bounces": false,
        "enableScrolling": false,
        "enabledForIdleTimeout": false,
        "footers": [FlexContainer099041029e4bc45],
        "headers": [CopyFlexContainer09da0f5890f1a44],
        "horizontalScrollIndicator": true,
        "id": "loginLoyalty",
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
        "configureStatusBarStyle": true,
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
    loginLoyalty.info = {
        "kuid": "p2kwiet19724036342188"
    };
};