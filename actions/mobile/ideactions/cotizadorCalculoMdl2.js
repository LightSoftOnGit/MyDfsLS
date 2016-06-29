function cotizadorCalculo2_init(){
	cotizadorCalculo2.lblClase.text=kony.store.getItem("lblClaseSeleccionada");	
	incializarControlesCalculo2();
}
function backCotizadorCalculo(){
	var form= kony.application.getPreviousForm();
	//cambiar por frmShow()
	form.show();
}

function limpiarControlesCalculo2(){
	try{
		cotizadorCalculo2.txtEngancheSeleccionado.text="";
		cotizadorCalculo2.txtPrecio.text="";
		cotizadorCalculo2.lbEstados.selectedKey="1"
		cotizadorCalculo2.radioPersona.selectedKey='0';
	} catch(err){
	
	}
}

function incializarControlesCalculo2(){
	cotizadorCalculo2.sliderPlazos.max=8;
	cotizadorCalculo2.sliderPlazos.min=2;
	cotizadorCalculo2.sliderPlazos.step=2;
	cotizadorCalculo2.radioPersona.selectedKey='0';
	cotizadorCalculo2.lblPlan.text=kony.store.getItem('descripcionPlanSeleccionado').toString().trim();	
}

function cargarPlazos2(){ 		
	var idPlan = kony.store.getItem('idPlanSeleccionado');	
	var inputparam = {};
 	inputparam["serviceID"] = "obtenerPlazos"; 
 	inputparam["idPlan"] = idPlan.toString(); 		
 	inputparam["tipoPlazo"] =""; 
 	inputparam["httpconfig"] = {timeout:30};		 
 	appmiddlewareinvokerasync(inputparam,cargarPlazos2Callback);	
 			
}


function cargarDatosParaCalculo2(){
	var cotizacionEnCurso = kony.store.getItem("cotizacionEnCurso");
	cotizadorCalculo2.lblClase.text=kony.store.getItem("lblClaseSeleccionada");	
	cotizadorCalculo2.lblPlan.text=kony.store.getItem('descripcionPlanSeleccionado').toString().trim();
	if(cotizacionEnCurso!=null && cotizacionEnCurso==false){
 		var pForm= kony.application.getPreviousForm(); 		
 		if (pForm.id != 'frmInformacion'){ 
			kony.application.showLoadingScreen("sknLblLoading", "Cargando...", constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true,{shouldShowLabelInBottom: true, seperatorHeight: 30});
			cargarEstadosCotizacion();		
			cargarPrecioUnidad2();
			cargarPlazos2();
		}
	}
}

function validarParametrosCalculo2(){
	var respuesta=(cotizadorCalculo2.lbEstados.masterData!=null && cotizadorCalculo2.lbEstados.masterData!=undefined 
				&& cotizadorCalculo2.lbEstados.masterData.length==32 && cotizadorCalculo2.sliderPlazos.min!=2 
				&&  cotizadorCalculo2.txtPrecio.text.length == 0 );
	if(respuesta==true){
		alert("Capture un precio válido por favor");
		return false;
	}
	
	respuesta=(cotizadorCalculo2.lbEstados.masterData!=null && cotizadorCalculo2.lbEstados.masterData!=undefined 
				&& cotizadorCalculo2.lbEstados.masterData.length==32 && cotizadorCalculo2.txtPrecio.text != null 
				&& cotizadorCalculo2.txtPrecio.text != undefined && cotizadorCalculo2.txtPrecio.text.length > 0 && 
				cotizadorCalculo2.sliderPlazos.min!=2);
	
	return respuesta;
}


