function addWidgetscotizadorModelos2() {
    cotizadorModelos2.setDefaultUnit(kony.flex.DP);
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
        "onRowClick": p2kwiet19724036341600_segmentCalculadora_onRowClick_seq0,
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
        "onSwipe": p2kwiet19724036341600_segmentClases_onswipe_seq0,
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
    var flexContainerTitle = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "10%",
        "id": "flexContainerTitle",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "10%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flexContainerTitle.setDefaultUnit(kony.flex.DP);
    var FlexContainer06d048ab9e72e49 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "70%",
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
    var lblTitle = new kony.ui.Label({
        "centerX": "50%",
        "height": "9.0%",
        "id": "lblTitle",
        "isVisible": true,
        "skin": "lblTitle",
        "text": "Vehículo",
        "top": "9.0%",
        "width": "100%",
        "zIndex": 2
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    flexContent.add(flexContainerBack, flexImagenClase, flexClases, flexContainerTitle, lblTitle);
    flexMain.add(flexContent);
    cotizadorModelos2.add(flexMain);
};

function cotizadorModelos2Globals() {
    cotizadorModelos2 = new kony.ui.Form2({
        "addWidgets": addWidgetscotizadorModelos2,
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "bounces": false,
        "enableScrolling": false,
        "enabledForIdleTimeout": false,
        "footers": [FlexContainer099041029e4bc45],
        "headers": [CopyFlexContainer09da0f5890f1a44],
        "horizontalScrollIndicator": true,
        "id": "cotizadorModelos2",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "onHide": p2kwiet19724036341600_cotizadorModelos2_onhide_seq0,
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
    cotizadorModelos2.info = {
        "kuid": "p2kwiet19724036341600"
    };
};