function addWidgetscotizadorEnviar2back() {
    cotizadorEnviar2back.setDefaultUnit(kony.flex.DP);
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
        "height": "8%",
        "id": "lblTitle",
        "isVisible": true,
        "left": "0dp",
        "text": "Informacion de Contacto",
        "top": "49%",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var lblCotizacion = new kony.ui.Label({
        "id": "lblCotizacion",
        "isVisible": true,
        "left": "24%",
        "text": "Solicitar una Cotizacion",
        "top": "9%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var btnBackEnviar = new kony.ui.Button({
        "centerY": "15%",
        "height": "5%",
        "id": "btnBackEnviar",
        "isVisible": true,
        "left": "3%",
        "onClick": p2kwiet19724036341578_btnBackEnviar_onClick_seq0,
        "top": "0dp",
        "width": "10%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var imgBack = new kony.ui.Image2({
        "centerY": "15%",
        "height": "3%",
        "id": "imgBack",
        "isVisible": true,
        "left": "3%",
        "src": "flechaatras.png",
        "top": "0dp",
        "width": "10%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var richTextDireccion = new kony.ui.RichText({
        "height": "10%",
        "id": "richTextDireccion",
        "isVisible": true,
        "left": "24%",
        "text": "Distribuidor más cercano:<br>\nAutomotriz Hermer Santa Fe<br>\nAv. Vasco de Quiroga No. 3200 PB Centro de <br>\nCiudad Santa Fe C.P. 01210<br>\nÁlvaro Obregón, D.F. Tel: (55) 917708000\n",
        "top": "12.50%",
        "width": "75%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var FlexContainer09092664c8c5d46 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "20%",
        "id": "FlexContainer09092664c8c5d46",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "top": "22.32%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    FlexContainer09092664c8c5d46.setDefaultUnit(kony.flex.DP);
    var segmentCalculadora = new kony.ui.SegmentedUI2({
        "data": [{
            "imgIcon": "flecha.png",
            "lblContent": "",
            "lblIdClase": "",
            "lblIdContent": ""
        }, {
            "imgIcon": "",
            "lblContent": "",
            "lblIdClase": "",
            "lblIdContent": ""
        }],
        "groupCells": false,
        "height": "100%",
        "id": "segmentCalculadora",
        "isVisible": true,
        "left": "0dp",
        "needPageIndicator": true,
        "pageOffDotImage": "pageOffDot.png",
        "pageOnDotImage": "pageOnDot.png",
        "retainSelection": false,
        "rowTemplate": FlexContainer08afefec6f15941,
        "scrollingEvents": {},
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "64646400",
        "separatorRequired": false,
        "separatorThickness": 1,
        "showScrollbars": false,
        "top": "0%",
        "viewConfig": {
            "coverflowConfig": {
                "isCircular": true,
                "projectionAngle": 60
            }
        },
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "FlexContainer08afefec6f15941": "FlexContainer08afefec6f15941",
            "calculadoraTemplate": "calculadoraTemplate",
            "imgIcon": "imgIcon",
            "lblContent": "lblContent",
            "lblIdClase": "lblIdClase",
            "lblIdContent": "lblIdContent"
        },
        "width": "100%",
        "zIndex": 1
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "dockSectionHeaders": false
    });
    FlexContainer09092664c8c5d46.add(segmentCalculadora);
    var FlexContainer008149399daa543 = new kony.ui.FlexContainer({
        "bottom": "0%",
        "clipBounds": true,
        "height": "45%",
        "id": "FlexContainer008149399daa543",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    FlexContainer008149399daa543.setDefaultUnit(kony.flex.DP);
    var Image0fd8bdb8ddc984e = new kony.ui.Image2({
        "height": "100%",
        "id": "Image0fd8bdb8ddc984e",
        "isVisible": true,
        "left": "0dp",
        "src": "tabinfocontacto.png",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblNombre = new kony.ui.Label({
        "id": "lblNombre",
        "isVisible": true,
        "left": "10%",
        "text": "Nombre*:",
        "top": "8%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var lblApellido = new kony.ui.Label({
        "id": "lblApellido",
        "isVisible": true,
        "left": "10%",
        "text": "Apellido*:",
        "top": "18%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var lblMetodoContacto = new kony.ui.Label({
        "id": "lblMetodoContacto",
        "isVisible": false,
        "left": "10%",
        "text": "Metodo de Contacto Preferido*:",
        "top": "30%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var lblEmail = new kony.ui.Label({
        "id": "lblEmail",
        "isVisible": true,
        "left": "10%",
        "text": "Email:",
        "top": "40%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var lblTelefono = new kony.ui.Label({
        "id": "lblTelefono",
        "isVisible": true,
        "left": "10%",
        "text": "Telefono:",
        "top": "50%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var lblDireccion = new kony.ui.Label({
        "id": "lblDireccion",
        "isVisible": true,
        "left": "10%",
        "text": "Direccion:",
        "top": "60%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var Image055cc43cd213345 = new kony.ui.Image2({
        "centerX": "50%",
        "height": "15%",
        "id": "Image055cc43cd213345",
        "isVisible": true,
        "src": "botoncalcular.png",
        "top": "80%",
        "width": "40%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var btnEnviar = new kony.ui.Button({
        "centerX": "50%",
        "height": "15%",
        "id": "btnEnviar",
        "isVisible": true,
        "onClick": p2kwiet19724036341578_btnEnviar_onClick_seq0,
        "text": "Enviar",
        "top": "80%",
        "width": "40%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var listBoxContacto = new kony.ui.ListBox({
        "height": "9.50%",
        "id": "listBoxContacto",
        "isVisible": true,
        "left": "0dp",
        "masterData": [
            ["0", "Correo Electronico"],
            ["1", "Telefono"]
        ],
        "selectedKey": "0",
        "selectedKeyValue": ["0", "Correo Electronico"],
        "top": "26.50%",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [10, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "applySkinsToPopup": true,
        "dropDownImage": "flecha_drop_down.png",
        "placeholder": "Método de Contacto Preferido*:",
        "popupTitle": "Please Select",
        "tickedImage": "flecha_drop_down.png",
        "viewType": constants.LISTBOX_VIEW_TYPE_LISTVIEW
    });
    var txtNombre = new kony.ui.TextArea2({
        "autoCapitalize": constants.TEXTAREA_AUTO_CAPITALIZE_NONE,
        "height": "9%",
        "id": "txtNombre",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTAREA_KEY_BOARD_STYLE_DEFAULT,
        "left": "30%",
        "numberOfVisibleLines": 3,
        "textInputMode": constants.TEXTAREA_INPUT_MODE_ANY,
        "top": "6%",
        "width": "70%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "padding": [2, 2, 2, 2],
        "paddingInPixel": false
    }, {});
    var txtApellido = new kony.ui.TextArea2({
        "autoCapitalize": constants.TEXTAREA_AUTO_CAPITALIZE_NONE,
        "height": "9%",
        "id": "txtApellido",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTAREA_KEY_BOARD_STYLE_DEFAULT,
        "left": "30%",
        "numberOfVisibleLines": 3,
        "textInputMode": constants.TEXTAREA_INPUT_MODE_ANY,
        "top": "17%",
        "width": "70%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "padding": [2, 2, 2, 2],
        "paddingInPixel": false
    }, {});
    var txtEmail = new kony.ui.TextArea2({
        "autoCapitalize": constants.TEXTAREA_AUTO_CAPITALIZE_NONE,
        "height": "9%",
        "id": "txtEmail",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTAREA_KEY_BOARD_STYLE_DEFAULT,
        "left": "30%",
        "numberOfVisibleLines": 3,
        "textInputMode": constants.TEXTAREA_INPUT_MODE_ANY,
        "top": "37%",
        "width": "70%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "padding": [2, 2, 2, 2],
        "paddingInPixel": false
    }, {});
    var txtTelefono = new kony.ui.TextArea2({
        "autoCapitalize": constants.TEXTAREA_AUTO_CAPITALIZE_NONE,
        "height": "9%",
        "id": "txtTelefono",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTAREA_KEY_BOARD_STYLE_DEFAULT,
        "left": "30%",
        "numberOfVisibleLines": 3,
        "textInputMode": constants.TEXTAREA_INPUT_MODE_ANY,
        "top": "47%",
        "width": "70%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "padding": [2, 2, 2, 2],
        "paddingInPixel": false
    }, {});
    var CopytxtTelefono0122b5766cd0f4c = new kony.ui.TextArea2({
        "autoCapitalize": constants.TEXTAREA_AUTO_CAPITALIZE_NONE,
        "height": "9%",
        "id": "CopytxtTelefono0122b5766cd0f4c",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTAREA_KEY_BOARD_STYLE_DEFAULT,
        "left": "30%",
        "numberOfVisibleLines": 3,
        "textInputMode": constants.TEXTAREA_INPUT_MODE_ANY,
        "top": "57%",
        "width": "70%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "padding": [2, 2, 2, 2],
        "paddingInPixel": false
    }, {});
    var lblEmailDistribuidor = new kony.ui.Label({
        "height": "26dp",
        "id": "lblEmailDistribuidor",
        "isVisible": false,
        "left": "335dp",
        "text": "Label",
        "top": "164dp",
        "width": "100dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    FlexContainer008149399daa543.add(Image0fd8bdb8ddc984e, lblNombre, lblApellido, lblMetodoContacto, lblEmail, lblTelefono, lblDireccion, Image055cc43cd213345, btnEnviar, listBoxContacto, txtNombre, txtApellido, txtEmail, txtTelefono, CopytxtTelefono0122b5766cd0f4c, lblEmailDistribuidor);
    var chkSolicitudCredito = new kony.ui.CheckBoxGroup({
        "height": "6.0%",
        "id": "chkSolicitudCredito",
        "isVisible": true,
        "left": "5.0%",
        "masterData": [
            ["enviar", "Enviar solicitud de crédito editable"]
        ],
        "selectedKeys": ["enviar"],
        "top": "42%",
        "width": "90%",
        "zIndex": 1
    }, {
        "itemOrientation": constants.CHECKBOX_ITEM_ORIENTATION_VERTICAL,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flexContent.add(lblTitle, lblCotizacion, btnBackEnviar, imgBack, richTextDireccion, FlexContainer09092664c8c5d46, FlexContainer008149399daa543, chkSolicitudCredito);
    flexMain.add(flexContent);
    cotizadorEnviar2back.add(flexMain);
};

function cotizadorEnviar2backGlobals() {
    cotizadorEnviar2back = new kony.ui.Form2({
        "addWidgets": addWidgetscotizadorEnviar2back,
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "bounces": false,
        "enableScrolling": false,
        "enabledForIdleTimeout": false,
        "horizontalScrollIndicator": true,
        "id": "cotizadorEnviar2back",
        "init": p2kwiet19724036341578_cotizadorEnviar2back_init_seq0,
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "pagingEnabled": false,
        "postShow": p2kwiet19724036341578_cotizadorEnviar2back_postshow_seq0,
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
        "outTransitionConfig": {
            "formAnimation": 0
        },
        "retainScrollPosition": false,
        "showActionBar": true,
        "showActionBarIcon": true,
        "titleBar": true,
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE
    });
    cotizadorEnviar2back.info = {
        "kuid": "p2kwiet19724036341578"
    };
};