function obtenerCotizacion2(){
	if(!validarParametrosCalculo2()){
		return; 
	}	
		
	var textoEnganche = cotizadorCalculo2.txtEngancheSeleccionado.text.toString();
	
	if(isNaN(textoEnganche) || textoEnganche.length==0){
		alert("Introduzca un enganche válido por favor");
		return;
	}
	try{
		validarTextoEnganche(textoEnganche);
	} catch(err){
		//alert(err.message);
	}
	var bloquear=kony.store.getItem("bloquearCotizacion");
	
	if(bloquear != null && bloquear != undefined &&  bloquear ==true){
		kony.store.removeItem("bloquearCotizacion");
		return;
	}
	
	var texto=cotizadorCalculo2.txtPrecio.text;
	
	if(texto==''){
		texto='0';
	}
	texto=texto.replaceAll('$', '');	
	texto=texto.replaceAll("'", '');
	texto=texto.replaceAll(',', '')
	
	if(isNaN(texto)){
		alert("Introduzca un precio valido por favor");
	}else{
		var precio = parseFloat(texto);		
		var precioMaximo=kony.store.getItem("preciomaximo");
		var precioMinimo=kony.store.getItem("preciominimo");
		var sPrecioMaximo=kony.store.getItem("spreciomaximo");
		var sPrecioMinimo=kony.store.getItem("spreciominimo");				
		if(precioMinimo>precio){
			alert("El precio minimo de la unidad es: "+sPrecioMinimo);
			cotizadorCalculo2.txtPrecio.text=kony.os.toCurrency(parseFloat(precioMinimo));
		} else if(precioMaximo<precio){
			alert("El precio maximo de la unidad es: "+sPrecioMaximo);
			cotizadorCalculo2.txtPrecio.text=kony.os.toCurrency(parseFloat(precioMaximo));
		} else  {
			cotizadorCalculo2.txtPrecio.text=kony.os.toCurrency(parseFloat(texto));
			//cambiar por frmShow()
			//cotizadorCotizacion2.show();
			showFrm(cotizadorCotizacion2);			
		}
		
	}
}

function cargarPlazos2Callback(status, result){
	
	if (result.errmsg != undefined) {		
		alert('No fue posible recuperar los Plazos, verifique su connexión a intenet y vuelva  a intentarlo mas tarde por favor.');
		kony.application.dismissLoadingScreen();
		//cambiar por frmShow(),
		//inicio.show();
		showFrm(inicio);
	} else { 					
			if (result.codigo != null && result.codigo != undefined &&  result.codigo == 1) { 		
				if (result.lstPlazos != undefined && result.lstPlazos.length>0) {						
					kony.store.setItem('lstPlazos', result.lstPlazos);						
					var esPlanAlternativo=kony.store.getItem('esPlanAlternativo'); 	
 					//alert(result.lstPlazos);
 					//alert(esPlanAlternativo);
				 	if(esPlanAlternativo.toString()=='true' || validarPlazosArrendamientoPuro(result.lstPlazos)){
				 		cargarSliderPlazosFlex();
				 	} else {
				 		cargarSliderPlazos2();							
					} 								    				    							
				} else{
					alert('No hubo resultados');
				}						
			} else {
				if(result.codigo!=null && result.codigo!=undefined){
 					alert(result.codigo);
 				}
			}		
	}
		
}
function validarPlazosArrendamientoPuro(lstPlazos){
	var totalItemPlazos=0;
	var plazoMaximo=lstPlazos[0].mesFinal;
	var plazoMinimo=lstPlazos[0].mesInicial;
		
	var j=0;
	for(i=0; i<lstPlazos.length;i++){
		totalItemPlazos=totalItemPlazos+(parseInt( lstPlazos[i].mesFinal) - parseInt(lstPlazos[i].mesInicial ));			
		if(lstPlazos[i].mesInicial<plazoMinimo ){
			plazoMinimo=lstPlazos[i].mesInicial;
		}
		if(lstPlazos[i].mesFinal>plazoMaximo){
			plazoMaximo=lstPlazos[i].mesFinal;			
		}		
	}
	return (totalItemPlazos==0);		
		
		
}

