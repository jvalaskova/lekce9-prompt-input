// let jmeno;
// let inputElement = document.querySelector("input[name=jmeno]");

// function ziskejJmeno() {
//     jmeno = inputElement.nodeValue;
// }

// inputElement.addEventListener('change', ziskejJmeno);


//.......................................................

//Ukol číslo dva:
/* function secti() {
    let prvniCislo = parseFloat(document.querySelector('input[name=prvniCislo]').value);
    let druheCislo = parseFloat(document.querySelector('input[name=druheCislo]').value);

    if(isNaN(prvniCislo) || isNaN(druheCislo)) {
        return;
    }

    let vysledek = prvniCislo + druheCislo;

    ukazVysledek(vysledek);
}

// funkce pro zapsání BMI do uživatelského rozhraní
function ukazVysledek(vysledek) {
    document.querySelector('#vysledek > span').innerHTML = vysledek;
}

// event listener pro hlídání změny ve vstupech
document.querySelectorAll('input').forEach((element) => {
    element.addEventListener('change', secti)
}); */

//*******************-NEBO*****************
/* function secti(a, b) {
    let c = a + b;
    return c;
}

const vysledekElement = document.querySelector('#vysledek > span');

document.getElementById('tlacitko-secti').addEventListener('click', () => {
    let prvni = parseInt(document.querySelector('input[name=a]').value);
    let druhe = parseInt(document.querySelector('input[name=b]').value);
    vysledekElement.innerHTML = secti(prvni, druhe);
});  */

//............................................................................




// vytvoření promptů pro zadání čířky, výšky a hloubky a naplnění do proměnných
let sirka = prompt('Zadej šířku v cm');
let vyska = prompt('Zadej vysku v cm');
let hloubka = prompt('Zadej hloubku v cm');

function vlezeSe() {
    if (sirka > 62 || vyska > 70 || hloubka > 80) {
        document.getElementById('vysledek').innerHTML = 'je to naprd, pračka se ti tam nevleze';
    } else {
        document.getElementById('vysledek').innerHTML = 'je to ok, pračka se ti tam vleze'
    }
}

vlezeSe();

/* const sirkaMista = 62;
const vyskaMista = 70;
const hloubkaMista = 80;

let sirkaPracky = parseInt(prompt('Zadejte šířku pračky.'));
let vyskaPracky = parseInt(prompt('Zadejte výšku pračky.'));
let hloubkaPracky = parseInt(prompt('Zadejte hloubku pračky.'));

if (sirkaPracky < sirkaMista && vyskaPracky < vyskaMista && hloubkaPracky < hloubkaMista) {
    alert('Pračka se vleze! Jde se nakupovat :-)');
} else {
    alert('Pračka se nevleze! Hledáme dál :-(');
}  */