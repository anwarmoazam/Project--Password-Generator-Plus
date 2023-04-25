let password = "";
const numberSet = "1234567890";
const lowerCaseSet = "abcdefghijklmnopqrstuvwxyz";
const upperCaseSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const symbolsSet = "";

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
const symbols = document.getElementById('symbolstype');

const getRandomData = (dataset) => {
    return dataset[Math.floor(Math.random() * dataset.length)];
}

const generatePassword = () => {
    const passwordLength = length.value;

}

generatePasswordBtn.addEventListener('click',function(){
    generatePassword();

});
