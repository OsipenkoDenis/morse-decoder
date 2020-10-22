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
    let res = '';
    let tmpArr = expr.split('*'.repeat(10));
    let morseWordArray = [];
    for (let i = 0; i < tmpArr.length; i++) {
        for (let j = 9; j < tmpArr[i].length; j += 10) {
            morseWordArray.push(parseInt(tmpArr[i].substring(j + 1 - 10, j + 1)).toString());
        }
        morseWordArray.push(' ');
    }
    let classicWord = '';
    for (let k = 0; k < morseWordArray.length; ++k) {
        if (morseWordArray[k] === ' ') {
            res += ' ';
        } else {
            for (let p = 0; p < morseWordArray[k].length; p += 2) {
                if (morseWordArray[k][p] + morseWordArray[k][p + 1] === '11') {
                    classicWord += '-'
                } else if (morseWordArray[k][p] + morseWordArray[k][p + 1] === '10') {
                    classicWord += '.';
                }
            }
            res += MORSE_TABLE[classicWord];
            classicWord = '';
        }
    }


    return res.slice(0, -1);
}

module.exports = {
    decode
}