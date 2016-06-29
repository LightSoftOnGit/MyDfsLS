function addWidgetsloginTerminosCondiciones() {
    loginTerminosCondiciones.setDefaultUnit(kony.flex.DP);
    var bgTermsAndConditions = new kony.ui.Image2({
        "bottom": "0px",
        "centerX": "50%",
        "height": "100%",
        "id": "bgTermsAndConditions",
        "isVisible": true,
        "left": "0px",
        "right": "0px",
        "src": "bgmercedez.png",
        "top": "0px",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var imgLogo = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "4.86%",
        "height": "7.50%",
        "id": "imgLogo",
        "isVisible": true,
        "left": "0%",
        "src": "mymbflogo.png",
        "top": "10dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblTitle = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "15%",
        "height": "5%",
        "id": "lblTitle",
        "isVisible": true,
        "left": "0dp",
        "maxHeight": "20",
        "maxWidth": "700px",
        "minHeight": "10",
        "minWidth": "500px",
        "text": "Terminos y Condiciones",
        "top": "95dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var btnAceptar = new kony.ui.Button({
        "bottom": "0",
        "height": "7.50%",
        "id": "btnAceptar",
        "isVisible": true,
        "right": "0",
        "text": "Aceptar",
        "width": "50%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var FlexScrollContainer028cd3de0354244 = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": true,
        "allowVerticalBounce": true,
        "bounces": true,
        "centerX": "50%",
        "enableScrolling": true,
        "height": "65%",
        "horizontalScrollIndicator": true,
        "id": "FlexScrollContainer028cd3de0354244",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "pagingEnabled": false,
        "scrollDirection": kony.flex.SCROLL_HORIZONTAL,
        "top": "25%",
        "verticalScrollIndicator": true,
        "width": "92%",
        "zIndex": 3
    }, {}, {});
    FlexScrollContainer028cd3de0354244.setDefaultUnit(kony.flex.DP);
    var richTextTxt = new kony.ui.RichText({
        "bottom": "0.34%",
        "centerX": "50.0%",
        "height": "99.66%",
        "id": "richTextTxt",
        "isVisible": true,
        "text": "<div><p style=\"margin-bottom: 0.14in; line-height: 115%;\" align=\"center\"><span style=\"font-family: CorpoS,serif;\"><span style=\"font-size: medium;\"><span lang=\"es-MX\"><strong>Aviso de Privacidad, T&eacute;rminos y Condiciones</strong></span></span></span></p> <p style=\"margin-bottom: 0.14in; line-height: 115%;\" align=\"center\">&nbsp;</p> <p style=\"margin-top: 0.03in; margin-bottom: 0.03in; line-height: 100%;\" align=\"justify\"><span style=\"font-family: CorpoS,serif;\"><span style=\"font-size: small;\"><span lang=\"es-MX\">POR FAVOR LEA CUIDADOSAMENTE ESTOS T&Eacute;RMINOS Y CONDICIONES </span></span></span></p> <p style=\"margin-top: 0.03in; margin-bottom: 0.03in; line-height: 100%;\" align=\"justify\">&nbsp;</p> <p style=\"margin-top: 0.03in; margin-bottom: 0.03in; line-height: 100%;\" align=\"justify\">&nbsp;</p> <p style=\"margin-top: 0.03in; margin-bottom: 0.03in; line-height: 100%;\" align=\"justify\"><span style=\"color: #003366;\"><span style=\"font-family: CorpoS,serif;\"><span style=\"font-size: small;\"><span lang=\"es-MX\">T&Eacute;RMINOS Y CONDICIONES DE USO: </span></span></span></span></p> <p style=\"margin-top: 0.03in; margin-bottom: 0.03in; line-height: 100%;\" align=\"justify\">&nbsp;</p> <p style=\"margin-top: 0.03in; margin-bottom: 0.03in; line-height: 100%;\" align=\"justify\">&nbsp;</p> <p style=\"margin-top: 0.03in; margin-bottom: 0.03in; line-height: 100%;\" align=\"justify\"><span style=\"font-family: CorpoS,serif;\"><span style=\"font-size: small;\"><span lang=\"es-MX\"><strong>Derechos de Autor y Marcas Registradas.</strong></span></span></span></p> <p style=\"margin-top: 0.03in; margin-bottom: 0.03in; line-height: 100%;\" align=\"justify\">&nbsp;</p> <p style=\"margin-top: 0.03in; margin-bottom: 0.03in; line-height: 100%;\" align=\"justify\"><span style=\"font-family: CorpoS,serif;\"><span style=\"font-size: small;\"><span lang=\"es-MX\">Derechos Registrados. Daimler Financial Services M&eacute;xico, S. de R.L. de C.V. y/o Daimler Financial Services, S.A. de C.V., SOFOM, ENR (\"Daimler Financial\") Derechos Reservados. El texto, im&aacute;genes, gr&aacute;ficas, archivos de sonido, archivos de animaci&oacute;n, archivos de video, &iacute;conos, descargas digitales, compilaciones de informaci&oacute;n y su colocaci&oacute;n en la presente aplicaci&oacute;n, as&iacute; como en los sitios de Internet de Daimler Financial est&aacute;n sujetos a las leyes sobre derechos de autor y propiedad intelectual mexicanas e internacionales y son propiedad de Daimler Financial o sus afiliadas. A menos que se especifique lo contrario, todas las marcas a que se hace referencia en los sitios de Internet, incluyendo especialmente los nombres de los modelos de autom&oacute;viles, veh&iacute;culos comerciales, logotipos y emblemas, son propiedad de Daimler AG.</span></span></span></p> <p style=\"margin-top: 0.03in; margin-bottom: 0.03in; line-height: 100%;\" align=\"justify\">&nbsp;</p> <p style=\"margin-top: 0.03in; margin-bottom: 0.03in; line-height: 100%;\" align=\"justify\"><span style=\"font-family: CorpoS,serif;\"><span style=\"font-size: small;\"><span lang=\"es-MX\">Los conceptos antes mencionados no pueden ser copiados o insertados en otras aplicaciones o sitios de Internet para fines comerciales o de distribuci&oacute;n, por lo que no podr&aacute;n ser modificados o colocados en otras aplicaciones o sitios. Algunos contenidos de esta aplicaci&oacute;n, as&iacute; como de los sitios de Internet de Daimler Financial se consideran im&aacute;genes que est&aacute;n registradas como derechos de autor de sus afiliadas o proveedores. Los sitios de Internet de Daimler Financial pueden contener igualmente im&aacute;genes cuyos derechos de autor pertenecen a terceras personas. </span></span></span></p> <p style=\"margin-top: 0.03in; margin-bottom: 0.03in; line-height: 100%;\" align=\"justify\">&nbsp;</p> <p style=\"margin-top: 0.03in; margin-bottom: 0.03in; line-height: 100%;\" align=\"justify\"><span style=\"font-family: CorpoS,serif;\"><span style=\"font-size: small;\"><span lang=\"es-MX\">A menos que se indique de otra manera, todas las marcas que se exhiben en esta aplicaci&oacute;n y los sitios de Internet de Daimler Financial est&aacute;n sujetas a los derechos de autor de Daimler Financial Services M&eacute;xico, S. de R.L. de C.V., Daimler Financial Services, S.A. de C.V., S.O.F.O.M., E.N.R. y sus afiliadas, incluyendo las marcas primarias de Daimler (Mercedes-Benz, Sterling, Sprinter, Freightliner y smart), el nombre de sus modelos y sus logos corporativos y emblemas.</span></span></span></p> <p style=\"margin-top: 0.03in; margin-bottom: 0.03in; line-height: 100%;\" align=\"justify\">&nbsp;</p> <p style=\"margin-top: 0.03in; margin-bottom: 0.03in; line-height: 100%;\" align=\"justify\"><span style=\"font-family: CorpoS,serif;\"><span style=\"font-size: small;\"><strong>Licencias </strong></span></span></p> <p style=\"margin-top: 0.03in; margin-bottom: 0.03in; line-height: 100%;\" align=\"justify\">&nbsp;</p> <p style=\"margin-top: 0.03in; margin-bottom: 0.03in; line-height: 100%;\" align=\"justify\"><span style=\"font-family: CorpoS,serif;\"><span style=\"font-size: small;\"><span lang=\"es-MX\">El acceso a esta aplicaci&oacute;n, as&iacute; como a los sitios de Internet de Daimler Financial y su contenido no otorga derecho, concesi&oacute;n o licencia algunos sobre la propiedad intelectual relativa a la marcas contenidas en el mismo pertenecientes a Daimler AG, Daimler Financial Services M&eacute;xico, S. de R.L. de C.V., Daimler Financial Services, S.A. de C.V., S.O.F.O.M., E.N.R. o sus afiliadas y en ning&uacute;n caso ser&aacute; tomado como posibilidad para alcanzar tal derecho, concesi&oacute;n o licencia.</span></span></span></p> <p style=\"margin-top: 0.03in; margin-bottom: 0.03in; line-height: 100%;\" align=\"justify\">&nbsp;</p> <p style=\"margin-top: 0.03in; margin-bottom: 0.03in; line-height: 100%;\" align=\"justify\"><span style=\"font-family: CorpoS,serif;\"><span style=\"font-size: small;\"><span lang=\"es-MX\"><strong>Enlaces a otros Sitios</strong></span></span></span></p> <p style=\"margin-top: 0.03in; margin-bottom: 0.03in; line-height: 100%;\" align=\"justify\">&nbsp;</p> <p style=\"margin-top: 0.03in; margin-bottom: 0.03in; line-height: 100%;\" align=\"justify\"><span style=\"font-family: CorpoS,serif;\"><span style=\"font-size: small;\"><span lang=\"es-MX\">Esta aplicaci&oacute;n puede proporcionar enlaces a otros sitios de Internet; estos sitios no son administrados ni controlados por Daimler Financial. Adicionalmente, esta aplicaci&oacute;n puede proporcionar enlaces a sitios de Internet de otras entidades afiliadas de Daimler Financial. Daimler Financial no es responsable del contenido de dichos sitios. En adici&oacute;n a los presentes t&eacute;rminos y condiciones, el uso de su parte de cualquier sitio de Internet que no sea controlado o administrado por Daimler Financial estar&aacute; sujeto a los t&eacute;rminos y condiciones determinados en dicho sitio de Internet.</span></span></span></p> <p style=\"margin-top: 0.03in; margin-bottom: 0.03in; line-height: 100%;\" align=\"justify\">&nbsp;</p> <p style=\"margin-top: 0.03in; margin-bottom: 0.03in; line-height: 100%;\" align=\"justify\"><span style=\"font-family: CorpoS,serif;\"><span style=\"font-size: small;\"><span lang=\"es-MX\">Si usted decide visitar alguno de los enlaces, lo hace bajo su propio riesgo y es su responsabilidad el tomar medidas de protecci&oacute;n para protegerse en contra de virus y otros programas destructivos. Daimler Financial no garantiza o representa a ninguno de los sitios de Internet cuyo enlace se encuentre en esta aplicaci&oacute;n, ni la informaci&oacute;n que aparezca en los mismos o ninguno de los productos o servicios descritos en dichos enlaces.</span></span></span></p> <p style=\"margin-top: 0.03in; margin-bottom: 0.03in; line-height: 100%;\" align=\"justify\">&nbsp;</p> <p style=\"margin-top: 0.03in; margin-bottom: 0.03in; line-height: 100%;\" align=\"justify\"><span style=\"font-family: CorpoS,serif;\"><span style=\"font-size: small;\"><strong>Productos</strong></span></span></p> <p style=\"margin-top: 0.03in; margin-bottom: 0.03in; line-height: 100%;\" align=\"justify\">&nbsp;</p> <p style=\"margin-top: 0.03in; margin-bottom: 0.03in; line-height: 100%;\" align=\"justify\"><span style=\"font-family: CorpoS,serif;\"><span style=\"font-size: small;\"><span lang=\"es-MX\">La informaci&oacute;n, ilustraciones e im&aacute;genes de producto que contiene esta aplicaci&oacute;n, as&iacute; como los sitios de Internet de Daimler Financial pueden haber sido preparadas para uso gen&eacute;rico; por esta raz&oacute;n, el contenido de esta aplicaci&oacute;n, as&iacute; como de los sitios web puede incluir informaci&oacute;n sobre modelos, costos, versiones y/o accesorios no disponibles en M&eacute;xico, y que en otros pa&iacute;ses se ofrecen por razones de demanda local o de disposiciones legales existentes en ellos, estando solamente disponibles con otras especificaciones o configuraciones, y que en M&eacute;xico, por esas mismas razones locales o legales, solamente se encuentran disponibles con otras especificaciones o configuraciones distintas de aquellas. Si est&aacute; interesado en alg&uacute;n veh&iacute;culo, modelo, pintura, equipamiento opcional o accesorio mostrado en esta aplicaci&oacute;n o en los sitios de Daimler Financial, y no est&aacute; seguro de su disponibilidad, o sobre su especificaci&oacute;n en el mercado local, por favor contacte al distribuidor de su elecci&oacute;n.</span></span></span></p> <p style=\"margin-top: 0.03in; margin-bottom: 0.03in; line-height: 100%;\" align=\"justify\">&nbsp;</p> <p style=\"margin-top: 0.03in; margin-bottom: 0.03in; line-height: 100%;\" align=\"justify\"><span style=\"font-family: CorpoS,serif;\"><span style=\"font-size: small;\"><strong>Precauciones</strong></span></span></p> <p style=\"margin-top: 0.03in; margin-bottom: 0.03in; line-height: 100%;\" align=\"justify\">&nbsp;</p> <p style=\"margin-top: 0.03in; margin-bottom: 0.03in; line-height: 100%;\" align=\"justify\"><span style=\"font-family: CorpoS,serif;\"><span style=\"font-size: small;\"><span lang=\"es-MX\">Esta aplicaci&oacute;n, as&iacute; como los sitios de Internet, archivos de audio y v&iacute;deo de eventos (en vivo o grabados) y otros documentos en esta aplicaci&oacute;n, as&iacute; como en el sitio de Internet de Daimler Financial contienen entre otras cosas, declaraciones a futuro en lo que concierne a futuros eventos o acontecimientos. Los t&eacute;rminos \"anticipar\", \"asumir\", \"creer\", \"estimar\", \"esperar\", \"tener la intenci&oacute;n\", \"poder\", \"planear\", \"proyectar\" y \"deber\" as&iacute; como expresiones similares, identifican declaraciones a futuro. Tales declaraciones est&aacute;n sujetas a riesgos e incertidumbres, incluyendo, pero no limitando: cambios de precio por cambio de divisas, comisiones y tasas de intereses.</span></span></span></p> <p style=\"margin-top: 0.03in; margin-bottom: 0.03in; line-height: 100%;\" align=\"justify\">&nbsp;</p> <p style=\"margin-top: 0.03in; margin-bottom: 0.03in; line-height: 100%;\" align=\"justify\"><span style=\"font-family: CorpoS,serif;\"><span style=\"font-size: small;\"><strong>Garant&iacute;a de contenido</strong></span></span></p> <p style=\"margin-top: 0.03in; margin-bottom: 0.03in; line-height: 100%;\" align=\"justify\">&nbsp;</p> <p style=\"margin-top: 0.03in; margin-bottom: 0.03in; line-height: 100%;\" align=\"justify\"><span style=\"font-family: CorpoS,serif;\"><span style=\"font-size: small;\"><span lang=\"es-MX\">Toda la informaci&oacute;n facilitada por Daimler Financial en esta aplicaci&oacute;n, se ofrece como informaci&oacute;n de orientaci&oacute;n, lo m&aacute;s precisa y actual posible, pero sin ning&uacute;n tipo de garant&iacute;a, ya sea impl&iacute;cita o expl&iacute;cita. En especial no constituyen un compromiso o garant&iacute;a t&aacute;cita acerca de la composici&oacute;n o disponibilidad de productos, la idoneidad para determinados usos o el cumplimiento de leyes y la observancia de patentes. Aun considerando en principio el contenido publicado como correcto, &eacute;ste podr&iacute;a contener errores o imprecisiones, por lo que se sugiere contactar al distribuidor de su elecci&oacute;n o a Daimler Financial.</span></span></span></p> <p style=\"margin-top: 0.03in; margin-bottom: 0.03in; line-height: 100%;\" align=\"justify\">&nbsp;</p> <p style=\"margin-top: 0.03in; margin-bottom: 0.03in; line-height: 100%;\" align=\"justify\"><span style=\"font-family: CorpoS,serif;\"><span style=\"font-size: small;\"><span lang=\"es-MX\">La informaci&oacute;n contenida en las condiciones de productos financieros puede estar sujeta a cambio en cualquier momento, sin previa notificaci&oacute;n, incluyendo tipos de inter&eacute;s indicativos, comisiones, condiciones ofertadas, pagos (o cuotas) estimadas, tasas y otros gastos, de los que no se da informaci&oacute;n en esta aplicaci&oacute;n. Si est&aacute; interesado en alg&uacute;n producto financiero deber&aacute; contactar al distribuidor de su elecci&oacute;n o a Daimler Financial, para obtener la confirmaci&oacute;n de los detalles. La concesi&oacute;n de financiamiento estar&aacute; sujeta a aprobaci&oacute;n mediante el proceso usual de an&aacute;lisis crediticio. Los detalles suministrados en esta aplicaci&oacute;n no representan, y no deber&aacute;n ser interpretados, como una oferta u obligaci&oacute;n de financiamiento en los t&eacute;rminos y las condiciones que aparecen, que, repetimos, deber&aacute;n consultarse espec&iacute;ficamente.</span></span></span></p> <p style=\"margin-top: 0.03in; margin-bottom: 0.03in; line-height: 100%;\" align=\"justify\">&nbsp;</p> <p style=\"margin-top: 0.03in; margin-bottom: 0.03in; line-height: 100%;\" align=\"justify\"><span style=\"font-family: CorpoS,serif;\"><span style=\"font-size: small;\"><strong>Seguridad de la Informaci&oacute;n.</strong></span></span></p> <p style=\"margin-top: 0.03in; margin-bottom: 0.03in; line-height: 100%;\" align=\"justify\">&nbsp;</p> <p style=\"margin-top: 0.03in; margin-bottom: 0.03in; line-height: 100%;\" align=\"justify\"><span style=\"font-family: CorpoS,serif;\"><span style=\"font-size: small;\"><span lang=\"es-MX\">Daimler Financial, sus empresas filiales, subsidiarias y sus afiliadas, as&iacute; como cualquier empresa del Grupo Daimler, toman las medidas t&eacute;cnicas y administrativas adecuadas para proteger su informaci&oacute;n personal, recabada para acceder a la presente aplicaci&oacute;n contra la manipulaci&oacute;n casual o deliberada, la p&eacute;rdida o la destrucci&oacute;n, as&iacute; como contra el acceso por parte de personas no autorizadas. Estas medidas de seguridad se optimizan continuamente de conformidad con el desarrollo t&eacute;cnico.</span></span></span></p> <p style=\"margin-top: 0.03in; margin-bottom: 0.03in; line-height: 100%;\" align=\"justify\">&nbsp;</p> <p style=\"margin-top: 0.03in; margin-bottom: 0.03in; line-height: 100%;\" align=\"justify\"><span style=\"font-family: CorpoS,serif;\"><span style=\"font-size: small;\"><span lang=\"es-MX\"><strong>Uso de ubicaci&oacute;n.</strong></span></span></span></p> <p style=\"margin-top: 0.03in; margin-bottom: 0.03in; line-height: 100%;\" align=\"justify\">&nbsp;</p> <p style=\"margin-top: 0.03in; margin-bottom: 0.03in; line-height: 100%;\" align=\"justify\"><span style=\"font-family: CorpoS,serif;\"><span style=\"font-size: small;\"><span lang=\"es-MX\">Esta aplicaci&oacute;n podr&aacute; acceder a su ubicaci&oacute;n &uacute;nicamente con su consentimiento, a trav&eacute;s de herramientas de geolocalizaci&oacute;n, con la finalidad de poder proveerle informaci&oacute;n relacionada con los distribuidores autorizados de Daimler Financial, estaciones de servicio, entre otras locaciones cercanas a ustedes. El usuario de esta aplicaci&oacute;n en cualquier momento podr&aacute; desactivar el sistema de geolocalizaci&oacute;n en la herramienta destinada para este fin.</span></span></span></p> <p style=\"margin-top: 0.03in; margin-bottom: 0.03in; line-height: 100%;\" align=\"justify\">&nbsp;</p> <p style=\"margin-top: 0.03in; margin-bottom: 0.03in; line-height: 100%;\" align=\"justify\"><span style=\"font-family: CorpoS,serif;\"><span style=\"font-size: small;\"><span lang=\"es-MX\"><strong>Aviso de Privacidad y Recopilaci&oacute;n de Datos Personales.</strong></span></span></span></p> <p style=\"margin-top: 0.03in; margin-bottom: 0.03in; line-height: 100%;\" align=\"justify\">&nbsp;</p> <p style=\"margin-top: 0.03in; margin-bottom: 0.03in; line-height: 100%;\" align=\"justify\"><span style=\"font-family: CorpoS,serif;\"><span style=\"font-size: small;\"><span lang=\"es-MX\">En Daimler Finacial nos enfocamos en la satisfacci&oacute;n de nuestros clientes, ofreciendo los mejores servicios, procesos y planes a la medida, por lo cual Daimler Financial podr&aacute; recopilar, diagnosticar y usar la informaci&oacute;n que provea dentro de la navegaci&oacute;n en la aplicaci&oacute;n para su an&aacute;lisis; dicha informaci&oacute;n podr&aacute; ser utilizada &uacute;nicamente con su consentimiento, por lo cual ponemos a su disposici&oacute;n nuestro Aviso de Privacidad:</span></span></span></p> <p style=\"margin-top: 0.03in; margin-bottom: 0.03in; line-height: 100%;\" align=\"justify\"><a href=\"http://www.daimlerfinancialservices.com.mx/\"><span style=\"font-family: CorpoS,serif;\"><span style=\"font-size: small;\"><span lang=\"es-MX\">www.daimlerfinancialservices.com.mx</span></span></span></a></p> <p style=\"margin-top: 0.03in; margin-bottom: 0.03in; line-height: 100%;\" align=\"justify\">&nbsp;</p> <p style=\"margin-top: 0.03in; margin-bottom: 0.03in; line-height: 100%;\" align=\"justify\"><span style=\"font-family: CorpoS,serif;\"><span style=\"font-size: small;\"><span lang=\"es-MX\">Asimismo Daimler Financial ser&aacute; el encargado de cumplir con las obligaciones establecidas en la Ley Federal de Protecci&oacute;n de Datos Personales en Posesi&oacute;n de Particulares y su reglamento respecto de la informaci&oacute;n o datos personales que sean proporcionados a trav&eacute;s de esta aplicaci&oacute;n, mismos que ser&aacute;n utilizados &uacute;nica y exclusivamente para los fines estipulados en nuestro Aviso de Privacidad. En cualquier momento el titular de los datos personales proporcionados en esta aplicaci&oacute;n, podr&aacute; ejercer los derechos ARCO conforme al proceso descrito en nuestra p&aacute;gina web:</span></span></span></p> <p style=\"margin-top: 0.03in; margin-bottom: 0.03in; line-height: 100%;\" align=\"justify\"><span style=\"font-family: CorpoS,serif;\"><span style=\"font-size: small;\"><span lang=\"es-MX\"><a href=\"http://www.daimlerfinancialservices.com.mx\">www.daimlerfinancialservices.com.mx</a>.<!-- Será necesario habilitar un botón para que el usuario pueda ver nuestro aviso de privacidad integral al dar click sobre el link --> </span></span></span></p> <p lang=\"es-MX\" style=\"margin-top: 0.03in; margin-bottom: 0.03in; line-height: 100%;\" align=\"justify\"><br /><br /></p> <p lang=\"es-MX\" style=\"margin-top: 0.03in; margin-bottom: 0.03in; line-height: 100%;\" align=\"justify\"><br /><br /></p> <p style=\"margin-top: 0.03in; margin-bottom: 0.03in; line-height: 100%;\" align=\"justify\"><span style=\"font-family: CorpoS,serif;\"><span style=\"font-size: small;\"><span lang=\"es-MX\"><strong>Confirmaci&oacute;n</strong></span></span></span></p> <p style=\"margin-top: 0.03in; margin-bottom: 0.03in; line-height: 100%;\" align=\"justify\"><span style=\"font-family: CorpoS,serif;\"><span style=\"font-size: small;\"><span lang=\"es-MX\">Para poder acceder al uso de esta aplicaci&oacute;n usted acepta que </span></span></span><span style=\"font-family: CorpoS,serif;\"><span style=\"font-size: small;\"><span lang=\"es-MX\"><span style=\"text-decoration: underline;\">&ldquo;Ha le&iacute;do y aceptado lo estipulado en el Aviso de Privacidad, as&iacute; como los T&eacute;rminos y Condiciones de Uso&rdquo;</span></span></span></span><span style=\"font-family: CorpoS,serif;\"><span style=\"font-size: small;\"><span lang=\"es-MX\">:</span></span></span></p></div>",
        "top": "0.0%",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "padding": [1, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    FlexScrollContainer028cd3de0354244.add(richTextTxt);
    var richTextTitle = new kony.ui.RichText({
        "centerX": "50%",
        "centerY": "21%",
        "height": "6%",
        "id": "richTextTitle",
        "isVisible": true,
        "text": "Aviso de Privacidad, Términos y Condiciones",
        "width": "92%",
        "zIndex": 2
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [3, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var btnCancelar = new kony.ui.Button({
        "bottom": "0",
        "height": "7.50%",
        "id": "btnCancelar",
        "isVisible": true,
        "left": "0dp",
        "onClick": p2kwiet19724036342303_btnCancelar_onClick_seq0,
        "text": "Cancelar",
        "width": "50%",
        "zIndex": 3
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    loginTerminosCondiciones.add(bgTermsAndConditions, imgLogo, lblTitle, btnAceptar, FlexScrollContainer028cd3de0354244, richTextTitle, btnCancelar);
};

function loginTerminosCondicionesGlobals() {
    loginTerminosCondiciones = new kony.ui.Form2({
        "addWidgets": addWidgetsloginTerminosCondiciones,
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "bounces": false,
        "enableScrolling": false,
        "enabledForIdleTimeout": false,
        "horizontalScrollIndicator": true,
        "id": "loginTerminosCondiciones",
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
        "footerOverlap": false,
        "headerOverlap": false,
        "inTransitionConfig": {
            "formAnimation": 0
        },
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
        "onDeviceBack": p2kwiet19724036342303_loginTerminosCondiciones_Android_onDeviceBack_seq0,
        "outTransitionConfig": {
            "formAnimation": 0
        },
        "retainScrollPosition": false,
        "showActionBar": true,
        "showActionBarIcon": true,
        "titleBar": true,
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE
    });
    loginTerminosCondiciones.info = {
        "kuid": "p2kwiet19724036342303"
    };
};