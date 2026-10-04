document.querySelector("form").onsubmit = function() {

    let kleidung = document.querySelector("#kleidung").value;
    let krisengebiet = document.querySelector("#krisengebiet").value;

    if (kleidung === "") {
        alert("Bitte wähle eine Kleidungsart aus.");
    } else if (krisengebiet === "") {
        alert("Bitte wähle ein Krisengebiet aus.");
    } else {
        alert("Die Eingaben sind vollständig.");
    }

    return false;
};
