
/*
 * Dette er ikke egentlig en oppgave, men det er for å skjønne hvordan modulus fungerer. 
 * 
 * Modulus er veldig ofte brukt i programmering 
 * (Vanligvis for å hente ut hver tredje, fjerde, femte... element fra en liste)
 * 
 * Modulus gir verdien som er igjen hvis man minuser verdi A med verdi B til verdi B er større enn verdi A
 * 
 * Så F.eks. 7 modulus 2 vil være:
 * 7 - 2 = 5
 * 5 - 2 = 3
 * 3 - 2 = 1
 * 1 er mindre enn 2, så resultatet er 1.
 * 
 * i programmering vil man vanligvis bare si:
 * 7 % 2
 * men her er en liten funksjon jeg har lagd for å gå ordentlig gjennom det
 *  
 */



var val = document.getElementById("value");         // "val" er det nummeret du har lyst til å redusere 
var mod = document.getElementById("modulus");       // "mod" er hvor mye du vil redusere verdien med 
var res = document.getElementById("result");        // "res" er resultatet (f.eks. 7 % 2 = 1)
var itr = document.getElementById("iterations");    // "itr" er hvor mange ganger verdien blir redusert (7 % 2 vil skje 3 ganger)

var initialV = document.getElementById("initialValue");
var modulusV = document.getElementById("modulusValue");

valueChange();
function valueChange() {
    val.innerHTML = initialV.value;
    mod.innerHTML = modulusV.value;
    res.innerHTML = initialV.value % modulusV.value;                 
    if (initialV.value >= modulusV.value && modulusV.value > 0) {   
        itr.innerHTML = Math.floor(initialV.value / modulusV.value);    
        /*
         * får å se hvor mange ganger verdi "B" kan fjernes fra verdi "A" 
         * trenger vi bare dele verdi "A" med verdi "B" og fjerne alle desimaltall (Math.floor())
         */  
    }

}