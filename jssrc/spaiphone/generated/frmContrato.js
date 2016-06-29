function addWidgetsfrmContrato() {
    frmContrato.setDefaultUnit(kony.flex.DP);
    var flexMain = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "100%",
        "id": "flexMain",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "top": "-5%",
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
    var flexContainerTitle = new kony.ui.FlexContainer({
        "centerX": "50%",
        "clipBounds": true,
        "height": "9%",
        "id": "flexContainerTitle",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "top": "10%",
        "width": "94%",
        "zIndex": 1
    }, {}, {});
    flexContainerTitle.setDefaultUnit(kony.flex.DP);
    var lblTitle1 = new kony.ui.Label({
        "height": "50%",
        "id": "lblTitle1",
        "isVisible": true,
        "left": "22%",
        "text": "CONTRATO",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_BOTTOM_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var lblTitle2 = new kony.ui.Label({
        "bottom": "0%",
        "height": "50%",
        "id": "lblTitle2",
        "isVisible": true,
        "left": "22%",
        "text": "37598-CD",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var btnBack = new kony.ui.Button({
        "centerY": "50%",
        "height": "50%",
        "id": "btnBack",
        "isVisible": true,
        "left": "8%",
        "onClick": p2kwiet19724036341861_btnBack_onClick_seq0,
        "top": "10%",
        "width": "10%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flexContainerTitle.add(lblTitle1, lblTitle2, btnBack);
    var FlexScrollContainer067543de505e445 = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": true,
        "allowVerticalBounce": true,
        "bounces": true,
        "centerX": "50%",
        "enableScrolling": true,
        "height": "82%",
        "horizontalScrollIndicator": true,
        "id": "FlexScrollContainer067543de505e445",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "5dp",
        "pagingEnabled": false,
        "scrollDirection": kony.flex.SCROLL_VERTICAL,
        "top": "18.90%",
        "verticalScrollIndicator": true,
        "width": "94%",
        "zIndex": 1
    }, {}, {});
    FlexScrollContainer067543de505e445.setDefaultUnit(kony.flex.DP);
    var flexContainerFecha = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "20%",
        "id": "flexContainerFecha",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flexContainerFecha.setDefaultUnit(kony.flex.DP);
    var lblFechaInicio = new kony.ui.Label({
        "height": "50%",
        "id": "lblFechaInicio",
        "isVisible": true,
        "left": "0",
        "right": "-0",
        "text": "Fecha de inicio:",
        "top": "0%",
        "width": "50%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "padding": [5, 5, 5, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var lblMesInicio = new kony.ui.Label({
        "height": "50%",
        "id": "lblMesInicio",
        "isVisible": true,
        "right": "0",
        "text": "00/00/0000",
        "top": "0%",
        "width": "50%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "padding": [0, 0, 5, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var lblUltimoPago = new kony.ui.Label({
        "height": "50%",
        "id": "lblUltimoPago",
        "isVisible": true,
        "right": "0",
        "text": "00/00/0000",
        "top": "35%",
        "width": "50%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "padding": [0, 0, 5, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var lblFechaUltimoPago = new kony.ui.Label({
        "height": "50%",
        "id": "lblFechaUltimoPago",
        "isVisible": true,
        "left": "0",
        "right": "-0",
        "text": "Fecha ultimo pago:",
        "top": "35%",
        "width": "50%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "padding": [5, 5, 5, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    flexContainerFecha.add(lblFechaInicio, lblMesInicio, lblUltimoPago, lblFechaUltimoPago);
    var flexContainerMensualidad = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "26%",
        "id": "flexContainerMensualidad",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "top": "19.50%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flexContainerMensualidad.setDefaultUnit(kony.flex.DP);
    var lblTop = new kony.ui.Label({
        "height": "33%",
        "id": "lblTop",
        "isVisible": true,
        "left": "0",
        "right": "-0",
        "text": "Fecha de inicio:",
        "top": "0%",
        "width": "50%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "padding": [5, 5, 5, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var lblTopW = new kony.ui.Label({
        "height": "33%",
        "id": "lblTopW",
        "isVisible": true,
        "right": "0",
        "text": "00 de 00",
        "top": "0%",
        "width": "50%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "padding": [0, 0, 5, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var lblMidW = new kony.ui.Label({
        "height": "34%",
        "id": "lblMidW",
        "isVisible": true,
        "right": "0",
        "text": "XXXXXXXX",
        "top": "30%",
        "width": "50%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "padding": [0, 0, 5, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var lblMid = new kony.ui.Label({
        "height": "34%",
        "id": "lblMid",
        "isVisible": true,
        "left": "0",
        "right": "-0",
        "text": "Fecha ultimo pago:",
        "top": "30%",
        "width": "50%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "padding": [5, 5, 5, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var lblBot = new kony.ui.Label({
        "height": "34%",
        "id": "lblBot",
        "isVisible": true,
        "left": "0",
        "right": "-0",
        "text": "Fecha ultimo pago:",
        "top": "60%",
        "width": "50%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "padding": [5, 5, 5, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var lblBotW = new kony.ui.Label({
        "height": "33%",
        "id": "lblBotW",
        "isVisible": true,
        "right": "0",
        "text": "00/00/0000",
        "top": "60%",
        "width": "50%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "padding": [0, 0, 5, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var lineCopy = new kony.ui.Image2({
        "height": "5%",
        "id": "lineCopy",
        "isVisible": true,
        "left": "0dp",
        "src": "rayados.png",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flexContainerMensualidad.add(lblTop, lblTopW, lblMidW, lblMid, lblBot, lblBotW, lineCopy);
    var flexContainerBanco = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "26%",
        "id": "flexContainerBanco",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "top": "45%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flexContainerBanco.setDefaultUnit(kony.flex.DP);
    var lblBanco = new kony.ui.Label({
        "height": "33%",
        "id": "lblBanco",
        "isVisible": true,
        "left": "0",
        "right": "-0",
        "text": "Banco/Domiciliacion:",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "padding": [5, 5, 5, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var lblBancoNombre = new kony.ui.Label({
        "height": "20%",
        "id": "lblBancoNombre",
        "isVisible": true,
        "left": "0",
        "right": "0",
        "text": "XXXXXXXXX",
        "top": "30%",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [5, 0, 5, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var lineaCopy2 = new kony.ui.Image2({
        "height": "5%",
        "id": "lineaCopy2",
        "isVisible": true,
        "left": "0dp",
        "src": "rayados.png",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblCuenta = new kony.ui.Label({
        "height": "20%",
        "id": "lblCuenta",
        "isVisible": true,
        "left": "0",
        "right": "0",
        "text": "Cuenta: XXXXXXXXXX",
        "top": "50%",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [5, 0, 5, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var lblTitular = new kony.ui.Label({
        "height": "20%",
        "id": "lblTitular",
        "isVisible": true,
        "left": "0",
        "right": "0",
        "text": "Titular: Nombre Cliente",
        "top": "70%",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [5, 0, 5, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    flexContainerBanco.add(lblBanco, lblBancoNombre, lineaCopy2, lblCuenta, lblTitular);
    var flexContainerAseguradora = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "25%",
        "id": "flexContainerAseguradora",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "top": "70.50%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flexContainerAseguradora.setDefaultUnit(kony.flex.DP);
    var CopylblBanco041da8348124447 = new kony.ui.Label({
        "height": "33%",
        "id": "CopylblBanco041da8348124447",
        "isVisible": true,
        "left": "0",
        "right": "-0",
        "text": "Aseguradora:",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "padding": [5, 5, 5, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var CopylblBancoNombre058b4a971eb834a = new kony.ui.Label({
        "height": "20%",
        "id": "CopylblBancoNombre058b4a971eb834a",
        "isVisible": true,
        "left": "0",
        "right": "0",
        "text": "XXXXXXX",
        "top": "30%",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [5, 0, 5, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var CopylineaCopy0c73ae5b63d824b = new kony.ui.Image2({
        "height": "5%",
        "id": "CopylineaCopy0c73ae5b63d824b",
        "isVisible": true,
        "left": "0dp",
        "src": "rayados.png",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopylblCuenta0f585157314424e = new kony.ui.Label({
        "height": "20%",
        "id": "CopylblCuenta0f585157314424e",
        "isVisible": true,
        "left": "0",
        "right": "0",
        "text": "No. Poliza:XXXXX",
        "top": "50%",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [5, 0, 5, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var CopylblTitular0f3d3aaafa2be4b = new kony.ui.Label({
        "height": "20%",
        "id": "CopylblTitular0f3d3aaafa2be4b",
        "isVisible": true,
        "left": "0",
        "right": "0",
        "text": "Vence: 00/00/0000",
        "top": "70%",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [5, 0, 5, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    flexContainerAseguradora.add(CopylblBanco041da8348124447, CopylblBancoNombre058b4a971eb834a, CopylineaCopy0c73ae5b63d824b, CopylblCuenta0f585157314424e, CopylblTitular0f3d3aaafa2be4b);
    var flexContainerFlexibility = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "40%",
        "id": "flexContainerFlexibility",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "onTouchStart": p2kwiet19724036341861_flexContainerFlexibility_onTouchStart_seq0,
        "top": "95%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flexContainerFlexibility.setDefaultUnit(kony.flex.DP);
    var CopylblBanco0f580cf21764140 = new kony.ui.Label({
        "height": "33%",
        "id": "CopylblBanco0f580cf21764140",
        "isVisible": true,
        "left": "0",
        "right": "-0",
        "text": "Terminacion Flexibility:",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "padding": [5, 5, 5, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var CopylineaCopy074bcb621008b41 = new kony.ui.Image2({
        "height": "5%",
        "id": "CopylineaCopy074bcb621008b41",
        "isVisible": true,
        "left": "0dp",
        "src": "rayados.png",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var RichText01c2ea3114e9d4c = new kony.ui.RichText({
        "height": "100%",
        "id": "RichText01c2ea3114e9d4c",
        "isVisible": true,
        "left": "0dp",
        "text": "En los próximos meses su contrato estará llegando al término del plazo, por lo cual, lo invitamos a que acuda a su distribuidor para elegir la opción que más le convenga en la terminación de su contrato.",
        "top": "22%",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "padding": [5, 0, 5, 0],
        "paddingInPixel": false
    }, {});
    var Image0a14c0bc1fd394d = new kony.ui.Image2({
        "height": "8%",
        "id": "Image0a14c0bc1fd394d",
        "isVisible": true,
        "right": "6%",
        "src": "flecha.png",
        "top": "8%",
        "width": "5%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flexContainerFlexibility.add(CopylblBanco0f580cf21764140, CopylineaCopy074bcb621008b41, RichText01c2ea3114e9d4c, Image0a14c0bc1fd394d);
    FlexScrollContainer067543de505e445.add(flexContainerFecha, flexContainerMensualidad, flexContainerBanco, flexContainerAseguradora, flexContainerFlexibility);
    flexContent.add(flexContainerTitle, FlexScrollContainer067543de505e445);
    flexMain.add(flexContent);
    frmContrato.add(flexMain);
};

function frmContratoGlobals() {
    frmContrato = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmContrato,
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "bounces": false,
        "enableScrolling": false,
        "enabledForIdleTimeout": false,
        "horizontalScrollIndicator": true,
        "id": "frmContrato",
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
        "inTransitionConfig": {
            "formTransition": "none"
        },
        "outTransitionConfig": {
            "formTransition": "none"
        },
        "retainScrollPosition": false
    });
    frmContrato.info = {
        "kuid": "p2kwiet19724036341861"
    };
};