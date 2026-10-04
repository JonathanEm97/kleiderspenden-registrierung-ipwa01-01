document.querySelector("form").onsubmit = function() {

    let kleidung = document.querySelector("#kleidung").value;
    let krisengebiet = document.querySelector("#krisengebiet").value;
    let uebergabe = document.querySelector('input[name="uebergabe"]:checked').value;

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
        } else {
            alert("Die Eingaben für die Abholung sind vollständig.");
        }

    } else {
        alert("Die Eingaben für die Übergabe an der Geschäftsstelle sind vollständig.");
    }

    return false;
};
