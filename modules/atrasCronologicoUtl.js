gblPilaForm=[];

function showFrm(formulario){
	formulario.show();
	pushNavegacionFrm();
}

function pushNavegacionFrm() {
    var previousForm = kony.application.getPreviousForm();
    gblPilaForm.push(previousForm);
    //alert("From agregada:::"+gblPilaForm.length+" :: "+previousForm.id);
}

function popNavegacionFrm(){
	if (kony.application.getCurrentForm().isShowMenu) {
		ocultarMenu();
	}
	else{
		var previousForm = gblPilaForm[gblPilaForm.length-1];
		if (kony.store.getItem("user") && (previousForm.id.localeCompare("login")===0)) {
			gblPilaForm.pop();
			previousForm = gblPilaForm[gblPilaForm.length-1];
		}
		if(previousForm!==null){
			previousForm.show();
		    gblPilaForm.pop();    
		}
		//alert("from eliminado:::"+gblPilaForm.length);
	}
 }