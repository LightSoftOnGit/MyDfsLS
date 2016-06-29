function addWidgetsfrmAjustesParquimetro() {
    frmAjustesParquimetro.setDefaultUnit(kony.flex.DP);
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
        "height": "110%",
        "id": "imgBg",
        "isVisible": true,
        "left": "0dp",
        "src": "backgroundajustesubicacion.png",
        "top": "-20%",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var imgButtonBack = new kony.ui.Image2({
        "centerY": "10%",
        "height": "3%",
        "id": "imgButtonBack",
        "isVisible": true,
        "left": "8%",
        "src": "flechaatras.png",
        "top": "0%",
        "width": "10%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var imgTab = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "58.50%",
        "id": "imgTab",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "top": "16%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    imgTab.setDefaultUnit(kony.flex.DP);
    var imgTabBg = new kony.ui.Image2({
        "height": "100%",
        "id": "imgTabBg",
        "isVisible": true,
        "left": "0dp",
        "src": "tabajusteparquimetro.png",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var richTextTitle = new kony.ui.RichText({
        "centerX": "50%",
        "height": "13.50%",
        "id": "richTextTitle",
        "isVisible": true,
        "left": "149%",
        "text": "Ajustes Parquímetro\n",
        "top": "0%",
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
        "text": "Encender/Apagar\n",
        "top": "20%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var switchUbicacion = new kony.ui.Switch({
        "height": "15%",
        "id": "switchUbicacion",
        "isVisible": true,
        "leftSideText": "ON",
        "right": "5%",
        "rightSideText": "OFF",
        "top": "19%",
        "width": "18%",
        "zIndex": 1
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblRecordatorio = new kony.ui.Label({
        "centerX": "50%",
        "id": "lblRecordatorio",
        "isVisible": true,
        "left": "134dp",
        "text": "Recordatorio/Minutos Antes:",
        "top": "40%",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var btnMenos = new kony.ui.Button({
        "height": "2.50%",
        "id": "btnMenos",
        "isVisible": true,
        "left": "24%",
        "top": "58%",
        "width": "7%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var btnMas = new kony.ui.Button({
        "height": "7.50%",
        "id": "btnMas",
        "isVisible": true,
        "right": "24%",
        "top": "56%",
        "width": "7%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblMinutos = new kony.ui.Label({
        "centerX": "50%",
        "height": "15%",
        "id": "lblMinutos",
        "isVisible": true,
        "left": "152dp",
        "text": "10''",
        "top": "52%",
        "width": "25%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var lblActuvar = new kony.ui.Label({
        "id": "lblActuvar",
        "isVisible": true,
        "left": "10%",
        "text": "Activar tono de alerta por:",
        "top": "81%",
        "width": "35%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var listBoxSegundos = new kony.ui.ListBox({
        "height": "8.50%",
        "id": "listBoxSegundos",
        "isVisible": true,
        "masterData": [
            ["15", "15 segundos"],
            ["25", "25 segundos"],
            ["35", "35 segundos"],
            ["45", "45 segundos"]
        ],
        "right": "10%",
        "selectedKey": "15",
        "selectedKeyValue": ["15", "15 segundos"],
        "top": "82%",
        "width": "35%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    imgTab.add(imgTabBg, richTextTitle, richTextUbicacion, switchUbicacion, lblRecordatorio, btnMenos, btnMas, lblMinutos, lblActuvar, listBoxSegundos);
    var btnEnviar = new kony.ui.Button({
        "centerX": "50%",
        "height": "6%",
        "id": "btnEnviar",
        "isVisible": true,
        "text": "Guardar",
        "top": "90.00%",
        "width": "30%",
        "zIndex": 2
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var btnBack = new kony.ui.Button({
        "height": "5.50%",
        "id": "btnBack",
        "isVisible": true,
        "left": "8%",
        "onClick": p2kwiet19724036341660_btnBack_onClick_seq0,
        "top": "7%",
        "width": "10%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flexContent.add(imgBg, imgButtonBack, imgTab, btnEnviar, btnBack);
    flexMain.add(flexContent);
    frmAjustesParquimetro.add(flexMain);
};

function frmAjustesParquimetroGlobals() {
    frmAjustesParquimetro = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAjustesParquimetro,
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "bounces": false,
        "enableScrolling": false,
        "enabledForIdleTimeout": false,
        "horizontalScrollIndicator": true,
        "id": "frmAjustesParquimetro",
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
    frmAjustesParquimetro.info = {
        "kuid": "p2kwiet19724036341660"
    };
};