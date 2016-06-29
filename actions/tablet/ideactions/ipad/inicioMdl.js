var indice = 0;
var intervalo = 3;

function inicioSlider() {
    var tiempo = "sliderTiempo";
    kony.timer.schedule(tiempo, inicioCambiarImagen, intervalo, true);
}

function inicioCambiarImagen() {
    inicio.smgtoImagenes.selectedIndex = [0, indice];
    indice++;
    if (indice == 3) {
        indice = 0;
    }
}