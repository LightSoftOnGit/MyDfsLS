function AS_Segment_e587df71072040799f004164194dee6d(eventobject, sectionNumber, rowNumber) {
var x = kony.application.getCurrentForm().segmentOptions.selectedItems[0].lblContent;

if(x == "Pagos en linea"){
	frmPayOnline.show();
}
if(x == "Saldos y movimientos"){
	frmBalances.show();
}
if(x == "Estados de cuenta"){
	frmBalances.show();
}
if(x == "Facturacion"){
	frmBill.show();
}
if(x == "Seguros"){
	frmSecure.show();
}
if(x == "my DFS"){
	frmDfs.show();
}
if(x == "Loyalty"){
	frmLoyalty.show();
}

}