function cargarSliderPlazosFlex(){
	cotizadorCalculo2.sliderPlazos.max=3;
	cotizadorCalculo2.sliderPlazos.min=1;
	cotizadorCalculo2.sliderPlazos.step=1;
	cotizadorCalculo2.sliderPlazos.selectedValue=1;
	cotizadorCalculo2.forceLayout();
	
	var lstPlazos=kony.store.getItem('lstPlazos');
	if (lstPlazos == undefined ){		
		return;
	}
	var totalItemPlazos=0;
	var plazoMaximo=lstPlazos[0].mesFinal;
	var plazoMinimo=lstPlazos[0].mesInicial;
	var arrPlazosFijos=[];
	var sliderStep =1;	
	var j=0;
	for(i=0; i<lstPlazos.length;i++){
		totalItemPlazos=totalItemPlazos+(parseInt( lstPlazos[i].mesFinal) - parseInt(lstPlazos[i].mesInicial ));		

		if(lstPlazos[i].mesInicial == lstPlazos[i].mesFinal){
			arrPlazosFijos[j]=lstPlazos[i];
			j++;
		} else {
		
		}
		if(lstPlazos[i].mesInicial<plazoMinimo ){
			plazoMinimo=lstPlazos[i].mesInicial;
		}
		if(lstPlazos[i].mesFinal>plazoMaximo){
			plazoMaximo=lstPlazos[i].mesFinal;
			
		}
		
	}
	cotizadorCalculo2.sliderPlazos.max=parseInt(plazoMaximo+1);
	
	cotizadorCalculo2.sliderPlazos.min=parseInt(plazoMinimo-1);
	
	cotizadorCalculo2.sliderPlazos.step=parseInt(sliderStep);
	cotizadorCalculo2.sliderPlazos.selectedValue=parseInt(plazoMinimo);
	cotizadorCalculo2.lblPlazoMinimo.text =plazoMinimo.toString();
	cotizadorCalculo2.lblPlazoMaximo.text =plazoMaximo.toString();
	cotizadorCalculo2.lblPlazoMinimo.setVisibility(true, null); 
	cotizadorCalculo2.lblPlazoMaximo.setVisibility(true, null);	
	cotizadorCalculo2.sliderPlazos.max=parseInt(plazoMaximo+1);
	cotizadorCalculo2.lblPlazoSeleccionado.text=plazoMinimo;
	validarPlazoSeleccionadoFlex(parseInt(plazoMinimo));
	
	cotizadorCalculo2.forceLayout();
	
	kony.application.dismissLoadingScreen();
}

function cargarSliderPlazos2(){	
	cotizadorCalculo2.sliderPlazos.max=3;
	cotizadorCalculo2.sliderPlazos.min=1;
	cotizadorCalculo2.sliderPlazos.step=1;
	cotizadorCalculo2.sliderPlazos.selectedValue=1;
	cotizadorCalculo2.forceLayout();
	
	var lstPlazos=kony.store.getItem('lstPlazos');
	if (lstPlazos== undefined ){		
		return;
	}
	var totalItemPlazos=0;
	var plazoMaximo=lstPlazos[0].mesFinal;
	var plazoMinimo=lstPlazos[0].mesInicial;
	var arrPlazosFijos=[];
	var sliderStep =1;	
	var j=0;
	for(i=0; i<lstPlazos.length;i++){
		totalItemPlazos=totalItemPlazos+(parseInt( lstPlazos[i].mesFinal) - parseInt(lstPlazos[i].mesInicial ));		

		if(lstPlazos[i].mesInicial == lstPlazos[i].mesFinal){
			arrPlazosFijos[j]=lstPlazos[i];
			j++;
		} else {
		
		}
		if(lstPlazos[i].mesInicial<plazoMinimo ){
			plazoMinimo=lstPlazos[i].mesInicial;
		}
		if(lstPlazos[i].mesFinal>plazoMaximo){
			plazoMaximo=lstPlazos[i].mesFinal;
			
		}
		
	}
	//alert(plazoMinimo+" "+plazoMaximo);
	cotizadorCalculo2.sliderPlazos.max=parseInt(plazoMaximo+2);
	cotizadorCalculo2.sliderPlazos.min=parseInt(plazoMinimo-2);

	if(totalItemPlazos==0){		
		/liderStep= (plazoMaximo-plazoMinimo)/(arrPlazosFijos.length-1);
	}
	//(alert("sliderStep "+sliderStep);
	cotizadorCalculo2.sliderPlazos.step=parseInt(sliderStep);
	cotizadorCalculo2.sliderPlazos.selectedValue=parseInt(plazoMinimo);
	cotizadorCalculo2.lblPlazoMinimo.text =plazoMinimo.toString();
	cotizadorCalculo2.lblPlazoMaximo.text =plazoMaximo.toString();
	cotizadorCalculo2.lblPlazoMinimo.setVisibility(true, null); 
	cotizadorCalculo2.lblPlazoMaximo.setVisibility(true, null);	
	cotizadorCalculo2.sliderPlazos.max=parseInt(plazoMaximo+2);
	cotizadorCalculo2.lblPlazoSeleccionado.text=plazoMinimo;
	validarPlazoSeleccionado2(parseInt(plazoMinimo));
	
	cotizadorCalculo2.forceLayout();
	
	kony.application.dismissLoadingScreen();
 
}


