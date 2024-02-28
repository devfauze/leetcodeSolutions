var hammingWeight = function(n) {
    let bitCounter = 0 
    while (n !== 0){
        n &= (n - 1)
        bitCounter++
    }
    return bitCounter
};