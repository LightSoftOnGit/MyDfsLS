function addWidgetsinicio() {
    inicio.setDefaultUnit(kony.flex.DP);
    var flexMain = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flexMain",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%"
    }, {}, {});
    flexMain.setDefaultUnit(kony.flex.DP);
    var flexContent = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flexContent",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "flexContent",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flexContent.setDefaultUnit(kony.flex.DP);
    var segmentImgPromocion = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "data": [{
            "Image0bd968c8c9edd41": "distfotoinicio.png",
            "btnPromocion": "",
            "imgFlecha": "flechaarriba.png",
            "lblPromocion": "Label"
        }, {
            "Image0bd968c8c9edd41": "fotopromocionesinicio2.png",
            "btnPromocion": "",
            "imgFlecha": "flechaarriba.png",
            "lblPromocion": "Label"
        }, {
            "Image0bd968c8c9edd41": "fotopromocionesinicio2.png",
            "btnPromocion": "",
            "imgFlecha": "flechaarriba.png",
            "lblPromocion": "Label"
        }, {
            "Image0bd968c8c9edd41": "fotopromocionesinicio2.png",
            "btnPromocion": "",
            "imgFlecha": "flechaarriba.png",
            "lblPromocion": "Label"
        }, {
            "Image0bd968c8c9edd41": "fotopromocionesinicio2.png",
            "btnPromocion": "",
            "imgFlecha": "flechaarriba.png",
            "lblPromocion": "Label"
        }, {
            "Image0bd968c8c9edd41": "fotopromocionesinicio2.png",
            "btnPromocion": "",
            "imgFlecha": "flechaarriba.png",
            "lblPromocion": "Label"
        }],
        "groupCells": false,
        "height": "100%",
        "id": "segmentImgPromocion",
        "isVisible": true,
        "left": "0dp",
        "needPageIndicator": true,
        "pageOffDotImage": "pageOffDot.png",
        "pageOnDotImage": "pageOnDot.png",
        "retainSelection": false,
        "rowFocusSkin": "seg2Focus",
        "rowSkin": "segmentHome2",
        "rowTemplate": FlexContainer0aea82f7aecae44,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "64646400",
        "separatorRequired": true,
        "separatorThickness": 0,
        "showScrollbars": false,
        "top": "-1%",
        "viewType": constants.SEGUI_VIEW_TYPE_PAGEVIEW,
        "widgetDataMap": {
            "FlexContainer01f578faceaf84d": "FlexContainer01f578faceaf84d",
            "FlexContainer0aea82f7aecae44": "FlexContainer0aea82f7aecae44",
            "Image0bd968c8c9edd41": "Image0bd968c8c9edd41",
            "btnPromocion": "btnPromocion",
            "imgFlecha": "imgFlecha",
            "lblPromocion": "lblPromocion"
        },
        "width": "100%",
        "zIndex": 1
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flexContent.add(segmentImgPromocion);
    flexMain.add(flexContent);
    inicio.add(flexMain);
};

function inicioGlobals() {
    inicio = new kony.ui.Form2({
        "addWidgets": addWidgetsinicio,
        "allowHorizontalBounce": false,
        "bounces": false,
        "enableScrolling": false,
        "enabledForIdleTimeout": false,
        "footers": [FlexContainer099041029e4bc45],
        "headers": [CopyFlexContainer09da0f5890f1a44],
        "id": "inicio",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "skin": "flexContainerTerminos"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "retainScrollPosition": false
    });
    inicio.info = {
        "notesId": "ee7d5f925f5a4e9584afa069c301d4e8",
        "kuid": "ee7d5f925f5a4e9584afa069c301d4e8"
    };
};