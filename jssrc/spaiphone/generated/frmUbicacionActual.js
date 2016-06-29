function addWidgetsfrmUbicacionActual() {
    frmUbicacionActual.setDefaultUnit(kony.flex.DP);
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
    var imgBg = new kony.ui.Image2({
        "height": "100%",
        "id": "imgBg",
        "isVisible": true,
        "left": "0dp",
        "src": "backgroundajustesubicacion.png",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var btnBack = new kony.ui.Button({
        "centerY": "15%",
        "height": "5%",
        "id": "btnBack",
        "isVisible": true,
        "left": "8%",
        "onClick": p2kwiet19724036342006_btnBack_onClick_seq0,
        "top": "0dp",
        "width": "10%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var imgTab = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "20%",
        "id": "imgTab",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "top": "22%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    imgTab.setDefaultUnit(kony.flex.DP);
    var imgTabBg = new kony.ui.Image2({
        "height": "100%",
        "id": "imgTabBg",
        "isVisible": true,
        "left": "0dp",
        "src": "tabajustesubicacion.png",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var richTextTitle = new kony.ui.RichText({
        "centerX": "50%",
        "height": "20%",
        "id": "richTextTitle",
        "isVisible": true,
        "left": "149%",
        "text": "Ubicación Actual",
        "top": "7%",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var richTextUbicacion = new kony.ui.RichText({
        "id": "richTextUbicacion",
        "isVisible": true,
        "left": "10%",
        "text": "Ajustes de Ubicación",
        "top": "60%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var switchUbicacion = new kony.ui.Switch({
        "height": "30%",
        "id": "switchUbicacion",
        "isVisible": true,
        "left": "80%",
        "leftSideText": "ON",
        "onSlide": p2kwiet19724036342006_switchUbicacion_onslide_seq0,
        "rightSideText": "OFF",
        "top": "55%",
        "width": "20%",
        "zIndex": 1
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    imgTab.add(imgTabBg, richTextTitle, richTextUbicacion, switchUbicacion);
    flexContent.add(imgBg, btnBack, imgTab);
    flexMain.add(flexContent);
    frmUbicacionActual.add(flexMain);
};

function frmUbicacionActualGlobals() {
    frmUbicacionActual = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmUbicacionActual,
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "bounces": false,
        "enableScrolling": false,
        "enabledForIdleTimeout": false,
        "horizontalScrollIndicator": true,
        "id": "frmUbicacionActual",
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
        "inTransitionConfig": {
            "formTransition": "none"
        },
        "outTransitionConfig": {
            "formTransition": "none"
        },
        "retainScrollPosition": false
    });
    frmUbicacionActual.info = {
        "kuid": "p2kwiet19724036342006"
    };
};