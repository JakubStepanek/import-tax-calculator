// script.js
const jsonData = {
    "ProductList": [
        {
            "TL": 1,
            "Desc": "Živá zvířata"
        },
        {
            "TL": 2,
            "Desc": "Maso a jedlé masné odpady"
        },
        {
            "TL": 3,
            "Desc": "Ryby a korýši, měkkýši a další vodní bezobratlí"
        },
        {
            "TL": 4,
            "Desc": "Mléčné výrobky; kuřecí vejce; přírodní med; jedlé výrobky živočišného původu, nezařazené"
        },
        {
            "TL": 5,
            "Desc": "Výrobky živočišného původu, nezařazené"
        },
        {
            "TL": 6,
            "Desc": "Živé stromy a jiné rostliny; cibule, kořeny a podobné; řezané květiny a okrasné listy"
        },
        {
            "TL": 7,
            "Desc": "Jedlé rostliny a některé kořeny a hlízy"
        },
        {
            "TL": 8,
            "Desc": "Jedlé ovoce a ořechy; kůra z citrusových plodů nebo melounů"
        },
        {
            "TL": 9,
            "Desc": "Káva, čaj, mate a koření"
        },
        {
            "TL": 10,
            "Desc": "Obiloviny"
        },
        {
            "TL": 11,
            "Desc": "Výrobky mlýnského průmyslu; slad; škroby; inulin; pšeničný lepek"
        },
        {
            "TL": 12,
            "Desc": "Olejnatá semena a ořechovité plody; různá zrna, semena a ovoce; průmyslové nebo léčivé rostliny; sláma a krmivo"
        },
        {
            "TL": 13,
            "Desc": "Lák; pryskyřice a jiné rostlinné šťávy a extrakty"
        },
        {
            "TL": 14,
            "Desc": "Plátno z rostlinných materiálů; rostlinné výrobky, nezařazené"
        },
        {
            "TL": 15,
            "Desc": "Živočišné nebo rostlinné tuky a oleje a jejich štěpné produkty; připravené jedlé tuky; živočišné nebo rostlinné vosky"
        },
        {
            "TL": 16,
            "Desc": "Přípravky z masa, ryb nebo korýšů, měkkýšů nebo jiných vodních bezobratlých"
        },
        {
            "TL": 17,
            "Desc": "Cukry a cukrovinky"
        },
        {
            "TL": 18,
            "Desc": "Kakao a přípravky z kakaa"
        },
        {
            "TL": 19,
            "Desc": "Přípravky z obilovin, mouky, škrobu nebo mléka; výrobky pekařů"
        },
        {
            "TL": 20,
            "Desc": "Přípravky z ovoce, zeleniny, ořechů nebo jiných částí rostlin"
        },
        {
            "TL": 21,
            "Desc": "Různé jedlé přípravky"
        },
        {
            "TL": 22,
            "Desc": "Nápoje, destiláty a ocet"
        },
        {
            "TL": 23,
            "Desc": "Odpady a zbytky z potravinářského průmyslu; připravené krmivo pro zvířata"
        },
        {
            "TL": 24,
            "Desc": "Tabák a náhražky tabáku"
        },
        {
            "TL": 25,
            "Desc": "Sůl; síra; země a kámen; sádrové materiály, vápno a cement"
        },
        {
            "TL": 26,
            "Desc": "Rudy, struska a popel"
        },
        {
            "TL": 27,
            "Desc": "Minerální paliva, minerální oleje a produkty jejich destilace; ropné látky; minerální vosky"
        },
        {
            "TL": 28,
            "Desc": "Anorganické chemikálie; organické nebo anorganické sloučeniny drahých kovů, vzácných zemin, radioaktivních prvků nebo izotopů"
        },
        {
            "TL": 29,
            "Desc": "Organické chemikálie"
        },
        {
            "TL": 30,
            "Desc": "Farmaceutické výrobky"
        },
        {
            "TL": 31,
            "Desc": "Hnojiva"
        },
        {
            "TL": 32,
            "Desc": "Oděrné nebo barvící extrakty; taniny a jejich deriváty; barviva, pigmenty a jiné barvící látky; barvy a laky; tmely a jiné lepidla; inkousty"
        },
        {
            "TL": 33,
            "Desc": "Éterické oleje a rezinoidy; parfémy, kosmetické nebo toaletní přípravky"
        },
        {
            "TL": 34,
            "Desc": "Mýdla, organické povrchově aktivní látky, čisticí přípravky, mazací přípravky, umělé vosky, připravené vosky, leštidla nebo čisticí přípravky; svíčky a podobné výrobky; modelovací pasty, \"dentální vosky\" a dentální přípravky na bázi sádry"
        },
        {
            "TL": 35,
            "Desc": "Albuminoidní látky; modifikované škroby; lepidla; enzymy"
        },
        {
            "TL": 36,
            "Desc": "Výbušniny; pyrotechnické výrobky; zápalky; pyroforické slitiny; určité hořlavé přípravky"
        },
        {
            "TL": 37,
            "Desc": "Fotografické nebo filmové zboží"
        },
        {
            "TL": 38,
            "Desc": "Různé chemické výrobky"
        },
        {
            "TL": 39,
            "Desc": "Plasty a výrobky z nich"
        },
        {
            "TL": 40,
            "Desc": "Kaučuk a výrobky z něj"
        },
        {
            "TL": 41,
            "Desc": "Syrové kůže a kůže (kromě kožešin) a kůže"
        },
        {
            "TL": 42,
            "Desc": "Výrobky z kůže; sedlářství a postroje; cestovní zavazadla, kabelky a podobné kontejnery; výrobky ze střev zvířat (kromě hedvábných střev)"
        },
        {
            "TL": 43,
            "Desc": "Kožešiny a umělá kožešina; výrobky z nich"
        },
        {
            "TL": 44,
            "Desc": "Dřevo a výrobky z něj; dřevěné dřevěné uhlí"
        },
        {
            "TL": 45,
            "Desc": "Kork a výrobky z korku"
        },
        {
            "TL": 46,
            "Desc": "Výrobky ze slámy, esparta nebo jiných pletivých materiálů; košíky a pletené výrobky"
        },
        {
            "TL": 47,
            "Desc": "Buničina nebo jiný vláknitý celulózový materiál; recyklovaný (odpad a drť) papír a lepenka"
        },
        {
            "TL": 48,
            "Desc": "Papír a lepenka; výrobky z papírové buničiny, papíru nebo lepenky"
        },
        {
            "TL": 49,
            "Desc": "Tištěné knihy, noviny, obrázky a jiné výrobky tiskárenského průmyslu; rukopisy, přepisy a plány"
        },
        {
            "TL": 50,
            "Desc": "Hedvábí"
        },
        {
            "TL": 51,
            "Desc": "Vlna, jemná nebo hrubá živočišná srst; konopné příze a tkaniny"
        },
        {
            "TL": 52,
            "Desc": "Bavlna"
        },
        {
            "TL": 53,
            "Desc": "Jiné rostlinné textilní vlákna; papírová příze a tkaniny z papírové příze"
        },
        {
            "TL": 54,
            "Desc": "Umělé filamenty"
        },
        {
            "TL": 55,
            "Desc": "Umělé staplíkové vlákna"
        },
        {
            "TL": 56,
            "Desc": "Plst, filc a netkané textilie; speciální příze; lanka, šňůry, provazy a kabely a výrobky z nich"
        },
        {
            "TL": 57,
            "Desc": "Koberce a jiné textilní podlahové krytiny"
        },
        {
            "TL": 58,
            "Desc": "Speciální tkaniny; tuftované textilní tkaniny; krajky; gobelíny; ozdoby"
        },
        {
            "TL": 59,
            "Desc": "Impregnované, pokryté, potažené nebo laminované textilní tkaniny; textilní výrobky vhodné pro průmyslové použití"
        },
        {
            "TL": 60,
            "Desc": "Pletené nebo háčkované tkaniny"
        },
        {
            "TL": 61,
            "Desc": "Články oděvu a doplňky oděvu, pletené nebo háčkované"
        },
        {
            "TL": 62,
            "Desc": "Články oděvu a doplňky oděvu, nekvetené nebo háčkované"
        },
        {
            "TL": 63,
            "Desc": "Ostatní konfekční výrobky; soupravy; opotřebované oděvy a opotřebované textilní výrobky; hadry"
        },
        {
            "TL": 64,
            "Desc": "Obuv, nákrčníky a podobné; části těchto článků"
        },
        {
            "TL": 65,
            "Desc": "Pokrývky hlavy a jejich části"
        },
        {
            "TL": 66,
            "Desc": "Deštníky, sluneční deštníky, hole, hůlky, sedací hůlky, bičky, jízdní pruty a jejich části"
        },
        {
            "TL": 67,
            "Desc": "Připravené peří a duše a výrobky z peří nebo duše; umělé květiny; výrobky z lidských vlasů"
        },
        {
            "TL": 68,
            "Desc": "Články ze dřeva, sádry, cementu, azbestu, mica nebo podobných materiálů"
        },
        {
            "TL": 69,
            "Desc": "Keramické výrobky"
        },
        {
            "TL": 70,
            "Desc": "Sklo a skleněné výrobky"
        },
        {
            "TL": 71,
            "Desc": "Přírodní nebo kultivované perly, drahé nebo polodrahé kameny, drahé kovy, kovy oplechované drahým kovem a výrobky z nich; imitace šperků; mince"
        },
        {
            "TL": 72,
            "Desc": "Železo a ocel"
        },
        {
            "TL": 73,
            "Desc": "Články z železa nebo oceli"
        },
        {
            "TL": 74,
            "Desc": "Měď a výrobky z ní"
        },
        {
            "TL": 75,
            "Desc": "Nikel a výrobky z něj"
        },
        {
            "TL": 76,
            "Desc": "Hliník a výrobky z něj"
        },
        {
            "TL": 78,
            "Desc": "Olovo a výrobky z něj"
        },
        {
            "TL": 79,
            "Desc": "Zinek a výrobky z něj"
        },
        {
            "TL": 80,
            "Desc": "Cín a výrobky z něj"
        },
        {
            "TL": 81,
            "Desc": "Jiné neželezné kovy; kermety; články z těchto kovů"
        },
        {
            "TL": 82,
            "Desc": "Nástroje, nástroje, příbor, lžíce a vidličky z neželezných kovů; jejich části z neželezných kovů"
        },
        {
            "TL": 83,
            "Desc": "Různé výrobky z neželezných kovů"
        },
        {
            "TL": 84,
            "Desc": "Jaderné reaktory, kotle, stroje a mechanická zařízení; jejich části"
        },
        {
            "TL": 85,
            "Desc": "Elektrické stroje a zařízení a jejich části; záznamníky a reproduktory zvuku,\n      televizní obrazy a zvukoví záznamníky a reproduktory a části a příslušenství takových\n      výrobků"
        },
        {
            "TL": 86,
            "Desc": "Železniční nebo tramvajové lokomotivy, kolejová vozidla a jejich části;\n      kolejové nebo tramvajové pevnostní a montážní součásti a jejich části; mechanická\n      (včetně elektromechanické) signalizační zařízení všeho druhu"
        },
        {
            "TL": 87,
            "Desc": "Vozidla jiná než železniční nebo tramvajová; a jejich části a příslušenství"
        },
        {
            "TL": 88,
            "Desc": "Letadla, kosmické lodě a jejich části"
        },
        {
            "TL": 89,
            "Desc": "Lodě, čluny a plovoucí konstrukce"
        },
        {
            "TL": 90,
            "Desc": "Optické, fotografické, kinematografické, měřicí, kontrolní, přesné, lékařské nebo\n      chirurgické nástroje a přístroje; části a příslušenství těchto výrobků"
        },
        {
            "TL": 91,
            "Desc": "Hodiny a hodinky a jejich části"
        },
        {
            "TL": 92,
            "Desc": "Hudební nástroje; části a příslušenství takových výrobků"
        },
        {
            "TL": 93,
            "Desc": "Zbraně a střelivo; části a příslušenství takových výrobků"
        },
        {
            "TL": 94,
            "Desc": "Nábytek; lůžkoviny, matrace, matracové nosiče, polštáře a podobné plněné\n      zařízení; lampy a osvětlovací tělesa, jinde neuvedené nebo zahrnuté; osvětlené\n      značky, osvětlené jmenné desky a podobné; prefabrikované budovy"
        },
        {
            "TL": 95,
            "Desc": "Hračky, hry a sportovní potřeby; části a příslušenství takových výrobků"
        },
        {
            "TL": 96,
            "Desc": "Různé výrobky"
        },
        {
            "TL": 97,
            "Desc": "Díla umění, sběratelské kusy a starožitnosti"
        }
    ]
};

