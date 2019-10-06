const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {

    let word="";
    let splitArr = expr.split('**********');
    for (let enWord of splitArr) {
        for (let j = 0; j < enWord.length; j+=10) {
            let enLetter = "";
            for (let i = 0; i < 10; i += 2) {
                let letter = enWord[i+j] + enWord[i +j + 1];

                if (letter == "10") {
                    enLetter += ".";
                } else if (letter == "11") {
                    enLetter += "-";
                }
            }
            word += MORSE_TABLE[enLetter];

        }

        word += " ";
    }
    let outStr = word.substr(0, word.length-1);
    return (outStr);
}

module.exports = {
    decode
}