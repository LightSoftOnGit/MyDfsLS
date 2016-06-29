function addWidgetsfrmDistribuidoresCotizador() {
    frmDistribuidoresCotizador.setDefaultUnit(kony.flex.DP);
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
    var flexContainerTop = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "52%",
        "id": "flexContainerTop",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0%",
        "width": "100%"
    }, {}, {});
    flexContainerTop.setDefaultUnit(kony.flex.DP);
    var imgTop = new kony.ui.Image2({
        "height": "100%",
        "id": "imgTop",
        "isVisible": true,
        "left": "0dp",
        "src": "fotodistribuidores.png",
        "top": "0dp",
        "width": "100%"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flexContainerTop.add(imgTop);
    var flexContainerBot = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "48.50%",
        "id": "flexContainerBot",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "slFbox",
        "top": "51%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flexContainerBot.setDefaultUnit(kony.flex.DP);
    var FlexContainer0ee09618a4a5b48 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "86.50%",
        "id": "FlexContainer0ee09618a4a5b48",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox06963025005144d",
        "top": "16.50%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    FlexContainer0ee09618a4a5b48.setDefaultUnit(kony.flex.DP);
    var segmentDistribuidor = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "data": [{
            "lblAutomotriz": "AUTOMOTRIZ HERMER, SANTA FE",
            "lblDireccion1": "AV. VASCO DE QUIROGA NO 3200 PB",
            "lblDireccion2": "CENTRO DE CIUDAD SANTA FE CP01210",
            "lblT": "TELEFONO"
        }, {
            "lblAutomotriz": "AUTOMOTRIZ HERMER, SANTA FE",
            "lblDireccion1": "",
            "lblDireccion2": "",
            "lblT": ""
        }],
        "groupCells": false,
        "height": "100%",
        "id": "segmentDistribuidor",
        "isVisible": true,
        "left": "0dp",
        "needPageIndicator": true,
        "onRowClick": AS_Segment_4ae73a72c72e4fc292ea9fb6955b6d19,
        "pageOffDotImage": "pageOffDot.png",
        "pageOnDotImage": "pageOnDot.png",
        "retainSelection": false,
        "rowFocusSkin": "seg2Focus",
        "rowSkin": "segmentDistribuidor",
        "rowTemplate": CopyFlexContainer025c999267ce944,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "64646400",
        "separatorRequired": true,
        "separatorThickness": 1,
        "showScrollbars": true,
        "top": "0dp",
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "CopyFlexContainer025c999267ce944": "CopyFlexContainer025c999267ce944",
            "lblAutomotriz": "lblAutomotriz",
            "lblDireccion1": "lblDireccion1",
            "lblDireccion2": "lblDireccion2",
            "lblT": "lblT"
        },
        "width": "100%"
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "bounces": true,
        "editStyle": constants.SEGUI_EDITING_STYLE_NONE,
        "enableDictionary": false,
        "indicator": constants.SEGUI_NONE,
        "progressIndicatorColor": constants.PROGRESS_INDICATOR_COLOR_WHITE,
        "showProgressIndicator": true
    });
    FlexContainer0ee09618a4a5b48.add(segmentDistribuidor);
    var flexEstado = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "16.50%",
        "id": "flexEstado",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "newFlexContainerBlack",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flexEstado.setDefaultUnit(kony.flex.DP);
    var lblCiudad = new kony.ui.Label({
        "centerY": "50%",
        "height": "100%",
        "id": "lblCiudad",
        "isVisible": true,
        "left": "0dp",
        "skin": "lblDistribuidores",
        "text": "Estado",
        "top": "0%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [5, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var listBoxCalculadoraFlexibility = new kony.ui.ListBox({
        "focusSkin": "listBoxCalculadoraCalcFlexibility",
        "height": "90%",
        "id": "listBoxCalculadoraFlexibility",
        "isVisible": true,
        "masterData": [
            ["lb1", "Listbox One"],
            ["lb2", "Listbox Two"],
            ["lb3", "Listbox Three"]
        ],
        "onSelection": AS_ListBox_e3f8394f4a5940c3a9f6f70a3417fc90,
        "right": "0%",
        "selectedKey": "lb1",
        "selectedKeyValue": ["lb1", "Listbox One"],
        "skin": "listBoxCalculadoraCalcFlexibility",
        "top": "5%",
        "width": "68%",
        "zIndex": 3
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [2, 0, 3, 0],
        "paddingInPixel": false
    }, {
        "dropDownImage": "flechadropdown.png",
        "groupCells": false,
        "viewConfig": {
            "toggleViewConfig": {
                "viewStyle": constants.LISTBOX_TOGGLE_VIEW_STYLE_PLAIN
            }
        },
        "viewType": constants.LISTBOX_VIEW_TYPE_LISTVIEW
    });
    flexEstado.add(lblCiudad, listBoxCalculadoraFlexibility);
    flexContainerBot.add(FlexContainer0ee09618a4a5b48, flexEstado);
    flexContent.add(flexContainerTop, flexContainerBot);
    flexMain.add(flexContent);
    frmDistribuidoresCotizador.add(flexMain);
};

function frmDistribuidoresCotizadorGlobals() {
    frmDistribuidoresCotizador = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmDistribuidoresCotizador,
        "allowHorizontalBounce": false,
        "bounces": false,
        "enableScrolling": false,
        "enabledForIdleTimeout": false,
        "id": "frmDistribuidoresCotizador",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "skin": "flexContainerTerminos"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "bounces": false,
        "configureExtendBottom": false,
        "configureExtendTop": false,
        "configureStatusBarStyle": true,
        "footerOverlap": false,
        "formTransparencyDuringPostShow": "100",
        "headerOverlap": false,
        "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_CANCEL,
        "needsIndicatorDuringPostShow": false,
        "retainScrollPosition": false,
        "statusBarStyle": constants.STATUS_BAR_STYLE_LIGHT_CONTENT,
        "titleBar": false
    });
    frmDistribuidoresCotizador.info = {
        "notesId": "91db089f9de544d7ae01037e7924a4ba",
        "kuid": "91db089f9de544d7ae01037e7924a4ba"
    };
};