let password = "";
const numberSet = "1234567890";
const lowerCaseSet = "abcdefghijklmnopqrstuvwxyz";
const upperCaseSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let symbolsSet = "";

// selectors
const length = document.getElementById('length');
const numberInput = document.getElementById('numbers');
const lowerCaseInput = document.getElementById('lowercase');
const upperCaseInput = document.getElementById('uppercase');
const beginWithLetterInput = document.getElementById('beginwithletter');
const symbolInput = document.getElementById('symbols');
const noSimilarCharacterInput = document.getElementById('nosimilarchar');
const noDuplicateCharaterInput = document.getElementById('noduplicatechar');
const noSequentialCharacterInput = document.getElementById('nosequentialchar');
const result = document.getElementById('result');
const generatePasswordBtn = document.getElementById('generate');
const copyPasswordBtn = document.getElementById('copy');
const symbols = document.getElementById('symbolstype');

const getRandomData = (dataset) => {
    return dataset[Math.floor(Math.random() * dataset.length)];
}

const generatePassword = () => {
    const passwordLength = length.value;

}

generatePasswordBtn.addEventListener('click',function(){
    let password = "";
    while(password.length < length.value){
        if(numberInput.checked && password.length < length.value) {
            password += getRandomData(numberSet);
            console.log("password in number",password);
        }
        if(lowerCaseInput.checked && password.length < length.value){
            password += getRandomData(lowerCaseSet);
            console.log("password in lowercase",password);
        } 
        if(upperCaseInput.checked && password.length < length.value){
            password += getRandomData(upperCaseSet);
            console.log("password in uppercase",password);

        }
        if(symbolInput.checked && password.length < length.value){
            symbolsSet = symbols.value.trim();
            console.log(symbolsSet);
            password += getRandomData(symbolsSet);
            console.log("password in symbol",password);
        }
    }
    result.value = password;
});
