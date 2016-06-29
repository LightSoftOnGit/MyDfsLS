function initializemenuGeneral() {
    flexContenido = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "40dp",
        "id": "flexContenido",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "zIndex": 1
    }, {}, {});
    flexContenido.setDefaultUnit(kony.flex.DP);
    var flexMenu = new kony.ui.FlexContainer({
        "centerX": "50%",
        "centerY": "52.08%",
        "clipBounds": true,
        "height": "80%",
        "id": "flexMenu",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "width": "80%",
        "zIndex": 1
    }, {}, {});
    flexMenu.setDefaultUnit(kony.flex.DP);
    var btnInicio = new kony.ui.Button({
        "centerX": "12%",
        "centerY": "50%",
        "height": "35dp",
        "id": "btnInicio",
        "isVisible": true,
        "onClick": p2kwiet19724036343171_btnInicio_onClick_seq0,
        "width": "40dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var btnCotizador = new kony.ui.Button({
        "centerX": "27%",
        "centerY": "50.00%",
        "height": "35dp",
        "id": "btnCotizador",
        "isVisible": true,
        "onClick": p2kwiet19724036343171_btnCotizador_onClick_seq0,
        "width": "40dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var btnLoginMenu = new kony.ui.Button({
        "centerX": "42%",
        "centerY": "50.00%",
        "height": "35dp",
        "id": "btnLoginMenu",
        "isVisible": true,
        "onClick": p2kwiet19724036343171_btnLoginMenu_onClick_seq0,
        "width": "40dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var btnGps = new kony.ui.Button({
        "centerX": "57%",
        "centerY": "50.00%",
        "height": "35dp",
        "id": "btnGps",
        "isVisible": true,
        "onClick": p2kwiet19724036343171_btnGps_onClick_seq0,
        "width": "40dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var btnContacto = new kony.ui.Button({
        "centerX": "72%",
        "centerY": "50.00%",
        "height": "35dp",
        "id": "btnContacto",
        "isVisible": true,
        "onClick": p2kwiet19724036343171_btnContacto_onClick_seq0,
        "width": "40dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var btnParquimetro = new kony.ui.Button({
        "centerX": "87%",
        "centerY": "50.00%",
        "height": "35dp",
        "id": "btnParquimetro",
        "isVisible": true,
        "onClick": p2kwiet19724036343171_btnParquimetro_onClick_seq0,
        "width": "40dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flexMenu.add(btnInicio, btnCotizador, btnLoginMenu, btnGps, btnContacto, btnParquimetro);
    flexContenido.add(flexMenu);
}