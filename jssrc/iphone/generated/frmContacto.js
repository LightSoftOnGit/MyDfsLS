function addWidgetsfrmContacto() {
    frmContacto.setDefaultUnit(kony.flex.DP);
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
        "top": "0.00%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flexContent.setDefaultUnit(kony.flex.DP);
    var flexContainerImgBg = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "40%",
        "id": "flexContainerImgBg",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "-5%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flexContainerImgBg.setDefaultUnit(kony.flex.DP);
    var imgBg = new kony.ui.Image2({
        "height": "100%",
        "id": "imgBg",
        "isVisible": true,
        "left": "0dp",
        "src": "distfotocontacto.png",
        "top": "0dp",
        "width": "100%"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flexContainerImgBg.add(imgBg);
    var flexContainerBottom = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "65%",
        "id": "flexContainerBottom",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "SkinFondoBlanco",
        "top": "35%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flexContainerBottom.setDefaultUnit(kony.flex.DP);
    var imgCorreo = new kony.ui.Image2({
        "height": "7%",
        "id": "imgCorreo",
        "isVisible": true,
        "left": "6%",
        "src": "disticonomail.png",
        "top": "43%",
        "width": "7%",
        "zIndex": 3
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
        "src": "disticonotelefono.png",
        "top": "20%",
        "width": "7%",
        "zIndex": 3
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var Label0d0894324c7c640 = new kony.ui.Label({
        "id": "Label0d0894324c7c640",
        "isVisible": true,
        "left": "5%",
        "skin": "lblTitle",
        "text": "Contacto",
        "top": "3%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 3
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var flexContainerCorreo = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "focusSkin": "flexContFocusGirsObscuro",
        "height": "25%",
        "id": "flexContainerCorreo",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "onTouchStart": AS_FlexContainer_b0319fbf336441bea468bee8ca389494,
        "skin": "slFbox",
        "top": "38%",
        "width": "100%",
        "zIndex": 3
    }, {}, {});
    flexContainerCorreo.setDefaultUnit(kony.flex.DP);
    var richTextCorreo = new kony.ui.RichText({
        "height": "50%",
        "id": "richTextCorreo",
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
    var btnCorreo = new kony.ui.Button({
        "bottom": 0,
        "focusSkin": "focusBtnTelefonoContacto",
        "height": "50%",
        "id": "btnCorreo",
        "isVisible": true,
        "left": "20%",
        "skin": "btnTelefonoContacto",
        "text": "clientes.financial@daimler.com",
        "width": "85%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    var Image04ce5f3e3031b49 = new kony.ui.Image2({
        "height": "5%",
        "id": "Image04ce5f3e3031b49",
        "isVisible": true,
        "left": "0dp",
        "src": "rayanegra.png",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flexContainerCorreo.add(richTextCorreo, btnCorreo, Image04ce5f3e3031b49);
    var flexContainerLlamada = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "focusSkin": "flexContFocusGirsObscuro",
        "height": "25%",
        "id": "flexContainerLlamada",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "onTouchStart": AS_FlexContainer_adecc1a720f54ce09121ba1d3927f4a5,
        "skin": "slFbox",
        "top": "13%",
        "width": "100%",
        "zIndex": 3
    }, {}, {});
    flexContainerLlamada.setDefaultUnit(kony.flex.DP);
    var lblClientes = new kony.ui.RichText({
        "height": "50%",
        "id": "lblClientes",
        "isVisible": true,
        "left": "20%",
        "linkSkin": "linkCorreoContacto",
        "skin": "richTextContacto",
        "text": "Atención a Clientes MBF\n",
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
    var btnTelefono = new kony.ui.Button({
        "bottom": 0,
        "focusSkin": "focusBtnCorreoContacto",
        "height": "50%",
        "id": "btnTelefono",
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
        "showProgressIndicator": true
    });
    flexContainerLlamada.add(lblClientes, btnTelefono);
    var flexContainerChat = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "focusSkin": "flexContFocusGirsObscuro",
        "height": "15%",
        "id": "flexContainerChat",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "onTouchStart": AS_FlexContainer_d11ca6ee04ac442893afae26181c316d,
        "skin": "newFlexContainerWhite",
        "top": "71%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flexContainerChat.setDefaultUnit(kony.flex.DP);
    var imgChat = new kony.ui.Image2({
        "centerY": "50%",
        "height": "50%",
        "id": "imgChat",
        "isVisible": true,
        "left": "6%",
        "src": "disticonochat.png",
        "top": "69%",
        "width": "7%",
        "zIndex": 3
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var btnChatEnLinea = new kony.ui.Button({
        "centerY": "50%",
        "focusSkin": "focusBlackButton",
        "height": "100%",
        "id": "btnChatEnLinea",
        "isVisible": true,
        "left": "0dp",
        "skin": "BotonWhite",
        "text": "Chat en Linea",
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
    var CopyImage03747581b9b3b44 = new kony.ui.Image2({
        "height": "5%",
        "id": "CopyImage03747581b9b3b44",
        "isVisible": true,
        "left": "0dp",
        "src": "rayanegra.png",
        "top": "0dp",
        "width": "100%",
        "zIndex": 3
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopyImage0cb7156476cc04d = new kony.ui.Image2({
        "height": "20%",
        "id": "CopyImage0cb7156476cc04d",
        "isVisible": true,
        "left": "90%",
        "src": "flechabotongris.png",
        "top": "40%",
        "width": "1.50%",
        "zIndex": 5
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flexContainerChat.add(imgChat, btnChatEnLinea, CopyImage03747581b9b3b44, CopyImage0cb7156476cc04d);
    var flexContainerDistribuidores = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "focusSkin": "flexContFocusGirsObscuro",
        "height": "15%",
        "id": "flexContainerDistribuidores",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "onTouchStart": AS_FlexContainer_263bd116128047b1915ba35629069c3e,
        "skin": "newFlexContainerBlack",
        "top": "85%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flexContainerDistribuidores.setDefaultUnit(kony.flex.DP);
    var imgDist = new kony.ui.Image2({
        "centerY": "50%",
        "height": "45%",
        "id": "imgDist",
        "isVisible": true,
        "left": "6%",
        "src": "disticonodistribuidores.png",
        "top": "87%",
        "width": "7%",
        "zIndex": 3
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var btnDistribuidores = new kony.ui.Button({
        "centerY": "50%",
        "focusSkin": "focusBlackButton",
        "height": "100%",
        "id": "btnDistribuidores",
        "isVisible": true,
        "left": "0dp",
        "skin": "BotonWhite",
        "text": "Distribuidores",
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
    var CopyImage06daba0ce5f9040 = new kony.ui.Image2({
        "height": "20%",
        "id": "CopyImage06daba0ce5f9040",
        "isVisible": true,
        "left": "90%",
        "src": "flechabotongris.png",
        "top": "40%",
        "width": "1.50%",
        "zIndex": 5
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flexContainerDistribuidores.add(imgDist, btnDistribuidores, CopyImage06daba0ce5f9040);
    var FlexContainer038c46e8e3bd64e = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "70%",
        "id": "FlexContainer038c46e8e3bd64e",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "NewFlexContainerWhiteCompleto",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    FlexContainer038c46e8e3bd64e.setDefaultUnit(kony.flex.DP);
    var FlexContainer0793f7577e20246 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "18%",
        "id": "FlexContainer0793f7577e20246",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "flexContainerBlackExtra",
        "top": "0dp",
        "width": "100%"
    }, {}, {});
    FlexContainer0793f7577e20246.setDefaultUnit(kony.flex.DP);
    FlexContainer0793f7577e20246.add();
    FlexContainer038c46e8e3bd64e.add(FlexContainer0793f7577e20246);
    flexContainerBottom.add(imgCorreo, imgTelefono, Label0d0894324c7c640, flexContainerCorreo, flexContainerLlamada, flexContainerChat, flexContainerDistribuidores, FlexContainer038c46e8e3bd64e);
    flexContent.add(flexContainerImgBg, flexContainerBottom);
    flexMain.add(flexContent);
    frmContacto.add(flexMain);
};

function frmContactoGlobals() {
    frmContacto = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmContacto,
        "allowHorizontalBounce": false,
        "bounces": false,
        "enableScrolling": false,
        "enabledForIdleTimeout": false,
        "footers": [FlexContainer099041029e4bc45],
        "headers": [CopyFlexContainer09da0f5890f1a44],
        "id": "frmContacto",
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
    frmContacto.info = {
        "notesId": "f2d72e30364343ce9d2a70f31c13dfd2",
        "kuid": "f2d72e30364343ce9d2a70f31c13dfd2"
    };
};