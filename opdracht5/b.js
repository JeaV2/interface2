function wachtEnVoerUit(seconden, functie) {
    setTimeout(functie, seconden * 1000);
}
function zegHallo() {
    console.log("Hallo!");
}
wachtEnVoerUit(3, zegHallo);