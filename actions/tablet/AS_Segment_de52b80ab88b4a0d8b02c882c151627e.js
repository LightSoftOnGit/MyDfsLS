function AS_Segment_de52b80ab88b4a0d8b02c882c151627e(eventobject, sectionNumber, rowNumber) {
var x = kony.application.getCurrentForm().segmentOptions.selectedItems[0].lblContent;

if(x == "Localiza zona de parquimetros (GPS)"){
	frmMap.show();
}
if(x == "Programar parquimetro"){
	frmParkingMeter.show();
}

}