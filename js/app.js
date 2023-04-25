let password = "";
const numberSet = "1234567890";
const lowerCaseSet = "abcdefghijklmnopqrstuvwxyz";
const upperCaseSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const symbolsSet = "!;#$%&'()*+,-./:;<=>?@[]^_`{|}~";

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
const generatePasswordBtn = document.getElementById('generate');
const copyPasswordBtn = document.getElementById('copy');

const getRandomData = (dataset) => {
    return dataset[Math.floor(Math.random() * dataset.length)];
}

const generatePassword = () => {
    const passwordLength = length.value;
    console.log(passwordLength);
    if(numberInput.checked){
        for(let i=0; i<passwordLength; i++){
            password += getRandomData(numberSet);
            console.log(password);
        }
    }
    if(lowerCaseInput.checked){
        for(let i=0; i<passwordLength; i++){
            password += getRandomData(lowerCaseSet);
            console.log(password);
        }
    }
    // if(password.length < passwordLength){
    //     return generatePassword();
    // }
}

generatePasswordBtn.addEventListener('click',function(){
    generatePassword();
});
