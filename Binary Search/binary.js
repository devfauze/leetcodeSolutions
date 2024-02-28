var search = function(nums, target) {
    let left = 0
    let right = nums.length-1

    do{
        const midNums = parseInt((right + left) / 2)

        if(nums[midNums] == target){
            return midNums
        }

        if(target > nums[midNums]){
            left = midNums + 1  
        } else {
            right = midNums -1 
        }
    } while ( left <= right )
    return -1
};