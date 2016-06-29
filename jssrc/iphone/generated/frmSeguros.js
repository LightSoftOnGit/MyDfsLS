function addWidgetsfrmSeguros() {
    frmSeguros.setDefaultUnit(kony.flex.DP);
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
        "height": "106%",
        "id": "flexContent",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "flexContent",
        "top": "-6%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flexContent.setDefaultUnit(kony.flex.DP);
    var FlexContainer0bddb570fd8234f = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "32%",
        "id": "FlexContainer0bddb570fd8234f",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "16%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    FlexContainer0bddb570fd8234f.setDefaultUnit(kony.flex.DP);
    var imgBg = new kony.ui.Image2({
        "height": "100%",
        "id": "imgBg",
        "isVisible": true,
        "left": "0dp",
        "src": "fotoseguros.png",
        "top": "0dp",
        "width": "100%"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    FlexContainer0bddb570fd8234f.add(imgBg);
    var flexContainerBottom = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
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
    var imgCorreo = new kony.ui.Image2({
        "height": "7%",
        "id": "imgCorreo",
        "isVisible": true,
        "left": "5.50%",
        "src": "menu5.png",
        "top": "45%",
        "width": "10%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var imgTelefono = new kony.ui.Image2({
        "height": "7%",
        "id": "imgTelefono",
        "isVisible": true,
        "left": "6%",
        "src": "iconotelefono.png",
        "top": "14%",
        "width": "10%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var FlexContainer0b684055aa4fd43 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "33%",
        "id": "FlexContainer0b684055aa4fd43",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "onTouchStart": AS_FlexContainer_c7b125344a254f24bd4fb1fadbcf5833,
        "skin": "slFbox",
        "top": "34%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    FlexContainer0b684055aa4fd43.setDefaultUnit(kony.flex.DP);
    var CopyrichTextCorreo0e55f26fe801549 = new kony.ui.RichText({
        "height": "50%",
        "id": "CopyrichTextCorreo0e55f26fe801549",
        "isVisible": true,
        "left": "20%",
        "linkSkin": "linkCorreoContacto",
        "skin": "richTextContacto",
        "text": "Correo Electrónico:\n",
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
    var lblCorreo = new kony.ui.Button({
        "bottom": -17,
        "focusSkin": "btnTelefonoContacto",
        "height": "134.33%",
        "id": "lblCorreo",
        "isVisible": true,
        "left": "0%",
        "skin": "btnTelefonoContacto",
        "text": "contacto.seguros@daimler.com",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [3, 7, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    FlexContainer0b684055aa4fd43.add(CopyrichTextCorreo0e55f26fe801549, lblCorreo);
    var CopyFlexContainer023fa4f12ff484c = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "33%",
        "id": "CopyFlexContainer023fa4f12ff484c",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "onTouchStart": AS_FlexContainer_f6a9dff89fdb4c7286fc28144d3cad83,
        "skin": "slFbox",
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
        "linkSkin": "linkCorreoContacto",
        "skin": "richTextContacto",
        "text": "Mercedes-Benz Insurance",
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
        "focusSkin": "btnTelefonoContacto",
        "height": "100%",
        "id": "lblTelefono",
        "isVisible": true,
        "left": "0%",
        "skin": "btnTelefonoContacto",
        "text": "01 800 262 66 66",
        "top": "5%",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 7, 22, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    CopyFlexContainer023fa4f12ff484c.add(CopyrichTextCorreo01b533fe2e4254f, lblTelefono);
    var Image04ce5f3e3031b49 = new kony.ui.Image2({
        "height": "5%",
        "id": "Image04ce5f3e3031b49",
        "isVisible": true,
        "left": "0dp",
        "src": "rayanegra.png",
        "top": "33%",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopyImage03c35a49c457c49 = new kony.ui.Image2({
        "height": "5%",
        "id": "CopyImage03c35a49c457c49",
        "isVisible": false,
        "left": "0dp",
        "src": "rayanegra.png",
        "top": "66%",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var flexContainerDistribuidores = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "focusSkin": "flexContFocusGirsObscuro",
        "height": "34%",
        "id": "flexContainerDistribuidores",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "onTouchStart": AS_FlexContainer_5ad156dfa6184fc4b0fde86c6c602c3f,
        "skin": "newFlexContainerBlack",
        "top": "66%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flexContainerDistribuidores.setDefaultUnit(kony.flex.DP);
    var imgDist = new kony.ui.Image2({
        "centerY": "50%",
        "height": "50%",
        "id": "imgDist",
        "isVisible": true,
        "left": "6%",
        "src": "iconomiseguro.png",
        "top": "87%",
        "width": "8%",
        "zIndex": 3
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopyButton0fc4e0d07bd7746 = new kony.ui.Button({
        "centerY": "50.11%",
        "focusSkin": "focusBlackButton",
        "height": "100%",
        "id": "CopyButton0fc4e0d07bd7746",
        "isVisible": true,
        "left": "0dp",
        "skin": "BotonWhite",
        "text": "Mi Seguro",
        "top": "7dp",
        "width": "100%",
        "zIndex": 2
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "displayText": true,
        "padding": [20, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    var CopyImage0503041f4570c4a = new kony.ui.Image2({
        "centerY": "50%",
        "height": "20%",
        "id": "CopyImage0503041f4570c4a",
        "isVisible": true,
        "left": "90%",
        "src": "flechabotongris.png",
        "top": "50%",
        "width": "1.50%",
        "zIndex": 5
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flexContainerDistribuidores.add(imgDist, CopyButton0fc4e0d07bd7746, CopyImage0503041f4570c4a);
    var CopyImage0c8ec9a8ba0e74e = new kony.ui.Image2({
        "height": "5%",
        "id": "CopyImage0c8ec9a8ba0e74e",
        "isVisible": true,
        "left": "0dp",
        "src": "rayanegra.png",
        "top": "65%",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flexContainerBottom.add(imgCorreo, imgTelefono, FlexContainer0b684055aa4fd43, CopyFlexContainer023fa4f12ff484c, Image04ce5f3e3031b49, CopyImage03c35a49c457c49, flexContainerDistribuidores, CopyImage0c8ec9a8ba0e74e);
    var flexContainerTitle = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "10%",
        "id": "flexContainerTitle",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "7%",
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
        "focusSkin": "focusBtnBackArrendamiento",
        "height": "25%",
        "id": "btnBack",
        "isVisible": true,
        "left": "8%",
        "onClick": AS_Button_211805c94e634988a627f7f0ba88111b,
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
    flexContent.add(FlexContainer0bddb570fd8234f, flexContainerBottom, flexContainerTitle);
    flexMain.add(flexContent);
    frmSeguros.add(flexMain);
};

function frmSegurosGlobals() {
    frmSeguros = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmSeguros,
        "allowHorizontalBounce": false,
        "bounces": false,
        "enableScrolling": false,
        "enabledForIdleTimeout": false,
        "footers": [FlexContainer099041029e4bc45],
        "headers": [CopyFlexContainer09da0f5890f1a44],
        "id": "frmSeguros",
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
        "statusBarStyle": constants.STATUS_BAR_STYLE_LIGHT_CONTENT,
        "titleBar": false
    });
    frmSeguros.info = {
        "notesId": "deccabb8d3564a5fbf03d53efe81cfee",
        "kuid": "deccabb8d3564a5fbf03d53efe81cfee"
    };
};