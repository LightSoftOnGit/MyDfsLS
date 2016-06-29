function addWidgetscotizadorCotizacion2() {
    cotizadorCotizacion2.setDefaultUnit(kony.flex.DP);
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
        "zIndex": 7
    }, {}, {});
    upperContainerCalculadoraDatos.setDefaultUnit(kony.flex.DP);
    var imageClaseCotizacion = new kony.ui.Image2({
        "height": "100%",
        "id": "imageClaseCotizacion",
        "isVisible": true,
        "left": "0dp",
        "top": "0dp",
        "width": "100%",
        "zIndex": 6
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var btnCotizacion = new kony.ui.Button({
        "height": "9%",
        "id": "btnCotizacion",
        "isVisible": true,
        "onClick": p2kwiet19724036341503_btnCotizacion_onClick_seq0,
        "right": "0%",
        "text": "Cotizacion",
        "top": "12%",
        "width": "30%",
        "zIndex": 9
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
        "onClick": p2kwiet19724036341503_btnTC_onClick_seq0,
        "right": "0%",
        "text": "T&C",
        "top": "25%",
        "width": "25%",
        "zIndex": 9
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
        "zIndex": 9
    }, {}, {});
    flxContainerBoton.setDefaultUnit(kony.flex.DP);
    var btnCall = new kony.ui.Button({
        "height": "100%",
        "id": "btnCall",
        "isVisible": true,
        "left": "0%",
        "onClick": p2kwiet19724036341503_btnCall_onClick_seq0,
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
    upperContainerCalculadoraDatos.add(imageClaseCotizacion, btnCotizacion, btnTC, flxContainerBoton);
    var middleContainerCalculadoraDatos = new kony.ui.FlexContainer({
        "clipBounds": false,
        "height": "55%",
        "id": "middleContainerCalculadoraDatos",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "top": "44.8%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    middleContainerCalculadoraDatos.setDefaultUnit(kony.flex.DP);
    var lblUnidad = new kony.ui.Label({
        "height": "15%",
        "id": "lblUnidad",
        "isVisible": true,
        "left": "0dp",
        "text": "CLA 200 CGI",
        "top": "0dp",
        "width": "100%",
        "zIndex": 5
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 1, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var CopyFlexScrollContainer0eb579be1934946 = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": true,
        "allowVerticalBounce": true,
        "bounces": true,
        "enableScrolling": true,
        "height": "100%",
        "horizontalScrollIndicator": true,
        "id": "CopyFlexScrollContainer0eb579be1934946",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "pagingEnabled": false,
        "scrollDirection": kony.flex.SCROLL_VERTICAL,
        "top": "14%",
        "verticalScrollIndicator": true,
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    CopyFlexScrollContainer0eb579be1934946.setDefaultUnit(kony.flex.DP);
    var CopyFlexContainer0e3ad81145d5748 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "17.20%",
        "id": "CopyFlexContainer0e3ad81145d5748",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    CopyFlexContainer0e3ad81145d5748.setDefaultUnit(kony.flex.DP);
    var lblPlanSeleccionado = new kony.ui.Label({
        "centerY": "50%",
        "height": "50%",
        "id": "lblPlanSeleccionado",
        "isVisible": true,
        "left": "0dp",
        "top": "5%",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [9, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var lblvacio = new kony.ui.Label({
        "bottom": "5%",
        "height": "50%",
        "id": "lblvacio",
        "isVisible": true,
        "left": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [9, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    CopyFlexContainer0e3ad81145d5748.add(lblPlanSeleccionado, lblvacio);
    var CopyFlexContainer063d324fe82344f = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "17%",
        "id": "CopyFlexContainer063d324fe82344f",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "top": "17%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    CopyFlexContainer063d324fe82344f.setDefaultUnit(kony.flex.DP);
    var CopylblMotor0fd4ab9a8f6b346 = new kony.ui.Label({
        "height": "50%",
        "id": "CopylblMotor0fd4ab9a8f6b346",
        "isVisible": true,
        "left": "0dp",
        "text": "Precio estimado:",
        "top": "5%",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [9, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var lblPrecio = new kony.ui.Label({
        "bottom": "5%",
        "height": "50%",
        "id": "lblPrecio",
        "isVisible": true,
        "left": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [9, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    CopyFlexContainer063d324fe82344f.add(CopylblMotor0fd4ab9a8f6b346, lblPrecio);
    var CopyFlexContainer0230951c8927c4e = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "17%",
        "id": "CopyFlexContainer0230951c8927c4e",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "top": "33.50%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    CopyFlexContainer0230951c8927c4e.setDefaultUnit(kony.flex.DP);
    var lblPlazo = new kony.ui.Label({
        "bottom": "5%",
        "height": "50%",
        "id": "lblPlazo",
        "isVisible": true,
        "left": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [9, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var lblMensualidadLabel = new kony.ui.Label({
        "height": "50%",
        "id": "lblMensualidadLabel",
        "isVisible": true,
        "left": "0dp",
        "text": "Plazo a:",
        "top": "5%",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [9, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    CopyFlexContainer0230951c8927c4e.add(lblPlazo, lblMensualidadLabel);
    var CopyFlexContainer0627ab4bdf0b847 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "18.50%",
        "id": "CopyFlexContainer0627ab4bdf0b847",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "top": "66.50%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    CopyFlexContainer0627ab4bdf0b847.setDefaultUnit(kony.flex.DP);
    var lblComisionApertura = new kony.ui.Label({
        "bottom": "5%",
        "height": "50%",
        "id": "lblComisionApertura",
        "isVisible": true,
        "left": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [9, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var lblComision = new kony.ui.Label({
        "height": "50%",
        "id": "lblComision",
        "isVisible": true,
        "left": "0dp",
        "text": "Comision por apertura:",
        "top": "5%",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [9, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    CopyFlexContainer0627ab4bdf0b847.add(lblComisionApertura, lblComision);
    var CopyFlexContainer0810fb0d7535a41 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "17%",
        "id": "CopyFlexContainer0810fb0d7535a41",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "top": "50%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    CopyFlexContainer0810fb0d7535a41.setDefaultUnit(kony.flex.DP);
    var lblMensualidad = new kony.ui.Label({
        "bottom": "5%",
        "height": "50%",
        "id": "lblMensualidad",
        "isVisible": true,
        "left": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [9, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var lblTotalAnticipolabel = new kony.ui.Label({
        "height": "50%",
        "id": "lblTotalAnticipolabel",
        "isVisible": true,
        "left": "0dp",
        "text": "Mensualidad:",
        "top": "5%",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [9, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    CopyFlexContainer0810fb0d7535a41.add(lblMensualidad, lblTotalAnticipolabel);
    var CopyFlexContainer07e73d6073f3349 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "17%",
        "id": "CopyFlexContainer07e73d6073f3349",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "top": "84%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    CopyFlexContainer07e73d6073f3349.setDefaultUnit(kony.flex.DP);
    var lblTotalAnticipo = new kony.ui.Label({
        "bottom": "5%",
        "height": "50%",
        "id": "lblTotalAnticipo",
        "isVisible": true,
        "left": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [9, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var CopylblCilindros0e0e9ec67760943 = new kony.ui.Label({
        "height": "50%",
        "id": "CopylblCilindros0e0e9ec67760943",
        "isVisible": true,
        "left": "0dp",
        "text": "Total de anticipo:",
        "top": "5%",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [9, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    CopyFlexContainer07e73d6073f3349.add(lblTotalAnticipo, CopylblCilindros0e0e9ec67760943);
    var flexValorFinal = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "17%",
        "id": "flexValorFinal",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "top": "100%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flexValorFinal.setDefaultUnit(kony.flex.DP);
    var lblValorFinal = new kony.ui.Label({
        "bottom": "5%",
        "height": "50%",
        "id": "lblValorFinal",
        "isVisible": true,
        "left": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [9, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var CopylblTransmision07cdd88ebabb74b = new kony.ui.Label({
        "height": "50%",
        "id": "CopylblTransmision07cdd88ebabb74b",
        "isVisible": true,
        "left": "0dp",
        "text": "Valor final:",
        "top": "5%",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [9, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    flexValorFinal.add(lblValorFinal, CopylblTransmision07cdd88ebabb74b);
    var CopyFlexContainer04a9cea79be834d = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "28%",
        "id": "CopyFlexContainer04a9cea79be834d",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "top": "117.0%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    CopyFlexContainer04a9cea79be834d.setDefaultUnit(kony.flex.DP);
    CopyFlexContainer04a9cea79be834d.add();
    CopyFlexScrollContainer0eb579be1934946.add(CopyFlexContainer0e3ad81145d5748, CopyFlexContainer063d324fe82344f, CopyFlexContainer0230951c8927c4e, CopyFlexContainer0627ab4bdf0b847, CopyFlexContainer0810fb0d7535a41, CopyFlexContainer07e73d6073f3349, flexValorFinal, CopyFlexContainer04a9cea79be834d);
    middleContainerCalculadoraDatos.add(lblUnidad, CopyFlexScrollContainer0eb579be1934946);
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
        "onClick": p2kwiet19724036341503_btnDatosTecnicos_onClick_seq0,
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
        "top": "44.8%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    bottomSegmentDatosTecnicos.setDefaultUnit(kony.flex.DP);
    var lblTituloDatos = new kony.ui.Label({
        "height": "15%",
        "id": "lblTituloDatos",
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
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var Button0c9770c99e42745 = new kony.ui.Button({
        "centerY": "7.5%",
        "height": "9.0%",
        "id": "Button0c9770c99e42745",
        "isVisible": true,
        "left": "12%",
        "onClick": p2kwiet19724036341503_Button0c9770c99e42745_onClick_seq0,
        "width": "6%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var FlexScrollContainer0a9bc594450a64d = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": true,
        "allowVerticalBounce": true,
        "bounces": true,
        "enableScrolling": true,
        "height": "100.0%",
        "horizontalScrollIndicator": true,
        "id": "FlexScrollContainer0a9bc594450a64d",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "pagingEnabled": false,
        "scrollDirection": kony.flex.SCROLL_VERTICAL,
        "top": "13.77%",
        "verticalScrollIndicator": true,
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    FlexScrollContainer0a9bc594450a64d.setDefaultUnit(kony.flex.DP);
    var FlexContainer0114836cf31f544 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "17.20%",
        "id": "FlexContainer0114836cf31f544",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    FlexContainer0114836cf31f544.setDefaultUnit(kony.flex.DP);
    var labelComustible = new kony.ui.Label({
        "height": "50%",
        "id": "labelComustible",
        "isVisible": true,
        "left": "0dp",
        "text": "Combustible",
        "top": "5%",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [9, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var lblGasolina = new kony.ui.Label({
        "bottom": "5%",
        "height": "50%",
        "id": "lblGasolina",
        "isVisible": true,
        "left": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [9, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    FlexContainer0114836cf31f544.add(labelComustible, lblGasolina);
    var CopyFlexContainer08098194b8da541 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "17%",
        "id": "CopyFlexContainer08098194b8da541",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "top": "17%",
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
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var lblPotencia = new kony.ui.Label({
        "bottom": "5%",
        "height": "50%",
        "id": "lblPotencia",
        "isVisible": true,
        "left": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [9, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    CopyFlexContainer08098194b8da541.add(lblMotor, lblPotencia);
    var CopyFlexContainer0ea2ae918ffe54b = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "17%",
        "id": "CopyFlexContainer0ea2ae918ffe54b",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "top": "33.50%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    CopyFlexContainer0ea2ae918ffe54b.setDefaultUnit(kony.flex.DP);
    var lblTorque = new kony.ui.Label({
        "bottom": "5%",
        "height": "50%",
        "id": "lblTorque",
        "isVisible": true,
        "left": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [9, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var labelTorque = new kony.ui.Label({
        "height": "50%",
        "id": "labelTorque",
        "isVisible": true,
        "left": "0dp",
        "text": "Torque (Nm@rpm)",
        "top": "5%",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [9, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    CopyFlexContainer0ea2ae918ffe54b.add(lblTorque, labelTorque);
    var CopyFlexContainer05b6150e517eb43 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "18.50%",
        "id": "CopyFlexContainer05b6150e517eb43",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "top": "66.50%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    CopyFlexContainer05b6150e517eb43.setDefaultUnit(kony.flex.DP);
    var lblTraccion = new kony.ui.Label({
        "bottom": "5%",
        "height": "50%",
        "id": "lblTraccion",
        "isVisible": true,
        "left": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [9, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var lblCilindrosConsumo = new kony.ui.Label({
        "height": "50%",
        "id": "lblCilindrosConsumo",
        "isVisible": true,
        "left": "0dp",
        "text": "Traccion",
        "top": "5%",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [9, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    CopyFlexContainer05b6150e517eb43.add(lblTraccion, lblCilindrosConsumo);
    var CopyFlexContainer045039c8702e447 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "17%",
        "id": "CopyFlexContainer045039c8702e447",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "top": "50%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    CopyFlexContainer045039c8702e447.setDefaultUnit(kony.flex.DP);
    var lblTransmision = new kony.ui.Label({
        "bottom": "5%",
        "height": "50%",
        "id": "lblTransmision",
        "isVisible": true,
        "left": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [9, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var lblCilindros = new kony.ui.Label({
        "height": "50%",
        "id": "lblCilindros",
        "isVisible": true,
        "left": "0dp",
        "text": "Transmision",
        "top": "5%",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [9, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    CopyFlexContainer045039c8702e447.add(lblTransmision, lblCilindros);
    var CopyFlexContainer05087c7de733548 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "17%",
        "id": "CopyFlexContainer05087c7de733548",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "top": "84%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    CopyFlexContainer05087c7de733548.setDefaultUnit(kony.flex.DP);
    var lblNumeroCilindros = new kony.ui.Label({
        "bottom": "5%",
        "height": "50%",
        "id": "lblNumeroCilindros",
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
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var CopylblCilindros029e17be30def47 = new kony.ui.Label({
        "height": "50%",
        "id": "CopylblCilindros029e17be30def47",
        "isVisible": true,
        "left": "0dp",
        "text": "No de cilindros / disposicion",
        "top": "5%",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [9, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    CopyFlexContainer05087c7de733548.add(lblNumeroCilindros, CopylblCilindros029e17be30def47);
    var CopyFlexContainer0a25acef550574c = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "17%",
        "id": "CopyFlexContainer0a25acef550574c",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "top": "100%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    CopyFlexContainer0a25acef550574c.setDefaultUnit(kony.flex.DP);
    var lblCilindrada = new kony.ui.Label({
        "bottom": "5%",
        "height": "50%",
        "id": "lblCilindrada",
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
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var CopylblTransmision03824d85b0dad47 = new kony.ui.Label({
        "height": "50%",
        "id": "CopylblTransmision03824d85b0dad47",
        "isVisible": true,
        "left": "0dp",
        "text": "Cilindrada",
        "top": "5%",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [9, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    CopyFlexContainer0a25acef550574c.add(lblCilindrada, CopylblTransmision03824d85b0dad47);
    var CopyFlexContainer0e6a985e14c0942 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "17%",
        "id": "CopyFlexContainer0e6a985e14c0942",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "top": "116%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    CopyFlexContainer0e6a985e14c0942.setDefaultUnit(kony.flex.DP);
    var lblConsumoCombinado = new kony.ui.Label({
        "bottom": "5%",
        "height": "50%",
        "id": "lblConsumoCombinado",
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
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var lblConsumoCombinadoLabel = new kony.ui.Label({
        "height": "50%",
        "id": "lblConsumoCombinadoLabel",
        "isVisible": true,
        "left": "0dp",
        "text": "Consumo combinado",
        "top": "5%",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [9, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    CopyFlexContainer0e6a985e14c0942.add(lblConsumoCombinado, lblConsumoCombinadoLabel);
    var CopyFlexContainer07482c5aba54042 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "17%",
        "id": "CopyFlexContainer07482c5aba54042",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "top": "133.0%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    CopyFlexContainer07482c5aba54042.setDefaultUnit(kony.flex.DP);
    CopyFlexContainer07482c5aba54042.add();
    FlexScrollContainer0a9bc594450a64d.add(FlexContainer0114836cf31f544, CopyFlexContainer08098194b8da541, CopyFlexContainer0ea2ae918ffe54b, CopyFlexContainer05b6150e517eb43, CopyFlexContainer045039c8702e447, CopyFlexContainer05087c7de733548, CopyFlexContainer0a25acef550574c, CopyFlexContainer0e6a985e14c0942, CopyFlexContainer07482c5aba54042);
    bottomSegmentDatosTecnicos.add(lblTituloDatos, Button0c9770c99e42745, FlexScrollContainer0a9bc594450a64d);
    flexContent.add(upperContainerCalculadoraDatos, middleContainerCalculadoraDatos, botonDatosTecnicosContainer, bottomSegmentDatosTecnicos);
    flexMain.add(flexContent);
    cotizadorCotizacion2.add(flexMain);
};

function cotizadorCotizacion2Globals() {
    cotizadorCotizacion2 = new kony.ui.Form2({
        "addWidgets": addWidgetscotizadorCotizacion2,
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "bounces": false,
        "enableScrolling": false,
        "enabledForIdleTimeout": false,
        "horizontalScrollIndicator": true,
        "id": "cotizadorCotizacion2",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "pagingEnabled": false,
        "postShow": p2kwiet19724036341503_cotizadorCotizacion2_postshow_seq0,
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
    cotizadorCotizacion2.info = {
        "kuid": "p2kwiet19724036341503"
    };
};