document.addEventListener("DOMContentLoaded", function () {
    const inputProductDescription = document.getElementById("inputProductDescription");

    // Iterate through the JSON data and create options
    jsonData.ProductList.forEach(product => {
        const option = document.createElement("option");
        option.value = product.TL; // Set the value of the option
        option.text = product.Desc; // Set the text of the option
        inputProductDescription.appendChild(option); // Append the option to the select element
    });

    const selectElement = document.getElementById("inputImportingFrom");
    const inputImportFromCurrency = document.getElementById("inputImportFromCurency");
    const currencies = new Set();
    fetch("https://restcountries.com/v3.1/all") //get all names
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error("Nepodařilo se nám získat data :(");
        })
        .then(countries => {
            // Sort countries alphabetically by name in ascending order
            countries.sort((a, b) => a.name.common.localeCompare(b.name.common));
            // Iterate through the sorted list of countries and populate the <select> element
            countries.forEach(country => {
                // Check if the country has currency information
                if (country.currencies) {
                    // Iterate through the currencies of the current country
                    Object.keys(country.currencies).forEach(currencyCode => {
                        // Add the currency code to the uniqueCurrencies Set
                        currencies.add(currencyCode);
                    });
                }
                const option = document.createElement("option");
                option.value = country.name.official; // Set value as official name
                option.textContent = country.name.common; // Set the visible text
                selectElement.appendChild(option);
            });

            //sort uniqueCurrencies
            let sortedCurrencies = Array.from(currencies).sort();
            currencies.clear();
            sortedCurrencies.forEach(currency => {
                currencies.add(currency);
            });


            currencies.forEach(currency => {
                const option = document.createElement("option");
                option.value = currency; // Set value as official name
                option.textContent = currency; // Set the visible text
                inputImportFromCurrency.appendChild(option);
            });
        })
        .catch(error => {
            console.error("Error:", error);
        });


    // Add event listener for the "change" event on the <select> element
    selectElement.addEventListener("change", function (event) {
        let selectedValue = event.target.value;

        fetch(`https://restcountries.com/v3.1/name/${selectedValue}?fields=currencies`)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error("Nepodařilo se nám získat data :(");
            })
            .then(data => {
                let currencyCode = Object.keys(data[0].currencies)[0];
                inputImportFromCurrency.value = currencyCode;
            })
            .catch(error => {
                console.error("Error fetching data: ", error);
            })

    });
});

