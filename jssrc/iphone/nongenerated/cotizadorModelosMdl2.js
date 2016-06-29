function cotizadorModelos2_init() {
    kony.store.setItem("contador", 0);
    cargarClases2();
}

function ocultarSegmentClases() {
    kony.store.setItem("asignarClase0", true);
}

function mostrarSegmentClases2() {
    cotizadorModelos2.segmentClases.setVisibility(true, null);
}

function seleccionarModelo(index) {
    kony.store.setItem("lblModeloSeleccionado", cotizadorModelos2.segmentCalculadora.data[index].lblContent.toString());
    limpiarControlesFinanciamiento2();
    limpiarParametrosEnvio();
    limpiarControlesCalculo2();
    limpiarDatosCotizacion();
    //cotizadorFinanciamiento2.show();
    showFrm(cotizadorFinanciamiento2);
}

function cotizadorModelos2_postShow() {
    kony.store.setItem("contador", 0);
    //cargarClases2();	
    var recargar = kony.store.getItem("recargarClases");
    if (recargar != null && recargar != undefined && recargar == true) {
        cargarClases2();
    } else {
        var modelosHasInit = kony.store.getItem("modelosIniciado");
        if (modelosHasInit != null && modelosHasInit != undefined) {
            if (!isIOS()) {
                seleccionarClase2(0);
            }
        } else {
            kony.store.removeItem("modelosIniciado");
        }
        showFrm(cotizadorModelos2);
    }
}

function cargarClases2() {
    var inputparam = {};
    inputparam["serviceID"] = "obtenerModelosCotizador";
    inputparam["httpheaders"] = {};
    inputparam["httpconfig"] = {
        timeout: 55
    };
    appmiddlewareinvokerasync(inputparam, cargarClasesCallback2);
}

function cargarClasesCallback2(status, result) {
    kony.application.showLoadingScreen("sknLblLoading", "Cargando...", constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true, {
        shouldShowLabelInBottom: true,
        seperatorHeight: 30
    });
    if (result.errmsg != undefined) {
        alert('No fue posible recuperar los modelos, verifique su connexión a intenet y vuelva  a intentarlo mas tarde por favor.');
        kony.store.setItem("recargarClases", true);
        kony.application.dismissLoadingScreen();
        //inicio.show();
        showFrm(inicio);
    } else {
        if (result.codigo != null && result.codigo != undefined && result.codigo == 1) {
            if (result.lstModelos != undefined && result.lstModelos.length > 0) {
                var arrClases = [];
                var arrTipos = [];
                for (i = 0; i < result.lstModelos.length; i++) {
                    arrClases.push({
                        "lblClase": result.lstModelos[i].descripcion,
                        "lblId": result.lstModelos[i].id
                    });
                    for (j = 0; j < result.lstModelos[i].lstTipos.length; j++) {
                        arrTipos.push({
                            "lblContent": result.lstModelos[i].lstTipos[j].descripcion,
                            "lblContentId": result.lstModelos[i].lstTipos[j].id,
                            "lblIdClase": result.lstModelos[i].id
                        });
                    }
                }
                kony.store.setItem('lstTipos', arrTipos);
                cotizadorModelos2.segmentClases.widgetDataMap = {
                    lblClase: "lblClase",
                    lblId: "lblId"
                };
                cotizadorModelos2.segmentClases.setData(arrClases);
                //cotizadorModelos2.forceLayout();    				
                kony.store.setItem("cotizacionEnCurso", false);
                kony.store.setItem("modelosIniciado", true);
                seleccionarClase2(0);
                kony.store.removeItem("recargarClases");
                //cotizadorModelos2.forceLayout();
                showFrm(cotizadorModelos2);
            } else {
                alert('No hubo resultados');
                kony.application.dismissLoadingScreen();
                kony.store.setItem("recargarClases", true);
            }
        } else {
            //	if(status==300){
            //					alert('No fue posible recuperar los modelos, verifique su connexión a intenet y vuelva  a intentarlo mas tarde por favor.');
            // 			
            //					kony.application.dismissLoadingScreen();
            //				}
            //				else if(status!=100 && status!=200){
            //					alert('No fue posible recuperar los modelos, verifique su connexión a intenet y vuelva  a intentarlo mas tarde por favor.');
            // 			
            //					kony.application.dismissLoadingScreen();
            //				}
            // 				else 
            if (result.codigo != null && result.codigo != undefined) {
                alert('No fue posible recuperar los modelos, verifique su connexión a intenet y vuelva  a intentarlo mas tarde por favor.');
                kony.application.dismissLoadingScreen();
                kony.store.setItem("recargarClases", true);
            }
        }
    }
}

function alertame() {
    alert("Esta es una alerta");
}

function onSwipeCallBack2(rowIndex) {
    ocultarMenu();
    seleccionarClase2(rowIndex);
}

