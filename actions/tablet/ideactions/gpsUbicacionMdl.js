function gpsVerMapa() {
	var latitud  = kony.application.getCurrentForm().smgtoOpciones.selectedItems[0].lblLatitud;
    var longitud = kony.application.getCurrentForm().smgtoOpciones.selectedItems[0].lblLongitud;
    var latitudDestino = kony.application.getCurrentForm().smgtoOpciones.selectedItems[0].lblLatitudDestino;
    var longitudDestino = kony.application.getCurrentForm().smgtoOpciones.selectedItems[0].lblLongitudDestino;
    
	var drctnUrl;
	kony.print(kony.os.deviceInfo().name);
	if(kony.os.deviceInfo().name=="iPhone"||kony.os.deviceInfo().name=="iPad"||kony.os.deviceInfo().name=="iPhone Simulator"||kony.os.deviceInfo().name=="iPad Simulator")
		drctnUrl="https://maps.apple.com?saddr="+latitud+","+longitud+"&daddr="+latitudDestino+","+longitudDestino;
	else if(kony.os.deviceInfo().name=="android")
		drctnUrl="https://maps.google.com/maps?saddr="+latitud+","+longitud+"&daddr="+latitudDestino+","+longitudDestino;
	else if(kony.os.deviceInfo().name=="WindowsPhone"|| kony.os.deviceInfo().name=="Windows"){
		drctnUrl="https://map.bing.com/maps/default.aspx?v=2&rtp=pos."+latitud+"_"+longitud+"~pos."+latitudDestino+"_"+longitudDestino+"&rtop=0~1~0";
	}
	else{
		drctnUrl="https://maps.apple.com?saddr="+latitud+","+longitud+"&daddr="+latitudDestino+","+longitudDestino;
		drctnUrl="https://maps.google.com/maps?saddr="+latitud+","+longitud+"&daddr="+latitudDestino+","+longitudDestino;
	}
	kony.print(drctnUrl);
	kony.application.openURL(drctnUrl);   
}
function gpsVerPaginaWeb(){
	var paginaWeb= kony.application.getCurrentForm().smgtoOpciones.selectedItems[0].lblPaginaWeb;
	if(paginaWeb!=null){
		var protocolo="http://"
		if(paginaWeb.indexOf(protocolo)>-1)
			kony.application.openURL(paginaWeb);
		else
			kony.application.openURL("http://"+paginaWeb);
	}
	else{
		alert(kony.i18n.getLocalizedString("103"));
	}
}
function gpsLlamadaTelefono(){
	try{
		var telefonoTemp= kony.application.getCurrentForm().smgtoOpciones.selectedItems[0].lblTelefono;
		var telefono=telefonoTemp.replace(/\D/g,'');
		kony.phone.dial(telefono);
	} 
	catch(err){
		//alert("llamada:: "+kony.application.getCurrentForm().smgtoOpciones.selectedItems[0].lblTelefono);
		alert("Error al ejecutar llamada:: "+err);
		alert(kony.i18n.getLocalizedString("110"));
	}
}
function gpsVerPopUpMenu(){
	var llamada=kony.store.getItem("distribuidorEstado");
	
	if(llamada!=null && llamada!=undefined && llamada==true){
		kony.store.removeItem("distribuidorEstado");  //*********  Aqui se vacia el Store 
		var distribuidorTemporal = [];
		distribuidorTemporal.push({
                "nombre": kony.application.getCurrentForm().smgtoOpciones.selectedItems[0].lblNombre,
                "calle": kony.application.getCurrentForm().smgtoOpciones.selectedItems[0].lblCalle,
                "plaza": kony.application.getCurrentForm().smgtoOpciones.selectedItems[0].lblPlaza,
                "telefono": kony.application.getCurrentForm().smgtoOpciones.selectedItems[0].lblTelefono,                
                "email": kony.application.getCurrentForm().smgtoOpciones.selectedItems[0].lblEmail,
                "id": kony.application.getCurrentForm().smgtoOpciones.selectedItems[0].lblId              			
            })
       
        kony.store.setItem("distribuidorSeleccionado", distribuidorTemporal);           
        kony.store.setItem("nombreDistribuidorEnvio",kony.application.getCurrentForm().smgtoOpciones.selectedItems[0].lblNombre);
		kony.store.setItem("calleDistribuidorEnvio", kony.application.getCurrentForm().smgtoOpciones.selectedItems[0].lblCalle);
		kony.store.setItem("plazaDistribuidorEnvio", kony.application.getCurrentForm().smgtoOpciones.selectedItems[0].lblPlaza);
		kony.store.setItem("telefonoDistribuidorEnvio",kony.application.getCurrentForm().smgtoOpciones.selectedItems[0].lblTelefono);
		kony.store.setItem("emailDistribuidorEnvio",kony.application.getCurrentForm().smgtoOpciones.selectedItems[0].lblEmail);
        //cotizadorEnviar2.show();
		showFrm(cotizadorEnviar2);
	}
	else{
		alert("Error al regresar a cotizador");
	}	
}
