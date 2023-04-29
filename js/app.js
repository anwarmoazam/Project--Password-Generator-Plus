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
        while (index < randomPassword.length) {
            let char = randomPassword[index];
            str = str.replace(randomPassword[index], "");
            for (let i = randomPassword.length - 1; i > index; i--) {
                if (char === randomPassword[i]) {
                    let start = "", end = "", newChar = "";
                    str = str.replace(randomPassword[i], "");
                    start = randomPassword.substr(0, i);
                    end = randomPassword.substr(i);
                    newChar = getRandomData(str);
                    end = end.replace(randomPassword[i], newChar);
                    str = str.replace(end[0], "");
                    randomPassword = start + end;
                }
                str = str.replace(randomPassword[i], "");
            }
            index++;
        }
    }

    if (noSequentialCharacterInput.checked) {
        str = `${numberSet},${upperCaseSet},${lowerCaseSet}`;
        let str1 = str.split(',');
        console.log("Sequential checked");
        console.log(str1);
        for (let i = 1; i < randomPassword.length; i++) {
            let firstChar = randomPassword[i - 1], nextChar = randomPassword[i];
            console.log('first element i-1 : ', randomPassword[i - 1]);
            console.log('second element i : ', randomPassword[i]);
            for (let j = 0; j < str1.length; j++) {
                console.log(str1[j]);
                for(let k=1; k<str1[j].length; k++){
                    console.log('first element k : ', str1[j][k-1]);
                    console.log('second element j : ', str1[j][k]);
                    if (firstChar === str1[j][k - 1] && nextChar === str1[j][k]) {
                        console.log('if condition');
                        console.log("Sequential Char found");
                        console.log('before random password = ',randomPassword);
                        let start = "", end = "", newChar = "";
                        str = str.replace(randomPassword[i], "");
                        console.log('str = ',str);
                        start = randomPassword.substr(0, i);
                        console.log('start = ',start);
                        end = randomPassword.substr(i);
                        console.log('end = ',end);
                        newChar = getRandomData(str);
                        end = end.replace(randomPassword[i], newChar);
                        str = str.replace(end[0], "");
                        randomPassword = start + end;
                        console.log('after random password = ',randomPassword);
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
    let password = "";
    password = validateChecks();
    result.value = generatePassword(password);
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