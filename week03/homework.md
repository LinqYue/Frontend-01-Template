function convertNumberToString() {

}


function convertNumberToString(str, base = 10) {
    if(base < 1 || base > 36) {
        return NaN;
    }
    if(typeof str === 'string' || typeof str === 'number' ) {
        str = str.toString().toUpperCase();
        let chars = str.split(''), integer = 0, fraction = 1, number = 0, i = 0;

        while(i < chars.length && chars[i] !== '.') {
            integer *= base;
            integer += chars[i].codePointAt(0) - '0'.codePointAt(0);
            i++;
        }

        if(chars[i] === '.') {
            i++; 
        }
        number = integer;
        while(i < chars.length) {
            fraction *= base; 
            number += ((chars[i].codePointAt(0) - '0'.codePointAt(0)) / fraction);
            i++;
        }

        return number;
    } else {
        return NaN;
    }
}

convertNumberToString("100.314", 10)