function p2kwiet19724036342817_numberPhone_onTouchEnd_seq0(eventobject, x, y, contextInfo) {
    try {
        kony.phone.dial(loginLoyalty.numberPhone.text);
    } catch (err) {
        alert("Error en la llamada:" + err);
    }
}