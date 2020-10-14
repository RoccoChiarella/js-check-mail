var email = ["rocco.chiarella.rc@gmail.com", "rocco.chiarella@alice.it"];

var emailDaTrovare = prompt('Inserisci la tua email');

var trovata = false;

for (var i = 0; i < email.length; i++) {
    if (emailDaTrovare == email[i]) {
        trovata = true;
    }
}

if (trovata) {
    document.getElementById('email').innerHTML = "sei in lista";
} else {
    document.getElementById('email').innerHTML = "non sei in lista";
}
