function addWidgetssaldosMovimientos() {
    saldosMovimientos.setDefaultUnit(kony.flex.DP);
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
    var flexContainerTop = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "25%",
        "id": "flexContainerTop",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox0efa91ca114424f",
        "top": "10%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flexContainerTop.setDefaultUnit(kony.flex.DP);
    var lblMonto = new kony.ui.Label({
        "id": "lblMonto",
        "isVisible": true,
        "left": "0dp",
        "skin": "lblSaldosYMovimientos",
        "text": "Monto a financiar:",
        "top": "10%",
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
    var lblCapital = new kony.ui.Label({
        "id": "lblCapital",
        "isVisible": true,
        "left": "0dp",
        "skin": "lblSaldosYMovimientos",
        "text": "$000,000.00",
        "top": "23%",
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
    var lblFechaCorte = new kony.ui.Label({
        "id": "lblFechaCorte",
        "isVisible": true,
        "left": "0dp",
        "skin": "lblSaldosYMovimientos",
        "text": "Saldo a pagar al 00/00/0000",
        "top": "45%",
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
    var lblSaldo = new kony.ui.Label({
        "id": "lblSaldo",
        "isVisible": true,
        "right": "0",
        "skin": "lblSaldosYMovimientos",
        "text": "$00.00",
        "top": "45%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [5, 0, 5, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var lblDe = new kony.ui.Label({
        "id": "lblDe",
        "isVisible": true,
        "left": "0dp",
        "skin": "lblSaldosYMovimientos",
        "text": "De:",
        "top": "70%",
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
    var fechaIncio = new kony.ui.Calendar({
        "calendarIcon": "calbtn.png",
        "dateFormat": "dd/MM/yyyy",
        "focusSkin": "calendarSaldosYMovimientos",
        "height": "20%",
        "id": "fechaIncio",
        "isVisible": true,
        "left": "12%",
        "skin": "calendarSaldosYMovimientos",
        "top": "70%",
        "viewConfig": {
            "gridConfig": {
                "allowWeekendSelectable": true
            }
        },
        "viewType": constants.CALENDAR_VIEW_TYPE_DEFAULT,
        "width": "32%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "mode": constants.CALENDAR_WHEEL_ONLY_DATE
    });
    var lblA = new kony.ui.Label({
        "id": "lblA",
        "isVisible": true,
        "left": "40%",
        "skin": "lblSaldosYMovimientos",
        "text": "A:",
        "top": "70%",
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
    var fechaFin = new kony.ui.Calendar({
        "calendarIcon": "calbtn.png",
        "dateFormat": "dd/MM/yyyy",
        "focusSkin": "calendarSaldosYMovimientos",
        "height": "20%",
        "id": "fechaFin",
        "isVisible": true,
        "left": "49%",
        "skin": "calendarSaldosYMovimientos",
        "top": "70%",
        "viewConfig": {
            "gridConfig": {
                "allowWeekendSelectable": true
            }
        },
        "viewType": constants.CALENDAR_VIEW_TYPE_DEFAULT,
        "width": "32%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "mode": constants.CALENDAR_WHEEL_ONLY_DATE
    });
    var btnIr = new kony.ui.Button({
        "height": "21%",
        "id": "btnIr",
        "isVisible": true,
        "left": "83%",
        "onClick": p2kwiet19724036342411_btnIr_onClick_seq0,
        "skin": "newBtnEnviarGray",
        "text": "Ir",
        "top": "70%",
        "width": "12%",
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
    var btnDescargar = new kony.ui.Button({
        "height": "20%",
        "id": "btnDescargar",
        "isVisible": true,
        "left": "64%",
        "onClick": p2kwiet19724036342411_btnDescargar_onClick_seq0,
        "skin": "newBtnEnviarGray",
        "text": "Descargar PDF",
        "top": "12%",
        "width": "33%",
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
    var Image08e8b8642ba0c44 = new kony.ui.Image2({
        "height": "5%",
        "id": "Image08e8b8642ba0c44",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "rayanegra.png",
        "top": "35%",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopyImage03601a43785bb47 = new kony.ui.Image2({
        "height": "5%",
        "id": "CopyImage03601a43785bb47",
        "isVisible": true,
        "left": "10dp",
        "skin": "slImage",
        "src": "rayanegra.png",
        "top": "60%",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopyImage002dc8009658d40 = new kony.ui.Image2({
        "height": "20%",
        "id": "CopyImage002dc8009658d40",
        "isVisible": true,
        "left": "91%",
        "skin": "slImage",
        "src": "flechabotongris2.png",
        "top": "71%",
        "width": "1.50%",
        "zIndex": 5
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flexContainerTop.add(lblMonto, lblCapital, lblFechaCorte, lblSaldo, lblDe, fechaIncio, lblA, fechaFin, btnIr, btnDescargar, Image08e8b8642ba0c44, CopyImage03601a43785bb47, CopyImage002dc8009658d40);
    var flexContainerMiddle = new kony.ui.FlexContainer({
        "centerX": "50%",
        "clipBounds": true,
        "height": "10%",
        "id": "flexContainerMiddle",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "35%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flexContainerMiddle.setDefaultUnit(kony.flex.DP);
    var lblTituloFecha = new kony.ui.Label({
        "height": "100%",
        "id": "lblTituloFecha",
        "isVisible": true,
        "left": "0%",
        "skin": "lblRowSaldosYMovimientos",
        "text": "FECHA",
        "top": "0dp",
        "width": "30%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var lblTituloDescripcion = new kony.ui.Label({
        "centerX": "50%",
        "height": "100%",
        "id": "lblTituloDescripcion",
        "isVisible": true,
        "skin": "lblRowSaldosYMovimientos",
        "text": "DESCRIPCION",
        "top": "0dp",
        "width": "40%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var lblTituloTransaccion = new kony.ui.Label({
        "height": "100%",
        "id": "lblTituloTransaccion",
        "isVisible": true,
        "right": "0",
        "skin": "lblRowSaldosYMovimientos",
        "text": "ULTIMAS TRANSACCIONES",
        "top": "0dp",
        "width": "30%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    flexContainerMiddle.add(lblTituloFecha, lblTituloDescripcion, lblTituloTransaccion);
    var flexContainerTitle = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "10%",
        "id": "flexContainerTitle",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox0b068ca7e29b44a",
        "top": "7dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flexContainerTitle.setDefaultUnit(kony.flex.DP);
    var lblTituloForm = new kony.ui.Label({
        "centerX": "50%",
        "id": "lblTituloForm",
        "isVisible": true,
        "skin": "lblTitle",
        "text": "Saldos y Movimientos",
        "top": "13%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var btnAtras = new kony.ui.Button({
        "height": "25%",
        "id": "btnAtras",
        "isVisible": true,
        "left": "8%",
        "onClick": p2kwiet19724036342411_btnAtras_onClick_seq0,
        "skin": "btnBack",
        "top": "20%",
        "width": "2%",
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
    flexContainerTitle.add(lblTituloForm, btnAtras);
    var smgtoContenido = new kony.ui.SegmentedUI2({
        "centerX": "50%",
        "data": [{}, {}, {}],
        "groupCells": false,
        "height": "48%",
        "id": "smgtoContenido",
        "isVisible": true,
        "needPageIndicator": true,
        "onRowClick": p2kwiet19724036342411_smgtoContenido_onRowClick_seq0,
        "pageOffDotImage": "pageOffDot.png",
        "pageOnDotImage": "pageOnDot.png",
        "retainSelection": false,
        "rowSkin": "Copyseg0ff1daac5f1cb4a",
        "rowTemplate": flexContainerContenido,
        "scrollingEvents": {},
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "64646400",
        "separatorRequired": false,
        "separatorThickness": 0,
        "showScrollbars": true,
        "top": "45%",
        "viewConfig": {
            "coverflowConfig": {}
        },
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "colCoA": "colCoA",
            "colDescripcion": "colDescripcion",
            "colFecha": "colFecha",
            "colIdPago": "colIdPago",
            "colRenta": "colRenta",
            "colTransaccion": "colTransaccion",
            "flexContainerContenido": "flexContainerContenido",
            "saldosContenido": "saldosContenido"
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
        "showProgressIndicator": true
    });
    var flexContainerPaginado = new kony.ui.FlexContainer({
        "bottom": "0%",
        "centerX": "50%",
        "clipBounds": true,
        "height": "7%",
        "id": "flexContainerPaginado",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flexContainerPaginado.setDefaultUnit(kony.flex.DP);
    var flexContainerAdelante = new kony.ui.FlexContainer({
        "centerY": "50%",
        "clipBounds": true,
        "height": "100%",
        "id": "flexContainerAdelante",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "onTouchStart": p2kwiet19724036342411_flexContainerAdelante_onTouchStart_seq0,
        "right": "0%",
        "skin": "blackButtonSaldos",
        "width": "10%",
        "zIndex": 1
    }, {}, {});
    flexContainerAdelante.setDefaultUnit(kony.flex.DP);
    var btnAdelantePagina = new kony.ui.Button({
        "centerX": "50%",
        "centerY": "50%",
        "height": "50%",
        "id": "btnAdelantePagina",
        "isVisible": true,
        "skin": "buttonForwardSaldos",
        "width": "40%",
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
    flexContainerAdelante.add(btnAdelantePagina);
    var flexContainerAtras = new kony.ui.FlexContainer({
        "centerY": "50%",
        "clipBounds": true,
        "height": "100%",
        "id": "flexContainerAtras",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "onTouchStart": p2kwiet19724036342411_flexContainerAtras_onTouchStart_seq0,
        "skin": "blackButtonSaldos",
        "width": "10%",
        "zIndex": 1
    }, {}, {});
    flexContainerAtras.setDefaultUnit(kony.flex.DP);
    var btnAtrasPagina = new kony.ui.Button({
        "centerX": "50%",
        "centerY": "50%",
        "height": "50%",
        "id": "btnAtrasPagina",
        "isVisible": true,
        "skin": "buttonBackSaldos",
        "width": "40%",
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
    flexContainerAtras.add(btnAtrasPagina);
    var imgSeleccion = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "50%",
        "height": "80.0%",
        "id": "imgSeleccion",
        "isVisible": true,
        "left": "54dp",
        "src": "bolitaazul.png",
        "top": "14dp",
        "width": "6%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
    });
    var smgtoPaginado = new kony.ui.SegmentedUI2({
        "centerX": "50%",
        "centerY": "50.0%",
        "data": [{}, {}, {}],
        "groupCells": false,
        "height": "60.0%",
        "id": "smgtoPaginado",
        "isVisible": true,
        "needPageIndicator": false,
        "onRowClick": p2kwiet19724036342411_smgtoPaginado_onRowClick_seq0,
        "onSwipe": p2kwiet19724036342411_smgtoPaginado_onswipe_seq0,
        "pageOffDotImage": "pageOffDot.png",
        "pageOnDotImage": "pageOnDot.png",
        "retainSelection": false,
        "rowTemplate": FlexContainer013472758338b4f,
        "scrollingEvents": {},
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "64646400",
        "separatorRequired": true,
        "separatorThickness": 1,
        "showScrollbars": false,
        "viewConfig": {
            "coverflowConfig": {}
        },
        "viewType": constants.SEGUI_VIEW_TYPE_LINEAR,
        "widgetDataMap": {
            "FlexContainer013472758338b4f": "FlexContainer013472758338b4f",
            "lblIndice": "lblIndice",
            "saldosPaginado": "saldosPaginado"
        },
        "width": "70%",
        "zIndex": 1
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "bounces": true,
        "editStyle": constants.SEGUI_EDITING_STYLE_NONE,
        "enableDictionary": false,
        "indicator": constants.SEGUI_ROW_SELECT,
        "progressIndicatorColor": constants.PROGRESS_INDICATOR_COLOR_WHITE,
        "searchCriteria": constants.SEGUI_SEARCH_CRITERIA_STARTSWITH,
        "showProgressIndicator": true
    });
    var lblActual = new kony.ui.Label({
        "centerX": "50",
        "height": "80%",
        "id": "lblActual",
        "isVisible": false,
        "left": "5%",
        "text": "Label",
        "width": "3%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var lblTotalRegistros = new kony.ui.Label({
        "centerX": "50",
        "height": "80%",
        "id": "lblTotalRegistros",
        "isVisible": false,
        "left": "20.0%",
        "text": "Label",
        "width": "3%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var lblTotalPaginas = new kony.ui.Label({
        "centerX": "61",
        "height": "80.0%",
        "id": "lblTotalPaginas",
        "isVisible": false,
        "left": "15.0%",
        "text": "Label",
        "width": "2.89%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    flexContainerPaginado.add(flexContainerAdelante, flexContainerAtras, imgSeleccion, smgtoPaginado, lblActual, lblTotalRegistros, lblTotalPaginas);
    flexContent.add(flexContainerTop, flexContainerMiddle, flexContainerTitle, smgtoContenido, flexContainerPaginado);
    flexMain.add(flexContent);
    saldosMovimientos.add(flexMain);
};

function saldosMovimientosGlobals() {
    saldosMovimientos = new kony.ui.Form2({
        "addWidgets": addWidgetssaldosMovimientos,
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "bounces": false,
        "enableScrolling": false,
        "enabledForIdleTimeout": false,
        "footers": [FlexContainer099041029e4bc45],
        "headers": [CopyFlexContainer09da0f5890f1a44],
        "horizontalScrollIndicator": true,
        "id": "saldosMovimientos",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
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
    saldosMovimientos.info = {
        "kuid": "p2kwiet19724036342411"
    };
};