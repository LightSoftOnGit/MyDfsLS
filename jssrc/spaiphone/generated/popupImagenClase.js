function addWidgetspopupImagenClase() {
    var imagenClase = new kony.ui.Image2({
        "id": "imagenClase",
        "isVisible": true
    }, {
        "containerWeight": 100,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    popupImagenClase.add(imagenClase);
};

function popupImagenClaseGlobals() {
    popupImagenClase = new kony.ui.Popup({
        "addWidgets": addWidgetspopupImagenClase,
        "id": "popupImagenClase",
        "isModal": false,
        "transparencyBehindThePopup": 100
    }, {
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 80,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "inTransitionConfig": {
            "popupTransition": "none"
        },
        "outTransitionConfig": {
            "popupTransition": "none"
        }
    });
    popupImagenClase.info = {
        "kuid": "p2kwiet19724036342976"
    };
};