function segCalculadoraAnimStart2() {
    cotizadorModelos2.segmentCalculadora.opacity = 0;
    cotizadorModelos2.forceLayout();
    var arrTipos = kony.store.getItem('lstTipos');
    var arrTiposSel = [];
    var idClase = kony.store.getItem("idClaseSeleccionada");
    for (k = 0; k < arrTipos.length; k++) {
        if (arrTipos[k].lblIdClase.toString() == idClase.toString()) {
            arrTiposSel.push({
                "lblContent": arrTipos[k].lblContent,
                "lblContentId": arrTipos[k].lblContentId,
                "lblIdClase": arrTipos[k].lblIdClase
            });
            cotizadorModelos2.segmentCalculadora.widgetDataMap = {
                lblContent: "lblContent",
                lblContentId: "lblContentId",
                lblIdClase: "lblIdClase"
            };
            cotizadorModelos2.segmentCalculadora.setData(arrTiposSel, k, 0);
        }
    }
}

function segCalculadoraEnd2() {
    //cotizadorModelos2.flexClases.setEnabled(true);
    //cotizadorModelos2.segmentCalculadora
    cotizadorModelos2.segmentCalculadora.opacity = 1;
    cotizadorModelos2.forceLayout();
}

function segCalculadoraConfig2() {
    var config = {
        "duration": .5,
        "iterationCount": 1,
        "delay": 0,
        "direction": kony.anim.DIRECTION_NONE,
        "fillMode": kony.anim.FILL_MODE_FORWARDS
    };
    return config;
}

function getAnimationSegmentCalculadora2() {
    var animDefinition = {
        0: {
            "opacity": 0
        },
        5: {
            "opacity": 0.0
        },
        10: {
            "opacity": 0.0
        },
        15: {
            "opacity": 0.0
        },
        20: {
            "opacity": 0.0
        },
        25: {
            "opacity": 0.0
        },
        30: {
            "opacity": 0.0
        },
        35: {
            "opacity": 0.0
        },
        40: {
            "opacity": 0.0
        },
        45: {
            "opacity": 0.0
        },
        50: {
            "opacity": 0.0
        },
        55: {
            "opacity": 0.0
        },
        60: {
            "opacity": 0.0
        },
        65: {
            "opacity": 0.0
        },
        70: {
            "opacity": 0.0
        },
        75: {
            "opacity": 0.0
        },
        80: {
            "opacity": 0.0
        },
        85: {
            "opacity": 00
        },
        90: {
            "opacity": 0.0
        },
        95: {
            "opacity": 0.0
        },
        100: {
            "opacity": 0
        }
    };
    animDef = kony.ui.createAnimation(animDefinition);
    return animDef;
}