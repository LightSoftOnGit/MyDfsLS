function addWidgetscotizadorPlanes2() {
    cotizadorPlanes2.setDefaultUnit(kony.flex.DP);
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
    var Label07de837f4574a4d = new kony.ui.Label({
        "height": "7%",
        "id": "Label07de837f4574a4d",
        "isVisible": true,
        "left": "0dp",
        "text": "FINANCIAMIENTO",
        "top": "20%",
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
    var segmentCalculadora = new kony.ui.SegmentedUI2({
        "data": [{
            "imgIcon": "flecha.png",
            "lblContent": "",
            "lblId": "",
            "lblPlanAlternativo": ""
        }, {
            "imgIcon": "flecha.png",
            "lblContent": "",
            "lblId": "",
            "lblPlanAlternativo": ""
        }],
        "groupCells": false,
        "height": "68.0%",
        "id": "segmentCalculadora",
        "isVisible": true,
        "left": "0dp",
        "needPageIndicator": true,
        "onRowClick": p2kwiet19724036341629_segmentCalculadora_onRowClick_seq0,
        "pageOffDotImage": "pageOffDot.png",
        "pageOnDotImage": "pageOnDot.png",
        "retainSelection": false,
        "rowTemplate": CopyflexContainerCalculadoraFlexTemplate097ea1d399fb847,
        "scrollingEvents": {},
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "64646400",
        "separatorRequired": false,
        "separatorThickness": 1,
        "showScrollbars": false,
        "top": "26.89%",
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "CopyflexContainerCalculadoraFlexTemplate097ea1d399fb847": "CopyflexContainerCalculadoraFlexTemplate097ea1d399fb847",
            "calculadoraFlexTemplate2": "calculadoraFlexTemplate2",
            "imgIcon": "imgIcon",
            "lblContent": "lblContent",
            "lblId": "lblId",
            "lblPlanAlternativo": "lblPlanAlternativo"
        },
        "width": "100%",
        "zIndex": 1
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
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
    var btnBackPlanes = new kony.ui.Button({
        "height": "50%",
        "id": "btnBackPlanes",
        "isVisible": false,
        "left": "3%",
        "onClick": p2kwiet19724036341629_btnBackPlanes_onClick_seq0,
        "top": "120.0%",
        "width": "10%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var imgBackPlanes = new kony.ui.Image2({
        "height": "30%",
        "id": "imgBackPlanes",
        "isVisible": false,
        "left": "3%",
        "src": "flechaatras.png",
        "top": "120.0%",
        "width": "10%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblClase = new kony.ui.Label({
        "centerX": "50%",
        "id": "lblClase",
        "isVisible": true,
        "text": "A Class",
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
    var button978534922450604 = new kony.ui.Button({
        "height": "50%",
        "id": "button978534922450604",
        "isVisible": true,
        "left": "8%",
        "onClick": p2kwiet19724036341629_button978534922450604_onClick_seq0,
        "top": "10%",
        "width": "10%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flexContainerTitle.add(btnBackPlanes, imgBackPlanes, lblClase, button978534922450604);
    flexContent.add(Label07de837f4574a4d, segmentCalculadora, flexContainerTitle);
    flexMain.add(flexContent);
    cotizadorPlanes2.add(flexMain);
};

function cotizadorPlanes2Globals() {
    cotizadorPlanes2 = new kony.ui.Form2({
        "addWidgets": addWidgetscotizadorPlanes2,
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "bounces": false,
        "enableScrolling": false,
        "enabledForIdleTimeout": false,
        "horizontalScrollIndicator": true,
        "id": "cotizadorPlanes2",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "pagingEnabled": false,
        "postShow": p2kwiet19724036341629_cotizadorPlanes2_postshow_seq0,
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
    cotizadorPlanes2.info = {
        "kuid": "p2kwiet19724036341629"
    };
};