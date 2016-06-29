function addWidgetsfrmAvisoPrivacidad() {
    frmAvisoPrivacidad.setDefaultUnit(kony.flex.DP);
    var flexContainerTitle = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "10%",
        "id": "flexContainerTitle",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "5%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flexContainerTitle.setDefaultUnit(kony.flex.DP);
    var FlexContainer06d048ab9e72e49 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "FlexContainer06d048ab9e72e49",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox0b068ca7e29b44a",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    FlexContainer06d048ab9e72e49.setDefaultUnit(kony.flex.DP);
    FlexContainer06d048ab9e72e49.add();
    var CopyimgBack0470ef69a03f140 = new kony.ui.Image2({
        "height": "30%",
        "id": "CopyimgBack0470ef69a03f140",
        "isVisible": false,
        "left": "3%",
        "skin": "slImage",
        "src": "flechaatras.png",
        "top": "120.0%",
        "width": "10%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
    });
    flexContainerTitle.add(FlexContainer06d048ab9e72e49, CopyimgBack0470ef69a03f140);
    var btnAceptar = new kony.ui.Button({
        "bottom": "0",
        "height": "7.50%",
        "id": "btnAceptar",
        "isVisible": true,
        "right": "0",
        "skin": "newBtnEnviarGray",
        "text": "Aceptar",
        "width": "50%",
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
        "skin": "richTextScrollTerminos",
        "text": "Aviso de Privacidad",
        "width": "100%",
        "zIndex": 2
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [3, 3, 0, 0],
        "paddingInPixel": false
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    FlexContainer03898a243477842.add(richTextTitle);
    var btnCancelar = new kony.ui.Button({
        "bottom": "0",
        "height": "7.50%",
        "id": "btnCancelar",
        "isVisible": false,
        "left": "0dp",
        "skin": "newBtnEnviarGray",
        "text": "Cancelar",
        "width": "50%",
        "zIndex": 3
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
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
    }, {}, {
        "bouncesZoom": true,
        "maxZoomScale": 1,
        "minZoomScale": 1,
        "zoomScale": 1
    });
    scrollContainerTC.setDefaultUnit(kony.flex.DP);
    var richTextTxt = new kony.ui.RichText({
        "id": "richTextTxt",
        "isVisible": true,
        "left": "0dp",
        "maxHeight": "2000.0%",
        "skin": "richTextScrollTerminos",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "padding": [1, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    scrollContainerTC.add(richTextTxt);
    flexContainer186678246923419.add(scrollContainerTC);
    var lblTitle = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "10%",
        "height": "5%",
        "id": "lblTitle",
        "isVisible": true,
        "left": "0dp",
        "maxHeight": "20",
        "maxWidth": "700px",
        "minHeight": "10",
        "minWidth": "500px",
        "skin": "lblTitle",
        "text": "Aviso privacidad",
        "top": "95dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    frmAvisoPrivacidad.add(flexContainerTitle, btnAceptar, FlexContainer03898a243477842, btnCancelar, flexContainer186678246923419, lblTitle);
};

function frmAvisoPrivacidadGlobals() {
    frmAvisoPrivacidad = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAvisoPrivacidad,
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "bounces": false,
        "enableScrolling": true,
        "enabledForIdleTimeout": false,
        "footers": [FlexContainer099041029e4bc45],
        "headers": [CopyFlexContainer0b3e7bf80ae8148],
        "horizontalScrollIndicator": true,
        "id": "frmAvisoPrivacidad",
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
    frmAvisoPrivacidad.info = {
        "kuid": "p2kwiet19724036341672"
    };
};