function onSliderSelection2(selected){
	var lstPlazos= kony.store.getItem('lstPlazos');	
	var esPlanAlternativo=kony.store.getItem('esPlanAlternativo'); 	
 	if(esPlanAlternativo.toString()=='true' || validarPlazosArrendamientoPuro(lstPlazos)){
		validarPlazoSeleccionadoFlex(cotizadorCalculo2.sliderPlazos.selectedValue);
	} else {
		validarPlazoSeleccionado2(cotizadorCalculo2.sliderPlazos.selectedValue)
	}
}


function validarPlazoSeleccionadoFlex(plazoSeleccionado){
	
	var lstPlazos= kony.store.getItem('lstPlazos');	
	if(lstPlazos!= undefined && lstPlazos.length>0){				
		lstPlazos.sort(function(a, b){return parseInt(a.mesInicial)-parseInt(b.mesInicial)});		
		if(plazoSeleccionado<=lstPlazos[0].mesInicial ){
			establecerEnganches2(lstPlazos[0].engancheMinimo,lstPlazos[0].engancheMaximo);
			cotizadorCalculo2.sliderPlazos.selectedValue=parseInt(lstPlazos[0].mesInicial);			
			cotizadorCalculo2.lblPlazoSeleccionado.text=parseInt(lstPlazos[0].mesInicial);
			cotizadorCalculo2.forceLayout();
			return;	
		}
		if(plazoSeleccionado>=lstPlazos[lstPlazos.length-1].mesInicial ){
			establecerEnganches2(lstPlazos[lstPlazos.length-1].engancheMinimo,lstPlazos[lstPlazos.length-1].engancheMaximo);
			cotizadorCalculo2.sliderPlazos.selectedValue=parseInt(lstPlazos[lstPlazos.length-1].mesInicial);			
			cotizadorCalculo2.lblPlazoSeleccionado.text=parseInt(lstPlazos[lstPlazos.length-1].mesInicial);	
			cotizadorCalculo2.forceLayout();
			return;	
		}
		for(i=1;i<lstPlazos.length;i++){
			
			var mesMenor = parseInt(lstPlazos[i-1].mesInicial);
			var mesMayor =	parseInt(lstPlazos[i].mesInicial);
			var mitad = mesMenor + ((mesMayor - mesMenor) / 2 );			
			if(plazoSeleccionado<=lstPlazos[i].mesInicial && plazoSeleccionado>=mitad){
				establecerEnganches2(lstPlazos[i].engancheMinimo,lstPlazos[i].engancheMaximo);
				cotizadorCalculo2.sliderPlazos.selectedValue=parseInt(lstPlazos[i].mesInicial);		
				cotizadorCalculo2.lblPlazoSeleccionado.text=lstPlazos[i].mesInicial;		
				cotizadorCalculo2.forceLayout();
			}else if(plazoSeleccionado>=lstPlazos[i-1].mesInicial && plazoSeleccionado<mitad){
				establecerEnganches2(lstPlazos[i-1].engancheMinimo,lstPlazos[i-1].engancheMaximo);
				cotizadorCalculo2.sliderPlazos.selectedValue=parseInt(lstPlazos[i-1].mesInicial);	
				cotizadorCalculo2.lblPlazoSeleccionado.text=lstPlazos[i-1].mesInicial;				
				cotizadorCalculo2.forceLayout();
			}
		}
		
	}
}

function cargarEstadosCotizacion(){		
	var inputparam = {};
 	inputparam["serviceID"] = "obtenerEntidadesCirculacion"; 	
 	inputparam["httpconfig"] = {timeout:30};
 	appmiddlewareinvokerasync(inputparam,cargarEstadosCallback2);	
}

 function cargarEstadosCallback2 (status, result) {	 		
	if (result.errmsg != undefined) {		
		alert('No fue posible recuperar las Entidades Federativas, verifique su conexión a intenet y vuelva  a intentarlo mas tarde por favor.');
		kony.application.dismissLoadingScreen();
		//cambiar por frmShow()
		//inicio.show();
		showFrm(inicio);
	} else { 			
		if (result.codigo != null && result.codigo != undefined &&  result.codigo == 1) { 				
			if (result.lstEstados != undefined && result.lstEstados.length>0) {	
				arrEstados = []; 									 
		        for (i = 0; i < result.lstEstados.length; i++) {
		        	lstTemporal = [];
		        	lstTemporal[0] = result.lstEstados[i].id;
		        	lstTemporal[1] = result.lstEstados[i].descripcion;
		        	arrEstados[i] = lstTemporal;
			    }
			    cotizadorCalculo2.lbEstados.masterData=arrEstados;
			    cotizadorCalculo2.lbEstados.selectedKey=result.lstEstados[0].id; 
			    cotizadorCalculo2.forceLayout();
			    
			    		 								    				    							
			} else{
				alert('No hubo resultados');
			}
		} else {
			if(result.codigo!=null && result.codigo!=undefined){
 				alert(result.codigo);
 			}
		}
	}	
	//kony.application.dismissLoadingScreen();
	
 }

