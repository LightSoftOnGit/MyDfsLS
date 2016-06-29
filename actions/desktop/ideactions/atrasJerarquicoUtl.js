var navegacion = [{
    frm: "inicio",
    ver: function(){
    	inicio.show();
    }
},
{
    frm: "login",
    frmPadres: ["inicio"],
    ver: function(){
    	login.show();
    }
},
{
    frm: "cotizadorModelos2",
    frmPadres: ["inicio"],
    ver: function(){
    	cotizadorModelos2.show();
    }
},
{
    frm: "frmDistribuidores",
    frmPadres: ["inicio","frmContacto"],
    ver: function(){
    	frmDistribuidores.show();
    }
},
{
    frm: "frmContacto",
    frmPadres: ["inicio"],
    ver: function(){
    	frmContacto.show();
    }
},
{
    frm: "parquimetro",
    frmPadres: ["inicio"],
    ver: function(){
    	parquimetro.show();
    }
},
{
    frm: "loginBienvenida",
    frmPadres: ["inicio"],
    ver: function(){
    	loginBienvenida.show();
    }
},
{
    frm: "saldosMovimientos",
    frmPadres: ["loginBienvenida"],
    ver: function(){
    	saldosMovimientos.show();
    }
},
{
    frm: "loginEstadosCuenta",
    frmPadres: ["loginBienvenida"],
    ver: function(){
    	loginEstadosCuenta.show();
    }
},
{
    frm: "loginFacturacion",
    frmPadres: ["loginBienvenida"],
    ver: function(){
    	loginFacturacion.show();
    }
},
{
    frm: "frmSeguros",
    frmPadres: ["loginBienvenida"],
    ver: function(){
    	frmSeguros.show();
    }
},
{
    frm: "loginLoyalty",
    frmPadres: ["loginBienvenida"],
    ver: function(){
    	loginLoyalty.show();
    }
},
{
    frm: "frmContrato",
    frmPadres: ["loginBienvenida"],
    ver: function(){
    	frmContrato.show();
    }
},
{
    frm: "frmMiSeguro",
    frmPadres: ["frmSeguros"],
    ver: function(){
    	frmMiSeguro.show();
    }
},
{
    frm: "frmContratoInfo",
    frmPadres: ["frmContrato"],
    ver: function(){
    	frmContratoInfo.show();
    }
},
{
    frm: "cotizadorFinanciamiento2",
    frmPadres: ["cotizadorModelos2"],
    ver: function(){
    	cotizadorFinanciamiento2.show();
    }
},
{
    frm: "cotizadorPlanes2",
    frmPadres: ["cotizadorFinanciamiento2"],
    ver: function(){
    	cotizadorPlanes2.show();
    }
},
{
    frm: "cotizadorCalculo2",
    frmPadres: ["cotizadorPlanes2","cotizadorFinanciamiento2"],
    ver: function(){
    	cotizadorCalculo2.show();
    }
},
{
    frm: "cotizadorCotizacion2",
    frmPadres: ["cotizadorCalculo2"],
    ver: function(){
    	cotizadorCotizacion2.show();
    }
},
{
    frm: "frmUbicacionActual",
    frmPadres: ["frmDistribuidores","frmInformacion"],
    ver: function(){
    	frmUbicacionActual.show();
    }
},
{
    frm: "frmInformacion",
    frmPadres: [],
    ver: function(){
    	frmInformacion.show();
    }
}
];

function atrasGeneralUtl(){
	var frmActualUtl = kony.application.getCurrentForm();
	var frmAnteriorUtl = kony.application.getPreviousForm();
	var padreNoEncontrado=false;
	if (frmActualUtl.isShowMenu) {
		ocultarMenu();
	}
	else{
		for (var i in navegacion) {
		    if(navegacion[i].frm.localeCompare(frmActualUtl.id)==0){
		    	var padresTotal= navegacion[i].frmPadres.length;
		    	if(padresTotal>1){
		    		for(var j in navegacion[i].frmPadres){
		    			if(navegacion[i].frmPadres[j].localeCompare(frmAnteriorUtl.id)==0){
		    				atrasVerFrmPadre(navegacion[i].frmPadres[j]);
		    				padreNoEncontrado=false;
		    				break;
		    			}
		    			else{
		    				padreNoEncontrado=true;
		    			}
		    		}
		    		if(padreNoEncontrado){
		    			atrasVerFrmPadre(navegacion[i].frmPadres[0]);
		    		}
		    	}
		    	else if(padresTotal==1) {
		    		atrasVerFrmPadre(navegacion[i].frmPadres[0]);
		    	}
		    	else{
		    		//frmAnteriorUtl.show();
					gblPilaForm.pop();
		    		showFrm(frmAnteriorUtl);
		    	}
		    }
		}
	}
}

function atrasVerFrmPadre(frmPadre){
	for (var i in navegacion) {
	    if(navegacion[i].frm.localeCompare(frmPadre)==0){
	    	gblPilaForm.pop();
	    	navegacion[i].ver();
	    }
	}
}
