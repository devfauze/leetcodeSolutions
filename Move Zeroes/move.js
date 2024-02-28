var moveZeroes = function(nums) {
    let lZero = 0 
    for(let i = 0; i < nums.length; i++){
        if(nums[i] !== 0){
        const aux = nums[lZero]
        nums[lZero] = nums[i]
        nums[i] = aux
        lZero++
        }
    }
};