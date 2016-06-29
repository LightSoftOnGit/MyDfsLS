function initializedistribuidorCotizadorTemplate() {
    CopyFlexContainer025c999267ce944 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "70%",
        "id": "CopyFlexContainer025c999267ce944",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "flexContainerBlackExtra"
    }, {}, {});
    CopyFlexContainer025c999267ce944.setDefaultUnit(kony.flex.DP);
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
        "text": "TELEFONO",
        "top": "56.10%",
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
    CopyFlexContainer025c999267ce944.add(lblAutomotriz, lblDireccion1, lblDireccion2, lblT);
}