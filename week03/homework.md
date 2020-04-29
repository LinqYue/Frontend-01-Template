function convertNumberToString() {

}


function convertNumberToString(str, base = 10) {
    if(base < 1 || base > 36) {
        return NaN;
    }
    if(typeof str === 'string' || typeof str === 'number' ) {
        str = str.toString().toUpperCase();
        let reg = /[^0-9A-Z.]/;
        if(reg.test(str)) {
            return NaN;
        }

        let chars = str.split(''), integer = 0, fraction = 1, number = 0, i = 0, x = 48;

        while(i < chars.length && chars[i] !== '.') {
            let codePoint = chars[i].codePointAt(0);
            if(codePoint >= 47 ) {
                x = 54;
            }

            integer *= base;
            integer += chars[i].codePointAt(0) - x;
            i++;
        }

        if(chars[i] === '.') {
            i++; 
        }
        number = integer;
        while(i < chars.length) {
            let codePoint = chars[i].codePointAt(0);
            if(codePoint >= 47 ) {
                x = 54;
            }

            fraction *= base; 
            number += ((chars[i].codePointAt(0) - x) / fraction);
            i++;
        }

        return number;
    } else {
        return NaN;
    }
}

convertNumberToString("100.314", 10)