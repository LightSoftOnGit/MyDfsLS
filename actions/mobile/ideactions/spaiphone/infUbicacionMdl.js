function infUbicacionVer() {
    var geolocalizacion = kony.store.getItem("geolocalizacion");
    if (kony.os.deviceInfo().name == "iPhone" || kony.os.deviceInfo().name == "iPad" || kony.os.deviceInfo().name == "iPhone Simulator" || kony.os.deviceInfo().name == "iPad Simulator") {
        if (geolocalizacion != null && geolocalizacion != undefined) {
            if (geolocalizacion == true) {
                frmUbicacionActual.switchUbicacion.selectedIndex = 0;
            }
        } else {
            frmUbicacionActual.switchUbicacion.selectedIndex = 0;
        }
    } else {
        frmUbicacionActual.checkUbicacion.masterData = [
            ["1", "Ubicacion actual"]
        ];
        if (geolocalizacion != null && geolocalizacion != undefined) {
            if (geolocalizacion == true) {
                frmUbicacionActual.checkUbicacion.selectedKeys = ["1"];
            }
        } else {
            frmUbicacionActual.checkUbicacion.selectedKeys = ["1"];
        }
    }
    //frmUbicacionActual.show();
    showFrm(frmUbicacionActual);
}

function infGpsVisible() {
    if (frmUbicacionActual.checkUbicacion.selectedKeys != null && frmUbicacionActual.checkUbicacion.selectedKeys[0] == 1) {
        kony.store.setItem("geolocalizacion", true);
    } else {
        kony.store.setItem("geolocalizacion", false);
    }
    var previousForm = kony.application.getPreviousForm();
    if (previousForm.id.localeCompare("frmDistribuidores") == 0) {
        gpsVerDistribuidores();
    }
}

function infGpsVisibleSwitch() {
    if (frmUbicacionActual.switchUbicacion.selectedIndex != null && frmUbicacionActual.switchUbicacion.selectedIndex == 0) {
        kony.store.setItem("geolocalizacion", true);
    } else {
        kony.store.setItem("geolocalizacion", false);
    }
    var previousForm = kony.application.getPreviousForm();
    if (previousForm.id.localeCompare("frmDistribuidores") == 0) {
        gpsVerDistribuidores();
    }
}

function infUbicacionAtras() {
    gpsVerDistribuidores();
}