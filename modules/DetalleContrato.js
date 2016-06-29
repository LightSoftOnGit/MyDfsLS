function DetalleContratoVer()
{
	showLoader();
  //kony.application.showLoadingScreen("sknLblLoading", "Cargando...", constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true, {
  //              shouldShowLabelInBottom: true,
  //              seperatorHeight: 30
  //          });
	
	var inputparam = {};
	inputparam["serviceID"] = "obtenerDetalleContrato";
	inputparam["operacionMaestra"] = kony.store.getItem("contratoMaestro");
	inputparam["httpheaders"] = {};
	inputparam["httpconfig"] = {timeout:15};
	
	detalleContrato = appmiddlewareinvokerasync(inputparam,detalleContratoR);
}

function DetalleContratoInfoVer()
{
	showLoader();
	//kony.application.showLoadingScreen("sknLblLoading", "Cargando...", constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true, {
    //            shouldShowLabelInBottom: true,
    //            seperatorHeight: 30
    //        });
  	var inputparam = {};
  	inputparam["serviceID"] = "obtenerBeneficiosTerminacionContrato";
  	inputparam["tipoContrato"] = kony.store.getItem("DetContrTipoContrato");
  	inputparam["nombreCliente"] = kony.store.getItem("DetContratoNombreCliente");
  	inputparam["httpheaders"] = {};
  	inputparam["httpconfig"] = {timeout:15};
  	detalleContratoInfo = appmiddlewareinvokerasync(inputparam,detalleContratoI);
}

function detalleContratoR(status, detalleContrato)
{
  if(detalleContrato != null && detalleContrato != undefined && 
	   detalleContrato["codigo"] != null && detalleContrato["codigo"] != undefined && 
	   detalleContrato["codigo"]==1){
		//kony.application.dismissLoadingScreen();
		//dismissLoader();
		var lstAseguradora;
		if (detalleContrato["lstContenido"] != null && 
			detalleContrato["lstContenido"] != undefined) {
			var smgtoTemporal = [];
			if(detalleContrato["lstContenido"].length>0){
			  frmContrato.lblTitle2.text=detalleContrato["lstContenido"][0]["numeroContrato"];
              frmContrato.flexMain.flexContent.FlexScrollContainer067543de505e445.flexContainerFecha.lblMesInicio.text=detalleContrato["lstContenido"][0]["fechaInicio"];
              frmContrato.flexMain.flexContent.FlexScrollContainer067543de505e445.flexContainerFecha.lblUltimoPago.text=detalleContrato["lstContenido"][0]["fechaUltimoPago"];
              frmContrato.lblTop.text="Mensualidad:";
              frmContrato.lblMid.text="Dia de pago:";
              frmContrato.lblBot.text="Referencia:";
              frmContrato.flexMain.flexContent.FlexScrollContainer067543de505e445.flexContainerMensualidad.lblTopW.text=detalleContrato["lstContenido"][0]["mensualidad"];
              frmContrato.flexMain.flexContent.FlexScrollContainer067543de505e445.flexContainerMensualidad.lblMidW.text=detalleContrato["lstContenido"][0]["diaPago"];
			  frmContrato.flexMain.flexContent.FlexScrollContainer067543de505e445.flexContainerMensualidad.lblBotW.text=detalleContrato["lstContenido"][0]["referencia"];
			  
              frmContrato.flexMain.flexContent.FlexScrollContainer067543de505e445.flexContainerBanco.lblBancoNombre.text=detalleContrato["lstContenido"][0]["banco"];
			  frmContrato.flexMain.flexContent.FlexScrollContainer067543de505e445.flexContainerBanco.lblCuenta.text="Cuenta:"+detalleContrato["lstContenido"][0]["cuenta"];
			  if(detalleContrato["lstContenido"][0]["banco"]=="NA" || detalleContrato["lstContenido"][0]["banco"]==null)
                {
                  frmContrato.flexMain.flexContent.FlexScrollContainer067543de505e445.flexContainerBanco.lblTitular.text="Titular:Na";
			      frmContrato.flexMain.flexContent.FlexScrollContainer067543de505e445.flexContainerBanco.lblCuenta.text="Cuenta:NA";
                  frmContrato.flexMain.flexContent.FlexScrollContainer067543de505e445.flexContainerBanco.lblBancoNombre.text="NA";
                }
              else
                {
                  frmContrato.flexMain.flexContent.FlexScrollContainer067543de505e445.flexContainerBanco.lblTitular.text="Titular:"+detalleContrato["lstContenido"][0]["nombreCliente"];
                }
              
              var sTipoContrato=detalleContrato["lstContenido"][0]["tipoContrato"];
              sTipoContrato=sTipoContrato.substring(0,1)+sTipoContrato.substring(1).toLowerCase();  
              frmContrato.CopylblBanco0f580cf21764140.text="Terminacion "+sTipoContrato+":";
              //ASEGURADORA
              frmContrato.CopylblBancoNombre058b4a971eb834a.text=detalleContrato["lstContenido"][0]["lstAseguradora"][0]["aseguradoraNombre"];
              frmContrato.CopylblCuenta0f585157314424e.text="No. Poliza:"+detalleContrato["lstContenido"][0]["lstAseguradora"][0]["aseguradoraPoliza"];
              frmContrato.CopylblTitular0f3d3aaafa2be4b.text="Vence:"+detalleContrato["lstContenido"][0]["lstAseguradora"][0]["aseguradoraVencimiento"];
               //BENEFICIOS
   			  frmContratoInfo.titleInfoContrato.text=sTipoContrato+":";
              kony.store.setItem("DetContrTipoContrato",detalleContrato["lstContenido"][0]["tipoContrato"]);
              kony.store.setItem("DetContratoNombreCliente",detalleContrato["lstContenido"][0]["nombreCliente"]);
		      //kony.application.dismissLoadingScreen();
			  dismissLoader();
			  showFrm(frmContrato);	
		    }
	        else{
	    		alert(kony.i18n.getLocalizedString("106"));
	    		//kony.application.dismissLoadingScreen();
				dismissLoader();
	    	}
	    }
	    //showFrm(frmContrato);
	}
	else{
     	if(detalleContrato !=null && detalleContrato["codigo"]!=null &&
		   detalleContrato !=undefined && detalleContrato["codigo"]!=undefined){
			if(detalleContrato["codigo"]==0){
				alert(kony.i18n.getLocalizedString(detalleContrato["codigo"]));
			}
			else{
				alert(kony.i18n.getLocalizedString(detalleContrato["codigo"]));
			}
			//kony.application.dismissLoadingScreen();
			dismissLoader();
		}
		else if(status==300){
			alert(kony.i18n.getLocalizedString("103"));
			//kony.application.dismissLoadingScreen();
			dismissLoader();
		}
		else if(status!=100 && status!=200){
			alert(kony.i18n.getLocalizedString("104"));
			//kony.application.dismissLoadingScreen();
			dismissLoader();
		}
	}
  //frmContrato.show();
}

