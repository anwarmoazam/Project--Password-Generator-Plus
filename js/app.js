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
let similarCharSet = [
    ['I','l','1','!'],['0','O','o','D','Q'],['5','S','s'],['8','B'],['6','b','G'],['9','g','q'],
    ['2','Z','z'],['m','n','r'],['u','v','y'],['p','d'],['C','G','c','e'],['a','e'],['V','Y','W','w'],
    ['A','R','K','k'],['x','X','*'],['h','n','b']
];
let similarCharSet1 = ['Il1!','0OoDQ','5Ss','8B','6bG','9gq','2Zz','mnr','uvy','pd','CGce','ae','VYWw','ARKk','xX*','hnb'];

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
    if(noSimilarCharacterInput.checked){
        let char = "";
        let temp = [];
        for(let i=0; i<similarCharSet.length; i++){
            for(let j=0; j<similarCharSet[i].length; j++){
                if(randomPassword.includes(similarCharSet[i][j])){
                    char = similarCharSet[i][j];
                    temp = similarCharSet[i];
                    let index = temp.indexOf(char);
                    temp.splice(index,1);
                    for(let k=0; k<temp.length; k++){
                        if(randomPassword.includes(temp[k])){
                            str = str.replace(temp[k],"");
                            let newChar = getRandomData(str);
                            randomPassword = randomPassword.replace(temp[k],newChar);
                        }
                    }
                }
            }
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