function addWidgetscotizadorTerminosCondiciones() {
    cotizadorTerminosCondiciones.setDefaultUnit(kony.flex.DP);
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
        "top": "10%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flexContainerTitle.setDefaultUnit(kony.flex.DP);
    var lblTitle = new kony.ui.Label({
        "centerX": "50%",
        "id": "lblTitle",
        "isVisible": true,
        "skin": "lblTitle",
        "text": "Terminos y Condiciones",
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
        "height": "35%",
        "id": "btnBack",
        "isVisible": true,
        "left": "8%",
        "onClick": p2kwiet19724036341640_btnBack_onClick_seq0,
        "skin": "btnBack",
        "top": "20%",
        "width": "4%",
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
    flexContainerTitle.add(lblTitle, btnBack);
    var btnEnviar = new kony.ui.Button({
        "centerX": "50%",
        "height": "5%",
        "id": "btnEnviar",
        "isVisible": true,
        "left": "80dp",
        "onClick": p2kwiet19724036341640_btnEnviar_onClick_seq0,
        "skin": "newBtnEnviarGray",
        "text": "OK",
        "top": "88%",
        "width": "35%",
        "zIndex": 2
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    var FlexContainer0d8f88386897341 = new kony.ui.FlexContainer({
        "centerX": "50%",
        "clipBounds": true,
        "height": "60%",
        "id": "FlexContainer0d8f88386897341",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "top": "20%",
        "width": "85%",
        "zIndex": 2
    }, {}, {});
    FlexContainer0d8f88386897341.setDefaultUnit(kony.flex.DP);
    var FlexScrollContainer0d0ee55b7eac74d = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": true,
        "allowVerticalBounce": true,
        "bounces": true,
        "enableScrolling": true,
        "height": "100%",
        "horizontalScrollIndicator": true,
        "id": "FlexScrollContainer0d0ee55b7eac74d",
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
    FlexScrollContainer0d0ee55b7eac74d.setDefaultUnit(kony.flex.DP);
    var RichText05efd7036dac146 = new kony.ui.RichText({
        "height": "127.04%",
        "id": "RichText05efd7036dac146",
        "isVisible": true,
        "left": "-1dp",
        "skin": "richTextLoyalty",
        "top": "-6dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "padding": [0, 0, 2, 0],
        "paddingInPixel": false
    }, {
        "wrapping": constants.WIDGET_TEXT_CHAR_WRAP
    });
    FlexScrollContainer0d0ee55b7eac74d.add(RichText05efd7036dac146);
    FlexContainer0d8f88386897341.add(FlexScrollContainer0d0ee55b7eac74d);
    flexContent.add(flexContainerTitle, btnEnviar, FlexContainer0d8f88386897341);
    flexMain.add(flexContent);
    cotizadorTerminosCondiciones.add(flexMain);
};

function cotizadorTerminosCondicionesGlobals() {
    cotizadorTerminosCondiciones = new kony.ui.Form2({
        "addWidgets": addWidgetscotizadorTerminosCondiciones,
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "bounces": false,
        "enableScrolling": false,
        "enabledForIdleTimeout": false,
        "footers": [FlexContainer099041029e4bc45],
        "headers": [CopyFlexContainer09da0f5890f1a44],
        "horizontalScrollIndicator": true,
        "id": "cotizadorTerminosCondiciones",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "pagingEnabled": false,
        "postShow": p2kwiet19724036341640_cotizadorTerminosCondiciones_postshow_seq0,
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
    cotizadorTerminosCondiciones.info = {
        "kuid": "p2kwiet19724036341640"
    };
};