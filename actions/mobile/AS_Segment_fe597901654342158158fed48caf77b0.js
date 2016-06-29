function AS_Segment_fe597901654342158158fed48caf77b0(eventobject, sectionNumber, rowNumber) {
var x = kony.application.getCurrentForm().segmentOptions.selectedItems[0].lblContent;

if(x == "Localiza zona de parquimetros (GPS)"){
	frmMap.show();
}
if(x == "Programar parquimetro"){
	frmParkingMeter.show();
}

}