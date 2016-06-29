function addWidgetsfrmCalculadoraCalcFlexibility() {
    frmCalculadoraCalcFlexibility.setDefaultUnit(kony.flex.DP);
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
    var fexibilityMenuFlexContainer = new kony.ui.FlexContainer({
        "bottom": "0",
        "clipBounds": true,
        "height": "80%",
        "id": "fexibilityMenuFlexContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    fexibilityMenuFlexContainer.setDefaultUnit(kony.flex.DP);
    var Image0cc38a83a601b4e = new kony.ui.Image2({
        "height": "100%",
        "id": "Image0cc38a83a601b4e",
        "isVisible": true,
        "left": "0dp",
        "src": "tabcalculadora4.png",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblPrecio = new kony.ui.Label({
        "bottom": "81%",
        "id": "lblPrecio",
        "isVisible": true,
        "left": "7%",
        "text": "PRECIO:",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var lblPersona = new kony.ui.Label({
        "bottom": "66.67%",
        "id": "lblPersona",
        "isVisible": true,
        "left": "7%",
        "text": "PERSONA",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var lblFisica = new kony.ui.Label({
        "bottom": "60%",
        "id": "lblFisica",
        "isVisible": true,
        "left": "100.0%",
        "text": "FISICA:",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var lblUbicacion = new kony.ui.Label({
        "bottom": "48%",
        "id": "lblUbicacion",
        "isVisible": true,
        "left": "7%",
        "text": "CIUDAD/ESTADO",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var lblPlazo = new kony.ui.Label({
        "bottom": "38%",
        "id": "lblPlazo",
        "isVisible": true,
        "left": "7%",
        "text": "PLAZO:",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var sliderPlazo = new kony.ui.Slider({
        "bottom": "30.00%",
        "centerX": "50.00%",
        "height": "5%",
        "id": "sliderPlazo",
        "isVisible": true,
        "max": 100,
        "min": 0,
        "selectedValue": 40,
        "step": 1,
        "thumbImage": "slider_android.png",
        "width": "75%",
        "zIndex": 1
    }, {}, {
        "thickness": 1
    });
    var lblEnganche = new kony.ui.Label({
        "bottom": "22%",
        "id": "lblEnganche",
        "isVisible": true,
        "left": "7%",
        "text": "ENGANCHE:",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var sliderEnganche = new kony.ui.Slider({
        "bottom": "13%",
        "centerX": "50%",
        "height": "5%",
        "id": "sliderEnganche",
        "isVisible": true,
        "max": 100,
        "min": 0,
        "selectedValue": 40,
        "step": 1,
        "thumbImage": "slider_android.png",
        "width": "75%",
        "zIndex": 1
    }, {}, {
        "thickness": 1
    });
    var btnCalcular = new kony.ui.Button({
        "bottom": "3%",
        "centerX": "50%",
        "height": "6%",
        "id": "btnCalcular",
        "isVisible": true,
        "onClick": p2kwiet19724036341702_btnCalcular_onClick_seq0,
        "text": "Calcular",
        "width": "30%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var imgCantidadPrecio = new kony.ui.Image2({
        "bottom": "75%",
        "height": "15%",
        "id": "imgCantidadPrecio",
        "isVisible": true,
        "left": "35%",
        "src": "campocantidad.png",
        "width": "55%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var leftLimit = new kony.ui.Label({
        "id": "leftLimit",
        "isVisible": true,
        "left": "11%",
        "text": "0",
        "top": "70%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var limitRight = new kony.ui.Label({
        "id": "limitRight",
        "isVisible": true,
        "right": "12%",
        "text": "100",
        "top": "70%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var limitLeft2 = new kony.ui.Label({
        "id": "limitLeft2",
        "isVisible": true,
        "left": "11%",
        "text": "0",
        "top": "88%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var limitRight2 = new kony.ui.Label({
        "id": "limitRight2",
        "isVisible": true,
        "right": "12%",
        "text": "100",
        "top": "88%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var valueEngancheSlider = new kony.ui.Label({
        "id": "valueEngancheSlider",
        "isVisible": true,
        "right": "5%",
        "text": "0%",
        "top": "83.50%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var CopyvalueEngancheSlider03643a2972d2643 = new kony.ui.Label({
        "id": "CopyvalueEngancheSlider03643a2972d2643",
        "isVisible": true,
        "right": "5%",
        "text": "0%",
        "top": "66%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var listBoxCalculadoraFlexibility = new kony.ui.ListBox({
        "height": "7%",
        "id": "listBoxCalculadoraFlexibility",
        "isVisible": true,
        "left": "39%",
        "masterData": [
            ["lb1", "Listbox One"],
            ["lb2", "Listbox Two"],
            ["lb3", "Listbox Three"]
        ],
        "selectedKey": "lb1",
        "selectedKeyValue": ["lb1", "Listbox One"],
        "top": "47.50%",
        "width": "60%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "applySkinsToPopup": true,
        "dropDownImage": "flechadropdown.png",
        "popupTitle": "Please Select",
        "viewType": constants.LISTBOX_VIEW_TYPE_LISTVIEW
    });
    var TextField0fab186fb850546 = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "height": "6%",
        "id": "TextField0fab186fb850546",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "35%",
        "secureTextEntry": false,
        "text": "$419,900.00",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "14.50%",
        "width": "55%",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "autoFilter": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var radioPersona = new kony.ui.RadioButtonGroup({
        "bottom": "60.0%",
        "height": "5.0%",
        "id": "radioPersona",
        "isVisible": true,
        "left": "7.0%",
        "masterData": [
            ["0", "Fisica"],
            ["1", "Moral"]
        ],
        "selectedKey": "0",
        "selectedKeyValue": ["0", "Fisica"],
        "width": "90%",
        "zIndex": 1
    }, {
        "itemOrientation": constants.RADIOGROUP_ITEM_ORIENTATION_HORIZONTAL,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    fexibilityMenuFlexContainer.add(Image0cc38a83a601b4e, lblPrecio, lblPersona, lblFisica, lblUbicacion, lblPlazo, sliderPlazo, lblEnganche, sliderEnganche, btnCalcular, imgCantidadPrecio, leftLimit, limitRight, limitLeft2, limitRight2, valueEngancheSlider, CopyvalueEngancheSlider03643a2972d2643, listBoxCalculadoraFlexibility, TextField0fab186fb850546, radioPersona);
    var Label07de837f4574a4d = new kony.ui.Label({
        "height": "7%",
        "id": "Label07de837f4574a4d",
        "isVisible": true,
        "left": "0dp",
        "text": "FLEXIBILITY 25%",
        "top": "20%",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var flexContainerTitle = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "10%",
        "id": "flexContainerTitle",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "top": "10%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flexContainerTitle.setDefaultUnit(kony.flex.DP);
    var lblModelo = new kony.ui.Label({
        "centerX": "50%",
        "id": "lblModelo",
        "isVisible": true,
        "text": "Sedan",
        "top": "45%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var lblClase = new kony.ui.Label({
        "centerX": "50%",
        "id": "lblClase",
        "isVisible": true,
        "text": "A Class",
        "top": "10%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var CopybtnBack0a860d4ad009f49 = new kony.ui.Button({
        "height": "50%",
        "id": "CopybtnBack0a860d4ad009f49",
        "isVisible": true,
        "left": "3%",
        "onClick": p2kwiet19724036341702_CopybtnBack0a860d4ad009f49_onClick_seq0,
        "top": "10%",
        "width": "10%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flexContainerTitle.add(lblModelo, lblClase, CopybtnBack0a860d4ad009f49);
    flexContent.add(fexibilityMenuFlexContainer, Label07de837f4574a4d, flexContainerTitle);
    flexMain.add(flexContent);
    frmCalculadoraCalcFlexibility.add(flexMain);
};

function frmCalculadoraCalcFlexibilityGlobals() {
    frmCalculadoraCalcFlexibility = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmCalculadoraCalcFlexibility,
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "bounces": false,
        "enableScrolling": false,
        "enabledForIdleTimeout": false,
        "horizontalScrollIndicator": true,
        "id": "frmCalculadoraCalcFlexibility",
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
        "onDeviceBack": p2kwiet19724036341702_frmCalculadoraCalcFlexibility_Android_onDeviceBack_seq0,
        "outTransitionConfig": {
            "formAnimation": 0
        },
        "retainScrollPosition": false,
        "showActionBar": true,
        "showActionBarIcon": true,
        "titleBar": true,
        "windowSoftInputMode": constants.FORM_ADJUST_PAN
    });
    frmCalculadoraCalcFlexibility.info = {
        "kuid": "p2kwiet19724036341702"
    };
};