const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {


    let wordArray = expr.split("**********");
    let resultString = ""
    
    wordArray.forEach((i) => {


        for (let j = 0; j < i.length / 10; j++) {
            resultString += MORSE_TABLE[i.substr(j * 10, 10).replace(/10/ig, ".").replace(/11/ig, "-").replace(/0/ig, "")]



        }
        resultString += " "


    });


    return resultString.substr(0, resultString.length - 1);





    // write your solution here
}

module.exports = {
    decode
}