function cargarDatosCalculo2() {
	
	//cotizadorCalculo2.lblUnidad.text = cotizadorModelos2.segmentList.selectedItems[0].lblContent;
	cotizadorCalculo2.lblPlan.text = kony.store.getItem('descripcionPlanSeleccionado').toString().trim();
}

function cargarPrecioUnidad2(){
	
	var idTipo = cotizadorModelos2.segmentCalculadora.selectedItems[0].lblContentId;
	
	var inputparam = {};
 	inputparam["serviceID"] = "obtenerPrecioUnidad"; 
 	inputparam["idTipo"] = idTipo; 		
 	inputparam["httpconfig"] = {timeout:30};
 	cotizadorCalculo2.forceLayout();
 	appmiddlewareinvokerasync(inputparam,cargarPrecioCallback2);	
 	
}

 function cargarPrecioCallback2 (status, result) {	
	if (result.errmsg != undefined) {
		alert('No fue posible recuperar el precio de la unidad, verifique su conexión a intenet y vuelva  a intentarlo mas tarde por favor.');
		kony.application.dismissLoadingScreen();
		//cambiar por frmShow()
		//inicio.show();
		showFrm(inicio);
	} else { 			
		if (result.codigo != null && result.codigo != undefined && result.codigo == 1) { 				
			if (result.precio != undefined ) { 				    				
				//cotizadorCalculo2.txtPrecio.placeholder= "De "+ result.sPrecioMinimo.toString()+" a " + result.sPrecioMaximo.toString(); 	
				cotizadorCalculo2.txtPrecio.text=result.sPrecio.toString(); 
				kony.store.setItem("preciomaximo", result.precioMaximo);
				kony.store.setItem("preciominimo", result.precionMinimo);
				kony.store.setItem("spreciomaximo", result.sPrecioMaximo);
				kony.store.setItem("spreciominimo", result.sPrecioMinimo);
				cotizadorCalculo2.forceLayout();	 								    				    							
			} else{
				alert('No hubo resultados');
			}
		} else {
			if(result.codigo!=null && result.codigo!=undefined){
				alert(result.codigo);
			}
		}
	}	
}


function validarPrecioUnidad2(){	
	var texto=cotizadorCalculo2.txtPrecio.text;
	kony.store.setItem("cotizacionEnCurso",false);
	if(!validarParametrosCalculo2()){
		return;
	}
	
	texto=texto.replaceAll('$', '');	
	texto=texto.replaceAll("'", '');
	texto=texto.replaceAll(',', '')
	
	if(isNaN(texto)){
		alert("Introduzca un precio valido por favor");
	}else{
		var precio = parseFloat(texto);
		
		var precioMaximo=kony.store.getItem("preciomaximo");
		var precioMinimo=kony.store.getItem("preciominimo");
		var sPrecioMaximo=kony.store.getItem("spreciomaximo");
		var sPrecioMinimo=kony.store.getItem("spreciominimo");				
		if(precioMinimo>precio){
			alert("El precio minimo de la unidad es: "+sPrecioMinimo);
			cotizadorCalculo2.txtPrecio.text=kony.os.toCurrency(parseFloat(precioMinimo));
		} else if(precioMaximo<precio){
			alert("El precio maximo de la unidad es: "+sPrecioMaximo);
			cotizadorCalculo2.txtPrecio.text=kony.os.toCurrency(parseFloat(precioMaximo));
		} else  {
			cotizadorCalculo2.txtPrecio.text=kony.os.toCurrency(parseFloat(texto));			
		}
	}
	
}

function onTextEngancheChange(){
	var texto = cotizadorCalculo2.txtEngancheSeleccionado.text;
	validarTextoEnganche(texto.toString());
}

