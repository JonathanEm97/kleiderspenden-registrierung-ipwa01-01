document.querySelector("#abholung").addEventListener("click", function() {
    document.querySelector("#abholadresse").style.display = "block";
});

document.querySelector("#geschaeftsstelle").addEventListener("click", function() {
    document.querySelector("#abholadresse").style.display = "none";
});

document.querySelector("form").onsubmit = function() {

    let kleidung = document.querySelector("#kleidung").value;
    let krisengebiet = document.querySelector("#krisengebiet").value;
    let uebergabe = document.querySelector('input[name="uebergabe"]:checked').value;

    let plzGeschaeftsstelle = "10115";

    if (kleidung === "") {
        alert("Bitte wähle eine Kleidungsart aus.");

    } else if (krisengebiet === "") {
        alert("Bitte wähle ein Krisengebiet aus.");

    } else if (uebergabe === "Abholung") {

        let strasse = document.querySelector("#strasse").value;
        let plz = document.querySelector("#plz").value;
        let ort = document.querySelector("#ort").value;

        if (strasse === "" || plz === "" || ort === "") {
            alert("Bitte gib die vollständige Abholadresse ein.");

        } else if (plz.length !== 5) {
            alert("Bitte gib eine fünfstellige Postleitzahl ein.");

        } else if (
            plz[0] !== plzGeschaeftsstelle[0] ||
            plz[1] !== plzGeschaeftsstelle[1]
        ) {
            alert("Die Abholadresse liegt nicht im Einzugsgebiet der Geschäftsstelle.");

} else {
    sessionStorage.setItem("kleidung", kleidung);
    sessionStorage.setItem("krisengebiet", krisengebiet);
    sessionStorage.setItem("ort", strasse + ", " + plz + " " + ort);

    window.location.href = "bestaetigung.html";
}

} else {
    sessionStorage.setItem("kleidung", kleidung);
    sessionStorage.setItem("krisengebiet", krisengebiet);
    sessionStorage.setItem("ort", "Geschäftsstelle, Musterstraße 10, 10115 Berlin");

    window.location.href = "bestaetigung.html";
}

    return false;
};
