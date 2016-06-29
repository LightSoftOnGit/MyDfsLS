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
    var lblTitle = new kony.ui.Label({
        "centerX": "50%",
        "id": "lblTitle",
        "isVisible": true,
        "text": "Seguros",
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
        "onClick": p2kwiet19724036341937_btnBack_onClick_seq0,
        "top": "10%",
        "width": "10%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flexContainerTitle.add(lblTitle, btnBack);
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
    }, {});
    flexContainerTop.add(imgBg);
    var flexContainerBottom = new kony.ui.FlexContainer({
        "centerX": "50%",
        "clipBounds": true,
        "height": "50%",
        "id": "flexContainerBottom",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "top": "50%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flexContainerBottom.setDefaultUnit(kony.flex.DP);
    var imgTab = new kony.ui.Image2({
        "height": "100%",
        "id": "imgTab",
        "isVisible": true,
        "left": "0dp",
        "src": "tabmiseguro.png",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
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
    }, {});
    var richTextAsegurado = new kony.ui.RichText({
        "height": "10%",
        "id": "richTextAsegurado",
        "isVisible": true,
        "left": "5%",
        "text": "Asegurado",
        "top": "31%",
        "width": "25%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var richTextNombreAsegurado = new kony.ui.RichText({
        "height": "9.75%",
        "id": "richTextNombreAsegurado",
        "isVisible": true,
        "right": "5.0%",
        "text": "XXXXXXXX",
        "top": "30.51%",
        "width": "65%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var richTextContrato = new kony.ui.RichText({
        "height": "10%",
        "id": "richTextContrato",
        "isVisible": true,
        "left": "5%",
        "text": "Contrato",
        "top": "48%",
        "width": "25%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var richTextNoContrato = new kony.ui.RichText({
        "height": "10%",
        "id": "richTextNoContrato",
        "isVisible": true,
        "right": "5%",
        "text": "00000000",
        "top": "48%",
        "width": "65%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var richTextPoliza = new kony.ui.RichText({
        "height": "10%",
        "id": "richTextPoliza",
        "isVisible": true,
        "left": "5%",
        "text": "No. Póliza",
        "top": "65%",
        "width": "25%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var richTextNoPoliza = new kony.ui.RichText({
        "height": "10%",
        "id": "richTextNoPoliza",
        "isVisible": true,
        "right": "5%",
        "text": "00000000",
        "top": "65%",
        "width": "65%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var richTextSerie = new kony.ui.RichText({
        "height": "15%",
        "id": "richTextSerie",
        "isVisible": true,
        "left": "5%",
        "text": "No. de<br>\nSerie/VIN",
        "top": "82%",
        "width": "25%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var richTextNoSerie = new kony.ui.RichText({
        "height": "10%",
        "id": "richTextNoSerie",
        "isVisible": true,
        "right": "5%",
        "text": "XXXXXXXX",
        "top": "83%",
        "width": "65%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
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
        "text": "Aseguradora Qualitas",
        "top": "10%",
        "width": "90%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblTelefono = new kony.ui.Button({
        "bottom": "0",
        "height": "50%",
        "id": "lblTelefono",
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
    CopyFlexContainer023fa4f12ff484c.add(CopyrichTextCorreo01b533fe2e4254f, lblTelefono);
    flexContainerBottom.add(imgTab, imgTelefono, richTextAsegurado, richTextNombreAsegurado, richTextContrato, richTextNoContrato, richTextPoliza, richTextNoPoliza, richTextSerie, richTextNoSerie, CopyFlexContainer023fa4f12ff484c);
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
        "horizontalScrollIndicator": true,
        "id": "frmMiSeguro",
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
    frmMiSeguro.info = {
        "kuid": "p2kwiet19724036341937"
    };
};