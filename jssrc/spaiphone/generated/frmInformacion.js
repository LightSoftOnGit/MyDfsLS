function addWidgetsfrmInformacion() {
    frmInformacion.setDefaultUnit(kony.flex.DP);
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
        "height": "106%",
        "id": "flexContent",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "flexContent",
        "top": "-6%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flexContent.setDefaultUnit(kony.flex.DP);
    var flexContainerTitle = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "40%",
        "id": "flexContainerTitle",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "7%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flexContainerTitle.setDefaultUnit(kony.flex.DP);
    var FlexContainer0087bc141411a45 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "25%",
        "id": "FlexContainer0087bc141411a45",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox0b068ca7e29b44a",
        "top": "2%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    FlexContainer0087bc141411a45.setDefaultUnit(kony.flex.DP);
    FlexContainer0087bc141411a45.add();
    var lblCotizacion = new kony.ui.Label({
        "centerX": "50%",
        "id": "lblCotizacion",
        "isVisible": true,
        "left": "24%",
        "skin": "lblTitle",
        "text": "Informacion",
        "top": "9%",
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
    var FlexScrollContainer00ecff8ef30dd4b = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": true,
        "allowVerticalBounce": true,
        "bounces": true,
        "centerX": "50%",
        "clipBounds": true,
        "enableScrolling": false,
        "height": "85%",
        "horizontalScrollIndicator": true,
        "id": "FlexScrollContainer00ecff8ef30dd4b",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "24%",
        "pagingEnabled": false,
        "scrollDirection": kony.flex.SCROLL_VERTICAL,
        "skin": "slFSbox",
        "top": "30%",
        "verticalScrollIndicator": true,
        "width": "80%",
        "zIndex": 1
    }, {}, {});
    FlexScrollContainer00ecff8ef30dd4b.setDefaultUnit(kony.flex.DP);
    var richTextDireccion = new kony.ui.RichText({
        "height": "110%",
        "id": "richTextDireccion",
        "isVisible": true,
        "left": "0%",
        "skin": "richTextDireccionCalcCotizacion",
        "text": "Daimler Financial Services S. de R.L. de C.V.<br>\nAv. Paseo de los Tamarindos 90<br>\nTorre II, Piso 16<br>\nBosques de Las Lomas, Cuajimalpa, México, D.F.<br>\nCP 05120\n<br>\n<br>\n<br>\nwww.mercedezbenzfinancial.com.mx\n<br>\n<br>\nCorreo de contacto:\n<br>\ncorreo.app@daimler.com\n\n",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    FlexScrollContainer00ecff8ef30dd4b.add(richTextDireccion);
    var btnBack = new kony.ui.Button({
        "focusSkin": "focusBtnBackArrendamiento",
        "height": "8%",
        "id": "btnBack",
        "isVisible": true,
        "left": "8%",
        "onClick": AS_Button_b753bc0609bc48b58e1ce320f46d5b8a,
        "skin": "btnBack",
        "top": "10%",
        "width": "2.50%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flexContainerTitle.add(FlexContainer0087bc141411a45, lblCotizacion, FlexScrollContainer00ecff8ef30dd4b, btnBack);
    var flexSegmentInformacion = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "40%",
        "id": "flexSegmentInformacion",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "newFlexContainerBlack",
        "top": "53%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flexSegmentInformacion.setDefaultUnit(kony.flex.DP);
    var segmentInformacion = new kony.ui.SegmentedUI2({
        "alternateRowSkin": "alternateSegmentInformacion",
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "data": [{
            "Button00498a06e43c54e": "",
            "Label01faf6da6323344": ""
        }],
        "groupCells": false,
        "height": "100%",
        "id": "segmentInformacion",
        "isVisible": true,
        "left": "0dp",
        "needPageIndicator": true,
        "pageOffDotImage": "pageOffDot.png",
        "pageOnDotImage": "pageOnDot.png",
        "retainSelection": false,
        "rowFocusSkin": "seg2Focus",
        "rowSkin": "segmentInformacion",
        "rowTemplate": FlexContainer034063ca903574b,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "64646400",
        "separatorRequired": true,
        "separatorThickness": 0,
        "showScrollbars": false,
        "top": "0dp",
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "Button00498a06e43c54e": "Button00498a06e43c54e",
            "FlexContainer034063ca903574b": "FlexContainer034063ca903574b",
            "Label01faf6da6323344": "Label01faf6da6323344"
        },
        "width": "100%"
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flexSegmentInformacion.add(segmentInformacion);
    flexContent.add(flexContainerTitle, flexSegmentInformacion);
    flexMain.add(flexContent);
    frmInformacion.add(flexMain);
};

function frmInformacionGlobals() {
    frmInformacion = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmInformacion,
        "allowHorizontalBounce": false,
        "bounces": false,
        "enableScrolling": false,
        "enabledForIdleTimeout": false,
        "footers": [FlexContainer099041029e4bc45],
        "headers": [CopyFlexContainer0b3e7bf80ae8148],
        "id": "frmInformacion",
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
    frmInformacion.info = {
        "notesId": "0d14da1e5dfd4f4fad9f03af7c6e4260",
        "kuid": "0d14da1e5dfd4f4fad9f03af7c6e4260"
    };
};