function touchStartMenu(x,y){
	var cx=x;
	var cy=y;
	kony.store.setItem("x1", cx.toString());
	kony.store.setItem("y1", cy.toString());	
}

function touchEndMenu(x,y){
	var x1=kony.store.getItem("x1");
	var y1=kony.store.getItem("y1");
	var x2=parseInt(x);
	
	if(parseInt(x)<parseInt(x1)){
		cotizadorModelos2.btnVerMenuCoti.setVisibility(false);		
		alternarMenuCotizador();
	}	
}

function touchEndMenuInicio(x,y){
	var x1=kony.store.getItem("x1");
	var y1=kony.store.getItem("y1");
	var x2=parseInt(x);
	if(parseInt(x)<parseInt(x1)){
		//ocultarMenuCotizador();
		//cotizadorModelos2.btnVerMenuCoti.setVisibility(false);		
		alternarMenuCotizador();
	}else if(parseInt(x)==parseInt(x1)){
		menuVerInicioCotizador();
	}	
}

function touchEndMenuLogin(x,y){
	var x1=kony.store.getItem("x1");
	var y1=kony.store.getItem("y1");
	var x2=parseInt(x);
	if(parseInt(x)<parseInt(x1)){
		//ocultarMenuCotizador();
		//cotizadorModelos2.btnVerMenuCoti.setVisibility(false);		
		alternarMenuCotizador();
	}else if(parseInt(x)==parseInt(x1)){
		menuVerLoginCotizador();
	}	
}

function touchEndMenuCotizador(x,y){
	var x1=kony.store.getItem("x1");
	var y1=kony.store.getItem("y1");
	var x2=parseInt(x);
	if(parseInt(x)<parseInt(x1)){
		//ocultarMenuCotizador();
		cotizadorModelos2.btnVerMenuCoti.setVisibility(false);		
		alternarMenuCotizador();
	}else if(parseInt(x)==parseInt(x1)){
		ocultarMenuCotizador();
	}	
}

function touchEndMenuDistribuidores(x,y){
	var x1=kony.store.getItem("x1");
	var y1=kony.store.getItem("y1");
	var x2=parseInt(x);
	if(parseInt(x)<parseInt(x1)){
		//ocultarMenuCotizador();
		cotizadorModelos2.btnVerMenuCoti.setVisibility(false);		
		alternarMenuCotizador();
	}else if(parseInt(x)==parseInt(x1)){
		menuVerGpsDistribuidorCotizador();
	}	
}

function touchEndMenuContacto(x,y){
	var x1=kony.store.getItem("x1");
	var y1=kony.store.getItem("y1");
	var x2=parseInt(x);
	if(parseInt(x)<parseInt(x1)){
		//ocultarMenuCotizador();
		cotizadorModelos2.btnVerMenuCoti.setVisibility(false);		
		alternarMenuCotizador();
	}else if(parseInt(x)==parseInt(x1)){
		menuVerContactoCotizador();
	}	
}

function touchEndMenuParquimetro(x,y){
	var x1=kony.store.getItem("x1");
	var y1=kony.store.getItem("y1");
	var x2=parseInt(x);
	if(parseInt(x)<parseInt(x1)){
		//ocultarMenuCotizador();
		cotizadorModelos2.btnVerMenuCoti.setVisibility(false);		
		alternarMenuCotizador();
	}else if(parseInt(x)==parseInt(x1)){
		menuVerParquimetroCotizador();
	}	
}

function menuVerInicioCotizador() {
    //cerrarSesionCotizador();
    ocultarMenuCotizador();
    inicio.show();
}

function menuVerLoginCotizador() {
    //cerrarSesionCotizador();
    ocultarMenuCotizador();
    login.show();
}

function menuVerGpsDistribuidorCotizador() {
    //cerrarSesionCotizador();
    ocultarMenuCotizador();
    gpsVerDistribuidores();
    //geoPosicion();
    //gpsDistribuidor.show();
}

function menuVerContactoCotizador() {
    //cerrarSesionCotizador();
    ocultarMenuCotizador();
    contacto.show();
}

function menuVerCotizadorCotizador() {
    //cerrarSesionCotizador();
    ocultarMenuCotizador();
    cotizadorModelos2.show();
}

function menuVerParquimetroCotizador() {
    //cerrarSesionCotizador();
    ocultarMenuCotizador();
    parquimetro.show();
}

function menuCerrarSesionCotizador() {
    //cerrarSesionCotizador();
    ocultarMenuCotizador();
    login.show();
}

function validateSesionCotizador() {
    if (!kony.store.getItem("user")) {
        login.show();
    }
}

function cerrarSesionCotizador() {
    kony.store.removeItem("user");
}

function mostrarMenuCotizador() {		
   	//cotizadorModelos2.flexMenuCotizador.left="0%";
	//cotizadorModelos2.flexMenuCotizador.right="0%";
	cotizadorModelos2.flexMenuCotizador.setVisibility(true);
	cotizadorModelos2.flexBotonMenu.left="85%";
	//cotizadorModelos2.flexMain.setEnabled(false);
	
	cotizadorModelos2.forceLayout();	

}

function ocultarMenuCotizador() {
	//cotizadorModelos2.flexMenuCotizador.left="";
	//cotizadorModelos2.flexMenuCotizador.right="100%";
cotizadorModelos2.flexMenuCotizador.setVisibility(false);
	cotizadorModelos2.flexBotonMenu.left="0%";
	//sScotizadorModelos2.flexMain.setEnabled(true);
	cotizadorModelos2.forceLayout();
}