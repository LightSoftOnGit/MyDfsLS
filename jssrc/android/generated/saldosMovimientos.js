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
        "top": "10%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flexContainerTop.setDefaultUnit(kony.flex.DP);
    var lblMonto = new kony.ui.Label({
        "id": "lblMonto",
        "isVisible": true,
        "left": "0dp",
        "text": "Monto a financiar:",
        "top": "10%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [5, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var lblCapital = new kony.ui.Label({
        "id": "lblCapital",
        "isVisible": true,
        "left": "0dp",
        "text": "$000,000.00",
        "top": "23%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [5, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var lblFechaCorte = new kony.ui.Label({
        "height": "26dp",
        "id": "lblFechaCorte",
        "isVisible": true,
        "left": "0dp",
        "text": "Saldo a pagar al 00/00/0000",
        "top": "44.64%",
        "width": "227dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [5, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var lblSaldo = new kony.ui.Label({
        "id": "lblSaldo",
        "isVisible": true,
        "right": "0",
        "text": "$00.00",
        "top": "45%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [5, 0, 5, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var lblDe = new kony.ui.Label({
        "id": "lblDe",
        "isVisible": true,
        "left": "0dp",
        "text": "De:",
        "top": "70%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [5, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var fechaIncio = new kony.ui.Calendar({
        "calendarIcon": "calbtn.png",
        "dateFormat": "dd/MM/yyyy",
        "height": "20%",
        "id": "fechaIncio",
        "isVisible": true,
        "left": "12%",
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
    }, {});
    var lblA = new kony.ui.Label({
        "id": "lblA",
        "isVisible": true,
        "left": "40%",
        "text": "A:",
        "top": "70%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [5, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var fechaFin = new kony.ui.Calendar({
        "calendarIcon": "calbtn.png",
        "dateFormat": "dd/MM/yyyy",
        "height": "20%",
        "id": "fechaFin",
        "isVisible": true,
        "left": "49%",
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
    }, {});
    var btnIr = new kony.ui.Button({
        "height": "17%",
        "id": "btnIr",
        "isVisible": true,
        "left": "83%",
        "onClick": p2kwiet19724036342411_btnIr_onClick_seq0,
        "text": "IR",
        "top": "74%",
        "width": "12%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var btnDescargar = new kony.ui.Button({
        "height": "20%",
        "id": "btnDescargar",
        "isVisible": true,
        "left": "65%",
        "onClick": p2kwiet19724036342411_btnDescargar_onClick_seq0,
        "text": "Descargar PDF",
        "top": "12%",
        "width": "30%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flexContainerTop.add(lblMonto, lblCapital, lblFechaCorte, lblSaldo, lblDe, fechaIncio, lblA, fechaFin, btnIr, btnDescargar);
    var flexContainerMiddle = new kony.ui.FlexContainer({
        "centerX": "50%",
        "clipBounds": true,
        "height": "10%",
        "id": "flexContainerMiddle",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
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
        "text": "FECHA",
        "top": "0dp",
        "width": "30%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var lblTituloDescripcion = new kony.ui.Label({
        "centerX": "50%",
        "height": "100%",
        "id": "lblTituloDescripcion",
        "isVisible": true,
        "text": "DESCRIPCION",
        "top": "0dp",
        "width": "40%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var lblTituloTransaccion = new kony.ui.Label({
        "height": "100%",
        "id": "lblTituloTransaccion",
        "isVisible": true,
        "right": "0",
        "text": "ULTIMAS TRANSACCIONES",
        "top": "0dp",
        "width": "30%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flexContainerMiddle.add(lblTituloFecha, lblTituloDescripcion, lblTituloTransaccion);
    var flexContainerTitle = new kony.ui.FlexContainer({
        "centerX": "50%",
        "clipBounds": true,
        "height": "10%",
        "id": "flexContainerTitle",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flexContainerTitle.setDefaultUnit(kony.flex.DP);
    var lblTituloForm = new kony.ui.Label({
        "centerX": "50%",
        "id": "lblTituloForm",
        "isVisible": true,
        "text": "Saldos y Movimientos",
        "top": "13%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var btnAtras = new kony.ui.Button({
        "height": "50.0%",
        "id": "btnAtras",
        "isVisible": true,
        "left": "3%",
        "onClick": p2kwiet19724036342411_btnAtras_onClick_seq0,
        "top": "10%",
        "width": "10%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flexContainerTitle.add(lblTituloForm, btnAtras);
    var smgtoContenido = new kony.ui.SegmentedUI2({
        "centerX": "50%",
        "groupCells": false,
        "height": "48%",
        "id": "smgtoContenido",
        "isVisible": true,
        "needPageIndicator": true,
        "onRowClick": p2kwiet19724036342411_smgtoContenido_onRowClick_seq0,
        "pageOffDotImage": "pageOffDot.png",
        "pageOnDotImage": "pageOnDot.png",
        "retainSelection": false,
        "rowTemplate": flexContainerContenido,
        "scrollingEvents": {},
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "64646400",
        "separatorRequired": false,
        "separatorThickness": 0,
        "showScrollbars": true,
        "top": "45%",
        "viewConfig": {
            "coverflowConfig": {
                "isCircular": true,
                "projectionAngle": 60
            }
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
        "dockSectionHeaders": false
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
        "width": "40%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
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
        "width": "40%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
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
    }, {});
    var smgtoPaginado = new kony.ui.SegmentedUI2({
        "centerX": "50%",
        "centerY": "50.0%",
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
            "coverflowConfig": {
                "isCircular": false,
                "projectionAngle": 90,
                "rowItemRotationAngle": 0,
                "spaceBetweenRowItems": 1
            }
        },
        "viewType": constants.SEGUI_VIEW_TYPE_COVERFLOW,
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
        "dockSectionHeaders": false
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
        "textCopyable": false
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
        "textCopyable": false
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
        "textCopyable": false
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
        "horizontalScrollIndicator": true,
        "id": "saldosMovimientos",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
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
        "onDeviceBack": p2kwiet19724036342411_saldosMovimientos_Android_onDeviceBack_seq0,
        "outTransitionConfig": {
            "formAnimation": 0
        },
        "retainScrollPosition": false,
        "showActionBar": true,
        "showActionBarIcon": true,
        "titleBar": true,
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE
    });
    saldosMovimientos.info = {
        "kuid": "p2kwiet19724036342411"
    };
};