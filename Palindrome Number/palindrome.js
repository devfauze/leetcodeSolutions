var isPalindrome = function(x) {
    if( x < 0 ){
        return false
    }
    let xStr = x.toString()
    let a = 0 
    let b = xStr.length - 1

    while (a < b){
        if(xStr[a] != xStr[b]){
            return false
        }

        a++
        b--
    }
    return true
};