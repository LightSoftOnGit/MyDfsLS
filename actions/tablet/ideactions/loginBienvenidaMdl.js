var chart1;

function init_loginBienvenida(user) {
    if (user != null) {
    	
    	if(isIOS()){
    		loginBienvenida.sgmGrafica.top="10%"
    	}
    
        loginBienvenida.lblTitle.text = "Bienvenido: " + user.nombre;

        if (user.listaContratos != null && user.listaContratos.length > 0) {
            loginBienvenida.segmentCliente.setData(user.listaContratos.map(function(cliente) {
                return {
                    "lblNoCliente": "NO. DE CLIENTE: " + cliente.numCliente
                };
            }));

            cargarContratos(user.listaContratos[0].numCliente, user.listaContratos);

            loginBienvenida.segmentCliente.onSwipe = function(seguiWidget, sectionIndex, rowIndex) {
                cargarContratos(user.listaContratos[rowIndex].numCliente, user.listaContratos);
            }
        }
        //loginBienvenida.show();
        showFrm(loginBienvenida);
    }
}

function cargarContratos(numCliente, listaContratos) {
    var contratoSeleccionado;
    var contratos = null;
    listaContratos.forEach(function(elements) {
        if (elements.numCliente == numCliente) {
            contratos = elements.contratos;
        }
    });
    if (contratos != null && contratos.length > 0) {

        loginBienvenida.listBoxBienvenida.masterData = contratos.map(function(contrato) {
            return [contrato.idContrato, "CONTRATO: " + contrato.numeroContrato];
        });

        dibujarGrafica(contratos[0].mensualidadActual, contratos[0].numeroPlazos);
        loginBienvenida.listBoxBienvenida.selectedKey = contratos[0].idContrato;
        contratoSeleccionado = contratos[0];

		kony.store.setItem("numeroCliente", numCliente);
        kony.store.setItem("contratoMaestro", contratoSeleccionado.numeroContrato);
        
        loginBienvenida.listBoxBienvenida.onSelection = function() {
            contratos.forEach(function(contrato) {
                if (contrato.idContrato == loginBienvenida.listBoxBienvenida.selectedKey) {
                    contratoSeleccionado = contrato;
                    kony.store.setItem("contratoMaestro", contratoSeleccionado.numeroContrato);
                }
            });
            dibujarGrafica(contratoSeleccionado.mensualidadActual, contratoSeleccionado.numeroPlazos);
        }

        loginBienvenida.segmentOptions.onRowClick = function(seguiWidget, sectionIndex, rowIndex, isSelected) {
            switch (rowIndex) {
            case 2:
                init_estadoscuentas(contratoSeleccionado, numCliente);
                break;
            default:
                showFrm(frmConstruccion);
                break;
            }
        }
    } else {
        loginBienvenida.listBoxBienvenida.masterData = [
            [null, null]
        ];
        dibujarGrafica(0, 60);
        alert("Sin contratos");
    }
}

function dibujarGrafica(mesesPagados, mesesContrato) {
    mesesPagados = mesesPagados ? mesesPagados : 0;
    mesesContrato = mesesContrato ? mesesContrato : 60;
    var chartSpecific = kdv_createChartJSObject(mesesPagados, mesesContrato);

    var chartBasicConf = {
        id: "acc",
        isVisible: true
    };

    var chartLayoutConf = {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "contentAlignment": constants.CONTENT_ALIGN_BOTTOM_CENTER,
        "containerWeight": 100,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0]
    };
    if (chart1) {
        loginBienvenida.sgmGrafica.remove(chart1);
    }
    chart1 = new kony.ui.Chart2D3D(chartBasicConf, chartLayoutConf, chartSpecific);
    loginBienvenida.lblMensualidad.text = mesesPagados.toLocaleString();
    loginBienvenida.sgmGrafica.add(chart1);
}


