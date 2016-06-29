function addWidgetsloginBienvenida() {
    loginBienvenida.setDefaultUnit(kony.flex.DP);
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
    var flexContainerBottom = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "45%",
        "id": "flexContainerBottom",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "slFbox",
        "top": "54.50%",
        "width": "100%",
        "zIndex": 2
    }, {}, {});
    flexContainerBottom.setDefaultUnit(kony.flex.PERCENTAGE);
    var segmentOptions = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "data": [{
            "Label0425032fbc16b49": "Detalle",
            "imgFlechaPagos": "flecha.png",
            "lblPagosEnLinea": "Información de Contrato"
        }, {
            "Label0425032fbc16b49": "Pagos en Línea",
            "imgFlechaPagos": "flecha.png",
            "lblPagosEnLinea": "Pagos en Línea"
        }, {
            "Label0425032fbc16b49": "Saldos y Movimientos",
            "imgFlechaPagos": "flecha.png",
            "lblPagosEnLinea": "Saldos y Movimientos"
        }, {
            "Label0425032fbc16b49": "Estados de Cuenta",
            "imgFlechaPagos": "flecha.png",
            "lblPagosEnLinea": "Estados de Cuenta"
        }, {
            "Label0425032fbc16b49": "Facturación",
            "imgFlechaPagos": "flecha.png",
            "lblPagosEnLinea": "Facturación"
        }, {
            "Label0425032fbc16b49": "Seguros",
            "imgFlechaPagos": "flecha.png",
            "lblPagosEnLinea": "Seguros"
        }, {
            "Label0425032fbc16b49": "Loyalty",
            "imgFlechaPagos": "flecha.png",
            "lblPagosEnLinea": "Loyalty"
        }],
        "groupCells": false,
        "height": "100%",
        "id": "segmentOptions",
        "isVisible": true,
        "left": "0dp",
        "needPageIndicator": true,
        "pageOffDotImage": "pageOffDot.png",
        "pageOnDotImage": "pageOnDot.png",
        "retainSelection": false,
        "rowFocusSkin": "seg2Focus",
        "rowSkin": "Copyseg0f2a61cf1891b4f",
        "rowTemplate": flexContainerPagos,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "64646400",
        "separatorRequired": true,
        "separatorThickness": 1,
        "showScrollbars": false,
        "top": "0%",
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "Label0425032fbc16b49": "Label0425032fbc16b49",
            "flexContainerPagos": "flexContainerPagos",
            "imgFlechaPagos": "imgFlechaPagos",
            "lblPagosEnLinea": "lblPagosEnLinea"
        },
        "width": "100%",
        "zIndex": 2
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
    flexContainerBottom.add(segmentOptions);
    var sgmGrafica = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "35%",
        "id": "sgmGrafica",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "48dp",
        "skin": "slFbox",
        "top": "10%",
        "width": "100%",
        "zIndex": 2
    }, {}, {});
    sgmGrafica.setDefaultUnit(kony.flex.DP);
    var Image085d918987f4544 = new kony.ui.Image2({
        "centerX": "50%",
        "height": "100%",
        "id": "Image085d918987f4544",
        "isVisible": true,
        "left": "162dp",
        "skin": "slImage",
        "src": "velocimetro3.png",
        "top": "0dp",
        "width": "100%"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    sgmGrafica.add(Image085d918987f4544);
    var lblTitle = new kony.ui.Label({
        "id": "lblTitle",
        "isVisible": true,
        "left": "0%",
        "skin": "tituloNombreCliente",
        "text": "Bienvenido: Nombre Cliente",
        "top": "3%",
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
    var flexContainerContratoListBox = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "6%",
        "id": "flexContainerContratoListBox",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "49%",
        "width": "100%",
        "zIndex": 2
    }, {}, {});
    flexContainerContratoListBox.setDefaultUnit(kony.flex.DP);
    var listBoxBienvenida = new kony.ui.ListBox({
        "centerX": "50%",
        "focusSkin": "listBoxBienvenidaContrato",
        "height": "100%",
        "id": "listBoxBienvenida",
        "isVisible": true,
        "left": "0dp",
        "masterData": [
            ["lb1", "CONTRATO: 00000000"],
            ["lb2", "CONTRATO: 00000001"],
            ["lb3", "CONTRATO: 00000002"]
        ],
        "selectedKey": "lb1",
        "selectedKeyValue": ["lb1", "CONTRATO: 00000000"],
        "skin": "listBoxBienvenidaContrato",
        "top": "0dp",
        "width": "100%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 3, 0],
        "paddingInPixel": false
    }, {
        "dropDownImage": "flechadropdowndos.png",
        "groupCells": false,
        "placeholder": "CONTRATO: 0000000",
        "viewType": constants.LISTBOX_VIEW_TYPE_LISTVIEW
    });
    flexContainerContratoListBox.add(listBoxBienvenida);
    var flexContainerNoCliente = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": true,
        "allowVerticalBounce": true,
        "bounces": true,
        "centerX": "50%",
        "clipBounds": true,
        "enableScrolling": true,
        "height": "7%",
        "horizontalScrollIndicator": true,
        "id": "flexContainerNoCliente",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "pagingEnabled": false,
        "scrollDirection": kony.flex.SCROLL_HORIZONTAL,
        "skin": "CopyslFSbox0cacaaf4d5cd44a",
        "top": "42.10%",
        "verticalScrollIndicator": true,
        "width": "100%",
        "zIndex": 2
    }, {}, {});
    flexContainerNoCliente.setDefaultUnit(kony.flex.DP);
    var segmentCliente = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "data": [{
            "lblNoCliente": "No Cliente: 000000"
        }, {
            "lblNoCliente": "No Cliente: 000001"
        }],
        "groupCells": false,
        "height": "100%",
        "id": "segmentCliente",
        "isVisible": true,
        "left": "0dp",
        "needPageIndicator": false,
        "pageOffDotImage": "pageOffDot.png",
        "pageOnDotImage": "pageOnDot.png",
        "retainSelection": false,
        "rowFocusSkin": "seg2Focus",
        "rowSkin": "Copyseg064462499d3ac40",
        "rowTemplate": templateContainer,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "64646400",
        "separatorRequired": false,
        "separatorThickness": 0,
        "showScrollbars": false,
        "top": "0dp",
        "viewType": constants.SEGUI_VIEW_TYPE_PAGEVIEW,
        "widgetDataMap": {
            "lblNoCliente": "lblNoCliente",
            "templateContainer": "templateContainer"
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
        "indicator": constants.SEGUI_ROW_SELECT,
        "progressIndicatorColor": constants.PROGRESS_INDICATOR_COLOR_GREY,
        "showProgressIndicator": true
    });
    flexContainerNoCliente.add(segmentCliente);
    var lblMensualidad = new kony.ui.Label({
        "centerX": "50%",
        "height": "8%",
        "id": "lblMensualidad",
        "isVisible": true,
        "skin": "skinImgBienvenidaMensualidad",
        "text": "18",
        "top": "29%",
        "width": "30%",
        "zIndex": 5
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    flexContent.add(flexContainerBottom, sgmGrafica, lblTitle, flexContainerContratoListBox, flexContainerNoCliente, lblMensualidad);
    flexMain.add(flexContent);
    loginBienvenida.add(flexMain);
};

function loginBienvenidaGlobals() {
    loginBienvenida = new kony.ui.Form2({
        "addWidgets": addWidgetsloginBienvenida,
        "allowHorizontalBounce": false,
        "bounces": false,
        "enableScrolling": false,
        "enabledForIdleTimeout": false,
        "footers": [FlexContainer099041029e4bc45],
        "headers": [CopyFlexContainer09da0f5890f1a44],
        "id": "loginBienvenida",
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
        "statusBarStyle": constants.STATUS_BAR_STYLE_DEFAULT,
        "titleBar": false
    });
    loginBienvenida.info = {
        "notesId": "f99dcdd247104e81829b0910e1eee6f9",
        "kuid": "f99dcdd247104e81829b0910e1eee6f9"
    };
};