function seleccionarClase2(rowIndex) {
    kony.application.dismissLoadingScreen();
    cotizadorModelos2.segmentCalculadora.opacity = 0;
    cotizadorModelos2.flexImagenClase.top = "150%";
    var arrTipos = kony.store.getItem('lstTipos');
    var arrTiposSel = [];
    var idClase = cotizadorModelos2.segmentClases.data[rowIndex].lblId;
    kony.store.setItem("idClaseSeleccionada", idClase);
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
            //cotizadorModelos2.forceLayout();					
        }
    }
    cotizadorModelos2.imagenClase.src = cotizadorModelos2.segmentClases.data[rowIndex].lblClase.toString().trim().toLowerCase().replaceAll(" ", "").replace("-", "") + ".png";
    var idStore = kony.store.getItem("indice" + (rowIndex + 1));
    var c = kony.store.getItem("contador");
    var c = c + 1;
    kony.store.setItem("contador", c);
    kony.store.setItem('claseSeleccionada', cotizadorModelos2.segmentClases.data[rowIndex].lblClase.toString().trim().toLowerCase().replace(" ", "").replace("-", ""));
    kony.store.setItem("lblClaseSeleccionada", cotizadorModelos2.segmentClases.data[rowIndex].lblClase.toString());
    cotizadorModelos2.segmentClases.setVisibility(true);
    //cotizadorModelos2.forceLayout();   
    cotizadorModelos2.imagenClase.animate(getMoveUPAnimationObject2(), animMoveUpConfig2(), {
        animationStart: moveUpAnimStart2,
        animationEnd: moveUpAnimEnd2
    });
    cotizadorModelos2.segmentCalculadora.opacity = 1;
    //cotizadorModelos2.forceLayout();   					
}

function ocultarSeleccion2() {
    cotizadorModelos2.flexContainerBack.opacity = 0;
    //cotizadorModelos2.forceLayout();
}

function segmentClasesRowClick() {
    cotizadorModelos2.segmentCalculadora.setVisibility(true, null);
}

function moveUpAnimStart2() {
    cotizadorModelos2.flexImagenClase.top = "15%";
    //cotizadorModelos2.forceLayout();
}

function moveUpAnimEnd2() {
    var c = kony.store.getItem("contador");
    if (c <= 1) {
        cotizadorModelos2.flexImagenClase.top = "150%";
        //cotizadorModelos2.forceLayout();
        kony.store.setItem("contador", 0);
    } else {
        c = c - 1;
        kony.store.setItem("contador", c);
    }
}

function animMoveUpConfig2() {
    var config = {
        "duration": 4,
        "iterationCount": 1,
        "delay": 0,
        "direction": kony.anim.DIRECTION_NONE,
        "fillMode": kony.anim.FILL_MODE_FORWARDS
    };
    return config;
}

function alternarMenuCotizador() {
    if (cotizadorModelos2.flexMenuCotizador.right == '100%' || cotizadorModelos2.flexMenuCotizador.right == '100.0%') {
        mostrarMenuCotizador();
        cotizadorModelos2.flexMenuCotizador.setVisibility(true);
    } else {
        ocultarMenuCotizador();
        cotizadorModelos2.flexBotonMenu.left = "0%";
        cotizadorModelos2.flexMenuCotizador.setVisibility(false);
        //cotizadorModelos2.forceLayout();
    }
}

function posicionarMenuBoton() {
    if (cotizadorModelos2.flexMenuCotizador.right == '100%' || cotizadorModelos2.flexMenuCotizador.right == '100.0%') {
        cotizadorModelos2.flexBotonMenu.left = "0%";
        cotizadorModelos2.flexMenuCotizador.setVisibility(false);
        //cotizadorModelos2.forceLayout();		
    } else {
        cotizadorModelos2.flexBotonMenu.left = "85%";
        //cotizadorModelos2.forceLayout();		
        //cotizadorModelos2.forceLayout();
        cotizadorModelos2.flexMenuCotizador.setVisibility(true);
        //cotizadorModelos2.forceLayout();
    }
}

function getMoveUPAnimationObject2() {
    var animDefinition = {
        0: {
            "opacity": 1
        },
        5: {
            "opacity": 1
        },
        10: {
            "opacity": 1
        },
        15: {
            "opacity": 1
        },
        20: {
            "opacity": 1
        },
        25: {
            "opacity": 0.75
        },
        30: {
            "opacity": 0.70
        },
        35: {
            "opacity": 0.65
        },
        40: {
            "opacity": 0.60
        },
        45: {
            "opacity": 0.55
        },
        50: {
            "opacity": 0.50
        },
        55: {
            "opacity": 0.45
        },
        60: {
            "opacity": 0.40
        },
        65: {
            "opacity": 0.35
        },
        70: {
            "opacity": 0.30
        },
        75: {
            "opacity": 0.25
        },
        80: {
            "opacity": 0.20
        },
        85: {
            "opacity": 0.15
        },
        90: {
            "opacity": 0.10
        },
        95: {
            "opacity": 0.05
        },
        100: {
            "opacity": 0
        }
    };
    animDef = kony.ui.createAnimation(animDefinition);
    return animDef;
}