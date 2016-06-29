function init_ajusteUbicacion() {
    var prev = kony.store.getItem("ajusteUbicacion");

    if (!isIOS()) {
        if (prev) {
            frmUbicacionActual.checkUbicacion.selectedKeys = prev.isActivado ? ["cbg1"] : null;
        } else {
            frmUbicacionActual.checkUbicacion.selectedKeys = ["cbg1"];
        }
        frmUbicacionActual.checkUbicacion.onSelection = saveAjusteUbicacion;
    } else {
        if (prev) {
            frmUbicacionActual.switchUbicacion.selectedIndex = prev.isActivado ? 0 : 1;
        } else {
            frmUbicacionActual.switchUbicacion.selectedIndex = 0;
        }
        frmUbicacionActual.switchUbicacion.onSlide = saveAjusteUbicacion;
    }
    //frmUbicacionActual.show();
    showFrm(frmUbicacionActual);
}

function saveAjusteUbicacion() {
    var confi = {
        isActivado: false
    }
    if (!isIOS()) {
        confi.isActivado = frmUbicacionActual.checkUbicacion.selectedKeys != null;
    } else {
        confi.isActivado = frmUbicacionActual.switchUbicacion.selectedIndex != 1;
    }
    kony.store.setItem("ajusteUbicacion", confi);
}