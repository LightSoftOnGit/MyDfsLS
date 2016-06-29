function addWidgetsfrmContacto() {
    frmContacto.setDefaultUnit(kony.flex.DP);
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
    var flexContainerImgBg = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "30%",
        "id": "flexContainerImgBg",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "top": "9%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flexContainerImgBg.setDefaultUnit(kony.flex.DP);
    var imgBg = new kony.ui.Image2({
        "height": "100%",
        "id": "imgBg",
        "isVisible": true,
        "left": "0dp",
        "src": "fotocontacto.png",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flexContainerImgBg.add(imgBg);
    var flexContainerBottom = new kony.ui.FlexContainer({
        "centerX": "50%",
        "clipBounds": true,
        "height": "65%",
        "id": "flexContainerBottom",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "top": "35%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flexContainerBottom.setDefaultUnit(kony.flex.DP);
    var imgTab = new kony.ui.Image2({
        "height": "100%",
        "id": "imgTab",
        "isVisible": true,
        "left": "0dp",
        "src": "tabcontacto.png",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var imgCorreo = new kony.ui.Image2({
        "height": "7%",
        "id": "imgCorreo",
        "isVisible": true,
        "left": "6%",
        "src": "iconomail.png",
        "top": "43%",
        "width": "7%",
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
        "top": "20%",
        "width": "7%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var Label0d0894324c7c640 = new kony.ui.Label({
        "id": "Label0d0894324c7c640",
        "isVisible": true,
        "left": "5%",
        "text": "Contacto",
        "top": "3%",
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
    var flexContainerCorreo = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "25%",
        "id": "flexContainerCorreo",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "onTouchStart": p2kwiet19724036341822_flexContainerCorreo_onTouchStart_seq0,
        "top": "38%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flexContainerCorreo.setDefaultUnit(kony.flex.DP);
    var richTextCorreo = new kony.ui.RichText({
        "height": "50%",
        "id": "richTextCorreo",
        "isVisible": true,
        "left": "20%",
        "text": "Correo Electrónico:\n",
        "top": "10%",
        "width": "90%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var btnCorreo = new kony.ui.Button({
        "bottom": "0",
        "height": "50%",
        "id": "btnCorreo",
        "isVisible": true,
        "left": "20%",
        "text": "clientes.financial@daimler.com",
        "width": "85%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flexContainerCorreo.add(richTextCorreo, btnCorreo);
    var flexContainerLlamada = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "25%",
        "id": "flexContainerLlamada",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "onTouchStart": p2kwiet19724036341822_flexContainerLlamada_onTouchStart_seq0,
        "top": "13%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flexContainerLlamada.setDefaultUnit(kony.flex.DP);
    var lblClientes = new kony.ui.RichText({
        "height": "50%",
        "id": "lblClientes",
        "isVisible": true,
        "left": "20%",
        "text": "Atención a Clientes MBF\n",
        "top": "10%",
        "width": "90%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var btnTelefono = new kony.ui.Button({
        "bottom": "0",
        "height": "50%",
        "id": "btnTelefono",
        "isVisible": true,
        "left": "20%",
        "text": "01 800 262 66 66",
        "width": "85%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flexContainerLlamada.add(lblClientes, btnTelefono);
    var flexContainerChat = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "19%",
        "id": "flexContainerChat",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "onTouchStart": p2kwiet19724036341822_flexContainerChat_onTouchStart_seq0,
        "top": "63%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flexContainerChat.setDefaultUnit(kony.flex.DP);
    var lblChat = new kony.ui.Label({
        "centerY": "50%",
        "height": "100%",
        "id": "lblChat",
        "isVisible": true,
        "left": "20%",
        "text": "Chat en linea",
        "top": "0%",
        "width": "80%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var imgChat = new kony.ui.Image2({
        "centerY": "50%",
        "height": "50%",
        "id": "imgChat",
        "isVisible": true,
        "left": "6%",
        "src": "iconochat.png",
        "top": "69%",
        "width": "7%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flexContainerChat.add(lblChat, imgChat);
    var flexContainerDistribuidores = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "18%",
        "id": "flexContainerDistribuidores",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "onTouchStart": p2kwiet19724036341822_flexContainerDistribuidores_onTouchStart_seq0,
        "top": "81%",
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
        "src": "iconodistribuidores.png",
        "top": "87%",
        "width": "7%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblDist = new kony.ui.Label({
        "centerY": "50%",
        "height": "100%",
        "id": "lblDist",
        "isVisible": true,
        "left": "20%",
        "text": "Distribuidores",
        "top": "88%",
        "width": "80%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    flexContainerDistribuidores.add(imgDist, lblDist);
    flexContainerBottom.add(imgTab, imgCorreo, imgTelefono, Label0d0894324c7c640, flexContainerCorreo, flexContainerLlamada, flexContainerChat, flexContainerDistribuidores);
    flexContent.add(flexContainerImgBg, flexContainerBottom);
    flexMain.add(flexContent);
    frmContacto.add(flexMain);
};

function frmContactoGlobals() {
    frmContacto = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmContacto,
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "bounces": false,
        "enableScrolling": false,
        "enabledForIdleTimeout": false,
        "horizontalScrollIndicator": true,
        "id": "frmContacto",
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
    frmContacto.info = {
        "kuid": "p2kwiet19724036341822"
    };
};