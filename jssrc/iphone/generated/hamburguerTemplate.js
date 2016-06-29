function initializehamburguerTemplate() {
    flexContainerHamburguer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flexContainerHamburguer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "slFbox"
    }, {}, {});
    flexContainerHamburguer.setDefaultUnit(kony.flex.DP);
    var flexMenu = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flexMenu",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flexMenu.setDefaultUnit(kony.flex.DP);
    var menuContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "menuContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "-9%",
        "skin": "newFlexContainerWhite",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    menuContainer.setDefaultUnit(kony.flex.DP);
    var btnInicio = new kony.ui.Button({
        "focusSkin": "focusHamburguerMenuButton",
        "height": "13%",
        "id": "btnInicio",
        "isVisible": true,
        "left": "0%",
        "text": "Inicio",
        "top": "0%",
        "width": "100%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "displayText": true,
        "padding": [23, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    var btnLogin = new kony.ui.Button({
        "focusSkin": "focusHamburguerMenuButton",
        "height": "11.50%",
        "id": "btnLogin",
        "isVisible": true,
        "left": "0%",
        "text": "Login",
        "top": "13%",
        "width": "100%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "displayText": true,
        "padding": [23, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    var btnCalculadora = new kony.ui.Button({
        "focusSkin": "focusHamburguerMenuButton",
        "height": "11%",
        "id": "btnCalculadora",
        "isVisible": true,
        "left": "0%",
        "text": "Calculadora",
        "top": "24.50%",
        "width": "100%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "displayText": true,
        "padding": [23, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    var lblDistribuidores = new kony.ui.Button({
        "focusSkin": "focusHamburguerMenuButton",
        "height": "11%",
        "id": "lblDistribuidores",
        "isVisible": true,
        "left": "0%",
        "text": "Distribuidores",
        "top": "35.50%",
        "width": "100%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "displayText": true,
        "padding": [23, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    var lblContactanos = new kony.ui.Button({
        "focusSkin": "focusHamburguerMenuButton",
        "height": "11%",
        "id": "lblContactanos",
        "isVisible": true,
        "left": "0%",
        "text": "Contactanos",
        "top": "46.50%",
        "width": "100%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "displayText": true,
        "padding": [23, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    var lblParquimetro = new kony.ui.Button({
        "height": "10.50%",
        "id": "lblParquimetro",
        "isVisible": true,
        "left": "0%",
        "text": "Parquimetro",
        "top": "57.50%",
        "width": "100%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "displayText": true,
        "padding": [23, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    var imgInicio = new kony.ui.Image2({
        "height": "30dp",
        "id": "imgInicio",
        "isVisible": true,
        "left": "14%",
        "src": "menu1.png",
        "top": "3.50%",
        "width": "20dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var imgLogin = new kony.ui.Image2({
        "height": "30dp",
        "id": "imgLogin",
        "isVisible": true,
        "left": "13%",
        "src": "menu2.png",
        "top": "16%",
        "width": "20dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var imgCalculadora = new kony.ui.Image2({
        "height": "25dp",
        "id": "imgCalculadora",
        "isVisible": true,
        "left": "14%",
        "src": "menu3.png",
        "top": "27%",
        "width": "20dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var imgDistribuidores = new kony.ui.Image2({
        "height": "25dp",
        "id": "imgDistribuidores",
        "isVisible": true,
        "left": "14%",
        "src": "menu4.png",
        "top": "38%",
        "width": "20dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var imgContactanos = new kony.ui.Image2({
        "height": "25dp",
        "id": "imgContactanos",
        "isVisible": true,
        "left": "13.50%",
        "src": "menu5.png",
        "top": "49%",
        "width": "20dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var imgParquimetro = new kony.ui.Image2({
        "height": "25dp",
        "id": "imgParquimetro",
        "isVisible": true,
        "left": "13.50%",
        "src": "menu6.png",
        "top": "60%",
        "width": "20dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblConfiguracion = new kony.ui.Button({
        "focusSkin": "focusHamburguerMenuButton",
        "height": "12%",
        "id": "lblConfiguracion",
        "isVisible": true,
        "left": "0%",
        "text": "Configuraicon",
        "top": "67.50%",
        "width": "100%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "displayText": true,
        "padding": [23, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    var imgConfiguracion = new kony.ui.Image2({
        "height": "25dp",
        "id": "imgConfiguracion",
        "isVisible": true,
        "left": "13.50%",
        "src": "menu7.png",
        "top": "71%",
        "width": "20dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var btnMenuCerrarSesion = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "9%",
        "centerX": "55%",
        "clipBounds": true,
        "height": "11%",
        "id": "btnMenuCerrarSesion",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    btnMenuCerrarSesion.setDefaultUnit(kony.flex.DP);
    var btnCerrarSesion = new kony.ui.Button({
        "centerX": "50%",
        "centerY": "50%",
        "focusSkin": "focusGrayButton",
        "height": "80%",
        "id": "btnCerrarSesion",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopynewBtnEnviarGray0a13c4f8932cc41",
        "text": "CERRAR SESION",
        "top": "0dp",
        "width": "70%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    btnMenuCerrarSesion.add(btnCerrarSesion);
    var lineaContainer1 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "5%",
        "id": "lineaContainer1",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    lineaContainer1.setDefaultUnit(kony.flex.DP);
    var CopyimgInicio043ecaa5119134a = new kony.ui.Image2({
        "height": "100%",
        "id": "CopyimgInicio043ecaa5119134a",
        "isVisible": false,
        "left": "0%",
        "src": "rayanegra.png",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    lineaContainer1.add(CopyimgInicio043ecaa5119134a);
    var lineaContainer2 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "5%",
        "id": "lineaContainer2",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "11%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    lineaContainer2.setDefaultUnit(kony.flex.DP);
    var CopyimgInicio09fb94266061240 = new kony.ui.Image2({
        "height": "100%",
        "id": "CopyimgInicio09fb94266061240",
        "isVisible": true,
        "left": "0%",
        "src": "rayanegra.png",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    lineaContainer2.add(CopyimgInicio09fb94266061240);
    var lineaContainer3 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "5%",
        "id": "lineaContainer3",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "22%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    lineaContainer3.setDefaultUnit(kony.flex.DP);
    var CopyimgInicio0231f759866644d = new kony.ui.Image2({
        "height": "100%",
        "id": "CopyimgInicio0231f759866644d",
        "isVisible": true,
        "left": "0%",
        "src": "rayanegra.png",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    lineaContainer3.add(CopyimgInicio0231f759866644d);
    var lineaContainer4 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "5%",
        "id": "lineaContainer4",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "33%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    lineaContainer4.setDefaultUnit(kony.flex.DP);
    var CopyimgInicio04507e73a252448 = new kony.ui.Image2({
        "height": "100%",
        "id": "CopyimgInicio04507e73a252448",
        "isVisible": true,
        "left": "0%",
        "src": "rayanegra.png",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    lineaContainer4.add(CopyimgInicio04507e73a252448);
    var lineaContainer5 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "5%",
        "id": "lineaContainer5",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "10dp",
        "skin": "slFbox",
        "top": "44%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    lineaContainer5.setDefaultUnit(kony.flex.DP);
    var CopyimgInicio0a0af1a3a46b444 = new kony.ui.Image2({
        "height": "100%",
        "id": "CopyimgInicio0a0af1a3a46b444",
        "isVisible": true,
        "left": "0%",
        "src": "rayanegra.png",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    lineaContainer5.add(CopyimgInicio0a0af1a3a46b444);
    var lineaContainer6 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "5%",
        "id": "lineaContainer6",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "20dp",
        "skin": "slFbox",
        "top": "55%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    lineaContainer6.setDefaultUnit(kony.flex.DP);
    var CopyimgInicio028db086f211f44 = new kony.ui.Image2({
        "height": "100%",
        "id": "CopyimgInicio028db086f211f44",
        "isVisible": true,
        "left": "0%",
        "src": "rayanegra.png",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    lineaContainer6.add(CopyimgInicio028db086f211f44);
    var lineaContainer7 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "5%",
        "id": "lineaContainer7",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "30dp",
        "skin": "slFbox",
        "top": "65%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    lineaContainer7.setDefaultUnit(kony.flex.DP);
    var CopyimgInicio0c718737b7c4947 = new kony.ui.Image2({
        "height": "100%",
        "id": "CopyimgInicio0c718737b7c4947",
        "isVisible": true,
        "left": "0%",
        "src": "rayanegra.png",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    lineaContainer7.add(CopyimgInicio0c718737b7c4947);
    menuContainer.add(btnInicio, btnLogin, btnCalculadora, lblDistribuidores, lblContactanos, lblParquimetro, imgInicio, imgLogin, imgCalculadora, imgDistribuidores, imgContactanos, imgParquimetro, lblConfiguracion, imgConfiguracion, btnMenuCerrarSesion, lineaContainer1, lineaContainer2, lineaContainer3, lineaContainer4, lineaContainer5, lineaContainer6, lineaContainer7);
    var flexContainerMenuHeader = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "34%",
        "id": "flexContainerMenuHeader",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "91%",
        "zIndex": 1
    }, {}, {});
    flexContainerMenuHeader.setDefaultUnit(kony.flex.DP);
    var menuBg = new kony.ui.Image2({
        "height": "100%",
        "id": "menuBg",
        "isVisible": true,
        "left": "0%",
        "src": "menuhamburguesadesplegado.png",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flexContainerMenuHeader.add(menuBg);
    flexMenu.add(menuContainer, flexContainerMenuHeader);
    var flexContainerHeader = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "50dp",
        "id": "flexContainerHeader",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "90%",
        "skin": "CopyslFbox0dd7b4522112c44",
        "top": "0",
        "width": "100%"
    }, {}, {});
    flexContainerHeader.setDefaultUnit(kony.flex.DP);
    var flexHeader = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerY": "50%",
        "clipBounds": true,
        "height": "100%",
        "id": "flexHeader",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "top": "0dp",
        "width": "100%"
    }, {}, {});
    flexHeader.setDefaultUnit(kony.flex.DP);
    var FlexContainer03c95eea13be042 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "FlexContainer03c95eea13be042",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "15%",
        "zIndex": 1
    }, {}, {});
    FlexContainer03c95eea13be042.setDefaultUnit(kony.flex.DP);
    var btnMenu = new kony.ui.Button({
        "centerX": "50%",
        "height": "40%",
        "id": "btnMenu",
        "isVisible": true,
        "left": "4.50%",
        "top": "25%",
        "width": "50%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    FlexContainer03c95eea13be042.add(btnMenu);
    var FlexContainer097c370fc3eec4d = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "FlexContainer097c370fc3eec4d",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "70%",
        "zIndex": 1
    }, {}, {});
    FlexContainer097c370fc3eec4d.setDefaultUnit(kony.flex.DP);
    var imgLogo = new kony.ui.Image2({
        "centerX": "50%",
        "height": "80%",
        "id": "imgLogo",
        "isVisible": true,
        "left": "0%",
        "src": "mymbflogo.png",
        "top": "5dp",
        "width": "90%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    FlexContainer097c370fc3eec4d.add(imgLogo);
    var FlexContainer04ec52b4e49ff4f = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerY": "50%",
        "clipBounds": true,
        "height": "100%",
        "id": "FlexContainer04ec52b4e49ff4f",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "15%",
        "zIndex": 1
    }, {}, {});
    FlexContainer04ec52b4e49ff4f.setDefaultUnit(kony.flex.DP);
    var imgInfo = new kony.ui.Image2({
        "centerX": "50%",
        "height": "30%",
        "id": "imgInfo",
        "isVisible": true,
        "src": "iconoinformacion.png",
        "top": "35%",
        "width": "50%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    FlexContainer04ec52b4e49ff4f.add(imgInfo);
    flexHeader.add(FlexContainer03c95eea13be042, FlexContainer097c370fc3eec4d, FlexContainer04ec52b4e49ff4f);
    flexContainerHeader.add(flexHeader);
    flexContainerHamburguer.add(flexMenu, flexContainerHeader);
}