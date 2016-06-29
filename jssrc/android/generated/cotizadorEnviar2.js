function addWidgetscotizadorEnviar2() {
    cotizadorEnviar2.setDefaultUnit(kony.flex.DP);
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
    var lblTitle = new kony.ui.Label({
        "height": "9%",
        "id": "lblTitle",
        "isVisible": true,
        "left": "0dp",
        "text": "Informacion de Contacto",
        "top": "48%",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 3],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var FlexContainer09092664c8c5d46 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "14%",
        "id": "FlexContainer09092664c8c5d46",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "onTouchStart": p2kwiet19724036341549_FlexContainer09092664c8c5d46_onTouchStart_seq0,
        "top": "25%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    FlexContainer09092664c8c5d46.setDefaultUnit(kony.flex.DP);
    var Image07998ae06354d47 = new kony.ui.Image2({
        "height": "100%",
        "id": "Image07998ae06354d47",
        "isVisible": true,
        "left": "0dp",
        "src": "tabcotizacion.png",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var Label0127afe2780364e = new kony.ui.Label({
        "height": "49.21%",
        "id": "Label0127afe2780364e",
        "isVisible": true,
        "left": "0.0%",
        "onTouchStart": p2kwiet19724036341549_Label0127afe2780364e_onTouchStart_seq0,
        "text": "Selecciona otro Distribuidor",
        "top": "0.0%",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [10, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var lblUnidad = new kony.ui.Label({
        "bottom": "0",
        "height": "50%",
        "id": "lblUnidad",
        "isVisible": true,
        "left": "0%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [10, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var btnLocaliza = new kony.ui.Button({
        "height": "22%",
        "id": "btnLocaliza",
        "isVisible": true,
        "right": "10%",
        "top": "15%",
        "width": "3%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    FlexContainer09092664c8c5d46.add(Image07998ae06354d47, Label0127afe2780364e, lblUnidad, btnLocaliza);
    var FlexContainer008149399daa543 = new kony.ui.FlexContainer({
        "bottom": "0%",
        "clipBounds": true,
        "height": "45%",
        "id": "FlexContainer008149399daa543",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "top": "56%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    FlexContainer008149399daa543.setDefaultUnit(kony.flex.DP);
    var flexContNombre = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "10%",
        "id": "flexContNombre",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "top": "4%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flexContNombre.setDefaultUnit(kony.flex.DP);
    var lblNombre = new kony.ui.Label({
        "centerY": "50%",
        "height": "100%",
        "id": "lblNombre",
        "isVisible": true,
        "left": "7%",
        "text": "Nombre*:",
        "top": "5%",
        "width": "24%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var txtNombre = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "centerY": "50%",
        "height": "100%",
        "id": "txtNombre",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "right": "2%",
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "7%",
        "width": "65%",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "autoFilter": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var Image0a5a7572ee30044 = new kony.ui.Image2({
        "bottom": "0",
        "height": "10%",
        "id": "Image0a5a7572ee30044",
        "isVisible": true,
        "left": "0%",
        "src": "rayados.png",
        "width": "120%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flexContNombre.add(lblNombre, txtNombre, Image0a5a7572ee30044);
    var flexContApellido = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "10%",
        "id": "flexContApellido",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "top": "14%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flexContApellido.setDefaultUnit(kony.flex.DP);
    var txtApellido = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "centerY": "50%",
        "height": "100%",
        "id": "txtApellido",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "right": "2%",
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "18%",
        "width": "65%",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "autoFilter": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var lblApellido = new kony.ui.Label({
        "centerY": "50%",
        "height": "100%",
        "id": "lblApellido",
        "isVisible": true,
        "left": "7%",
        "text": "Apellido*:",
        "top": "16%",
        "width": "24%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var CopyImage02511fd2c922440 = new kony.ui.Image2({
        "bottom": "0",
        "height": "10%",
        "id": "CopyImage02511fd2c922440",
        "isVisible": true,
        "left": "-15%",
        "src": "rayados.png",
        "width": "120%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flexContApellido.add(txtApellido, lblApellido, CopyImage02511fd2c922440);
    var flexContVia = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "10%",
        "id": "flexContVia",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "top": "24%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flexContVia.setDefaultUnit(kony.flex.DP);
    var lblVia = new kony.ui.Label({
        "centerY": "50%",
        "height": "100%",
        "id": "lblVia",
        "isVisible": true,
        "left": "7%",
        "text": "Contacto*:",
        "top": "16%",
        "width": "24%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var listBoxContacto = new kony.ui.ListBox({
        "height": "90%",
        "id": "listBoxContacto",
        "isVisible": true,
        "masterData": [
            ["0", "Correo electrónico"],
            ["1", "Teléfono"]
        ],
        "onSelection": p2kwiet19724036341549_listBoxContacto_onSelection_seq0,
        "right": "0",
        "selectedKey": "0",
        "selectedKeyValue": ["0", "Correo electrónico"],
        "top": "-5%",
        "width": "68%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 3, 0],
        "paddingInPixel": false
    }, {
        "applySkinsToPopup": true,
        "dropDownImage": "flechadropdown.png",
        "placeholder": "Método de Contacto*:",
        "popupTitle": "Please Select",
        "tickedImage": "flechadropdown.png",
        "viewType": constants.LISTBOX_VIEW_TYPE_LISTVIEW
    });
    var CopyImage07c0d2e5b7fea46 = new kony.ui.Image2({
        "bottom": "0",
        "height": "10%",
        "id": "CopyImage07c0d2e5b7fea46",
        "isVisible": true,
        "left": "-15%",
        "src": "rayados.png",
        "width": "120%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flexContVia.add(lblVia, listBoxContacto, CopyImage07c0d2e5b7fea46);
    var flexContEmail = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "10%",
        "id": "flexContEmail",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "top": "34%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flexContEmail.setDefaultUnit(kony.flex.DP);
    var txtEmail = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "centerY": "50%",
        "height": "100%",
        "id": "txtEmail",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "right": "2%",
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "18%",
        "width": "65%",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "autoFilter": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var lblEmailCliente = new kony.ui.Label({
        "centerY": "50%",
        "height": "100%",
        "id": "lblEmailCliente",
        "isVisible": true,
        "left": "7%",
        "text": "Email:",
        "top": "16%",
        "width": "24%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var CopyImage08d4f26dc6d994d = new kony.ui.Image2({
        "bottom": "0",
        "height": "10%",
        "id": "CopyImage08d4f26dc6d994d",
        "isVisible": true,
        "left": "-15%",
        "src": "rayados.png",
        "width": "120%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flexContEmail.add(txtEmail, lblEmailCliente, CopyImage08d4f26dc6d994d);
    var FlexContTelefono = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "10%",
        "id": "FlexContTelefono",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "top": "44%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    FlexContTelefono.setDefaultUnit(kony.flex.DP);
    var txtTelefono = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "centerY": "50%",
        "height": "100%",
        "id": "txtTelefono",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "right": "2%",
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_NUMERIC,
        "top": "18%",
        "width": "65%",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "autoFilter": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var lblTelefonoCliente = new kony.ui.Label({
        "centerY": "50%",
        "height": "100%",
        "id": "lblTelefonoCliente",
        "isVisible": true,
        "left": "7%",
        "text": "Telefono:",
        "top": "16%",
        "width": "24%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var CopyImage0bc5d3b17541140 = new kony.ui.Image2({
        "bottom": "0",
        "height": "10%",
        "id": "CopyImage0bc5d3b17541140",
        "isVisible": true,
        "left": "-15%",
        "src": "rayados.png",
        "width": "120%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    FlexContTelefono.add(txtTelefono, lblTelefonoCliente, CopyImage0bc5d3b17541140);
    var flexContDireccion = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "10%",
        "id": "flexContDireccion",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "top": "54%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flexContDireccion.setDefaultUnit(kony.flex.DP);
    var txtDireccion = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "centerY": "50%",
        "height": "100%",
        "id": "txtDireccion",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "right": "2%",
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "18%",
        "width": "65%",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "autoFilter": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var CopylblEmail036ce9491716949 = new kony.ui.Label({
        "centerY": "50%",
        "height": "100%",
        "id": "CopylblEmail036ce9491716949",
        "isVisible": true,
        "left": "7%",
        "text": "Direccion:",
        "top": "16%",
        "width": "24%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var CopyImage0d8c9fc7f138f44 = new kony.ui.Image2({
        "bottom": "0",
        "height": "10%",
        "id": "CopyImage0d8c9fc7f138f44",
        "isVisible": true,
        "left": "-15%",
        "src": "rayados.png",
        "width": "120%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flexContDireccion.add(txtDireccion, CopylblEmail036ce9491716949, CopyImage0d8c9fc7f138f44);
    FlexContainer008149399daa543.add(flexContNombre, flexContApellido, flexContVia, flexContEmail, FlexContTelefono, flexContDireccion);
    var FlexContainer0fc632a82ed9241 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "22%",
        "id": "FlexContainer0fc632a82ed9241",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "top": "2%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    FlexContainer0fc632a82ed9241.setDefaultUnit(kony.flex.DP);
    var lblCotizacion = new kony.ui.Label({
        "id": "lblCotizacion",
        "isVisible": true,
        "left": "24%",
        "text": "Solicitar una Cotizacion",
        "top": "7.50%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var FlexScrollContainer00ecff8ef30dd4b = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": true,
        "allowVerticalBounce": true,
        "bounces": true,
        "enableScrolling": true,
        "height": "70%",
        "horizontalScrollIndicator": true,
        "id": "FlexScrollContainer00ecff8ef30dd4b",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "24%",
        "pagingEnabled": false,
        "scrollDirection": kony.flex.SCROLL_VERTICAL,
        "top": "33%",
        "verticalScrollIndicator": true,
        "width": "65%",
        "zIndex": 1
    }, {}, {});
    FlexScrollContainer00ecff8ef30dd4b.setDefaultUnit(kony.flex.DP);
    var richTextDireccion = new kony.ui.RichText({
        "height": "120%",
        "id": "richTextDireccion",
        "isVisible": true,
        "left": "0%",
        "text": "Distribuidor más cercano:<br>\nAutomotriz Hermer Santa Fe<br>\nAv. Vasco de Quiroga No. 3200 PB Centro de\nCiudad Santa Fe C.P. 01210<br>\nÁlvaro Obregón, D.F. <br>\nTel: (55) 917708000\n",
        "top": "0%",
        "width": "100.96%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    FlexScrollContainer00ecff8ef30dd4b.add(richTextDireccion);
    var btnBack = new kony.ui.Button({
        "height": "25%",
        "id": "btnBack",
        "isVisible": true,
        "left": "8%",
        "onClick": p2kwiet19724036341549_btnBack_onClick_seq0,
        "top": "10%",
        "width": "10%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    FlexContainer0fc632a82ed9241.add(lblCotizacion, FlexScrollContainer00ecff8ef30dd4b, btnBack);
    var FlexContainer01040ce3181d94a = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "9%",
        "id": "FlexContainer01040ce3181d94a",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "top": "39%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    FlexContainer01040ce3181d94a.setDefaultUnit(kony.flex.DP);
    var lblCredito = new kony.ui.Label({
        "centerY": "50.00%",
        "height": "100%",
        "id": "lblCredito",
        "isVisible": true,
        "left": "0.00%",
        "text": "Enviar Solicitud de Credito Editable",
        "top": "0%",
        "width": "80%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [10, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var chkSolicitudCredito = new kony.ui.CheckBoxGroup({
        "centerY": "50%",
        "height": "100%",
        "id": "chkSolicitudCredito",
        "isVisible": true,
        "left": "0%",
        "masterData": [
            ["cbg1", "Checkbox One"]
        ],
        "selectedKeys": ["cbg1"],
        "top": "0%",
        "width": "10%",
        "zIndex": 1
    }, {
        "itemOrientation": constants.CHECKBOX_ITEM_ORIENTATION_VERTICAL,
        "padding": [0, 8, 0, 0],
        "paddingInPixel": false
    }, {});
    FlexContainer01040ce3181d94a.add(lblCredito, chkSolicitudCredito);
    var btnEnviarCotizacion = new kony.ui.Button({
        "centerX": "50%",
        "height": "6.50%",
        "id": "btnEnviarCotizacion",
        "isVisible": true,
        "onClick": p2kwiet19724036341549_btnEnviarCotizacion_onClick_seq0,
        "text": "Enviar",
        "top": "90%",
        "width": "35%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblEmailDistribuidor = new kony.ui.Label({
        "height": "19dp",
        "id": "lblEmailDistribuidor",
        "isVisible": false,
        "left": "4dp",
        "text": "Label",
        "top": "90.0%",
        "width": "38dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flexContent.add(lblTitle, FlexContainer09092664c8c5d46, FlexContainer008149399daa543, FlexContainer0fc632a82ed9241, FlexContainer01040ce3181d94a, btnEnviarCotizacion, lblEmailDistribuidor);
    flexMain.add(flexContent);
    cotizadorEnviar2.add(flexMain);
};

function cotizadorEnviar2Globals() {
    cotizadorEnviar2 = new kony.ui.Form2({
        "addWidgets": addWidgetscotizadorEnviar2,
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "bounces": false,
        "enableScrolling": false,
        "enabledForIdleTimeout": false,
        "horizontalScrollIndicator": true,
        "id": "cotizadorEnviar2",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "pagingEnabled": false,
        "postShow": p2kwiet19724036341549_cotizadorEnviar2_postshow_seq0,
        "preShow": p2kwiet19724036341549_cotizadorEnviar2_preshow_seq0,
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
        "onDeviceBack": p2kwiet19724036341549_cotizadorEnviar2_Android_onDeviceBack_seq0,
        "outTransitionConfig": {
            "formAnimation": 0
        },
        "retainScrollPosition": false,
        "showActionBar": true,
        "showActionBarIcon": true,
        "titleBar": true,
        "windowSoftInputMode": constants.FORM_ADJUST_PAN
    });
    cotizadorEnviar2.info = {
        "kuid": "p2kwiet19724036341549"
    };
};