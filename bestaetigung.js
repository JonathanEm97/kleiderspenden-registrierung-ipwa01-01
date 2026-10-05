let kleidung = sessionStorage.getItem("kleidung");
let krisengebiet = sessionStorage.getItem("krisengebiet");
let ort = sessionStorage.getItem("ort");

let jetzt = new Date();

let datum = jetzt.toLocaleDateString("de-DE");
let uhrzeit = jetzt.toLocaleTimeString("de-DE", {
    hour: "2-digit",
    minute: "2-digit"
});

document.querySelector("#bestaetigung-kleidung").textContent = kleidung;
document.querySelector("#bestaetigung-krisengebiet").textContent = krisengebiet;
document.querySelector("#bestaetigung-datum").textContent = datum;
document.querySelector("#bestaetigung-uhrzeit").textContent = uhrzeit;
document.querySelector("#bestaetigung-ort").textContent = ort;
