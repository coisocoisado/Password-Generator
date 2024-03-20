const pwdLength = document.getElementById("psw-length");
const slider = document.getElementById("slider");

// make the span the current value so it is not empty
pwdLength.innerHTML = slider.value;

// when the slider changes its value then update the span
slider.oninput = function() {
    pwdLength.innerHTML = slider.value;
}

const refresh = document.getElementById("refresh");

refresh.addEventListener('mouseup', function() {
    this.classList.remove('rotate');
    setTimeout(() => {
        this.classList.add('rotate')
    }, 10);
})

// create empty arrays to be set later with CreateArrays();
let alphabet = [];
let numbers = [];
let special = [];

// get alphabet, numbers and special characters array
function CreateArrays() {
    // Loop through ASCII character codes for numbers (48-57), uppercase letters (65-90), and lowercase letters (97-122)
    for (let i = 48; i <= 57; i++) { // Numbers 0-9
        numbers.push(String.fromCharCode(i));
    }
    for (let j = 65; j <= 90; j++) { // Uppercase letters A-Z
        alphabet.push(String.fromCharCode(j));
    }
    for (let k = 97; k <= 122; k++) { // Lowercase letters a-z
        alphabet.push(String.fromCharCode(k));
    }

    // Loop through ASCII character codes for common special characters
    for (let m = 33; m <= 47; m++) { // Special characters ! to /
        special.push(String.fromCharCode(m));
    }
    for (let n = 58; n <= 64; n++) { // Special characters : to @
        special.push(String.fromCharCode(n));
    }
    for (let p = 91; p <= 96; p++) { // Special characters [ to `
        special.push(String.fromCharCode(p));
    }
    for (let q = 123; q <= 126; q++) { // Special characters { to ~
        special.push(String.fromCharCode(q));
    }
}

const letterSwitch = document.getElementById('letter-switch');
const numberSwitch = document.getElementById('number-switch');
const specialCharSwitch = document.getElementById('special-switch');

const output = document.getElementById('pwd-output')

function GeneratePassword() {
    output.value = "";
    let password = "";
    
    CreateArrays();
    
    if (!letterSwitch.checked){
        alphabet = [];
    }
    if (!numberSwitch.checked){
        numbers = [];
    }
    if (!specialCharSwitch.checked){
        special = [];
    }

    let characters = alphabet.concat(numbers, special);
    
    for (let a = 0; a < slider.value; a++){
        let randomNumber = Math.floor(Math.random() * characters.length);

        let randomChar = characters[randomNumber];

        password += randomChar; 
    }
    output.value = password;
}

function CopyToClipboard() {
    // Select the text field
    output.select();
    output.setSelectionRange(0, 99999); // For mobile devices
  
     // Copy the text inside the text field
    navigator.clipboard.writeText(output.value);
  }

CreateArrays();