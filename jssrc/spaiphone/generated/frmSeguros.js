function addWidgetsfrmSeguros() {
    frmSeguros.setDefaultUnit(kony.flex.DP);
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
        "height": "106%",
        "id": "flexContent",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "top": "-6%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flexContent.setDefaultUnit(kony.flex.DP);
    var FlexContainer0bddb570fd8234f = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "32%",
        "id": "FlexContainer0bddb570fd8234f",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "top": "20%",
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
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    FlexContainer0bddb570fd8234f.add(imgBg);
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
    var Image04b3cdf2ca11e4e = new kony.ui.Image2({
        "height": "100%",
        "id": "Image04b3cdf2ca11e4e",
        "isVisible": true,
        "left": "0dp",
        "src": "tabseguros2.png",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var FlexContainer0b684055aa4fd43 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "25%",
        "id": "FlexContainer0b684055aa4fd43",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "onTouchStart": p2kwiet19724036341982_FlexContainer0b684055aa4fd43_onTouchStart_seq0,
        "top": "35%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    FlexContainer0b684055aa4fd43.setDefaultUnit(kony.flex.DP);
    var CopyrichTextCorreo0e55f26fe801549 = new kony.ui.RichText({
        "height": "50%",
        "id": "CopyrichTextCorreo0e55f26fe801549",
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
    var lblCorreo = new kony.ui.Button({
        "bottom": "0",
        "height": "50%",
        "id": "lblCorreo",
        "isVisible": true,
        "left": "20%",
        "text": "contacto.seguros@daimler.com",
        "width": "85%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopyimgCorreo046be39abaace4b = new kony.ui.Image2({
        "centerY": "50%",
        "height": "30%",
        "id": "CopyimgCorreo046be39abaace4b",
        "isVisible": true,
        "left": "5%",
        "src": "iconomail.png",
        "width": "10%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    FlexContainer0b684055aa4fd43.add(CopyrichTextCorreo0e55f26fe801549, lblCorreo, CopyimgCorreo046be39abaace4b);
    var CopyFlexContainer023fa4f12ff484c = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "25%",
        "id": "CopyFlexContainer023fa4f12ff484c",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "onTouchStart": p2kwiet19724036341982_CopyFlexContainer023fa4f12ff484c_onTouchStart_seq0,
        "top": "4%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    CopyFlexContainer023fa4f12ff484c.setDefaultUnit(kony.flex.DP);
    var CopyrichTextCorreo01b533fe2e4254f = new kony.ui.RichText({
        "height": "50%",
        "id": "CopyrichTextCorreo01b533fe2e4254f",
        "isVisible": true,
        "left": "20%",
        "text": "Mercedes-Benz Insurance",
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
    var CopyimgTelefono047e92cc480ec42 = new kony.ui.Image2({
        "centerY": "50%",
        "height": "30%",
        "id": "CopyimgTelefono047e92cc480ec42",
        "isVisible": true,
        "left": "5%",
        "src": "iconotelefono.png",
        "width": "10%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    CopyFlexContainer023fa4f12ff484c.add(CopyrichTextCorreo01b533fe2e4254f, lblTelefono, CopyimgTelefono047e92cc480ec42);
    var CopyFlexContainer095eff3b3aca048 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "25%",
        "id": "CopyFlexContainer095eff3b3aca048",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "onTouchStart": p2kwiet19724036341982_CopyFlexContainer095eff3b3aca048_onTouchStart_seq0,
        "top": "70%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    CopyFlexContainer095eff3b3aca048.setDefaultUnit(kony.flex.DP);
    var Label0fb00206ee1984b = new kony.ui.Label({
        "centerY": "50%",
        "id": "Label0fb00206ee1984b",
        "isVisible": true,
        "left": "20%",
        "text": "Mi Seguro",
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
    var CopyButton0fc4e0d07bd7746 = new kony.ui.Button({
        "centerY": "50%",
        "height": "45%",
        "id": "CopyButton0fc4e0d07bd7746",
        "isVisible": true,
        "left": "88%",
        "top": "77%",
        "width": "5%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopyimgMiSeguro0fb9e71771f534b = new kony.ui.Image2({
        "centerY": "50%",
        "height": "60%",
        "id": "CopyimgMiSeguro0fb9e71771f534b",
        "isVisible": true,
        "left": "4%",
        "src": "iconomiseguro.png",
        "width": "15%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    CopyFlexContainer095eff3b3aca048.add(Label0fb00206ee1984b, CopyButton0fc4e0d07bd7746, CopyimgMiSeguro0fb9e71771f534b);
    flexContainerBottom.add(Image04b3cdf2ca11e4e, FlexContainer0b684055aa4fd43, CopyFlexContainer023fa4f12ff484c, CopyFlexContainer095eff3b3aca048);
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
        "onClick": p2kwiet19724036341982_btnBack_onClick_seq0,
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
    flexContent.add(FlexContainer0bddb570fd8234f, flexContainerBottom, flexContainerTitle);
    flexMain.add(flexContent);
    frmSeguros.add(flexMain);
};

function frmSegurosGlobals() {
    frmSeguros = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmSeguros,
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "bounces": false,
        "enableScrolling": false,
        "enabledForIdleTimeout": false,
        "horizontalScrollIndicator": true,
        "id": "frmSeguros",
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
    frmSeguros.info = {
        "kuid": "p2kwiet19724036341982"
    };
};