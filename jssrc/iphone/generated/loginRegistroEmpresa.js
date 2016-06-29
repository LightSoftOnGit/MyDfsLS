function addWidgetsloginRegistroEmpresa() {
    loginRegistroEmpresa.setDefaultUnit(kony.flex.DP);
    var flexMain = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flexMain",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0%",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%"
    }, {}, {});
    flexMain.setDefaultUnit(kony.flex.DP);
    var flexContent = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "110%",
        "id": "flexContent",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "flexContent",
        "top": "-8%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flexContent.setDefaultUnit(kony.flex.DP);
    var frmPopup1 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "83%",
        "id": "frmPopup1",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "18dp",
        "skin": "flexContainerLightGray",
        "top": "16%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    frmPopup1.setDefaultUnit(kony.flex.DP);
    var flxCondicionPassword = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "0%",
        "clipBounds": true,
        "height": "30%",
        "id": "flxCondicionPassword",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "64%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxCondicionPassword.setDefaultUnit(kony.flex.DP);
    var flexContainerCondicion1 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "10%",
        "id": "flexContainerCondicion1",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "10%",
        "skin": "slFbox",
        "top": "15%",
        "width": "100%",
        "zIndex": 2
    }, {}, {});
    flexContainerCondicion1.setDefaultUnit(kony.flex.DP);
    var imgminmayus = new kony.ui.Image2({
        "centerY": "50%",
        "height": "55%",
        "id": "imgminmayus",
        "isVisible": true,
        "left": "0%",
        "src": "bolitaazul.png",
        "width": "4%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var imgminmayusdescription = new kony.ui.Label({
        "centerY": "50%",
        "height": "100%",
        "id": "imgminmayusdescription",
        "isVisible": true,
        "left": "6%",
        "skin": "lblCondicionPassword",
        "text": "1 mayuscula como minimo",
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
    flexContainerCondicion1.add(imgminmayus, imgminmayusdescription);
    var flexContainerCondicion2 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "10%",
        "id": "flexContainerCondicion2",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "10%",
        "skin": "slFbox",
        "top": "24%",
        "width": "100%",
        "zIndex": 2
    }, {}, {});
    flexContainerCondicion2.setDefaultUnit(kony.flex.DP);
    var imgminminus = new kony.ui.Image2({
        "centerY": "50%",
        "height": "55%",
        "id": "imgminminus",
        "isVisible": true,
        "left": "0%",
        "src": "bolitaazul.png",
        "width": "4%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var imgminminusdescription = new kony.ui.Label({
        "centerY": "58.82%",
        "height": "100%",
        "id": "imgminminusdescription",
        "isVisible": true,
        "left": "6%",
        "skin": "lblCondicionPassword",
        "text": "1 minuscula como minimo",
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
    flexContainerCondicion2.add(imgminminus, imgminminusdescription);
    var flexContainerCondicion3 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "10%",
        "id": "flexContainerCondicion3",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "10%",
        "skin": "slFbox",
        "top": "33%",
        "width": "100%",
        "zIndex": 2
    }, {}, {});
    flexContainerCondicion3.setDefaultUnit(kony.flex.DP);
    var imgmindig = new kony.ui.Image2({
        "centerY": "50%",
        "height": "55%",
        "id": "imgmindig",
        "isVisible": true,
        "left": "0%",
        "src": "bolitaazul.png",
        "width": "4%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var imgmindigdescription = new kony.ui.Label({
        "centerY": "50%",
        "height": "100%",
        "id": "imgmindigdescription",
        "isVisible": true,
        "left": "6%",
        "skin": "lblCondicionPassword",
        "text": "1 digito como minimo",
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
    flexContainerCondicion3.add(imgmindig, imgmindigdescription);
    var flexContainerCondicion4 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "10%",
        "id": "flexContainerCondicion4",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "10%",
        "skin": "slFbox",
        "top": "42%",
        "width": "100%",
        "zIndex": 2
    }, {}, {});
    flexContainerCondicion4.setDefaultUnit(kony.flex.DP);
    var imgmincesp = new kony.ui.Image2({
        "centerY": "50%",
        "height": "55%",
        "id": "imgmincesp",
        "isVisible": true,
        "left": "0%",
        "src": "bolitaazul.png",
        "width": "4%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var imgmincespdescripiton = new kony.ui.Label({
        "centerY": "50%",
        "height": "100%",
        "id": "imgmincespdescripiton",
        "isVisible": true,
        "left": "6%",
        "skin": "lblCondicionPassword",
        "text": "1 caracter especial como minimo",
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
    flexContainerCondicion4.add(imgmincesp, imgmincespdescripiton);
    var flexContainerCondicion5 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "10%",
        "id": "flexContainerCondicion5",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "10%",
        "skin": "slFbox",
        "top": "51%",
        "width": "100%",
        "zIndex": 2
    }, {}, {});
    flexContainerCondicion5.setDefaultUnit(kony.flex.DP);
    var imgminc = new kony.ui.Image2({
        "centerY": "50%",
        "height": "55%",
        "id": "imgminc",
        "isVisible": true,
        "left": "0%",
        "src": "bolitaazul.png",
        "width": "4%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var imgmincdescription = new kony.ui.Label({
        "centerY": "50%",
        "height": "100%",
        "id": "imgmincdescription",
        "isVisible": true,
        "left": "6%",
        "skin": "lblCondicionPassword",
        "text": "9 caracteres como minimo",
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
    flexContainerCondicion5.add(imgminc, imgmincdescription);
    var flexContainerCondicion6 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "10%",
        "id": "flexContainerCondicion6",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "10%",
        "skin": "slFbox",
        "top": "60%",
        "width": "100%",
        "zIndex": 2
    }, {}, {});
    flexContainerCondicion6.setDefaultUnit(kony.flex.DP);
    var imgmaxc = new kony.ui.Image2({
        "centerY": "50%",
        "height": "55%",
        "id": "imgmaxc",
        "isVisible": true,
        "left": "0%",
        "src": "bolitaazul.png",
        "width": "4%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var imgmaxcdescription = new kony.ui.Label({
        "centerY": "50%",
        "height": "100%",
        "id": "imgmaxcdescription",
        "isVisible": true,
        "left": "6%",
        "skin": "lblCondicionPassword",
        "text": "25 caracteres como maximo",
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
    flexContainerCondicion6.add(imgmaxc, imgmaxcdescription);
    var flexContainerCondicion7 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "10%",
        "id": "flexContainerCondicion7",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "10%",
        "skin": "slFbox",
        "top": "69%",
        "width": "100%",
        "zIndex": 2
    }, {}, {});
    flexContainerCondicion7.setDefaultUnit(kony.flex.DP);
    var imgallc = new kony.ui.Image2({
        "centerY": "50%",
        "height": "55%",
        "id": "imgallc",
        "isVisible": true,
        "left": "0%",
        "src": "bolitaazul.png",
        "width": "4%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var imgallcdescription = new kony.ui.Label({
        "centerY": "50%",
        "height": "100%",
        "id": "imgallcdescription",
        "isVisible": true,
        "left": "6%",
        "skin": "lblCondicionPassword",
        "text": "Todos los caracteres son validos",
        "top": "71%",
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
    flexContainerCondicion7.add(imgallc, imgallcdescription);
    var flexContainerCondicion8 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "10%",
        "id": "flexContainerCondicion8",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "10%",
        "skin": "slFbox",
        "top": "78%",
        "width": "100%",
        "zIndex": 2
    }, {}, {});
    flexContainerCondicion8.setDefaultUnit(kony.flex.DP);
    var imgccon = new kony.ui.Image2({
        "centerY": "50%",
        "height": "55%",
        "id": "imgccon",
        "isVisible": true,
        "left": "0%",
        "src": "bolitaazul.png",
        "width": "4%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var imgccondescription = new kony.ui.Label({
        "centerY": "50%",
        "height": "100%",
        "id": "imgccondescription",
        "isVisible": true,
        "left": "6%",
        "skin": "lblCondicionPassword",
        "text": "Las contrasenas concuerdan",
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
    flexContainerCondicion8.add(imgccon, imgccondescription);
    var lblCamposObligatorios = new kony.ui.Label({
        "id": "lblCamposObligatorios",
        "isVisible": true,
        "left": "6%",
        "skin": "lblCondicionPassword",
        "text": "Campos obligatorios para conrasena:",
        "top": "5%",
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
    flxCondicionPassword.add(flexContainerCondicion1, flexContainerCondicion2, flexContainerCondicion3, flexContainerCondicion4, flexContainerCondicion5, flexContainerCondicion6, flexContainerCondicion7, flexContainerCondicion8, lblCamposObligatorios);
    var flexContainerTop = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "60%",
        "id": "flexContainerTop",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "3.73%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flexContainerTop.setDefaultUnit(kony.flex.DP);
    var flexTextField1 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "10%",
        "id": "flexTextField1",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox0f96800312dbd47",
        "top": "4.80%",
        "width": "87%",
        "zIndex": 1
    }, {}, {});
    flexTextField1.setDefaultUnit(kony.flex.DP);
    var richTextContrato = new kony.ui.RichText({
        "centerY": "50%",
        "height": "100%",
        "id": "richTextContrato",
        "isVisible": true,
        "left": "5%",
        "skin": "richTextRegistro",
        "text": "No. de Contrato:",
        "top": "5%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var textFieldContrato = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "centerY": "50%",
        "focusSkin": "focusTextRegistro2",
        "height": "75%",
        "id": "textFieldContrato",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "40%",
        "secureTextEntry": false,
        "skin": "textFieldRegistro",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "3%",
        "width": "55%",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "autoCorrect": false,
        "closeButtonRequired": true,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
        "placeholderSkin": "placeHolder5",
        "showClearButton": true,
        "showCloseButton": true,
        "showProgressIndicator": true,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    flexTextField1.add(richTextContrato, textFieldContrato);
    var flexTextField8 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "10%",
        "id": "flexTextField8",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox0f96800312dbd47",
        "top": "89%",
        "width": "87%",
        "zIndex": 1
    }, {}, {});
    flexTextField8.setDefaultUnit(kony.flex.DP);
    var richTextEmpresa = new kony.ui.RichText({
        "centerY": "50%",
        "height": "100%",
        "id": "richTextEmpresa",
        "isVisible": true,
        "left": "5%",
        "skin": "richTextRegistro",
        "text": "Empresa:",
        "top": "54%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var listEmpresas = new kony.ui.ListBox({
        "centerY": "47%",
        "focusSkin": "listBoxRegistro",
        "height": "75%",
        "id": "listEmpresas",
        "isVisible": false,
        "left": "25%",
        "masterData": [
            ["lb1", "Listbox One"],
            ["lb2", "Listbox Two"],
            ["lb3", "Listbox Three"]
        ],
        "selectedKey": "lb1",
        "selectedKeyValue": ["lb1", "Listbox One"],
        "skin": "listBoxRegistro",
        "top": "50%",
        "width": "70%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 3, 0],
        "paddingInPixel": false
    }, {
        "dropDownImage": "flechadropdown.png",
        "groupCells": false,
        "viewConfig": {
            "toggleViewConfig": {
                "viewStyle": constants.LISTBOX_TOGGLE_VIEW_STYLE_PLAIN
            }
        },
        "viewType": constants.LISTBOX_VIEW_TYPE_LISTVIEW
    });
    var CopylineaSeparadora0a849915413d84e = new kony.ui.Image2({
        "bottom": "15%",
        "centerX": "50%",
        "height": "20%",
        "id": "CopylineaSeparadora0a849915413d84e",
        "isVisible": true,
        "left": "0dp",
        "src": "raya.png",
        "width": "90%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flexTextField8.add(richTextEmpresa, listEmpresas, CopylineaSeparadora0a849915413d84e);
    var CopyflexTextField0466c836fbc2c4f = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "10%",
        "id": "CopyflexTextField0466c836fbc2c4f",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox0f96800312dbd47",
        "top": "17%",
        "width": "87%",
        "zIndex": 1
    }, {}, {});
    CopyflexTextField0466c836fbc2c4f.setDefaultUnit(kony.flex.DP);
    var CopyrichTextContrato0f13c996fdc114c = new kony.ui.RichText({
        "centerY": "50%",
        "height": "100%",
        "id": "CopyrichTextContrato0f13c996fdc114c",
        "isVisible": true,
        "left": "5%",
        "skin": "richTextRegistro",
        "text": "Usuario (email):",
        "top": "5%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var CopytextFieldContrato034e568ece8e74d = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "centerY": "50%",
        "focusSkin": "focusTextRegistro2",
        "height": "75%",
        "id": "CopytextFieldContrato034e568ece8e74d",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "40%",
        "secureTextEntry": false,
        "skin": "textFieldRegistro",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "3%",
        "width": "55%",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "autoCorrect": false,
        "closeButtonRequired": true,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
        "placeholderSkin": "placeHolder5",
        "showClearButton": true,
        "showCloseButton": true,
        "showProgressIndicator": true,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    CopyflexTextField0466c836fbc2c4f.add(CopyrichTextContrato0f13c996fdc114c, CopytextFieldContrato034e568ece8e74d);
    var CopyflexTextField03bd5eb67279f42 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "10%",
        "id": "CopyflexTextField03bd5eb67279f42",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox0f96800312dbd47",
        "top": "29%",
        "width": "87%",
        "zIndex": 1
    }, {}, {});
    CopyflexTextField03bd5eb67279f42.setDefaultUnit(kony.flex.DP);
    var CopyrichTextContrato0187f30ba3be14f = new kony.ui.RichText({
        "centerY": "50%",
        "height": "100%",
        "id": "CopyrichTextContrato0187f30ba3be14f",
        "isVisible": true,
        "left": "5%",
        "skin": "richTextRegistro",
        "text": "Código de Verificación:",
        "top": "5%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var CopytextFieldContrato0e62310dd273d47 = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "centerY": "50%",
        "focusSkin": "focusTextRegistro2",
        "height": "75%",
        "id": "CopytextFieldContrato0e62310dd273d47",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "40%",
        "secureTextEntry": false,
        "skin": "textFieldRegistro",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "3%",
        "width": "55%",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "autoCorrect": false,
        "closeButtonRequired": true,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
        "placeholderSkin": "placeHolder5",
        "showClearButton": true,
        "showCloseButton": true,
        "showProgressIndicator": true,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    CopyflexTextField03bd5eb67279f42.add(CopyrichTextContrato0187f30ba3be14f, CopytextFieldContrato0e62310dd273d47);
    var CopyflexTextField02bc3904e670548 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "10%",
        "id": "CopyflexTextField02bc3904e670548",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox0f96800312dbd47",
        "top": "41%",
        "width": "87%",
        "zIndex": 1
    }, {}, {});
    CopyflexTextField02bc3904e670548.setDefaultUnit(kony.flex.DP);
    var CopyrichTextContrato0a1cf4eb1d7a241 = new kony.ui.RichText({
        "centerY": "50%",
        "height": "100%",
        "id": "CopyrichTextContrato0a1cf4eb1d7a241",
        "isVisible": true,
        "left": "5%",
        "skin": "richTextRegistro",
        "text": "Celular  (10 dígitos):",
        "top": "5%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var CopytextFieldContrato05ca942df7e5844 = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "centerY": "50%",
        "focusSkin": "focusTextRegistro2",
        "height": "75%",
        "id": "CopytextFieldContrato05ca942df7e5844",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "40%",
        "secureTextEntry": false,
        "skin": "textFieldRegistro",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "3%",
        "width": "55%",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "autoCorrect": false,
        "closeButtonRequired": true,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
        "placeholderSkin": "placeHolder5",
        "showClearButton": true,
        "showCloseButton": true,
        "showProgressIndicator": true,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    CopyflexTextField02bc3904e670548.add(CopyrichTextContrato0a1cf4eb1d7a241, CopytextFieldContrato05ca942df7e5844);
    var CopyflexTextField03ee38539a4ec40 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "10%",
        "id": "CopyflexTextField03ee38539a4ec40",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox0f96800312dbd47",
        "top": "53%",
        "width": "87%",
        "zIndex": 1
    }, {}, {});
    CopyflexTextField03ee38539a4ec40.setDefaultUnit(kony.flex.DP);
    var CopyrichTextContrato0c9649c40732a49 = new kony.ui.RichText({
        "centerY": "50%",
        "height": "100%",
        "id": "CopyrichTextContrato0c9649c40732a49",
        "isVisible": true,
        "left": "5%",
        "skin": "richTextRegistro",
        "text": "Código de Verificación:",
        "top": "5%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var CopytextFieldContrato03e0fa288d4e541 = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "centerY": "50%",
        "focusSkin": "focusTextRegistro2",
        "height": "75%",
        "id": "CopytextFieldContrato03e0fa288d4e541",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "40%",
        "secureTextEntry": false,
        "skin": "textFieldRegistro",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "3%",
        "width": "55%",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "autoCorrect": false,
        "closeButtonRequired": true,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
        "placeholderSkin": "placeHolder5",
        "showClearButton": true,
        "showCloseButton": true,
        "showProgressIndicator": true,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    CopyflexTextField03ee38539a4ec40.add(CopyrichTextContrato0c9649c40732a49, CopytextFieldContrato03e0fa288d4e541);
    var CopyflexTextField01f0528db151542 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "10%",
        "id": "CopyflexTextField01f0528db151542",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox0f96800312dbd47",
        "top": "65%",
        "width": "87%",
        "zIndex": 1
    }, {}, {});
    CopyflexTextField01f0528db151542.setDefaultUnit(kony.flex.DP);
    var CopyrichTextContrato01d03f27bf62d43 = new kony.ui.RichText({
        "centerY": "50%",
        "height": "100%",
        "id": "CopyrichTextContrato01d03f27bf62d43",
        "isVisible": true,
        "left": "5%",
        "skin": "richTextRegistro",
        "text": "Contraseña:",
        "top": "5%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var CopytextFieldContrato09d5683bf7e0543 = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "centerY": "50%",
        "focusSkin": "focusTextRegistro2",
        "height": "75%",
        "id": "CopytextFieldContrato09d5683bf7e0543",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "40%",
        "secureTextEntry": false,
        "skin": "textFieldRegistro",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "3%",
        "width": "55%",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "autoCorrect": false,
        "closeButtonRequired": true,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
        "placeholderSkin": "placeHolder5",
        "showClearButton": true,
        "showCloseButton": true,
        "showProgressIndicator": true,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    CopyflexTextField01f0528db151542.add(CopyrichTextContrato01d03f27bf62d43, CopytextFieldContrato09d5683bf7e0543);
    var CopyflexTextField0a290b81cb40644 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "10%",
        "id": "CopyflexTextField0a290b81cb40644",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox0f96800312dbd47",
        "top": "77%",
        "width": "87%",
        "zIndex": 1
    }, {}, {});
    CopyflexTextField0a290b81cb40644.setDefaultUnit(kony.flex.DP);
    var CopyrichTextContrato074da8949b2d049 = new kony.ui.RichText({
        "centerY": "50%",
        "height": "100%",
        "id": "CopyrichTextContrato074da8949b2d049",
        "isVisible": true,
        "left": "5%",
        "skin": "richTextRegistro",
        "text": "Confirmar Contraseña:",
        "top": "5%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var CopytextFieldContrato03dff54b12b3f48 = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "centerY": "50%",
        "focusSkin": "focusTextRegistro2",
        "height": "75%",
        "id": "CopytextFieldContrato03dff54b12b3f48",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "40%",
        "secureTextEntry": false,
        "skin": "textFieldRegistro",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "3%",
        "width": "55%",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "autoCorrect": false,
        "closeButtonRequired": true,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
        "placeholderSkin": "placeHolder5",
        "showClearButton": true,
        "showCloseButton": true,
        "showProgressIndicator": true,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    CopyflexTextField0a290b81cb40644.add(CopyrichTextContrato074da8949b2d049, CopytextFieldContrato03dff54b12b3f48);
    flexContainerTop.add(flexTextField1, flexTextField8, CopyflexTextField0466c836fbc2c4f, CopyflexTextField03bd5eb67279f42, CopyflexTextField02bc3904e670548, CopyflexTextField03ee38539a4ec40, CopyflexTextField01f0528db151542, CopyflexTextField0a290b81cb40644);
    var Label057843c700f3343 = new kony.ui.Label({
        "id": "Label057843c700f3343",
        "isVisible": true,
        "left": "7%",
        "skin": "lblNombreClienteRegistro",
        "text": "Nombre Cliente",
        "top": "2%",
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
    frmPopup1.add(flxCondicionPassword, flexContainerTop, Label057843c700f3343);
    var flexContainerTitle = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "10%",
        "id": "flexContainerTitle",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "8.50%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flexContainerTitle.setDefaultUnit(kony.flex.DP);
    var FlexContainer0087bc141411a45 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "70%",
        "id": "FlexContainer0087bc141411a45",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox0b068ca7e29b44a",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    FlexContainer0087bc141411a45.setDefaultUnit(kony.flex.DP);
    FlexContainer0087bc141411a45.add();
    var CopylblTitle0c3b00f841d144d = new kony.ui.Label({
        "centerX": "50%",
        "id": "CopylblTitle0c3b00f841d144d",
        "isVisible": true,
        "skin": "lblTitle",
        "text": "Registro",
        "top": "13%",
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
    var btnBack = new kony.ui.Button({
        "focusSkin": "focusBtnBackArrendamiento",
        "height": "25%",
        "id": "btnBack",
        "isVisible": true,
        "left": "8%",
        "onClick": AS_Button_66e49613496f4a7186956d5fbea98d1c,
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
        "showProgressIndicator": true
    });
    flexContainerTitle.add(FlexContainer0087bc141411a45, CopylblTitle0c3b00f841d144d, btnBack);
    var btnContinuar = new kony.ui.Button({
        "centerX": "80%",
        "focusSkin": "focusGrayButton",
        "height": "6%",
        "id": "btnContinuar",
        "isVisible": true,
        "left": "80dp",
        "skin": "newBtnEnviarGray",
        "text": "Continuar",
        "top": "90%",
        "width": "30%",
        "zIndex": 2
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 2, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    var CopyImage0cb7156476cc04d = new kony.ui.Image2({
        "height": "2%",
        "id": "CopyImage0cb7156476cc04d",
        "isVisible": true,
        "left": "90%",
        "src": "flechabotongris2.png",
        "top": "92%",
        "width": "1.50%",
        "zIndex": 5
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flexContent.add(frmPopup1, flexContainerTitle, btnContinuar, CopyImage0cb7156476cc04d);
    flexMain.add(flexContent);
    loginRegistroEmpresa.add(flexMain);
};

function loginRegistroEmpresaGlobals() {
    loginRegistroEmpresa = new kony.ui.Form2({
        "addWidgets": addWidgetsloginRegistroEmpresa,
        "allowHorizontalBounce": false,
        "bounces": false,
        "enableScrolling": false,
        "enabledForIdleTimeout": false,
        "footers": [FlexContainer099041029e4bc45],
        "headers": [CopyFlexContainer09da0f5890f1a44],
        "id": "loginRegistroEmpresa",
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
    loginRegistroEmpresa.info = {
        "notesId": "0fc338ce64c94812823b39242d910a66",
        "kuid": "0fc338ce64c94812823b39242d910a66"
    };
};