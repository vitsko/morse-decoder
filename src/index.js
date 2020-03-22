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

function getLetter(expr) {
    if (expr[0] == '*') {
        return ' ';
    }

    let regexpPosition = 0;//expr.search('/1*/');

    for (; regexpPosition < expr.length && expr[regexpPosition] != '1'; regexpPosition++);

    expr = expr.substr(regexpPosition, expr.length - regexpPosition);

    let result = '';

    for (let i = 0; i < expr.length; i += 2) {
        if (expr.substr(i, 2) == '10') {
            result = result.concat('.');
        } else if (expr.substr(i, 2) == '11') {
            result = result.concat('-');
        }
    }

    return MORSE_TABLE[result];
}

function decode(expr) {
    result = '';

    for (let i = 0; i < expr.length; i += 10) {
        let sub = expr.substr(i, 10);
        result = result.concat(getLetter(sub));
    }

    return result;
}

module.exports = {
    decode
}