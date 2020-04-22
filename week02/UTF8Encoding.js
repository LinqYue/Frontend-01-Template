function encoding(str) {
    if(str && typeof str === "string" ) {
        let result  = "";
        for(let num in str){
            result += ("\\u" + str[num].charCodeAt(0).toString(16));
        }
        return result;
    }
}