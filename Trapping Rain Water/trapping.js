var trap = function(height) {
    if (height == null || height.length === 0) return

    let res = 0
    let l = height.length
    let leftMax = {}
    let rightMax = {}

    leftMax[0] = height [0]
    for(let i = 1; i < l; i++){
        leftMax[i] = Math.max(height[i],leftMax[i-1])}

    rightMax[l - 1] = height[l - 1]
    for(let i = l - 2; i >= 0; i--){
        rightMax[i] = Math.max(height[i], rightMax[i + 1])
    }

    for(let i = 0; i < height.length; i++){
        res += Math.min(leftMax[i], rightMax[i]) - height[i]
    }
    return res
};