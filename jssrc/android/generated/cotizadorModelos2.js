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
        "textCopyable": false
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
            "coverflowConfig": {
                "isCircular": true,
                "projectionAngle": 60
            }
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
        "dockSectionHeaders": false
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
    }, {});
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
    }, {}, {});
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
                "isCircular": true,
                "projectionAngle": 90,
                "rowItemRotationAngle": 0,
                "rowItemWidth": 40,
                "spaceBetweenRowItems": 0
            }
        },
        "viewType": constants.SEGUI_VIEW_TYPE_COVERFLOW,
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
        "dockSectionHeaders": false
    });
    flexClases.add(segmentClases);
    flexContent.add(lblTitle, flexContainerBack, flexImagenClase, flexClases);
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
        "verticalScrollIndicator": true
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "footerOverlap": false,
        "headerOverlap": false,
        "inTransitionConfig": {
            "formAnimation": 0
        },
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
        "onDeviceBack": p2kwiet19724036341600_cotizadorModelos2_Android_onDeviceBack_seq0,
        "outTransitionConfig": {
            "formAnimation": 0
        },
        "retainScrollPosition": false,
        "showActionBar": true,
        "showActionBarIcon": true,
        "titleBar": true,
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE
    });
    cotizadorModelos2.info = {
        "kuid": "p2kwiet19724036341600"
    };
};