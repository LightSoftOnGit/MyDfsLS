function addWidgetsfrmAvisoPrivacidad() {
    frmAvisoPrivacidad.setDefaultUnit(kony.flex.DP);
    var bgTermsAndConditions = new kony.ui.Image2({
        "bottom": "0px",
        "centerX": "50%",
        "height": "100%",
        "id": "bgTermsAndConditions",
        "isVisible": true,
        "left": "0px",
        "right": "0px",
        "src": "bgmercedez.png",
        "top": "0px",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var imgLogo = new kony.ui.Image2({
        "centerX": "50.00%",
        "centerY": "6.15%",
        "height": "6.30%",
        "id": "imgLogo",
        "isVisible": true,
        "left": "0%",
        "src": "mymbflogo.png",
        "top": "10%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblTitle = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "15%",
        "height": "5%",
        "id": "lblTitle",
        "isVisible": true,
        "left": "0dp",
        "maxHeight": "20",
        "maxWidth": "700px",
        "minHeight": "10",
        "minWidth": "500px",
        "text": "Aviso privacidad",
        "top": "95dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var btnAceptar = new kony.ui.Button({
        "bottom": "0",
        "height": "7.50%",
        "id": "btnAceptar",
        "isVisible": true,
        "right": "0",
        "text": "Aceptar",
        "width": "50%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var FlexContainer03898a243477842 = new kony.ui.FlexContainer({
        "centerX": "50%",
        "clipBounds": true,
        "height": "8%",
        "id": "FlexContainer03898a243477842",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "4dp",
        "top": "19.50%",
        "width": "93%",
        "zIndex": 3
    }, {}, {});
    FlexContainer03898a243477842.setDefaultUnit(kony.flex.DP);
    var richTextTitle = new kony.ui.RichText({
        "centerX": "50%",
        "centerY": "25%",
        "height": "100%",
        "id": "richTextTitle",
        "isVisible": true,
        "text": "Aviso de Privacidad",
        "width": "100%",
        "zIndex": 2
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [3, 3, 0, 0],
        "paddingInPixel": false
    }, {});
    FlexContainer03898a243477842.add(richTextTitle);
    var btnCancelar = new kony.ui.Button({
        "bottom": "0",
        "height": "7.50%",
        "id": "btnCancelar",
        "isVisible": false,
        "left": "0dp",
        "text": "Cancelar",
        "width": "50%",
        "zIndex": 3
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var flexContainer186678246923419 = new kony.ui.FlexContainer({
        "centerX": "50.0%",
        "clipBounds": true,
        "height": "65%",
        "id": "flexContainer186678246923419",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "top": "25%",
        "width": "93%",
        "zIndex": 3
    }, {}, {});
    flexContainer186678246923419.setDefaultUnit(kony.flex.DP);
    var scrollContainerTC = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": true,
        "allowVerticalBounce": true,
        "bounces": true,
        "enableScrolling": true,
        "height": "100%",
        "horizontalScrollIndicator": true,
        "id": "scrollContainerTC",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0.0%",
        "pagingEnabled": false,
        "scrollDirection": kony.flex.SCROLL_VERTICAL,
        "top": "0.0%",
        "verticalScrollIndicator": true,
        "width": "100%",
        "zIndex": 3
    }, {}, {});
    scrollContainerTC.setDefaultUnit(kony.flex.DP);
    var richTextTxt = new kony.ui.RichText({
        "id": "richTextTxt",
        "isVisible": true,
        "left": "0dp",
        "maxHeight": "2000.0%",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "padding": [1, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    scrollContainerTC.add(richTextTxt);
    flexContainer186678246923419.add(scrollContainerTC);
    frmAvisoPrivacidad.add(bgTermsAndConditions, imgLogo, lblTitle, btnAceptar, FlexContainer03898a243477842, btnCancelar, flexContainer186678246923419);
};

function frmAvisoPrivacidadGlobals() {
    frmAvisoPrivacidad = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAvisoPrivacidad,
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "bounces": false,
        "enableScrolling": true,
        "enabledForIdleTimeout": false,
        "horizontalScrollIndicator": true,
        "id": "frmAvisoPrivacidad",
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
    frmAvisoPrivacidad.info = {
        "kuid": "p2kwiet19724036341672"
    };
};