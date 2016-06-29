function addWidgetscotizadorFinanciamiento2() {
    cotizadorFinanciamiento2.setDefaultUnit(kony.flex.DP);
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
            "lblDescripcionPlan": "",
            "lblEsPlanAlternativo": "",
            "lblId": "",
            "lblIdPlan": ""
        }, {
            "imgIcon": "flecha.png",
            "lblContent": "",
            "lblDescripcionPlan": "",
            "lblEsPlanAlternativo": "",
            "lblId": "",
            "lblIdPlan": ""
        }],
        "groupCells": false,
        "height": "69.78%",
        "id": "segmentCalculadora",
        "isVisible": true,
        "left": "0dp",
        "needPageIndicator": true,
        "onRowClick": p2kwiet19724036341589_segmentCalculadora_onRowClick_seq0,
        "pageOffDotImage": "pageOffDot.png",
        "pageOnDotImage": "pageOnDot.png",
        "retainSelection": false,
        "rowTemplate": CopyFlexContainer02464457a3a964c,
        "scrollingEvents": {},
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "64646400",
        "separatorRequired": false,
        "separatorThickness": 1,
        "showScrollbars": false,
        "top": "26.89%",
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "CopyFlexContainer02464457a3a964c": "CopyFlexContainer02464457a3a964c",
            "calculadoraFlexTemplate": "calculadoraFlexTemplate",
            "imgIcon": "imgIcon",
            "lblContent": "lblContent",
            "lblDescripcionPlan": "lblDescripcionPlan",
            "lblEsPlanAlternativo": "lblEsPlanAlternativo",
            "lblId": "lblId",
            "lblIdPlan": "lblIdPlan"
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
    var btnBackFinanciamiento = new kony.ui.Button({
        "height": "50%",
        "id": "btnBackFinanciamiento",
        "isVisible": false,
        "left": "3%",
        "onClick": p2kwiet19724036341589_btnBackFinanciamiento_onClick_seq0,
        "top": "120.0%",
        "width": "10%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopyimgBack0470ef69a03f140 = new kony.ui.Image2({
        "height": "30%",
        "id": "CopyimgBack0470ef69a03f140",
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
    var button978534922449778 = new kony.ui.Button({
        "height": "50%",
        "id": "button978534922449778",
        "isVisible": true,
        "left": "8%",
        "onClick": p2kwiet19724036341589_button978534922449778_onClick_seq0,
        "top": "10%",
        "width": "10%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flexContainerTitle.add(btnBackFinanciamiento, CopyimgBack0470ef69a03f140, lblClase, button978534922449778);
    flexContent.add(Label07de837f4574a4d, segmentCalculadora, flexContainerTitle);
    flexMain.add(flexContent);
    cotizadorFinanciamiento2.add(flexMain);
};

function cotizadorFinanciamiento2Globals() {
    cotizadorFinanciamiento2 = new kony.ui.Form2({
        "addWidgets": addWidgetscotizadorFinanciamiento2,
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "bounces": false,
        "enableScrolling": false,
        "enabledForIdleTimeout": false,
        "horizontalScrollIndicator": true,
        "id": "cotizadorFinanciamiento2",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "pagingEnabled": false,
        "postShow": p2kwiet19724036341589_cotizadorFinanciamiento2_postshow_seq0,
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
    cotizadorFinanciamiento2.info = {
        "kuid": "p2kwiet19724036341589"
    };
};