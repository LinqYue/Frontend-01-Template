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

        let chars = [],  //字符数组
            isNegative = false,         //是否是负数
            integer = 0,            //整数部分
            fraction = 0,           //小数部分
            number = 0,             //number
            i = 0,                  //循环的起点
            x = 48,                 //"0"的码点
            decimalDigits = 0;      //小数位数

        let strArr = str.split('E'),    //判断是否是科学计数法
            isScientificNotation = false,                 //是否是科学计数法
            str1 = ''                   //科学计算法e前面部分
            str2 = '',                  //科学计算法e后面部分
            isStr2Negative = false;     //科学计算法e后面部分是否为负数
        
        //是否为负
        if(str[0] === '-') {
            isNegative = true;
            i++;
        }

        if(base === 10 && strArr.length === 2) {
            str1 = strArr[0].split('');
            str2 = strArr[1].split('');
            //科学计算法e后面部分不能有.和+号，-号要在最前面
            if(strArr[1].indexOf('.') > -1 || strArr[1].indexOf('-') > 0 || strArr[1].indexOf('+') > -1) {
                return NaN;
            }
            _foo1(str1);
            number = (integer * Math.pow(base, decimalDigits)  + fraction) / Math.pow(base, decimalDigits);
            number = isNegative ? 0 - number : number;  //符号判断
            isStr2Negative = str2[0] === '-';   //科学计算法e后面部分是否为负数
            i = isStr2Negative ? 1 : 0;         //为负则i从开始   
            integer  = 0;       //重置integer
            _foo1(str2)         //e后面多少位
            number = isStr2Negative ? number / Math.pow(base, integer) : number * Math.pow(base, integer);
        } else {
            chars = str.split('')
            _foo1(chars);
            number = (integer * Math.pow(base, decimalDigits)  + fraction) / Math.pow(base, decimalDigits);
        }

        return number;
    } else {
        return NaN;
    }

    function _foo1(arr) {
        while(i < chars.length && chars[i] !== '.') {
           integer = _commonPart(integer);
        }

        if(chars[i] === '.') {
            i++; 
            decimalDigits = chars.length - i;
        }
         
        while(i < chars.length) {
           fraction =_commonPart(i, fraction);
        }
    }

    function _commonPart(part) {
        let codePoint = chars[i].codePointAt(0);
            if(codePoint >= 65 ) {
                x = 54;
            }

            part *= base; 
            part += codePoint - x;
            i++;
            return part;
    }
}

convertNumberToString("100.314", 10)