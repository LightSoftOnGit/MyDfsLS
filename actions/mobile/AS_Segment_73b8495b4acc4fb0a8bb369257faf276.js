function AS_Segment_73b8495b4acc4fb0a8bb369257faf276(eventobject, sectionNumber, rowNumber) {
var x = kony.application.getCurrentForm().segmentOptions.selectedItems[0].lblContent;

if(x == "Localiza zona de parquimetros (GPS)"){
	frmMap.show();
}
if(x == "Programar parquimetro"){
	frmBalances.show();
}

}