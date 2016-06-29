function addWidgetsfrmDistribuidores() {
    frmDistribuidores.setDefaultUnit(kony.flex.DP);
    var flexMain = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flexMain",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "CopyslFbox0de4c5f8a09dd43",
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
        "src": "distfotodistribuidores.png",
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
        "skin": "CopyslFbox05a5f14cd3d7942",
        "top": "51%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flexContainerBot.setDefaultUnit(kony.flex.DP);
    var FlexContainer0ee09618a4a5b48 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "70%",
        "id": "FlexContainer0ee09618a4a5b48",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox06963025005144d",
        "top": "32%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    FlexContainer0ee09618a4a5b48.setDefaultUnit(kony.flex.DP);
    var segmentDistribuidor = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "data": [{
            "CopyImage06daba0ce5f9040": "flechabotongris.png",
            "btnIr": "Ir",
            "btnPagina": "WWW.DISTRIBUIDOR.COM.MX",
            "btnTelefono": "(55) 5657 8890",
            "lblAutomotriz": "AUTOMOTRIZ HERMER, SANTA FE",
            "lblDireccion1": "AV. VASCO DE QUIROGA NO 3200 PB",
            "lblDireccion2": "AV. VASCO DE QUIROGA NO 3200 PB",
            "lblT": "T"
        }],
        "groupCells": false,
        "height": "100%",
        "id": "segmentDistribuidor",
        "isVisible": true,
        "left": "0dp",
        "needPageIndicator": true,
        "pageOffDotImage": "pageOffDot.png",
        "pageOnDotImage": "pageOnDot.png",
        "retainSelection": false,
        "rowFocusSkin": "seg2Focus",
        "rowSkin": "segmentDistribuidor",
        "rowTemplate": FlexContainer0348a5feae1b94c,
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
            "CopyImage06daba0ce5f9040": "CopyImage06daba0ce5f9040",
            "FlexContainer0348a5feae1b94c": "FlexContainer0348a5feae1b94c",
            "btnIr": "btnIr",
            "btnPagina": "btnPagina",
            "btnTelefono": "btnTelefono",
            "lblAutomotriz": "lblAutomotriz",
            "lblDireccion1": "lblDireccion1",
            "lblDireccion2": "lblDireccion2",
            "lblT": "lblT"
        },
        "width": "100%"
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    FlexContainer0ee09618a4a5b48.add(segmentDistribuidor);
    var flexMiUbicacion = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "focusSkin": "focusNewFlexContainerBlack",
        "height": "16.50%",
        "id": "flexMiUbicacion",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "flexContainerMiUbicacion",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flexMiUbicacion.setDefaultUnit(kony.flex.DP);
    var btnUbicacion = new kony.ui.Button({
        "centerX": "50%",
        "focusSkin": "focusBlackButton",
        "height": "85%",
        "id": "btnUbicacion",
        "isVisible": true,
        "left": 0,
        "onClick": AS_Button_7578b82000704057adf33d16a665cb50,
        "skin": "BotonBlackDist",
        "text": "Localiza a tu distribuidor",
        "top": "8%",
        "width": "85%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flexMiUbicacion.add(btnUbicacion);
    var flexEstado = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "16.50%",
        "id": "flexEstado",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "newFlexContainerBlack",
        "top": "16.50%",
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
        "renderAsAnchor": false,
        "textCopyable": false
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
        "onSelection": AS_ListBox_e75e7a5fe82049c6bd69825b5c5064d0,
        "right": "0%",
        "selectedKey": "lb1",
        "selectedKeyValue": ["lb1", "Listbox One"],
        "skin": "listBoxCalculadoraCalcFlexibility",
        "top": "-5%",
        "width": "68%",
        "zIndex": 3
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [2, 3, 3, 0],
        "paddingInPixel": false
    }, {});
    flexEstado.add(lblCiudad, listBoxCalculadoraFlexibility);
    flexContainerBot.add(FlexContainer0ee09618a4a5b48, flexMiUbicacion, flexEstado);
    flexContent.add(flexContainerTop, flexContainerBot);
    flexMain.add(flexContent);
    frmDistribuidores.add(flexMain);
};

function frmDistribuidoresGlobals() {
    frmDistribuidores = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmDistribuidores,
        "allowHorizontalBounce": false,
        "bounces": false,
        "enableScrolling": false,
        "enabledForIdleTimeout": false,
        "footers": [FlexContainer099041029e4bc45],
        "id": "frmDistribuidores",
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
    frmDistribuidores.info = {
        "notesId": "5e7ef89b66cd403482a407a6870d8bd9",
        "kuid": "5e7ef89b66cd403482a407a6870d8bd9"
    };
};