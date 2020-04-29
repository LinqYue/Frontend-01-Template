function convertNumberToString(number, x = 10) {
    let integer = Math.floor(number),
        null = null,
        str;
    if (x === 10) {
        fraction = ('' + number).match(/\.\d*/)[0];
    } 
    while(integer > 0) {
      str += integer % x ;
      integer = Math.floor(integer / x);
    }
    return fraction ? string + fraction : string;
}


function convertNumberToString(str, base = 10) {
    if(base < 1 || base > 36) {
        return NaN;
    }
    if(typeof str === 'string' || typeof str === 'number' ) {
        str = str.toString().toUpperCase();
        let reg = /[^\+\-0-9A-Z.]/;
        if(reg.test(str)) {
            return NaN;
        }

        let chars = str.split(''), integer = 0, fraction = 0, number = 0, i = 0, x = 48, fractionPart = 0;

        while(i < chars.length && chars[i] !== '.') {
            let codePoint = chars[i].codePointAt(0);
            if(codePoint >= 65 ) {
                x = 54;
            }

            integer *= base;
            integer += codePoint - x;
            i++;
        }

        if(chars[i] === '.') {
            i++; 
            fractionPart = chars.length - i;
        }
         
        while(i < chars.length) {
            let codePoint = chars[i].codePointAt(0);
            if(codePoint >= 65 ) {
                x = 54;
            }

            fraction *= base; 
            fraction += codePoint - x;
            i++;
        }
        number = (integer * Math.pow(base, fractionPart)  + fraction) / Math.pow(base, fractionPart);
        return number;
    } else {
        return NaN;
    }
}

convertNumberToString("100.314", 10)