function onSubmitForm() {
    // Get the form element by its ID
    const importForm = document.getElementById('importForm');
    // Collect form data
    const formData = {
        importingFrom: document.getElementById('inputImportingFrom').value,
        importFromCurrency: document.getElementById('inputImportFromCurency').value,
        importingTo: document.getElementById('inputImportingTo').value,
        productDescription: document.getElementById('inputProductDescription').value,
        productValue: document.getElementById('inputProductValue').value,
        productQuantity: document.getElementById('inputProductQuantity').value,
        shippingCost: document.getElementById('inputShippingCost').value,
        insuranceCost: document.getElementById('inputInsuranceCost').value,
        gift: document.getElementById('inputGift').checked,
    };

    TODO: //Vypsat data a vypočítat cenu

    // If importFrom is Europe, than CLO = 0 
    // case (giftValue): 
    // 150: 10%
    // 200: 15% 

    result = {
        Odkud: formData.importingFrom + " [" + formData.importFromCurrency + "]",
        Kam: formData.importingTo + " [CZK]",
        "Výše CLA": 200

    };
    // Display form data in the modal
    displayFormData(result);

    // Prevent form submission and page reload
    return false;
}

function displayFormData(formData) {
    // Set the modal content with the form data
    const formDataContent = document.getElementById('formDataContent');

    // Manually build a string representation of the form data
    let formDataString = "";
    for (const key in formData) {
        if (formData.hasOwnProperty(key)) {
            formDataString += `${key}: ${formData[key]}\n`;
        }
    }

    // Display the form data without curly braces
    formDataContent.textContent = formDataString;

    // Show the modal
    const formDataModal = new bootstrap.Modal(document.getElementById('formDataModal'));
    formDataModal.show();
}