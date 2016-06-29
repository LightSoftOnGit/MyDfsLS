function addWidgetsfrmContratoInfo() {
    frmContratoInfo.setDefaultUnit(kony.flex.DP);
    var flexMain = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "100%",
        "id": "flexMain",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "top": "-5%",
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
    var FlexContainer06dac3d6e69bc4b = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "33%",
        "id": "FlexContainer06dac3d6e69bc4b",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "1dp",
        "skin": "slFbox",
        "top": "8%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    FlexContainer06dac3d6e69bc4b.setDefaultUnit(kony.flex.DP);
    var Image017ce0ef1eab642 = new kony.ui.Image2({
        "height": "100%",
        "id": "Image017ce0ef1eab642",
        "isVisible": true,
        "left": "0dp",
        "src": "imgsilueta.png",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
    });
    var Label0a752db830f0a44 = new kony.ui.Label({
        "centerX": "50%",
        "height": "15%",
        "id": "Label0a752db830f0a44",
        "isVisible": true,
        "skin": "lblTitleFlexibility",
        "text": "Opciones Mercedes-Benz al Finalizar",
        "top": "65%",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    FlexContainer06dac3d6e69bc4b.add(Image017ce0ef1eab642, Label0a752db830f0a44);
    var FlexContainer04c36aae01f1341 = new kony.ui.FlexContainer({
        "centerX": "50%",
        "clipBounds": true,
        "height": "60%",
        "id": "FlexContainer04c36aae01f1341",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "top": "41%",
        "width": "94%",
        "zIndex": 1
    }, {}, {});
    FlexContainer04c36aae01f1341.setDefaultUnit(kony.flex.DP);
    var FlexScrollContainer0300a2b969fc54c = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": true,
        "allowVerticalBounce": true,
        "bounces": true,
        "centerX": "50%",
        "enableScrolling": true,
        "height": "100%",
        "horizontalScrollIndicator": true,
        "id": "FlexScrollContainer0300a2b969fc54c",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "pagingEnabled": false,
        "scrollDirection": kony.flex.SCROLL_VERTICAL,
        "top": "17%",
        "verticalScrollIndicator": true,
        "width": "100%",
        "zIndex": 1
    }, {}, {
        "bouncesZoom": true,
        "maxZoomScale": 1,
        "minZoomScale": 1,
        "zoomScale": 1
    });
    FlexScrollContainer0300a2b969fc54c.setDefaultUnit(kony.flex.DP);
    var FlexContainer067bbd90b4e3445 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "150.0%",
        "id": "FlexContainer067bbd90b4e3445",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    FlexContainer067bbd90b4e3445.setDefaultUnit(kony.flex.DP);
    var richTextInfoContrato = new kony.ui.RichText({
        "id": "richTextInfoContrato",
        "isVisible": true,
        "left": "0%",
        "maxHeight": "2000%",
        "skin": "richTextFlexibilityContrato",
        "text": "Estimado Cliente,\n<br>\n<br>\nGracias por haber elegido Flexibility de Mercedes-Benz Financial para adquirir su auto; hasta hoy usted ha disfrutado de su Mercedes-Benz o smart, con grandes beneficios como:\n<br>\n<br>\n-La mensualidad más cómoda del mercado \n<br>\n-Un compromiso a menor plazo que un crédito tradicional\n<br>\n-La seguridad de que el valor de su auto está garantizado por Mercedes-Benz \n<br>\n-3 opciones al finalizar el plazo de su contrato\n<br>\n<br>\nEn los próximos meses su contrato estará llegando al término del plazo, por lo cual, lo invitamos a que acuda a su distribuidor para elegir la opción que más le convenga en la terminación de su contrato:\n<br>\n<br>\n1. Renovarlo\n<br>\n<br>\nEn esta opción el distribuidor deberá valuar su auto. En caso que el valor de su auto en el mercado supere el valor futuro garantizado, el distribuidor ofrecerá  comprar su auto al precio que pacten ambas partes, utilizando el monto correspondiente para liquidar su contrato con MBF y si existe un monto restante, lo podrá utilizar como parte del enganche para su nuevo Mercedes-Benz o smart.\n<br>\n<br>\nEn caso que el valor de su auto en el mercado no supere el valor futuro garantizado, usted no tiene de que  preocuparse, ya que cuenta con un valor mínimo de recompra garantizado por MB; por lo que una valuación de su auto se llevaría a cabo en el distribuidor con el fin de corroborar las condiciones de entrega \nestipuladas en el contrato. Si su auto cubre las condiciones de entrega, el distribuidor lo tomará a cuenta de su deuda restante, por lo cual usted no deberá nada más.\n<br>\n<br>\n2. Devolverlo\n<br>\n<br>\nPara esta opción se utilizará el valor futuro garantizado de su unidad, por lo que una valuación de su auto se llevará a cabo en el distribuidor, con el fin de corroborar las condiciones de entrega estipuladas en el contrato de Flexibility que ha celebrado con Mercedes-Benz Financial.\n<br>\n<br>\nSi su auto cubre las condiciones de entrega, el distribuidor lo tomará a cuenta para liquidar su contrato con Mercedes-Benz Financial, por lo cual usted no deberá nada más.\n<br>\n<br>\n3. Quedárselo\n<br>\n<br>\nEn caso de que ya no se pueda separar de su Mercedes-Benz o smart, podrá liquidar el valor final, ya sea en una sola exhibición o bien, ponemos a su disposición los mejores planes de financiamiento para pagar el saldo restante a través de cómodas mensualidades en un nuevo financiamiento (sujeto a análisis y aprobación de crédito). \n<br>\n<br>\nLo invitamos a acudir a su distribuidor para elegir la opción que mejor se adapte a sus necesidades.\n<br>\n<br>\nPara mayor información acérquese a su distribuidor Mercedes-Benz autorizado o comuníquese a nuestro Centro de Atención a Clientes (clientes.financial@daimler / 01 800 262 66 66) en donde con gusto lo atenderemos.\n<br>\n<br>\nAtentamente,\n<br>\n<br>\nMercedes-Benz Financial",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "padding": [5, 10, 5, 10],
        "paddingInPixel": false
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    FlexContainer067bbd90b4e3445.add(richTextInfoContrato);
    FlexScrollContainer0300a2b969fc54c.add(FlexContainer067bbd90b4e3445);
    var FlexContainer0c5660d40e13f42 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "17%",
        "id": "FlexContainer0c5660d40e13f42",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    FlexContainer0c5660d40e13f42.setDefaultUnit(kony.flex.DP);
    var titleInfoContrato = new kony.ui.Label({
        "height": "100%",
        "id": "titleInfoContrato",
        "isVisible": true,
        "left": "0dp",
        "skin": "lblTitle",
        "text": "Flexibility:",
        "top": "0dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [5, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    FlexContainer0c5660d40e13f42.add(titleInfoContrato);
    FlexContainer04c36aae01f1341.add(FlexScrollContainer0300a2b969fc54c, FlexContainer0c5660d40e13f42);
    var btnBack = new kony.ui.Button({
        "height": "4%",
        "id": "btnBack",
        "isVisible": true,
        "left": "10%",
        "onClick": p2kwiet19724036341875_btnBack_onClick_seq0,
        "skin": "btnBack",
        "top": "12%",
        "width": "4%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    flexContent.add(FlexContainer06dac3d6e69bc4b, FlexContainer04c36aae01f1341, btnBack);
    flexMain.add(flexContent);
    frmContratoInfo.add(flexMain);
};

function frmContratoInfoGlobals() {
    frmContratoInfo = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmContratoInfo,
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "bounces": false,
        "enableScrolling": false,
        "enabledForIdleTimeout": false,
        "footers": [FlexContainer099041029e4bc45],
        "headers": [CopyFlexContainer09da0f5890f1a44],
        "horizontalScrollIndicator": true,
        "id": "frmContratoInfo",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "pagingEnabled": false,
        "skin": "flexContainerTerminos",
        "verticalScrollIndicator": true
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "bounces": false,
        "configureExtendBottom": false,
        "configureExtendTop": false,
        "configureStatusBarStyle": false,
        "footerOverlap": false,
        "formTransparencyDuringPostShow": "100",
        "headerOverlap": false,
        "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_DEFAULT,
        "inTransitionConfig": {
            "transitionDirection": "none",
            "transitionEffect": "none"
        },
        "maxZoomScale": 1,
        "minZoomScale": 1,
        "needsIndicatorDuringPostShow": false,
        "outTransitionConfig": {
            "transitionDirection": "none",
            "transitionEffect": "none"
        },
        "retainScrollPosition": false,
        "titleBar": false,
        "zoomScale": 1
    });
    frmContratoInfo.info = {
        "kuid": "p2kwiet19724036341875"
    };
};