function addWidgetsgpsOpciones() {
    var hboxContenido = new kony.ui.Box({
        "id": "hboxContenido",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var vboxContenido = new kony.ui.Box({
        "id": "vboxContenido",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 100,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var lblNombre = new kony.ui.Label({
        "id": "lblNombre",
        "isVisible": true
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    var smgtoOpciones = new kony.ui.SegmentedUI2({
        "data": [{
            "lblContenido": "Ir"
        }, {
            "lblContenido": "Hacer Llamada"
        }, {
            "lblContenido": "Sitio Web"
        }],
        "groupCells": false,
        "id": "smgtoOpciones",
        "isVisible": true,
        "needPageIndicator": true,
        "onRowClick": p2kwiet19724036342949_smgtoOpciones_onRowClick_seq0,
        "pageOffDotImage": "pageOffDot.png",
        "pageOnDotImage": "pageOnDot.png",
        "retainSelection": false,
        "rowTemplate": vbox1972403634298,
        "screenLevelWidget": false,
        "scrollingEvents": {},
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "64646400",
        "separatorRequired": true,
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
            "lblContenido": "lblContenido"
        }
    }, {
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "dockSectionHeaders": false
    });
    vboxContenido.add(lblNombre, smgtoOpciones);
    hboxContenido.add(vboxContenido);
    gpsOpciones.add(hboxContenido);
};

function gpsOpcionesGlobals() {
    gpsOpciones = new kony.ui.Popup({
        "addWidgets": addWidgetsgpsOpciones,
        "id": "gpsOpciones",
        "isModal": false,
        "transparencyBehindThePopup": 100
    }, {
        "containerHeight": 30,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 60,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "inTransitionConfig": {
            "animation": 0
        },
        "outTransitionConfig": {
            "animation": 0
        },
        "windowSoftInputMode": constants.POPUP_ADJUST_RESIZE
    });
    gpsOpciones.info = {
        "kuid": "p2kwiet19724036342949"
    };
};