function addWidgetsfrmContrato() {
    frmContrato.setDefaultUnit(kony.flex.DP);
    var flexMain = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flexMain",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "slFbox",
        "top": "-5%",
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
    var flexContainerTitle = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "9%",
        "id": "flexContainerTitle",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "newFlexContainerSolidGray47",
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
        "skin": "lblTitleContrato",
        "text": "CONTRATO",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_BOTTOM_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var lblTitle2 = new kony.ui.Label({
        "bottom": "0%",
        "height": "50%",
        "id": "lblTitle2",
        "isVisible": true,
        "left": "22%",
        "skin": "lblTitleContrato",
        "text": "37598-CD",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var btnBack = new kony.ui.Button({
        "focusSkin": "focusBtnBackArrendamiento",
        "height": "35%",
        "id": "btnBack",
        "isVisible": true,
        "left": "8%",
        "onClick": AS_Button_7c5996c0b4804696b5370b111b22f996,
        "skin": "btnBack",
        "top": "30%",
        "width": "3%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    flexContainerTitle.add(lblTitle1, lblTitle2, btnBack);
    var FlexScrollContainer067543de505e445 = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": true,
        "allowVerticalBounce": true,
        "bounces": true,
        "centerX": "50%",
        "clipBounds": true,
        "enableScrolling": true,
        "height": "82%",
        "horizontalScrollIndicator": true,
        "id": "FlexScrollContainer067543de505e445",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "5dp",
        "pagingEnabled": false,
        "scrollDirection": kony.flex.SCROLL_VERTICAL,
        "skin": "CopyslFSbox0cacaaf4d5cd44a",
        "top": "18.90%",
        "verticalScrollIndicator": true,
        "width": "94%"
    }, {}, {});
    FlexScrollContainer067543de505e445.setDefaultUnit(kony.flex.DP);
    var flexContainerFecha = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "20%",
        "id": "flexContainerFecha",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "flexContainerGray33",
        "top": "0dp",
        "width": "100%"
    }, {}, {});
    flexContainerFecha.setDefaultUnit(kony.flex.DP);
    var lblFechaInicio = new kony.ui.Label({
        "height": "50%",
        "id": "lblFechaInicio",
        "isVisible": true,
        "left": 0,
        "right": -0,
        "skin": "lblSmallAjustes",
        "text": "Fecha de inicio:",
        "top": "0%",
        "width": "50%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "padding": [5, 5, 5, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var lblMesInicio = new kony.ui.Label({
        "height": "50%",
        "id": "lblMesInicio",
        "isVisible": true,
        "right": 0,
        "skin": "lblMes",
        "text": "21/12/2011",
        "top": "0%",
        "width": "50%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "padding": [0, 0, 5, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var lblUltimoPago = new kony.ui.Label({
        "height": "50%",
        "id": "lblUltimoPago",
        "isVisible": true,
        "right": 0,
        "skin": "lblMes",
        "text": "21/03/2013",
        "top": "35%",
        "width": "50%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "padding": [0, 0, 5, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var lblFechaUltimoPago = new kony.ui.Label({
        "height": "50%",
        "id": "lblFechaUltimoPago",
        "isVisible": true,
        "left": 0,
        "right": -0,
        "skin": "lblSmallAjustes",
        "text": "Fecha ultimo pago:",
        "top": "35%",
        "width": "50%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "padding": [5, 5, 5, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var Image04ce5f3e3031b49 = new kony.ui.Image2({
        "height": "5%",
        "id": "Image04ce5f3e3031b49",
        "isVisible": true,
        "left": "0dp",
        "src": "rayanegra.png",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flexContainerFecha.add(lblFechaInicio, lblMesInicio, lblUltimoPago, lblFechaUltimoPago, Image04ce5f3e3031b49);
    var flexContainerMensualidad = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "26%",
        "id": "flexContainerMensualidad",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "flexContainerGray33",
        "top": "19.50%",
        "width": "100%"
    }, {}, {});
    flexContainerMensualidad.setDefaultUnit(kony.flex.DP);
    var lblTop = new kony.ui.Label({
        "height": "33%",
        "id": "lblTop",
        "isVisible": true,
        "left": 0,
        "right": -0,
        "skin": "lblSmallAjustes",
        "text": "Mensualidad:",
        "top": "0%",
        "width": "50%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "padding": [5, 5, 5, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var lblTopW = new kony.ui.Label({
        "height": "33%",
        "id": "lblTopW",
        "isVisible": true,
        "right": 0,
        "skin": "lblMes",
        "text": "18 de 60",
        "top": "0%",
        "width": "50%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "padding": [0, 0, 5, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var lblMidW = new kony.ui.Label({
        "height": "34%",
        "id": "lblMidW",
        "isVisible": true,
        "right": 0,
        "skin": "lblMes",
        "text": "21 de cada mes",
        "top": "30%",
        "width": "50%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "padding": [0, 0, 5, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var lblMid = new kony.ui.Label({
        "height": "34%",
        "id": "lblMid",
        "isVisible": true,
        "left": 0,
        "right": -0,
        "skin": "lblSmallAjustes",
        "text": "Dia de pago:",
        "top": "30%",
        "width": "50%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "padding": [5, 5, 5, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var lblBot = new kony.ui.Label({
        "height": "34%",
        "id": "lblBot",
        "isVisible": true,
        "left": 0,
        "right": -0,
        "skin": "lblSmallAjustes",
        "text": "Referencia:",
        "top": "60%",
        "width": "50%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "padding": [5, 5, 5, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var lblBotW = new kony.ui.Label({
        "height": "33%",
        "id": "lblBotW",
        "isVisible": true,
        "right": 0,
        "skin": "lblMes",
        "text": "300256321",
        "top": "60%",
        "width": "50%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "padding": [0, 0, 5, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var CopyImage02bbedab2f7f845 = new kony.ui.Image2({
        "height": "5%",
        "id": "CopyImage02bbedab2f7f845",
        "isVisible": true,
        "left": "0dp",
        "src": "rayanegra.png",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flexContainerMensualidad.add(lblTop, lblTopW, lblMidW, lblMid, lblBot, lblBotW, CopyImage02bbedab2f7f845);
    var flexContainerBanco = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "26%",
        "id": "flexContainerBanco",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "flexContainerGray33",
        "top": "45%",
        "width": "100%"
    }, {}, {});
    flexContainerBanco.setDefaultUnit(kony.flex.DP);
    var lblBanco = new kony.ui.Label({
        "height": "33%",
        "id": "lblBanco",
        "isVisible": true,
        "left": 0,
        "right": -0,
        "skin": "lblSmallAjustes",
        "text": "Banco/Domiciliacion:",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "padding": [5, 5, 5, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var lblBancoNombre = new kony.ui.Label({
        "height": "20%",
        "id": "lblBancoNombre",
        "isVisible": true,
        "left": 0,
        "right": 0,
        "skin": "lblInfoAseguradora",
        "text": "BBVA Bancomer",
        "top": "30%",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [5, 0, 5, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var lblCuenta = new kony.ui.Label({
        "height": "20%",
        "id": "lblCuenta",
        "isVisible": true,
        "left": 0,
        "right": 0,
        "skin": "lblInfoAseguradora",
        "text": "Cuenta: XXXXXXXXXX5009",
        "top": "50%",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [5, 0, 5, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var lblTitular = new kony.ui.Label({
        "height": "20%",
        "id": "lblTitular",
        "isVisible": true,
        "left": 0,
        "right": 0,
        "skin": "lblInfoAseguradora",
        "text": "Titular: Nombre Cliente",
        "top": "70%",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [5, 0, 5, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var CopyImage01e2f2f9905aa44 = new kony.ui.Image2({
        "height": "5%",
        "id": "CopyImage01e2f2f9905aa44",
        "isVisible": true,
        "left": "0dp",
        "src": "rayanegra.png",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flexContainerBanco.add(lblBanco, lblBancoNombre, lblCuenta, lblTitular, CopyImage01e2f2f9905aa44);
    var flexContainerAseguradora = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "25%",
        "id": "flexContainerAseguradora",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "flexContainerGray33",
        "top": "70.50%",
        "width": "100%"
    }, {}, {});
    flexContainerAseguradora.setDefaultUnit(kony.flex.DP);
    var CopylblBanco041da8348124447 = new kony.ui.Label({
        "height": "33%",
        "id": "CopylblBanco041da8348124447",
        "isVisible": true,
        "left": 0,
        "right": -0,
        "skin": "lblSmallAjustes",
        "text": "Aseguradora:",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "padding": [5, 5, 5, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var CopylblBancoNombre058b4a971eb834a = new kony.ui.Label({
        "height": "20%",
        "id": "CopylblBancoNombre058b4a971eb834a",
        "isVisible": true,
        "left": 0,
        "right": 0,
        "skin": "lblInfoAseguradora",
        "text": "Qualitas",
        "top": "30%",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [5, 0, 5, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var CopylblCuenta0f585157314424e = new kony.ui.Label({
        "height": "20%",
        "id": "CopylblCuenta0f585157314424e",
        "isVisible": true,
        "left": 0,
        "right": 0,
        "skin": "lblInfoAseguradora",
        "text": "No. Poliza: 8596496",
        "top": "50%",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [5, 0, 5, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var CopylblTitular0f3d3aaafa2be4b = new kony.ui.Label({
        "height": "20%",
        "id": "CopylblTitular0f3d3aaafa2be4b",
        "isVisible": true,
        "left": 0,
        "right": 0,
        "skin": "lblInfoAseguradora",
        "text": "Vence: 21/03/2013",
        "top": "70%",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [5, 0, 5, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var CopyImage0bf9c7375f9154b = new kony.ui.Image2({
        "height": "5%",
        "id": "CopyImage0bf9c7375f9154b",
        "isVisible": true,
        "left": "0dp",
        "src": "rayanegra.png",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flexContainerAseguradora.add(CopylblBanco041da8348124447, CopylblBancoNombre058b4a971eb834a, CopylblCuenta0f585157314424e, CopylblTitular0f3d3aaafa2be4b, CopyImage0bf9c7375f9154b);
    var flexContainerFlexibility = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "40%",
        "id": "flexContainerFlexibility",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "onTouchStart": AS_FlexContainer_cea26198d4204f3b95dc04bb68ae6ebe,
        "skin": "flexContainerGray33",
        "top": "95%",
        "width": "100%"
    }, {}, {});
    flexContainerFlexibility.setDefaultUnit(kony.flex.DP);
    var CopylblBanco0f580cf21764140 = new kony.ui.Label({
        "height": "33%",
        "id": "CopylblBanco0f580cf21764140",
        "isVisible": true,
        "left": 0,
        "right": -0,
        "skin": "lblSmallAjustes",
        "text": "Terminacion Flexibility:",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "padding": [5, 5, 5, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var RichText01c2ea3114e9d4c = new kony.ui.RichText({
        "height": "100%",
        "id": "RichText01c2ea3114e9d4c",
        "isVisible": true,
        "left": "0dp",
        "skin": "richTextContrato",
        "text": "En los próximos meses su contrato estará llegando al término del plazo, por lo cual, lo invitamos a que acuda a su distribuidor para elegir la opción que más le convenga en la terminación de su contrato.",
        "top": "22%",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "padding": [5, 0, 5, 0],
        "paddingInPixel": false
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
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
    var CopyImage05eb41c391d1341 = new kony.ui.Image2({
        "height": "5%",
        "id": "CopyImage05eb41c391d1341",
        "isVisible": true,
        "left": "0dp",
        "src": "rayanegra.png",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flexContainerFlexibility.add(CopylblBanco0f580cf21764140, RichText01c2ea3114e9d4c, Image0a14c0bc1fd394d, CopyImage05eb41c391d1341);
    FlexScrollContainer067543de505e445.add(flexContainerFecha, flexContainerMensualidad, flexContainerBanco, flexContainerAseguradora, flexContainerFlexibility);
    flexContent.add(flexContainerTitle, FlexScrollContainer067543de505e445);
    flexMain.add(flexContent);
    frmContrato.add(flexMain);
};

function frmContratoGlobals() {
    frmContrato = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmContrato,
        "allowHorizontalBounce": false,
        "bounces": false,
        "enableScrolling": false,
        "enabledForIdleTimeout": false,
        "footers": [FlexContainer099041029e4bc45],
        "headers": [CopyFlexContainer09da0f5890f1a44],
        "id": "frmContrato",
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
    frmContrato.info = {
        "notesId": "f60a45d65344493892cdd9690259f973",
        "kuid": "f60a45d65344493892cdd9690259f973"
    };
};