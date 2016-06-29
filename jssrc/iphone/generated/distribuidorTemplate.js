function initializedistribuidorTemplate() {
    FlexContainer0348a5feae1b94c = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "FlexContainer0348a5feae1b94c",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "FelxContainerDistribuidorBlanco"
    }, {}, {});
    FlexContainer0348a5feae1b94c.setDefaultUnit(kony.flex.DP);
    var lblAutomotriz = new kony.ui.Label({
        "height": "20%",
        "id": "lblAutomotriz",
        "isVisible": true,
        "left": "0dp",
        "skin": "lblAutomotriz",
        "text": "AUTOMOTRIZ HERMER, SANTA FE",
        "top": "6%",
        "width": "100%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [5, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var lblDireccion1 = new kony.ui.Label({
        "height": "10%",
        "id": "lblDireccion1",
        "isVisible": true,
        "left": "0dp",
        "skin": "lblDireccion",
        "text": "AV. VASCO DE QUIROGA NO 3200 PB",
        "top": "27.30%",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [5, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var lblDireccion2 = new kony.ui.Label({
        "height": "10%",
        "id": "lblDireccion2",
        "isVisible": true,
        "left": "0dp",
        "skin": "lblDireccion",
        "text": "CENTRO DE CIUDAD SANTA FE CP01210",
        "top": "41.70%",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [5, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var lblT = new kony.ui.Label({
        "height": "10%",
        "id": "lblT",
        "isVisible": true,
        "left": "0dp",
        "skin": "lblDireccion",
        "text": "T",
        "top": "56.10%",
        "width": "12%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [5, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var btnTelefono = new kony.ui.Button({
        "focusSkin": "focusBtnLinkAzul",
        "height": "10%",
        "id": "btnTelefono",
        "isVisible": true,
        "left": "12%",
        "onClick": AS_Button_3178806f7f7b4dfcae472c95b843138f,
        "skin": "btnDistribuidorTemplate",
        "text": "(55) 5657 8890",
        "top": "56.10%",
        "width": "85%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    var btnPagina = new kony.ui.Button({
        "focusSkin": "focusBtnLinkAzul",
        "height": "10%",
        "id": "btnPagina",
        "isVisible": true,
        "left": "0%",
        "onClick": AS_Button_7053feed06194855a509fbc03fe97aaa,
        "skin": "btnDistribuidorTemplate",
        "text": "WWW.DISTRIBUIDORES.COM.MX",
        "top": "70%",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "displayText": true,
        "padding": [5, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    var btnIr = new kony.ui.Button({
        "focusSkin": "focusGrayButton",
        "height": "18%",
        "id": "btnIr",
        "isVisible": true,
        "left": "70%",
        "onClick": AS_Button_b373236f20c0482cb90136632c997597,
        "skin": "newBtnEnviarGray",
        "text": "Ir",
        "top": "71%",
        "width": "25%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 3, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    var CopyImage06daba0ce5f9040 = new kony.ui.Image2({
        "height": "20%",
        "id": "CopyImage06daba0ce5f9040",
        "isVisible": true,
        "left": "75%",
        "src": "flechabotongris.png",
        "top": "70%",
        "width": "1.50%",
        "zIndex": 5
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    FlexContainer0348a5feae1b94c.add(lblAutomotriz, lblDireccion1, lblDireccion2, lblT, btnTelefono, btnPagina, btnIr, CopyImage06daba0ce5f9040);
}