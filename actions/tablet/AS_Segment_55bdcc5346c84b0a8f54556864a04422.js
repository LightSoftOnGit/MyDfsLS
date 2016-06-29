function AS_Segment_55bdcc5346c84b0a8f54556864a04422(eventobject, sectionNumber, rowNumber) {
var x = kony.application.getCurrentForm().segmentOptions.selectedItems[0].lblContent;

if(x == "Usar mi ubicacion actual (GPS)"){
	frmLocationList.show();
}
if(x == "Seleccionar Ciudad/Estado"){
	frmLocationSelect.show();
}

}