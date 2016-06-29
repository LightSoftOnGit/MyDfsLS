function addWidgetscotizadorCalculo2() {
    cotizadorCalculo2.setDefaultUnit(kony.flex.DP);
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
        "left": "12.0%",
        "leftSkin": "sliderAzulCotizador2",
        "max": 100,
        "min": 0,
        "onSelection": p2kwiet19724036341437_sliderEnganche_onSelection_seq0,
        "onSlide": p2kwiet19724036341437_sliderEnganche_onslide_seq0,
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
        "onClick": p2kwiet19724036341437_btnCalcular_onClick_seq0,
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
    var lblPlazoMinimo = new kony.ui.Label({
        "id": "lblPlazoMinimo",
        "isVisible": true,
        "left": "11%",
        "skin": "lblSliderLimits",
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
    var lblPlazoMaximo = new kony.ui.Label({
        "id": "lblPlazoMaximo",
        "isVisible": true,
        "right": "12%",
        "skin": "lblSliderLimits",
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
    var lblEngancheMinimo = new kony.ui.Label({
        "id": "lblEngancheMinimo",
        "isVisible": true,
        "left": "11%",
        "skin": "lblSliderLimits",
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
    var lblEngancheMaximo = new kony.ui.Label({
        "id": "lblEngancheMaximo",
        "isVisible": true,
        "right": "12%",
        "skin": "lblSliderLimits",
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
    var lblEngancheSeleccionado = new kony.ui.Label({
        "id": "lblEngancheSeleccionado",
        "isVisible": true,
        "right": "5%",
        "text": "0%",
        "top": "100.0%",
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
    var lblPlazoSeleccionado = new kony.ui.Label({
        "id": "lblPlazoSeleccionado",
        "isVisible": true,
        "right": "5%",
        "skin": "lblSliderLimits",
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
    var FlexContainer017e69bd9da1844 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "10%",
        "id": "FlexContainer017e69bd9da1844",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "newFlexContainerBlack",
        "top": "45%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    FlexContainer017e69bd9da1844.setDefaultUnit(kony.flex.DP);
    var lbEstados = new kony.ui.ListBox({
        "height": "6.67%",
        "id": "lbEstados",
        "isVisible": true,
        "left": "29.78%",
        "onSelection": AS_ListBox_01bcb23eb4734de0b4ad189078f7f641,
        "top": "46.67%",
        "width": "68.89%",
        "zIndex": 2
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [17, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "dropDownImage": "flechadropdown.png",
        "groupCells": false,
        "viewType": constants.LISTBOX_VIEW_TYPE_LISTVIEW
    });
    var lblUbicacion = new kony.ui.Label({
        "bottom": "47%",
        "id": "lblUbicacion",
        "isVisible": true,
        "left": "7%",
        "skin": "lblCalculadoraCalcFlexibility",
        "text": "CIUDAD/ESTADO",
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
    FlexContainer017e69bd9da1844.add(lbEstados, lblUbicacion);
    var txtPrecio = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "height": "6%",
        "id": "txtPrecio",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "35%",
        "onDone": p2kwiet19724036341437_txtPrecio_onDone_seq0,
        "secureTextEntry": false,
        "skin": "lblTextBoxCalcFlexibility",
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
    var sliderPlazos = new kony.ui.Slider({
        "bottom": "27.11%",
        "centerX": "50%",
        "height": "10%",
        "id": "sliderPlazos",
        "isVisible": true,
        "leftSkin": "sliderAzulCotizador2",
        "max": 100,
        "min": 0,
        "onSelection": p2kwiet19724036341437_sliderPlazos_onSelection_seq0,
        "onSlide": p2kwiet19724036341437_sliderPlazos_onslide_seq0,
        "rightSkin": "slSliderRightBlue",
        "selectedValue": 40,
        "step": 1,
        "thumbImage": "slider_android.png",
        "width": "75%",
        "zIndex": 1
    }, {}, {
        "thumbTintColor": "00677f00"
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
        "onSelection": p2kwiet19724036341437_radioPersona_onSelection_seq0,
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
    var txtEngancheSeleccionado = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "height": "5%",
        "id": "txtEngancheSeleccionado",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "83%",
        "maxTextLength": 4,
        "onDone": p2kwiet19724036341437_txtEngancheSeleccionado_onDone_seq0,
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "82%",
        "width": "10%",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_DEFAULT_PLATFORM_HEIGHT,
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
    var label1758703216449034 = new kony.ui.Label({
        "id": "label1758703216449034",
        "isVisible": true,
        "right": "4%",
        "skin": "lblSliderLimits",
        "text": "%",
        "top": "83%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
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
    var CopyImage0c84cec3a649b4a = new kony.ui.Image2({
        "height": "5%",
        "id": "CopyImage0c84cec3a649b4a",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "rayanegra.png",
        "top": "22%",
        "width": "100%",
        "zIndex": 3
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    fexibilityMenuFlexContainer.add(lblPrecio, lblPersona, lblPlazo, lblEnganche, sliderEnganche, btnCalcular, imgCantidadPrecio, lblPlazoMinimo, lblPlazoMaximo, lblEngancheMinimo, lblEngancheMaximo, lblEngancheSeleccionado, lblPlazoSeleccionado, FlexContainer017e69bd9da1844, txtPrecio, sliderPlazos, radioPersona, txtEngancheSeleccionado, label1758703216449034, Image00e400ff618db46, CopyImage0c84cec3a649b4a);
    var lblPlan = new kony.ui.Label({
        "height": "7%",
        "id": "lblPlan",
        "isVisible": true,
        "left": "0dp",
        "skin": "lblTransparent",
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
        "top": "7%",
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
        "height": "50%",
        "id": "CopybtnBack0a860d4ad009f49",
        "isVisible": false,
        "left": "3%",
        "onClick": p2kwiet19724036341437_CopybtnBack0a860d4ad009f49_onClick_seq0,
        "top": "120.0%",
        "width": "10%",
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
    var CopyimgBack0470ef69a03f140 = new kony.ui.Image2({
        "height": "30%",
        "id": "CopyimgBack0470ef69a03f140",
        "isVisible": false,
        "left": "3%",
        "src": "flechaatras.png",
        "top": "120.0%",
        "width": "10%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
    });
    var button978534922451116 = new kony.ui.Button({
        "height": "30%",
        "id": "button978534922451116",
        "isVisible": true,
        "left": "8%",
        "onClick": p2kwiet19724036341437_button978534922451116_onClick_seq0,
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
    flexContainerTitle.add(FlexContainer06179a003b84940, lblClase, CopybtnBack0a860d4ad009f49, CopyimgBack0470ef69a03f140, button978534922451116);
    flexContent.add(fexibilityMenuFlexContainer, lblPlan, flexContainerTitle);
    flexMain.add(flexContent);
    cotizadorCalculo2.add(flexMain);
};

function cotizadorCalculo2Globals() {
    cotizadorCalculo2 = new kony.ui.Form2({
        "addWidgets": addWidgetscotizadorCalculo2,
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "bounces": false,
        "enableScrolling": false,
        "enabledForIdleTimeout": false,
        "footers": [FlexContainer099041029e4bc45],
        "headers": [CopyFlexContainer09da0f5890f1a44],
        "horizontalScrollIndicator": true,
        "id": "cotizadorCalculo2",
        "init": p2kwiet19724036341437_cotizadorCalculo2_init_seq0,
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "pagingEnabled": false,
        "postShow": p2kwiet19724036341437_cotizadorCalculo2_postshow_seq0,
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
    cotizadorCalculo2.info = {
        "kuid": "p2kwiet19724036341437"
    };
};