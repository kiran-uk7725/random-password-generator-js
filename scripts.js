const inputEl = document.getElementById("password");
const copyBtnEl = document.getElementById("copy-btn");
const generateBtnEl = document.getElementById("generate-btn");
const notifyEl = document.getElementById("notify");

generateBtnEl.addEventListener("click", () => {
    inputEl.value = generatePassword();
    copyBtnEl.disabled = false;
});

copyBtnEl.addEventListener("click", () => {
    navigator.clipboard.writeText(inputEl.value);
    inputEl.value = '';
    notifyEl.classList.toggle("none");
    generateBtnEl.disabled = true;
    copyBtnEl.disabled = true;
    setTimeout(() => {
        notifyEl.classList.toggle("none");
        generateBtnEl.disabled = false;
    }, 1500);
})

function generatePassword(length=12){
    let password = "";
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const number = "0123456789";
    const symbol = "@#$%^&*()_~|}{[]></-=";

    password += upperCase[randomIndex(upperCase.length)];
    password += lowerCase[randomIndex(lowerCase.length)];
    password += number[randomIndex(number.length)];
    password += symbol[randomIndex(symbol.length)];

    const allChars = upperCase + lowerCase + number + symbol;

    while(password.length <= length){
        password += randomChar(allChars);
    }

    return password;
}

function randomChar(str){
    return str[randomIndex(str.length)];
}

function randomIndex(length){
    return Math.floor(Math.random() * length);
}