function kdv_createChartJSObject(avance, meta) {
    var metaGrados = 270;
    var numPrimo = false;
    var divisor = encontrarDivisor(meta);
    var radius = 120;

    if (divisor == 1) {
        divisor = encontrarDivisor(meta - 1);
        numPrimo = true;
    }

    var majorInterval = (meta / divisor);
    var minorInterval = (meta / majorInterval)
    var avanceGrados = ((avance) * ((180 / majorInterval) / minorInterval)) + 90;

    if (avance != null && avance > 0) {
        var baseColor = 25,
            limColor1 = baseColor + 90,
            limColor2 = (baseColor * 2) + 90,
            limColor3 = (baseColor * 3) + 90,
            limColor4 = (baseColor * 4) + 90,
            limColor5 = (baseColor * 5) + 90,
            limColor6 = (baseColor * 6) + 90,
            limColor7 = 270 + 90;
        var lineas = [{
            "fromAngle": 90,
            "toAngle": avanceGrados > limColor1 ? limColor1 : avanceGrados,
            "color": ["0x036CA5ff"]
        }];

        if (avanceGrados > limColor1) {
            lineas.push({
                "fromAngle": limColor1,
                "toAngle": avanceGrados > limColor2 ? limColor2 : avanceGrados,
                "color": ["0x0087C6ff"]
            });
            if (avanceGrados > limColor2) {
                lineas.push({
                    "fromAngle": limColor2,
                    "toAngle": avanceGrados > limColor3 ? limColor3 : avanceGrados,
                    "color": ["0x00ABF1ff"]
                });

                if (avanceGrados > limColor3) {
                    lineas.push({
                        "fromAngle": limColor3,
                        "toAngle": avanceGrados > limColor4 ? limColor4 : avanceGrados,
                        "color": ["0x41D1F3ff"]
                    });

                    if (avanceGrados > limColor4) {

                        lineas.push({
                            "fromAngle": limColor4,
                            "toAngle": avanceGrados > limColor5 ? limColor5 : avanceGrados,
                            "color": ["0x7CDDFAff"]
                        });
                        if (avanceGrados > limColor5) {
                            lineas.push({
                                "fromAngle": limColor5,
                                "toAngle": avanceGrados > limColor6 ? limColor6 : avanceGrados,
                                "color": ["0xB7E8FAff"]
                            });

                            if (avanceGrados > limColor6) {
                                lineas.push({
                                    "fromAngle": limColor6,
                                    "toAngle": avanceGrados > limColor7 ? limColor7 : avanceGrados,
                                    "color": ["0xB7E8FBff"]
                                });
                            }
                        }
                    }

                }
            }

        }

    }
    //"0x036CA5ff"
    //"0x0087C6ff"
    //"0x00ABF1ff"
    //"0x41D1F3ff"
    //"0x7CDDFAff"
    //"0xB7E8FAff"
    //"0xB7E8FBff"
    //"0x0088c6ff" Rollover    //0x00adefff   Initial     //0x4dc6f4ff Inactive 
    // 0x00fefeff
    //"0x0092b6ff"
    var chartJSObj = {
        "chartProperties": {
            "drawEntities": ["dialerChart"],
            "chartHeight": isIOS() ? 30 : 100,
            "dialerChart": {
                "radius": 115,
                "viewArea": "topHalf",
                "background": {
                    "transparency": 100
                },
                "axis": ["axisOne", "axisTwo"],
                "axisOne": {
                    "visible": true,
                    "radius": radius,
                    "startValue": numPrimo ? 1 : 0,
                    "endValue": meta,
                    "majorIntervals": 10,
                    "minorIntervals": 5,
                    "startAngle": 90,
                    "endAngle": metaGrados,
                    "lineFillType": "gradient",
                    "lineColors": lineas,
                    "lineWidth": 20,
                    "intervalMarks": {
                        "visible": true,
                        "major": {
                            "visible": true,
                            "placement": "insideAxis",
                            "length": (radius * 0.2) * (-1),
                            "line": { //Lineas grandes que indican los numeros
                                "width": [radius * 0.02],
                                "transparency": [0]
                            },
                            "labels": {
                                "visible": false,
                                "placement": "insideAxis",
                                "gap": 0,
                                "orientationAngle": 0,
                                "font": {
                                    "family": ["Verdana"],
                                    "style": ["normal"],
                                    "size": isIOS() ? [12] : [18],
                                    "transparency": [0],
                                    "color": ["0xffffffff"]
                                }
                            }
                        },
                        "minor": {
                            "visible": true,
                            "placement": "outsideAxis",
                            "length": (radius * 0.2) * (-1),
                            "line": {
                                "width": [radius * 0.02],
                                "transparency": [0]
                            },
                            "labels": {
                                "visible": false,
                                "placement": "insideAxis",
                                "gap": -2,
                                "orientationAngle": 0,

                                "font": {
                                    "family": ["Verdana"],
                                    "style": ["normal"],
                                    "size": [8],
                                    "transparency": [0],
                                    "color": ["0x000000ff"]
                                }
                            }
                        }
                    },
                    "pointer": { //Marcador
                        "visible": false,
                        "radius": 66,
                        "borderLine": {
                            "width": [2],
                            "visible": true,
                            "color": ["0x000000ff"],
                            "transparency": [50]
                        },
                        "background": {
                            "fillType": "gradient",
                            "color": ["0x00c876ff", "0xffffffff"]
                        }
                    }
                },
                "axisTwo": {
                    "visible": true,
                    "radius": radius * .85,
                    "startAngle": 90,
                    "endAngle": metaGrados,
                    "startValue": numPrimo ? 1 : 0,
                    "endValue": meta,
                    "majorIntervals": majorInterval,
                    "intervalMarks": {
                        "visible": true,
                        "major": {
                            "visible": true,
                            "placement": "insideAxis",
                            "length": radius * 0.05,
                            "line": { //Lineas grandes que indican los numeros
                                "width": [2],
                                "color": ["0xffffffff"],
                                "transparency": [0]
                            },
                            "labels": {
                                "visible": true,
                                "placement": "insideAxis",
                                "gap": radius * -0.06,
                                "orientationAngle": 0,
                                "font": {
                                    "family": ["Verdana"],
                                    "style": ["normal"],
                                    "size": isIOS() ? [radius * 0.12] : [radius * 0.18],
                                    "transparency": [0],
                                    "color": ["0xffffffff"]
                                }
                            }
                        },
                        "minor": {
                            "visible": false
                        }
                    },
                    "pointer": {
                        "visible": false,
                        "radius": 50,
                        "border": {
                            "line": {
                                "color": ["0xff00ffff"],
                                "transparency": [30],
                                "width": [2]
                            }
                        },
                        "background": {
                            "transparency": 40,
                            "color": ["0xff00ffff"]
                        }
                    },
                    "lineWidth": 1,
                    "lineTransparency": 0,
                    "lineColors": [{
                        "fromAngle": 30,
                        "toAngle": 330,
                        "color": ["0xffffffff"]
                    }]
                }
            }
        },
        "chartData": {
            "columnNames": {
                "values": ["Amount1", "Amount2"]
            },
            "data": {
                "Amount1": [20],
                "Amount2": [70]
            },
            "rowNames": {
                "values": ["aaa"]
            }
        }
    };
    return chartJSObj;
}

function encontrarDivisor(num) {
    if (num % 10 == 0) {
        if (num == 10) {
            return 1;
        }
        return 10
    } else {
        var maxDiv = 1;
        for (var i = 2; i < num; i++) {
            maxDiv = num % i == 0 ? i : maxDiv;
        }

        return maxDiv;
    }
}