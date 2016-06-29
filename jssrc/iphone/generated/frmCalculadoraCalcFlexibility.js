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
        "skin": "whit",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    fexibilityMenuFlexContainer.setDefaultUnit(kony.flex.DP);
    var Image0cc38a83a601b4e = new kony.ui.Image2({
        "height": "100%",
        "id": "Image0cc38a83a601b4e",
        "isVisible": false,
        "left": "0dp",
        "src": "tabcalculadora4.png",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
    });
    var lblPrecio = new kony.ui.Label({
        "bottom": "81%",
        "id": "lblPrecio",
        "isVisible": true,
        "left": "7%",
        "skin": "lblCalculadoraCalcFlexibility",
        "text": "PRECIO:",
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
    var lblPersona = new kony.ui.Label({
        "bottom": "66.67%",
        "id": "lblPersona",
        "isVisible": true,
        "left": "7%",
        "skin": "lblCalculadoraCalcFlexibility",
        "text": "PERSONA",
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
    var lblFisica = new kony.ui.Label({
        "bottom": "60%",
        "id": "lblFisica",
        "isVisible": true,
        "left": "56%",
        "skin": "lblCalculadoraCalcFlexibility",
        "text": "Moral:",
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
    var lblUbicacion = new kony.ui.Label({
        "bottom": "48%",
        "id": "lblUbicacion",
        "isVisible": true,
        "left": "7%",
        "skin": "lblCalculadoraCalcFlexibility",
        "text": "CIUDAD/ESTADO",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 3
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var lblPlazo = new kony.ui.Label({
        "bottom": "38%",
        "id": "lblPlazo",
        "isVisible": true,
        "left": "7%",
        "skin": "lblCalculadoraCalcFlexibility",
        "text": "PLAZO:",
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
    var sliderPlazo = new kony.ui.Slider({
        "bottom": "28.11%",
        "height": "10%",
        "id": "sliderPlazo",
        "isVisible": true,
        "left": "12%",
        "leftSkin": "sliderAzulCotizador2",
        "max": 100,
        "maxWidth": 0,
        "min": 0,
        "minWidth": 0,
        "rightSkin": "slSliderRightBlue",
        "selectedValue": 40,
        "step": 1,
        "thumbImage": "slider_android.png",
        "width": "70%",
        "zIndex": 1
    }, {}, {
        "thumbTintColor": "00677f00"
    });
    var lblEnganche = new kony.ui.Label({
        "bottom": "22%",
        "id": "lblEnganche",
        "isVisible": true,
        "left": "7%",
        "skin": "lblCalculadoraCalcFlexibility",
        "text": "ENGANCHE:",
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
    var sliderEnganche = new kony.ui.Slider({
        "bottom": "11%",
        "height": "10%",
        "id": "sliderEnganche",
        "isVisible": true,
        "left": "12%",
        "leftSkin": "sliderAzulCotizador",
        "max": 100,
        "min": 0,
        "rightSkin": "slSliderRightBlue",
        "selectedValue": 40,
        "step": 1,
        "thumbImage": "slider_android.png",
        "width": "70%",
        "zIndex": 1
    }, {}, {
        "thumbTintColor": "00677f00"
    });
    var btnCalcular = new kony.ui.Button({
        "bottom": "3%",
        "centerX": "50%",
        "height": "6%",
        "id": "btnCalcular",
        "isVisible": true,
        "onClick": p2kwiet19724036341702_btnCalcular_onClick_seq0,
        "skin": "newBtnEnviarGray",
        "text": "Calcular",
        "width": "30%",
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
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
    });
    var leftLimit = new kony.ui.Label({
        "id": "leftLimit",
        "isVisible": true,
        "left": "11%",
        "skin": "lblCalculadoraCalcFlexibility",
        "text": "0",
        "top": "70%",
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
    var limitRight = new kony.ui.Label({
        "id": "limitRight",
        "isVisible": true,
        "right": "12%",
        "skin": "lblCalculadoraCalcFlexibility",
        "text": "100",
        "top": "70%",
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
    var limitLeft2 = new kony.ui.Label({
        "id": "limitLeft2",
        "isVisible": true,
        "left": "11%",
        "skin": "lblCalculadoraCalcFlexibility",
        "text": "0",
        "top": "88%",
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
    var limitRight2 = new kony.ui.Label({
        "id": "limitRight2",
        "isVisible": true,
        "right": "12%",
        "skin": "lblCalculadoraCalcFlexibility",
        "text": "100",
        "top": "88%",
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
    var valueEngancheSlider = new kony.ui.Label({
        "id": "valueEngancheSlider",
        "isVisible": true,
        "right": "5%",
        "skin": "lblCalculadoraCalcFlexibility",
        "text": "0%",
        "top": "83.50%",
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
    var CopyvalueEngancheSlider03643a2972d2643 = new kony.ui.Label({
        "id": "CopyvalueEngancheSlider03643a2972d2643",
        "isVisible": true,
        "right": "5%",
        "skin": "lblCalculadoraCalcFlexibility",
        "text": "0%",
        "top": "66%",
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
        "skin": "listBoxCalculadoraCalcFlexibility",
        "top": "47.50%",
        "width": "60%",
        "zIndex": 3
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "dropDownImage": "flechadropdown.png",
        "groupCells": false,
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
        "skin": "lblTextBoxCalcFlexibility",
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
        "autoCorrect": false,
        "closeButtonRequired": true,
        "closeButtonText": "Done",
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
        "pasteboardType": constants.TEXTBOX_PASTE_BOARD_TYPE_NO_PASTE_BOARD,
        "showClearButton": true,
        "showCloseButton": true,
        "showProgressIndicator": true,
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
    }, {
        "groupCells": false,
        "viewType": constants.RADIOGROUP_VIEW_TYPE_LISTVIEW
    });
    var FlexContainer07d2971dfcf9247 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "10%",
        "id": "FlexContainer07d2971dfcf9247",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "newFlexContainerBlack",
        "top": "45%",
        "width": "100%",
        "zIndex": 2
    }, {}, {});
    FlexContainer07d2971dfcf9247.setDefaultUnit(kony.flex.DP);
    FlexContainer07d2971dfcf9247.add();
    var Image00e400ff618db46 = new kony.ui.Image2({
        "height": "5%",
        "id": "Image00e400ff618db46",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "rayanegra.png",
        "top": "6%",
        "width": "100%",
        "zIndex": 3
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopyImage0cd688e3326374c = new kony.ui.Image2({
        "height": "5%",
        "id": "CopyImage0cd688e3326374c",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "rayanegra.png",
        "top": "22%",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    fexibilityMenuFlexContainer.add(Image0cc38a83a601b4e, lblPrecio, lblPersona, lblFisica, lblUbicacion, lblPlazo, sliderPlazo, lblEnganche, sliderEnganche, btnCalcular, imgCantidadPrecio, leftLimit, limitRight, limitLeft2, limitRight2, valueEngancheSlider, CopyvalueEngancheSlider03643a2972d2643, listBoxCalculadoraFlexibility, TextField0fab186fb850546, radioPersona, FlexContainer07d2971dfcf9247, Image00e400ff618db46, CopyImage0cd688e3326374c);
    var Label07de837f4574a4d = new kony.ui.Label({
        "height": "7%",
        "id": "Label07de837f4574a4d",
        "isVisible": true,
        "left": "0dp",
        "skin": "lblTransparent",
        "text": "FLEXIBILITY 25%",
        "top": "20%",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var flexContainerTitle = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "10%",
        "id": "flexContainerTitle",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "10%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flexContainerTitle.setDefaultUnit(kony.flex.DP);
    var FlexContainer06179a003b84940 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "70%",
        "id": "FlexContainer06179a003b84940",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox0b068ca7e29b44a",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    FlexContainer06179a003b84940.setDefaultUnit(kony.flex.DP);
    FlexContainer06179a003b84940.add();
    var lblModelo = new kony.ui.Label({
        "centerX": "70%",
        "id": "lblModelo",
        "isVisible": true,
        "text": "Sedan",
        "top": "25%",
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
    var lblClase = new kony.ui.Label({
        "centerX": "50%",
        "id": "lblClase",
        "isVisible": true,
        "skin": "lblTitle",
        "text": "A Class",
        "top": "10%",
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
    var CopybtnBack0a860d4ad009f49 = new kony.ui.Button({
        "height": "25%",
        "id": "CopybtnBack0a860d4ad009f49",
        "isVisible": true,
        "left": "8%",
        "onClick": p2kwiet19724036341702_CopybtnBack0a860d4ad009f49_onClick_seq0,
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
    flexContainerTitle.add(FlexContainer06179a003b84940, lblModelo, lblClase, CopybtnBack0a860d4ad009f49);
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
        "footers": [FlexContainer099041029e4bc45],
        "headers": [CopyFlexContainer09da0f5890f1a44],
        "horizontalScrollIndicator": true,
        "id": "frmCalculadoraCalcFlexibility",
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
    frmCalculadoraCalcFlexibility.info = {
        "kuid": "p2kwiet19724036341702"
    };
};