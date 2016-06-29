function addWidgetscotizadorModelos2bueno() {
    cotizadorModelos2bueno.setDefaultUnit(kony.flex.DP);
    var flexMain = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "100.0%",
        "id": "flexMain",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "top": "0.0%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flexMain.setDefaultUnit(kony.flex.DP);
    var flexContent = new kony.ui.FlexContainer({
        "centerX": "50%",
        "centerY": "50.0%",
        "clipBounds": true,
        "height": "100%",
        "id": "flexContent",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flexContent.setDefaultUnit(kony.flex.DP);
    var lblTitle = new kony.ui.Label({
        "centerX": "50%",
        "height": "9.0%",
        "id": "lblTitle",
        "isVisible": true,
        "text": "VEHICULO",
        "top": "9.0%",
        "width": "100%",
        "zIndex": 99
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var flexContainerBack = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "70.0%",
        "id": "flexContainerBack",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "top": "18.0%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flexContainerBack.setDefaultUnit(kony.flex.DP);
    var segmentCalculadora = new kony.ui.SegmentedUI2({
        "centerX": "50%",
        "centerY": "50%",
        "data": [{}, {}, {}],
        "groupCells": false,
        "height": "100%",
        "id": "segmentCalculadora",
        "isVisible": true,
        "needPageIndicator": true,
        "onRowClick": p2kwiet19724036341618_segmentCalculadora_onRowClick_seq0,
        "pageOffDotImage": "pageOffDot.png",
        "pageOnDotImage": "pageOnDot.png",
        "retainSelection": false,
        "rowTemplate": FlexContainer08afefec6f15941,
        "scrollingEvents": {},
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "64646400",
        "separatorRequired": false,
        "separatorThickness": 1,
        "showScrollbars": false,
        "viewConfig": {
            "coverflowConfig": {}
        },
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "FlexContainer08afefec6f15941": "FlexContainer08afefec6f15941",
            "calculadoraTemplate": "calculadoraTemplate",
            "imgIcon": "imgIcon",
            "lblContent": "lblContent",
            "lblIdClase": "lblIdClase",
            "lblIdContent": "lblIdContent"
        },
        "width": "100%",
        "zIndex": 1
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "bounces": false,
        "editStyle": constants.SEGUI_EDITING_STYLE_NONE,
        "enableDictionary": false,
        "indicator": constants.SEGUI_NONE,
        "progressIndicatorColor": constants.PROGRESS_INDICATOR_COLOR_WHITE,
        "searchCriteria": constants.SEGUI_SEARCH_CRITERIA_STARTSWITH,
        "showProgressIndicator": true
    });
    flexContainerBack.add(segmentCalculadora);
    var flexImagenClase = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "73.0%",
        "id": "flexImagenClase",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "top": "18.0%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flexImagenClase.setDefaultUnit(kony.flex.DP);
    var imagenClase = new kony.ui.Image2({
        "centerX": "50%",
        "height": "100.0%",
        "id": "imagenClase",
        "isVisible": true,
        "top": "0.0%",
        "width": "100%",
        "zIndex": 99
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
    });
    flexImagenClase.add(imagenClase);
    var flexClases = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": false,
        "allowVerticalBounce": false,
        "bottom": "0.0%",
        "bounces": true,
        "centerX": "50%",
        "enableScrolling": false,
        "height": "10.0%",
        "horizontalScrollIndicator": true,
        "id": "flexClases",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "pagingEnabled": false,
        "scrollDirection": kony.flex.SCROLL_HORIZONTAL,
        "verticalScrollIndicator": true,
        "width": "100%",
        "zIndex": 1
    }, {}, {
        "bouncesZoom": true,
        "maxZoomScale": 1,
        "minZoomScale": 1,
        "zoomScale": 1
    });
    flexClases.setDefaultUnit(kony.flex.DP);
    var segmentClases = new kony.ui.SegmentedUI2({
        "centerX": "50.0%",
        "data": [{
            "lblClase": "",
            "lblId": ""
        }, {
            "lblClase": "",
            "lblId": ""
        }, {
            "lblClase": "",
            "lblId": ""
        }, {
            "lblClase": "",
            "lblId": ""
        }, {
            "lblClase": "",
            "lblId": ""
        }],
        "groupCells": false,
        "height": "100%",
        "id": "segmentClases",
        "isVisible": false,
        "needPageIndicator": false,
        "onSwipe": p2kwiet19724036341618_segmentClases_onswipe_seq0,
        "retainSelection": true,
        "rowTemplate": FlexContainer03016e2173a0b42,
        "scrollingEvents": {},
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "64646400",
        "separatorRequired": false,
        "separatorThickness": 0,
        "showScrollbars": false,
        "top": "0%",
        "viewConfig": {
            "coverflowConfig": {
                "rowItemWidth": 40
            }
        },
        "viewType": constants.SEGUI_VIEW_TYPE_LINEAR,
        "widgetDataMap": {
            "FlexContainer03016e2173a0b42": "FlexContainer03016e2173a0b42",
            "buttonCalculadoraTemplate": "buttonCalculadoraTemplate",
            "lblClase": "lblClase",
            "lblId": "lblId"
        },
        "width": "100%",
        "zIndex": 1
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "bounces": true,
        "editStyle": constants.SEGUI_EDITING_STYLE_NONE,
        "enableDictionary": false,
        "indicator": constants.SEGUI_NONE,
        "progressIndicatorColor": constants.PROGRESS_INDICATOR_COLOR_WHITE,
        "searchCriteria": constants.SEGUI_SEARCH_CRITERIA_STARTSWITH,
        "showProgressIndicator": false
    });
    flexClases.add(segmentClases);
    flexContent.add(lblTitle, flexContainerBack, flexImagenClase, flexClases);
    flexMain.add(flexContent);
    var cabecera = new kony.ui.FlexContainer({
        "centerX": "50%",
        "clipBounds": true,
        "height": "9.0%",
        "id": "cabecera",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "top": "0.0%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    cabecera.setDefaultUnit(kony.flex.DP);
    var flexContainer3037464522395 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "100%",
        "id": "flexContainer3037464522395",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "top": "0%",
        "width": "15%",
        "zIndex": 1
    }, {}, {});
    flexContainer3037464522395.setDefaultUnit(kony.flex.DP);
    var button3037464522397 = new kony.ui.Button({
        "centerX": "50%",
        "centerY": "30.0%",
        "height": "50.0%",
        "id": "button3037464522397",
        "isVisible": true,
        "onClick": p2kwiet19724036341618_button3037464522397_onClick_seq0,
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
    flexContainer3037464522395.add(button3037464522397);
    var flexContainer3037464522399 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "100%",
        "id": "flexContainer3037464522399",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "top": "0%",
        "width": "70%",
        "zIndex": 1
    }, {}, {});
    flexContainer3037464522399.setDefaultUnit(kony.flex.DP);
    var image23037464522401 = new kony.ui.Image2({
        "centerX": "50.0%",
        "centerY": "50%",
        "height": "80.0%",
        "id": "image23037464522401",
        "isVisible": true,
        "src": "mymbflogo.png",
        "width": "80%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
    });
    flexContainer3037464522399.add(image23037464522401);
    var flexContainer3037464522403 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "100%",
        "id": "flexContainer3037464522403",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "onTouchEnd": p2kwiet19724036341618_flexContainer3037464522403_onTouchEnd_seq0,
        "top": "0%",
        "width": "15%",
        "zIndex": 1
    }, {}, {});
    flexContainer3037464522403.setDefaultUnit(kony.flex.DP);
    var image23037464522405 = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "30.0%",
        "height": "50.0%",
        "id": "image23037464522405",
        "isVisible": true,
        "src": "iconoinformacion.png",
        "width": "50%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
    });
    flexContainer3037464522403.add(image23037464522405);
    cabecera.add(flexContainer3037464522395, flexContainer3037464522399, flexContainer3037464522403);
    cotizadorModelos2bueno.add(flexMain, cabecera);
};

function cotizadorModelos2buenoGlobals() {
    cotizadorModelos2bueno = new kony.ui.Form2({
        "addWidgets": addWidgetscotizadorModelos2bueno,
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "bounces": false,
        "enableScrolling": false,
        "enabledForIdleTimeout": false,
        "footers": [FlexContainer099041029e4bc45],
        "headers": [CopyFlexContainer09da0f5890f1a44],
        "horizontalScrollIndicator": true,
        "id": "cotizadorModelos2bueno",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "onHide": p2kwiet19724036341618_cotizadorModelos2bueno_onhide_seq0,
        "pagingEnabled": false,
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
    cotizadorModelos2bueno.info = {
        "kuid": "p2kwiet19724036341618"
    };
};