function validarTextoEnganche(texto){	
	//var texto=cotizadorCalculo2.txtEngancheSeleccionado.text;
	kony.store.setItem("cotizacionEnCurso",false);
	var plazoSeleccionado = cotizadorCalculo2.sliderPlazos.selectedValue;
	
	texto=texto.replaceAll('$', '');	
	texto=texto.replaceAll("'", '');
	texto=texto.replaceAll(',', '')
	texto=texto.replaceAll('%', '')
	
	if(isNaN(texto) || texto.length==0){
		alert("Introduzca un enganche válido por favor");
	}else{		
		var lstPlazos= kony.store.getItem('lstPlazos');
		lstPlazos.sort(function(a, b){return parseInt(a.mesInicial)-parseInt(b.mesInicial)});
		for(i=0;i<lstPlazos.length;i++){
			if(plazoSeleccionado >= lstPlazos[i].mesInicial && plazoSeleccionado <= lstPlazos[i].mesFinal){				
				var engancheMax = parseFloat(lstPlazos[i].engancheMaximo.replaceAll('$', '').replaceAll(',', '').replaceAll('%', '').replaceAll("'", ''));
				var engancheMin = parseFloat(lstPlazos[i].engancheMinimo.replaceAll('$', '').replaceAll(',', '').replaceAll('%', '').replaceAll("'", ''));		
				var engancheInt = parseFloat(texto);
				if(engancheInt<engancheMin){
					
					alert("El enganche mínimo para el plazo es "+engancheMin);
					cotizadorCalculo2.sliderEnganche.selectedValue=parseInt(engancheMin);					
					cotizadorCalculo2.txtEngancheSeleccionado.text=engancheMin;
					kony.store.setItem("bloquearCotizacion", true);
					cotizadorCalculo2.forceLayout();
					
				}else if(engancheInt>engancheMax){
					
					alert("El enganche máximo para el plazo es "+engancheMax);
					cotizadorCalculo2.sliderEnganche.selectedValue=parseInt(engancheMax);
					cotizadorCalculo2.txtEngancheSeleccionado.text=engancheMax;
					kony.store.setItem("bloquearCotizacion", true);
					cotizadorCalculo2.forceLayout();
				} else {
					cotizadorCalculo2.sliderEnganche.selectedValue=parseInt(engancheInt);
					kony.store.removeItem("bloquearCotizacion");
					cotizadorCalculo2.forceLayout();
				}
				
			}
		}					
	
	}
	
}

function validarPlazoSeleccionado2(plazoSeleccionado){
	var lstPlazos= kony.store.getItem('lstPlazos');
	if(lstPlazos!= undefined && lstPlazos.length>0){
		
		lstPlazos.sort(function(a, b){return parseInt(a.mesInicial)-parseInt(b.mesInicial)});	
		//alert(lstPlazos);
		if(plazoSeleccionado<=lstPlazos[0].mesInicial ){
			establecerEnganches2(lstPlazos[0].engancheMinimo,lstPlazos[0].engancheMaximo);
			cotizadorCalculo2.sliderPlazos.selectedValue=parseInt(lstPlazos[0].mesInicial);			
			cotizadorCalculo2.lblPlazoSeleccionado.text=parseInt(lstPlazos[0].mesInicial);
			cotizadorCalculo2.forceLayout();
			return;	
		}
		if(plazoSeleccionado>=lstPlazos[lstPlazos.length-1].mesFinal ){
			establecerEnganches2(lstPlazos[lstPlazos.length-1].engancheMinimo,lstPlazos[lstPlazos.length -1].engancheMaximo);
			cotizadorCalculo2.sliderPlazos.selectedValue=parseInt(lstPlazos[lstPlazos.length-1].mesFinal);	
			cotizadorCalculo2.lblPlazoSeleccionado.text=parseInt(lstPlazos[lstPlazos.length-1].mesFinal);			
			cotizadorCalculo2.forceLayout();
			//alert(lstPlazos.length-1);
			return;	
		}
	
	
		for(i=0;i<lstPlazos.length;i++){
			if(plazoSeleccionado >= lstPlazos[i].mesInicial && plazoSeleccionado <= lstPlazos[i].mesFinal){				
				cotizadorCalculo2.lblPlazoSeleccionado.text=plazoSeleccionado;
				establecerEnganches2(lstPlazos[i].engancheMinimo,lstPlazos[i].engancheMaximo);
			}
		}
	}
}