function detalleContratoI(status, detalleContratoInfo)
{
	if(detalleContratoInfo != null && detalleContratoInfo != undefined && 
	   detalleContratoInfo["codigo"] != null && detalleContratoInfo["codigo"] != undefined && 
	   detalleContratoInfo["codigo"]==1)
	   {
    	frmContratoInfo.richTextInfoContrato.text=detalleContratoInfo["contenido"];
    	//frmContratoInfo.show();
		//kony.application.dismissLoadingScreen();
		dismissLoader();
    	showFrm(frmContratoInfo);
  	}
  else
  {
    if(detalleContratoInfo !=null && detalleContratoInfo["codigo"]!=null &&
		   detalleContratoInfo !=undefined && detalleContratoInfo["codigo"]!=undefined){
			if(detalleContratoInfo["codigo"]==0){
				alert(kony.i18n.getLocalizedString(detalleContratoInfo["codigo"]));
				//kony.application.dismissLoadingScreen();
				dismissLoader();
			}
			else{
				alert(kony.i18n.getLocalizedString(detalleContratoInfo["codigo"]));
				//kony.application.dismissLoadingScreen();
				dismissLoader();
			}
			
		}
		else if(status==300){
			alert(kony.i18n.getLocalizedString("103"));
			//kony.application.dismissLoadingScreen();
			dismissLoader();
		}
		else if(status!=100 && status!=200){
			alert(kony.i18n.getLocalizedString("104"));
			//kony.application.dismissLoadingScreen();
			dismissLoader();
		}
  }  
}


