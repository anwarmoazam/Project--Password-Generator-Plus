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
const autoGenerateInput = document.getElementById('autogenerate');
const result = document.getElementById('result');
const generatePasswordBtn = document.getElementById('generate');
const copyPasswordBtn = document.getElementById('copy');
const symbols = document.getElementById('symbolstype');

const getRandomData = (dataset) => {
    return dataset[Math.floor(Math.random() * dataset.length)];
}

const generatePassword = (str) => {
    let onlyAlphabetSet = "";
    let randomPassword = "";
    for(let i=0; i<length.value; i++){
        randomPassword += getRandomData(str);
    }
    if(beginWithLetterInput.checked){
        if(numberSet.includes(randomPassword[0]) || symbolsSet.includes(randomPassword[0])){
            onlyAlphabetSet = onlyAlphabetSet.concat(lowerCaseSet, upperCaseSet);
            randomPassword = randomPassword.replace(randomPassword[0],getRandomData(onlyAlphabetSet));
        }
    }
    return randomPassword;
}

document.addEventListener('DOMContentLoaded',function(){
    if(autoGenerateInput.checked){
        let password = "";
        password = validateChecks();
        result.value = generatePassword(password);
    }
})

generatePasswordBtn.addEventListener('click',function(){
    let password = "";
    password = validateChecks();
    result.value = generatePassword(password);
});

const validateChecks = () => {
    let str = "";
    if(numberInput.checked) {
        str = str.concat(numberSet);
    }
    if(lowerCaseInput.checked){
        str = str.concat(lowerCaseSet);
    } 
    if(upperCaseInput.checked){
        str = str.concat(upperCaseSet)
    }
    if(symbolInput.checked){
        symbolsSet = symbols.value.trim();
        str = str.concat(symbolsSet);
    }
    
    return str;
}