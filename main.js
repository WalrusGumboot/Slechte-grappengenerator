plaatsen = [
    "Afghanistan",
    "Aland",
    "Albanie",
    "Algerije",
    "Amerikaans-Samoa",
    "Amerikaanse Maagdeneilanden",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antarctica",
    "Antigua en Barbuda",
    "Argentinie",
    "Armenie",
    "Aruba",
    "Australie",
    "Azerbeidzjan",
    "Bahama's",
    "Bahrein",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "België",
    "Belize",
    "Benin",
    "Bermuda",
    "Bhutan",
    "Bolivia",
    "Bosnie en Herzegovina",
    "Botswana",
    "Bouveteiland",
    "Brazilië",
    "Brunei",
    "Bulgarije",
    "Burkina Faso",
    "Burundi",
    "Cambodja",
    "Canada",
    "Caribisch Nederland",
    "Centraal-Afrikaanse Republiek",
    "Chili",
    "China",
    "Christmaseiland",
    "Cocoseilanden",
    "Colombia",
    "Comoren",
    "Congo-Brazzaville",
    "Congo-Kinshasa",
    "Cookeilanden",
    "Costa Rica",
    "Cuba",
    "Curacao",
    "Cyprus",
    "Denemarken",
    "Djibouti",
    "Dominica",
    "Dominicaanse Republiek",
    "Duitsland",
    "Ecuador",
    "Egypte",
    "El Salvador",
    "Equatoriaal-Guinea",
    "Eritrea",
    "Estland",
    "Ethiopie",
    "Faeroer",
    "Falklandeilanden",
    "Fiji",
    "Filipijnen",
    "Finland",
    "Frankrijk",
    "Frans-Guyana",
    "Frans-Polynesie",
    "Gabon",
    "Gambia",
    "Georgie",
    "Ghana",
    "Gibraltar",
    "Grenada",
    "Griekenland",
    "Groenland",
    "Guadeloupe",
    "Guam",
    "Guatemala",
    "Guernsey",
    "Guinee",
    "Guinee-Bissau",
    "Guyana",
    "Haiti",
    "Heard en McDonaldeilanden",
    "Honduras",
    "Hongarije",
    "Hong Kong",
    "Ierland",
    "Ijsland",
    "India",
    "Indonesie",
    "Irak",
    "Iran",
    "Isle of Man",
    "Israel",
    "Italie",
    "Ivoorkust",
    "Jamaica",
    "Japan",
    "Jemen",
    "Jersey",
    "Jordanie",
    "Kaaimaneilanden",
    "Kaapverdie",
    "Kameroen",
    "Kazachstan",
    "Kenia",
    "Kirgizie",
    "Kiribati",
    "Koeweit",
    "Kroatie",
    "Laos",
    "Lesotho",
    "Letland",
    "Libanon",
    "Liberia",
    "Libie",
    "Liechtenstein",
    "Litouwen",
    "Luxemburg",
    "Macau",
    "Madagaskar",
    "Malawi",
    "Maldiven",
    "Maleisie",
    "Mali",
    "Malta",
    "Marokko",
    "Marshalleilanden",
    "Martinique",
    "Mauritanie",
    "Mauritius",
    "Mayotte",
    "Mexico",
    "Micronesia",
    "Moldavie",
    "Monaco",
    "Mongolie",
    "Montenegro",
    "Montserrat",
    "Mozambique",
    "Myanmar",
    "Namibie",
    "Nauru",
    "Nederland",
    "Nepal",
    "Nicaragua",
    "Nieuw-Caledonie",
    "Nieuw-Zeeland",
    "Niger",
    "Nigeria",
    "Niue",
    "Noord-Korea",
    "Noord-Macedonië",
    "Noordelijke Marianen",
    "Noorwegen",
    "Norfolk",
    "Oeganda",
    "Oekraïne",
    "Oezbekistan",
    "Oman",
    "Oost-Timor",
    "Oostenrijk",
    "Pakistan",
    "Palau",
    "Palestina",
    "Panama",
    "Papoea-Nieuw-Guinea",
    "Paraguay",
    "Peru",
    "Pitcairneilanden",
    "Polen",
    "Portugal",
    "Puerto Rico",
    "Qatar",
    "Reunion",
    "Roemenie",
    "Rusland",
    "Rwanda",
    "Samoa",
    "San Marino",
    "Sao Tome en Principe",
    "Saoedi-Arabie",
    "Senegal",
    "Servie",
    "Seychellen",
    "Sierra Leone",
    "Singapore",
    "Sint-Helena",
    "Sint-Maarten",
    "Slovenie",
    "Slowakije",
    "Soedan",
    "Somalie",
    "Spanje",
    "Spitsbergen en Jan Mayen",
    "Sri Lanka",
    "Suriname",
    "Syrie",
    "Tadzjikistan",
    "Taiwan",
    "Tanzania",
    "Thailand",
    "Togo",
    "Tokelau",
    "Tonga",
    "Trinidad en Tobago",
    "Tsjaad",
    "Tsjechie",
    "Tunesie",
    "Turkije",
    "Turkmenistan",
    "Turks- en Caicoseilanden",
    "Tuvalu",
    "Uruguay",
    "Vanuatu",
    "Vaticaanstad",
    "Venezuela",
    "Verenigd Koninkrijk",
    "Verenigde Arabische Emiraten",
    "Verenigde Staten",
    "Vietnam",
    "Wallis en Futuna",
    "Westelijke Sahara",
    "Zambia",
    "Zimbabwe",
    "Zuid-Afrika",
    "Zuid-Korea",
    "Zuid-Soedan",
    "Zweden",
    "Zwitserland"
];

function init() {
    for (let i = 0; i < plaatsen.length; i++) {

        plaatsen[i] = plaatsen[i].toLowerCase();
    }
    console.log(plaatsen);
}

function grapify() {
    punchline = document.getElementById("word").value;
    namen = [];
    substrings = [];

    //counter = 0
    currentTest = punchline;

    // Zoek langste substring en plaats m in plaatsen
    while (punchline != "") {
        counter++

        //if (counter > 10) {console.log("exiting..."); break;} //infinite loop protection

        for (let p of plaatsen) { //holy shit this is inefficient
            currentTest = punchline;

            p_subs = []
            for (let i = p.length; i > 0; i--) {
                p_subs.push(p.substring(0, i))
            }
            console.log(p_subs, currentTest)

            while (currentTest.length >= 1) {
                if (p_subs.includes(currentTest)) {
                    namen.push(p);
                    substrings.push(currentTest)
                    
                    punchline = punchline.substring(currentTest.length)
                    currentTest = punchline;
                    break;

                } else {
                    currentTest = currentTest.substring(0, currentTest.length - 1) //remove last character
                }
            }
        }
    }
    namenString = ""

    for (let n of namen) {
        namenString += n[0].toUpperCase() + n.substring(1) + ", "
        console.log(n[0].toUpperCase() + n.substring(1) + ", ")
    }
    
    console.log(namen, substrings)
    resp = `Hoe noem je iemand uit ${namenString} samen? <br><br>Een <b>${substrings.join("-")}</b>!\nHAHAHHAHAHAHAHAHHAHAHAHAH`

    document.getElementById("result").innerHTML = resp;
}
