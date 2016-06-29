function addWidgetsfrmCalculadoraDatos() {
    frmCalculadoraDatos.setDefaultUnit(kony.flex.DP);
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
    var upperContainerCalculadoraDatos = new kony.ui.FlexContainer({
        "centerX": "50%",
        "clipBounds": true,
        "height": "45%",
        "id": "upperContainerCalculadoraDatos",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    upperContainerCalculadoraDatos.setDefaultUnit(kony.flex.DP);
    var imgUpperBg = new kony.ui.Image2({
        "height": "100%",
        "id": "imgUpperBg",
        "isVisible": true,
        "left": "0dp",
        "src": "fotocalculadora5.png",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var btnCotizacion = new kony.ui.Button({
        "height": "9%",
        "id": "btnCotizacion",
        "isVisible": true,
        "onClick": p2kwiet19724036341791_btnCotizacion_onClick_seq0,
        "right": "0%",
        "text": "Cotizacion",
        "top": "12%",
        "width": "30%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 5, 0],
        "paddingInPixel": false
    }, {});
    var btnTC = new kony.ui.Button({
        "height": "9%",
        "id": "btnTC",
        "isVisible": true,
        "right": "0%",
        "text": "T&C",
        "top": "25%",
        "width": "25%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 9, 0],
        "paddingInPixel": false
    }, {});
    var flxContainerBoton = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "19%",
        "id": "flxContainerBoton",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "top": "14%",
        "width": "14%",
        "zIndex": 1
    }, {}, {});
    flxContainerBoton.setDefaultUnit(kony.flex.DP);
    var btnCall = new kony.ui.Button({
        "height": "100%",
        "id": "btnCall",
        "isVisible": true,
        "left": "0%",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxContainerBoton.add(btnCall);
    upperContainerCalculadoraDatos.add(imgUpperBg, btnCotizacion, btnTC, flxContainerBoton);
    var middleContainerCalculadoraDatos = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "55%",
        "id": "middleContainerCalculadoraDatos",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "top": "44.80%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    middleContainerCalculadoraDatos.setDefaultUnit(kony.flex.DP);
    var CopyLabel001099b74764247 = new kony.ui.Label({
        "height": "15%",
        "id": "CopyLabel001099b74764247",
        "isVisible": true,
        "left": "0dp",
        "text": "CLA 200 CGI",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 1, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var CopyFlexContainer0a4461c7fa88e48 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "17.20%",
        "id": "CopyFlexContainer0a4461c7fa88e48",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "top": "15%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    CopyFlexContainer0a4461c7fa88e48.setDefaultUnit(kony.flex.DP);
    var CopylblPotencia0361d38cb855b44 = new kony.ui.Label({
        "height": "50%",
        "id": "CopylblPotencia0361d38cb855b44",
        "isVisible": true,
        "left": "0dp",
        "text": "Potencia",
        "top": "5%",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [9, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var CopylblPotenciaNo0a38927add3fc46 = new kony.ui.Label({
        "bottom": "5%",
        "height": "50%",
        "id": "CopylblPotenciaNo0a38927add3fc46",
        "isVisible": true,
        "left": "0dp",
        "text": "122 hprm",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [9, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    CopyFlexContainer0a4461c7fa88e48.add(CopylblPotencia0361d38cb855b44, CopylblPotenciaNo0a38927add3fc46);
    var CopyFlexContainer0b56ae75621e64a = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "17%",
        "id": "CopyFlexContainer0b56ae75621e64a",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "top": "32%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    CopyFlexContainer0b56ae75621e64a.setDefaultUnit(kony.flex.DP);
    var CopylblMotor0638ada16779544 = new kony.ui.Label({
        "height": "50%",
        "id": "CopylblMotor0638ada16779544",
        "isVisible": true,
        "left": "0dp",
        "text": "Potencia",
        "top": "5%",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [9, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var CopylblMotorNo024fc854f17554e = new kony.ui.Label({
        "bottom": "5%",
        "height": "50%",
        "id": "CopylblMotorNo024fc854f17554e",
        "isVisible": true,
        "left": "0dp",
        "text": "122 hprm",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [9, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    CopyFlexContainer0b56ae75621e64a.add(CopylblMotor0638ada16779544, CopylblMotorNo024fc854f17554e);
    var CopyFlexContainer0a1ebb24e80c145 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "17%",
        "id": "CopyFlexContainer0a1ebb24e80c145",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "top": "49%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    CopyFlexContainer0a1ebb24e80c145.setDefaultUnit(kony.flex.DP);
    var CopylblTransmicionTipo002be934f578d4a = new kony.ui.Label({
        "bottom": "5%",
        "height": "50%",
        "id": "CopylblTransmicionTipo002be934f578d4a",
        "isVisible": true,
        "left": "0dp",
        "text": "122 hprm",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [9, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var CopylblTransmision0b765e02609444e = new kony.ui.Label({
        "height": "50%",
        "id": "CopylblTransmision0b765e02609444e",
        "isVisible": true,
        "left": "0dp",
        "text": "Potencia",
        "top": "5%",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [9, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    CopyFlexContainer0a1ebb24e80c145.add(CopylblTransmicionTipo002be934f578d4a, CopylblTransmision0b765e02609444e);
    var CopyFlexContainer0959618b0fe4e49 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "21%",
        "id": "CopyFlexContainer0959618b0fe4e49",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "top": "65%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    CopyFlexContainer0959618b0fe4e49.setDefaultUnit(kony.flex.DP);
    var CopylblCilindrosTipo0ee737817859e44 = new kony.ui.Label({
        "bottom": "10%",
        "height": "50%",
        "id": "CopylblCilindrosTipo0ee737817859e44",
        "isVisible": true,
        "left": "0dp",
        "text": "122 hprm",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [9, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var CopylblCilindros06b8c9863056043 = new kony.ui.Label({
        "height": "50%",
        "id": "CopylblCilindros06b8c9863056043",
        "isVisible": true,
        "left": "0dp",
        "text": "Potencia",
        "top": "10%",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [9, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    CopyFlexContainer0959618b0fe4e49.add(CopylblCilindrosTipo0ee737817859e44, CopylblCilindros06b8c9863056043);
    middleContainerCalculadoraDatos.add(CopyLabel001099b74764247, CopyFlexContainer0a4461c7fa88e48, CopyFlexContainer0b56ae75621e64a, CopyFlexContainer0a1ebb24e80c145, CopyFlexContainer0959618b0fe4e49);
    var botonDatosTecnicosContainer = new kony.ui.FlexContainer({
        "bottom": "0%",
        "clipBounds": true,
        "height": "8%",
        "id": "botonDatosTecnicosContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    botonDatosTecnicosContainer.setDefaultUnit(kony.flex.DP);
    var btnDatosTecnicos = new kony.ui.Button({
        "bottom": "0%",
        "height": "100%",
        "id": "btnDatosTecnicos",
        "isVisible": true,
        "left": "0dp",
        "text": "DATOS TECNICOS",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    botonDatosTecnicosContainer.add(btnDatosTecnicos);
    var bottomSegmentDatosTecnicos = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "55%",
        "id": "bottomSegmentDatosTecnicos",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "top": "44.80%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    bottomSegmentDatosTecnicos.setDefaultUnit(kony.flex.DP);
    var Label0676f4f2d2aad44 = new kony.ui.Label({
        "height": "15%",
        "id": "Label0676f4f2d2aad44",
        "isVisible": true,
        "left": "0dp",
        "text": "DATOS TECNICOS",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 1, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var Button0c9770c99e42745 = new kony.ui.Button({
        "height": "6%",
        "id": "Button0c9770c99e42745",
        "isVisible": true,
        "left": "12%",
        "top": "4%",
        "width": "3%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var FlexContainer0114836cf31f544 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "17.20%",
        "id": "FlexContainer0114836cf31f544",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "top": "15%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    FlexContainer0114836cf31f544.setDefaultUnit(kony.flex.DP);
    var lblPotencia = new kony.ui.Label({
        "height": "50%",
        "id": "lblPotencia",
        "isVisible": true,
        "left": "0dp",
        "text": "Potencia",
        "top": "5%",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [9, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var lblPotenciaNo = new kony.ui.Label({
        "bottom": "5%",
        "height": "50%",
        "id": "lblPotenciaNo",
        "isVisible": true,
        "left": "0dp",
        "text": "122 hprm",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [9, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    FlexContainer0114836cf31f544.add(lblPotencia, lblPotenciaNo);
    var CopyFlexContainer08098194b8da541 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "17%",
        "id": "CopyFlexContainer08098194b8da541",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "top": "32%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    CopyFlexContainer08098194b8da541.setDefaultUnit(kony.flex.DP);
    var lblMotor = new kony.ui.Label({
        "height": "50%",
        "id": "lblMotor",
        "isVisible": true,
        "left": "0dp",
        "text": "Potencia",
        "top": "5%",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [9, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var lblMotorNo = new kony.ui.Label({
        "bottom": "5%",
        "height": "50%",
        "id": "lblMotorNo",
        "isVisible": true,
        "left": "0dp",
        "text": "122 hprm",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [9, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    CopyFlexContainer08098194b8da541.add(lblMotor, lblMotorNo);
    var CopyFlexContainer0ea2ae918ffe54b = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "17%",
        "id": "CopyFlexContainer0ea2ae918ffe54b",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "top": "49%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    CopyFlexContainer0ea2ae918ffe54b.setDefaultUnit(kony.flex.DP);
    var lblTransmicionTipo = new kony.ui.Label({
        "bottom": "5%",
        "height": "50%",
        "id": "lblTransmicionTipo",
        "isVisible": true,
        "left": "0dp",
        "text": "122 hprm",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [9, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var lblTransmision = new kony.ui.Label({
        "height": "50%",
        "id": "lblTransmision",
        "isVisible": true,
        "left": "0dp",
        "text": "Potencia",
        "top": "5%",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [9, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    CopyFlexContainer0ea2ae918ffe54b.add(lblTransmicionTipo, lblTransmision);
    var CopyFlexContainer05b6150e517eb43 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "18.50%",
        "id": "CopyFlexContainer05b6150e517eb43",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "top": "82%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    CopyFlexContainer05b6150e517eb43.setDefaultUnit(kony.flex.DP);
    var lblKMConsumo = new kony.ui.Label({
        "bottom": "5%",
        "height": "50%",
        "id": "lblKMConsumo",
        "isVisible": true,
        "left": "0dp",
        "text": "122 hprm",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [9, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var lblCilindrosConsumo = new kony.ui.Label({
        "height": "50%",
        "id": "lblCilindrosConsumo",
        "isVisible": true,
        "left": "0dp",
        "text": "Potencia",
        "top": "5%",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [9, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    CopyFlexContainer05b6150e517eb43.add(lblKMConsumo, lblCilindrosConsumo);
    var CopyFlexContainer045039c8702e447 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "17%",
        "id": "CopyFlexContainer045039c8702e447",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "top": "65%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    CopyFlexContainer045039c8702e447.setDefaultUnit(kony.flex.DP);
    var lblCilindrosTipo = new kony.ui.Label({
        "bottom": "5%",
        "height": "50%",
        "id": "lblCilindrosTipo",
        "isVisible": true,
        "left": "0dp",
        "text": "122 hprm",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [9, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var lblCilindros = new kony.ui.Label({
        "height": "50%",
        "id": "lblCilindros",
        "isVisible": true,
        "left": "0dp",
        "text": "Potencia",
        "top": "5%",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [9, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    CopyFlexContainer045039c8702e447.add(lblCilindrosTipo, lblCilindros);
    bottomSegmentDatosTecnicos.add(Label0676f4f2d2aad44, Button0c9770c99e42745, FlexContainer0114836cf31f544, CopyFlexContainer08098194b8da541, CopyFlexContainer0ea2ae918ffe54b, CopyFlexContainer05b6150e517eb43, CopyFlexContainer045039c8702e447);
    flexContent.add(upperContainerCalculadoraDatos, middleContainerCalculadoraDatos, botonDatosTecnicosContainer, bottomSegmentDatosTecnicos);
    flexMain.add(flexContent);
    frmCalculadoraDatos.add(flexMain);
};

function frmCalculadoraDatosGlobals() {
    frmCalculadoraDatos = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmCalculadoraDatos,
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "bounces": false,
        "enableScrolling": false,
        "enabledForIdleTimeout": false,
        "horizontalScrollIndicator": true,
        "id": "frmCalculadoraDatos",
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
        "onDeviceBack": p2kwiet19724036341791_frmCalculadoraDatos_Android_onDeviceBack_seq0,
        "outTransitionConfig": {
            "formAnimation": 0
        },
        "retainScrollPosition": false,
        "showActionBar": true,
        "showActionBarIcon": true,
        "titleBar": true,
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE
    });
    frmCalculadoraDatos.info = {
        "kuid": "p2kwiet19724036341791"
    };
};