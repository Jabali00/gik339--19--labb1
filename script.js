//Uppgift 4
// Hämta checkbox-elementet
const checkbox = document.querySelector('input[type="checkbox"]');
// Hämta alla textfält
const textfields = document.getElementsByClassName('textfield');
// Hämta knappen
const button = document.getElementById('removeButton');
// Hämta div-elementet
const Divcontent = document.querySelector('#Divcontent');

//Uppgift 5

function handleInputChange(e) {
    console.log('Event triggered by:', e.target);
    const elementName = e.target.name;
    if (elementName === "content") {
        const Divcontent = document.querySelector('#Divcontent');
        Divcontent.innerHTML = e.target.value;
    }
}

//Uppgift 6
// Eventlyssnare till Checkboxen
checkbox.addEventListener('change', function() {
    const colorInput = document.querySelector('input[name="color"]');
    Divcontent.style.backgroundColor = colorInput.value;
});

// Eventlyssnare till Textfälten
Array.from(textfields).forEach(field => {
    field.addEventListener('input', handleInputChange);
});

// Eventlyssnare till Knappen
button.addEventListener('click', function() {
    Divcontent.style.display = 'none';
});

