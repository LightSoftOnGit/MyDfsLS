function init_ajusteParquimetro() {
    var ajustesPrevios = kony.store.getItem("ajusteParquimetro"),
        isios = isIOS(),
        swichsEncendido = isios ? frmAjustesParquimetro.switchUbicacion : frmAjustesParquimetro.checkBox,
        lblMinutos = frmAjustesParquimetro.lblMinutos,
        btnMasMin = frmAjustesParquimetro.btnMas,
        btnMenosMin = frmAjustesParquimetro.btnMenos
    btnGuardar = frmAjustesParquimetro.btnEnviar,
        listBoxSegundos = frmAjustesParquimetro.listBoxSegundos;
    if (ajustesPrevios) {
        kony.print("Ajuste encontrado: " + JSON.stringify(ajustesPrevios));
        lblMinutos.text = ajustesPrevios.minutosAntes + "''"
        listBoxSegundos.selectedKey = ajustesPrevios.duracion + "";
        if (!isios) {
            swichsEncendido.selectedKeys = ajustesPrevios.encendido ? ["cbg1"] : null;
        } else {
            swichsEncendido.selectedIndex = ajustesPrevios.encedido ? 0 : 1;
        }
    }
    btnMasMin.onClick = masMinutos;
    btnMenosMin.onClick = menosMinutos;
    btnGuardar.onClick = guardarAjuste;
    //frmAjustesParquimetro.show();
    showFrm(frmAjustesParquimetro);
}

function masMinutos() {
    var num = parseInt(frmAjustesParquimetro.lblMinutos.text);
    frmAjustesParquimetro.lblMinutos.text = num < 60 ? (num + 1) + "''" : 0 + "''";
}

function menosMinutos() {
    var num = parseInt(frmAjustesParquimetro.lblMinutos.text);
    frmAjustesParquimetro.lblMinutos.text = num > 0 ? (num - 1) + "''" : 60 + "''"
}

function guardarAjuste() {
    var isios = isIOS(),
        swichsEncendido = isios ? frmAjustesParquimetro.switchUbicacion : frmAjustesParquimetro.checkBox,
        lblMinutos = frmAjustesParquimetro.lblMinutos,
        listBoxSegundos = frmAjustesParquimetro.listBoxSegundos,
        ajusteParqui = {
            minutosAntes: parseInt(lblMinutos.text),
            duracion: parseInt(listBoxSegundos.selectedKey)
        };
    ajusteParqui.encendido = isios ? swichsEncendido.selectedIndex == 0 : swichsEncendido.selectedKeys != null;
    apagarAlarma(!ajusteParqui.encendido);
    kony.store.setItem("ajusteParquimetro", ajusteParqui);
    alert("Le recordará " + ajusteParqui.minutosAntes + " minutos antes durante " + ajusteParqui.duracion + " segundos el tiempo en el que finalizará el cronómetro del parquímetro");
}