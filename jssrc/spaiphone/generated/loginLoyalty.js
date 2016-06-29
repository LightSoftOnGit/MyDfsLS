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
        "top": "5%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flexContainerTitle.setDefaultUnit(kony.flex.DP);
    var lblTitle = new kony.ui.Label({
        "centerX": "50%",
        "id": "lblTitle",
        "isVisible": true,
        "text": "Loyalty Program",
        "top": "10%",
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
        "onClick": p2kwiet19724036342188_btnBack_onClick_seq0,
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
    }, {}, {});
    flexScrollContainer2.setDefaultUnit(kony.flex.DP);
    var richTextTexto = new kony.ui.RichText({
        "height": "80%",
        "id": "richTextTexto",
        "isVisible": true,
        "left": "0dp",
        "top": "18%",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "padding": [4, 4, 4, 4],
        "paddingInPixel": false
    }, {});
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
        "renderAsAnchor": false,
        "textCopyable": false
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
    }, {});
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
        "text": "Descargar",
        "top": "87%",
        "width": "28%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var btnEnviar = new kony.ui.Button({
        "centerX": "30%",
        "height": "9%",
        "id": "btnEnviar",
        "isVisible": true,
        "right": "15%",
        "text": "Enviar",
        "top": "87%",
        "width": "28%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flexContentContainerTrue.add(flexScrollContainer2, btnDescargar, btnEnviar);
    var imgContainer = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "25%",
        "id": "imgContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "top": "14%",
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
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
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
    }, {}, {});
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
    }, {});
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
        "horizontalScrollIndicator": true,
        "id": "loginLoyalty",
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
    loginLoyalty.info = {
        "kuid": "p2kwiet19724036342188"
    };
};