function establecerEnganches2(plazoMinimo,plazoMaximo){
		
		cotizadorCalculo2.lblEngancheMinimo.setVisibility(true, null);
		cotizadorCalculo2.lblEngancheMaximo.setVisibility(true, null);
		cotizadorCalculo2.lblEngancheMinimo.text=plazoMinimo;
		cotizadorCalculo2.lblEngancheMaximo.text=plazoMaximo;
		plazoMaximo=plazoMaximo.replaceAll('$', '');
		plazoMaximo=plazoMaximo.replaceAll(',', '');
		plazoMaximo=plazoMaximo.replaceAll("'", '');
		plazoMaximo=plazoMaximo.replaceAll("%", '');
		plazoMinimo=plazoMinimo.replaceAll('$', '');
		plazoMinimo=plazoMinimo.replaceAll(',', '');
		plazoMinimo=plazoMinimo.replaceAll("'", '');
		plazoMinimo=plazoMinimo.replaceAll("%", '');
		
		cotizadorCalculo2.sliderEnganche.min=parseInt(plazoMinimo)-2;
		cotizadorCalculo2.sliderEnganche.max=parseInt(plazoMaximo)+2;
		cotizadorCalculo2.sliderEnganche.selectedValue=parseInt(plazoMinimo);
		cotizadorCalculo2.sliderEnganche.step=1;
		cotizadorCalculo2.txtEngancheSeleccionado.text=parseInt(plazoMinimo);
		if(parseInt(plazoMinimo)==0  && parseInt(plazoMaximo)==0 ){
			cotizadorCalculo2.sliderEnganche.max=10;
			cotizadorCalculo2.sliderEnganche.min=0;
			cotizadorCalculo2.sliderEnganche.selectedValue=1;
			cotizadorCalculo2.sliderEnganche.setEnabled(false);
			cotizadorCalculo2.txtEngancheSeleccionado.setEnabled(false);
		}else{
			cotizadorCalculo2.sliderEnganche.setEnabled(true);
			cotizadorCalculo2.txtEngancheSeleccionado.setEnabled(true);
		}
		cotizadorCalculo2.forceLayout();
}

function onSliderEngancheSelect2(){
	validarEngancheSeleccionado2();	
}

function validarEngancheSeleccionado2(){
	var plazoSeleccionado = cotizadorCalculo2.sliderPlazos.selectedValue;
	var engancheSeleccionado=cotizadorCalculo2.sliderEnganche.selectedValue;
	kony.store.setItem("cotizacionEnCurso",false);
	var lstPlazos= kony.store.getItem('lstPlazos');
	
	if(lstPlazos!= undefined && lstPlazos.length>0){		
		lstPlazos.sort(function(a, b){return parseInt(a.mesInicial)-parseInt(b.mesInicial)});	
		
		for(i=0;i<lstPlazos.length;i++){
			if(plazoSeleccionado >= lstPlazos[i].mesInicial && plazoSeleccionado <= lstPlazos[i].mesFinal){				
				
				if(parseFloat(lstPlazos[i].engancheMinimo)>parseFloat(engancheSeleccionado)){
					cotizadorCalculo2.sliderEnganche.selectedValue=parseInt(lstPlazos[i].engancheMinimo.replaceAll('$', '').replaceAll(',', '').replaceAll('%', '').replaceAll("'", ''));
					
					cotizadorCalculo2.txtEngancheSeleccionado.text=lstPlazos[i].engancheMinimo.replaceAll('$', '').replaceAll(',', '').replaceAll('%', '').replaceAll("'", '');
				} else if (parseFloat(lstPlazos[i].engancheMaximo)<parseFloat(engancheSeleccionado)){
					cotizadorCalculo2.sliderEnganche.selectedValue=parseInt(lstPlazos[i].engancheMaximo.replaceAll('$', '').replaceAll(',', '').replaceAll('%', '').replaceAll("'", ''));
					
					cotizadorCalculo2.txtEngancheSeleccionado.text=lstPlazos[i].engancheMaximo.replaceAll('$', '').replaceAll(',', '').replaceAll('%', '').replaceAll("'", '');
				} else {
					cotizadorCalculo2.txtEngancheSeleccionado.text=engancheSeleccionado;
				}
			}
		}
		cotizadorCalculo2.forceLayout();
	}
}