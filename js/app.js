/*
I, l, 1, !
0, O, o, D, Q
5, S, s
8, B
6, b, G
9, g, q
2, Z, z
m, n, r
u, v, y
p, d
C, G, c, e
a, e
V, Y, W, w
A, R, K, k
x, X, *
h, n, b
*/

// let password = "";
const numberSet = "1234567890";
const lowerCaseSet = "abcdefghijklmnopqrstuvwxyz";
const upperCaseSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let symbolsSet = "";

// let similarCharSet = [
//     ['I', 'l', '1', '!'], ['0', 'O', 'o', 'D', 'Q'], ['5', 'S', 's'], ['8', 'B'], ['6', 'b', 'G'], ['9', 'g', 'q'],
//     ['2', 'Z', 'z'], ['m', 'n', 'r'], ['u', 'v', 'y'], ['p', 'd'], ['C', 'G', 'c', 'e'], ['a', 'e'], ['V', 'Y', 'W', 'w'],
//     ['A', 'R', 'K', 'k'], ['x', 'X', '*'], ['h', 'n', 'b']
// ];

let similarCharSet = [
    ['I', 'l', '1', '!'], ['0', 'O', 'o', 'D', 'Q'], ['5', 'S', 's'], ['8', 'B'], ['6', 'b', 'G', 'h', 'n'], ['9', 'g', 'q'],
    ['2', 'Z', 'z'], ['m', 'n', 'r'], ['u', 'v', 'y'], ['p', 'd'], ['C', 'G', 'c', 'e'], ['a', 'e'], ['V', 'Y', 'W', 'w'],
    ['A', 'R', 'K', 'k'], ['x', 'X', '*']
];

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
    console.log('str in generatepass function',str);
    for (let i = 0; i < length.value; i++) {
        randomPassword += getRandomData(str);
    }
    if (beginWithLetterInput.checked) {
        if (numberSet.includes(randomPassword[0]) || symbolsSet.includes(randomPassword[0])) {
            onlyAlphabetSet = onlyAlphabetSet.concat(lowerCaseSet, upperCaseSet);
            randomPassword = randomPassword.replace(randomPassword[0], getRandomData(onlyAlphabetSet));
        }
    }
    if (noSimilarCharacterInput.checked) {
        // BF2gu>]Cl^v2AU%)`cUp
        // randomPassword = "BF2gu>]Cl^v2AU%)`cUp";
        // randomPassword = "oP?)>6RB$xu{.oS]f[`Elm.^M?-bMlmiZ/[9%];U";

        /*
        let char = "";
        let temp = [];
        for (let i = 0; i < similarCharSet.length; i++) {
            console.log("outer loop");
            for (let j = 0; j < similarCharSet[i].length; j++) {
                console.log("inner loop");
                console.log(similarCharSet[i][j]);
                if (randomPassword.includes(similarCharSet[i][j])) {
                    // console.log(similarCharSet[i][j]);
                    console.log("if block");
                    char = similarCharSet[i][j];
                    console.log(char);
                    temp = [...similarCharSet[i]];
                    console.log('Before delete element', temp);
                    let index = temp.indexOf(char);
                    console.log(index);
                    temp.splice(index, 1);
                    console.log('After delete element', temp);

                    for (let k = 0; k < temp.length; k++) {
                        console.log('temp[k]', temp[k]);
                        if (randomPassword.includes(temp[k])) {
                            console.log('true in temp[k]')
                            console.log(temp[k]);
                            console.log('Before replace str : ', str);
                            str = str.replace(temp[k], "");
                            console.log('After replace str : ', str);
                            let newChar = getRandomData(str);
                            console.log(newChar);
                            console.log('Before random pass', randomPassword);
                            randomPassword = randomPassword.replace(temp[k], newChar);
                            console.log('After random pass', randomPassword);
                        }
                        console.log('false');
                    }
                }
            }
        }
        console.log('similar check on');
        */

    }

    if (noDuplicateCharaterInput.checked) {
        let index = 0;
        let tempStr = str;
        console.log('random password in duplicate if ',randomPassword);
        while (index < randomPassword.length) {
            let char = randomPassword[index];
            console.log('tempstr = ',tempStr);
            console.log('char = ',char);
            tempStr = tempStr.replace(randomPassword[index], "");
            console.log('tempstr = ',tempStr);
            for (let i = randomPassword.length - 1; i > index; i--) {
                console.log('for loop ',tempStr);
                console.log('char = ',char);
                console.log('randompassword[i]',randomPassword[i]);
                if (char === randomPassword[i]) {
                    console.log('randompassword[i]',randomPassword[i]);
                    console.log('if block in for loop ');
                    console.log('char = ',char);

                    let start = "", end = "", newChar = "";
                    console.log('tempstr = ',tempStr);
                    tempStr = tempStr.replace(randomPassword[i], "");
                    start = randomPassword.substr(0, i);
                    end = randomPassword.substr(i);
                    newChar = getRandomData(tempStr);
                    end = end.replace(randomPassword[i], newChar);
                    tempStr = tempStr.replace(end[0], "");
                    randomPassword = start + end;
                    console.log('random password ',randomPassword);
                }
                tempStr = tempStr.replace(randomPassword[i], "");
            }
            index++;
        }
    }

    if (noSequentialCharacterInput.checked) {
        let tempStr = `${numberSet},${upperCaseSet},${lowerCaseSet}`;
        let strArr = tempStr.split(',');
        for (let i = 1; i < randomPassword.length; i++) {
            let firstChar = randomPassword[i - 1], nextChar = randomPassword[i];
            for (let j = 0; j < strArr.length; j++) {
                for(let k=1; k<strArr[j].length; k++){
                    if (firstChar === strArr[j][k - 1] && nextChar === strArr[j][k]) {
                        let start = "", end = "", newChar = "";
                        tempStr = tempStr.replace(randomPassword[i], "");
                        start = randomPassword.substr(0, i);
                        end = randomPassword.substr(i);
                        newChar = getRandomData(str);
                        end = end.replace(randomPassword[i], newChar);
                        tempStr = tempStr.replace(end[0], "");
                        randomPassword = start + end;
                    }
                }
            }
        }
    }
    return randomPassword;
}

document.addEventListener('DOMContentLoaded', function () {
    if (autoGenerateInput.checked) {
        let password = "";
        password = validateChecks();
        result.value = generatePassword(password);
    }
})

generatePasswordBtn.addEventListener('click', function () {
    console.log('btn click listen');
    let password = "";
    password = validateChecks();
    console.log('password = ',password);
    password = generatePassword(password);
    console.log('length of selector ',length.value);
    console.log('length of pass ',password.length);
    if(length.value > password.length){
        result.value = "You have select too large password"
    } else{
        console.log(password);
        result.value = password;
    }
    // result.value = generatePassword(password);
    
});

const validateChecks = () => {
    let str = "";
    if (numberInput.checked) {
        str = str.concat(numberSet);
    }
    if (lowerCaseInput.checked) {
        str = str.concat(lowerCaseSet);
    }
    if (upperCaseInput.checked) {
        str = str.concat(upperCaseSet)
    }
    if (symbolInput.checked) {
        symbolsSet = symbols.value.trim();
        str = str.concat(symbolsSet);
    }
    return str;
}