function addWidgetsloginCambiarContrasena() {
    loginCambiarContrasena.setDefaultUnit(kony.flex.DP);
    var flexMain = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flexMain",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "slFbox",
        "top": "0dp",
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
    var frmMain = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "49.99%",
        "clipBounds": true,
        "height": "83%",
        "id": "frmMain",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "whit",
        "top": "18.05%",
        "width": "100%",
        "zIndex": 2
    }, {}, {});
    frmMain.setDefaultUnit(kony.flex.DP);
    var imgBg = new kony.ui.Image2({
        "centerX": "50%",
        "height": "85%",
        "id": "imgBg",
        "isVisible": false,
        "left": "0dp",
        "src": "tabregistro.png",
        "top": "0dp",
        "width": "100%",
        "zIndex": 2
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var flexContainerCampos = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "40%",
        "id": "flexContainerCampos",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "slFbox",
        "top": "5%",
        "width": "100%",
        "zIndex": 2
    }, {}, {});
    flexContainerCampos.setDefaultUnit(kony.flex.DP);
    var Label0ab997e80f00d46 = new kony.ui.Label({
        "id": "Label0ab997e80f00d46",
        "isVisible": true,
        "left": "5%",
        "skin": "lblCambioContrasena",
        "text": "Nombre Cliente",
        "top": "1%",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var CopyLabel09d7c3f8aa64843 = new kony.ui.Label({
        "id": "CopyLabel09d7c3f8aa64843",
        "isVisible": true,
        "left": "5%",
        "skin": "lblCambioContrasena",
        "text": "Contrasena:",
        "top": "30%",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var CopyLabel069e9449c6e1c40 = new kony.ui.Label({
        "id": "CopyLabel069e9449c6e1c40",
        "isVisible": true,
        "left": "5%",
        "skin": "lblCambioContrasena",
        "text": "Contrasena confirmacion:",
        "top": "50%",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var TextField0bccb86d003e644 = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "focusSkin": "CopynewTextBoxGray0a455cfde14974e",
        "height": "13%",
        "id": "TextField0bccb86d003e644",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "50%",
        "secureTextEntry": true,
        "skin": "newTextBoxGray",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "26%",
        "width": "40%",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [2, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "autoComplete": false,
        "autoCorrect": false
    });
    var textFieldConfirmacion = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "focusSkin": "CopynewTextBoxGray0ad8c25c97fab4b",
        "height": "13%",
        "id": "textFieldConfirmacion",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "50%",
        "secureTextEntry": true,
        "skin": "newTextBoxGray",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "45%",
        "width": "40%",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [2, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "autoComplete": false,
        "autoCorrect": false
    });
    var CopyImage048d7d5d0611c4d = new kony.ui.Image2({
        "height": "5%",
        "id": "CopyImage048d7d5d0611c4d",
        "isVisible": true,
        "left": "0dp",
        "src": "rayanegra.png",
        "top": "90%",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flexContainerCampos.add(Label0ab997e80f00d46, CopyLabel09d7c3f8aa64843, CopyLabel069e9449c6e1c40, TextField0bccb86d003e644, textFieldConfirmacion, CopyImage048d7d5d0611c4d);
    var flexContainerCondicionPassword = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "0%",
        "clipBounds": true,
        "height": "50%",
        "id": "flexContainerCondicionPassword",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "45.00%",
        "width": "100%",
        "zIndex": 3
    }, {}, {});
    flexContainerCondicionPassword.setDefaultUnit(kony.flex.DP);
    var flexContainerCondicion1 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "8%",
        "id": "flexContainerCondicion1",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "10%",
        "skin": "slFbox",
        "top": "30%",
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
        "centerY": "49.70%",
        "height": "100%",
        "id": "imgminmayusdescription",
        "isVisible": true,
        "left": "6.00%",
        "skin": "lblCondicionPassword",
        "text": "1 mayuscula como minimo",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    flexContainerCondicion1.add(imgminmayus, imgminmayusdescription);
    var flexContainerCondicion2 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "8%",
        "id": "flexContainerCondicion2",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "10%",
        "skin": "slFbox",
        "top": "36%",
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
        "centerY": "50%",
        "height": "100%",
        "id": "imgminminusdescription",
        "isVisible": true,
        "left": "6%",
        "skin": "lblCondicionPassword",
        "text": "1 minuscula como minimo",
        "top": "70%",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    flexContainerCondicion2.add(imgminminus, imgminminusdescription);
    var flexContainerCondicion3 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "8%",
        "id": "flexContainerCondicion3",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "10%",
        "skin": "slFbox",
        "top": "42%",
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
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    flexContainerCondicion3.add(imgmindig, imgmindigdescription);
    var flexContainerCondicion4 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "8%",
        "id": "flexContainerCondicion4",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "10%",
        "skin": "slFbox",
        "top": "48%",
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
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    flexContainerCondicion4.add(imgmincesp, imgmincespdescripiton);
    var flexContainerCondicion5 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "8%",
        "id": "flexContainerCondicion5",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "10%",
        "skin": "slFbox",
        "top": "54%",
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
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    flexContainerCondicion5.add(imgminc, imgmincdescription);
    var flexContainerCondicion6 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "8%",
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
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    flexContainerCondicion6.add(imgmaxc, imgmaxcdescription);
    var flexContainerCondicion7 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "8%",
        "id": "flexContainerCondicion7",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "10%",
        "skin": "slFbox",
        "top": "66%",
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
        "top": "70%",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    flexContainerCondicion7.add(imgallc, imgallcdescription);
    var flexContainerCondicion8 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "8%",
        "id": "flexContainerCondicion8",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "10%",
        "skin": "slFbox",
        "top": "72%",
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
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    flexContainerCondicion8.add(imgccon, imgccondescription);
    var Copyimgminmayusdescription088ba4aaa63ef47 = new kony.ui.Label({
        "height": "10%",
        "id": "Copyimgminmayusdescription088ba4aaa63ef47",
        "isVisible": true,
        "left": "6%",
        "skin": "lblCondicionPassword",
        "text": "Campos obligatorios para contrasena",
        "top": "21%",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    flexContainerCondicionPassword.add(flexContainerCondicion1, flexContainerCondicion2, flexContainerCondicion3, flexContainerCondicion4, flexContainerCondicion5, flexContainerCondicion6, flexContainerCondicion7, flexContainerCondicion8, Copyimgminmayusdescription088ba4aaa63ef47);
    frmMain.add(imgBg, flexContainerCampos, flexContainerCondicionPassword);
    var flexContainerTitle = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "10%",
        "id": "flexContainerTitle",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "2%",
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
        "text": "Login",
        "top": "13%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var btnBack = new kony.ui.Button({
        "focusSkin": "focusBtnBackArrendamiento",
        "height": "25%",
        "id": "btnBack",
        "isVisible": true,
        "left": "8%",
        "onClick": AS_Button_015eafbc267b4b89a562e87c88c3fac9,
        "skin": "btnBack",
        "top": "20%",
        "width": "2%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flexContainerTitle.add(FlexContainer0087bc141411a45, CopylblTitle0c3b00f841d144d, btnBack);
    var Button0c18d8aa952004a = new kony.ui.Button({
        "centerX": "50%",
        "focusSkin": "focusGrayButton",
        "height": "6%",
        "id": "Button0c18d8aa952004a",
        "isVisible": true,
        "left": "80dp",
        "skin": "newBtnEnviarGray",
        "text": "Continuar",
        "top": "92%",
        "width": "30%",
        "zIndex": 2
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 3, 0],
        "paddingInPixel": false
    }, {});
    var CopyImage06daba0ce5f9040 = new kony.ui.Image2({
        "height": "5%",
        "id": "CopyImage06daba0ce5f9040",
        "isVisible": true,
        "left": "60%",
        "src": "flechabotongris2.png",
        "top": "92.40%",
        "width": "1.50%",
        "zIndex": 2
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblMyMBF = new kony.ui.Label({
        "height": "10%",
        "id": "lblMyMBF",
        "isVisible": true,
        "left": "0%",
        "skin": "lblTitleCorpoS",
        "text": "Cambiar Contrasena Temporal",
        "top": "9%",
        "width": "100%",
        "zIndex": 3
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    flexContent.add(frmMain, flexContainerTitle, Button0c18d8aa952004a, CopyImage06daba0ce5f9040, lblMyMBF);
    flexMain.add(flexContent);
    loginCambiarContrasena.add(flexMain);
};

function loginCambiarContrasenaGlobals() {
    loginCambiarContrasena = new kony.ui.Form2({
        "addWidgets": addWidgetsloginCambiarContrasena,
        "allowHorizontalBounce": false,
        "bounces": false,
        "enableScrolling": false,
        "enabledForIdleTimeout": false,
        "footers": [FlexContainer099041029e4bc45],
        "id": "loginCambiarContrasena",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "skin": "flexContainerTerminos"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "retainScrollPosition": false
    });
    loginCambiarContrasena.info = {
        "notesId": "0ffb756a2df442adbba369b36464e3ea",
        "kuid": "0ffb756a2df442adbba369b36464e3ea"
    };
};