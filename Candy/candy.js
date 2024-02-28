var candy = function(ratings) {
    const num = ratings.length
    const candies = new Array(num).fill(1)

    for(let i = 1; i < num; i++){
      if(ratings[i] > ratings[i - 1]){
        candies[i] = candies[i - 1] + 1
      }
    }

    for(let i = num - 2; i >= 0; i--){
        if(ratings[i] > ratings[i + 1]){
          candies[i] = Math.max(candies[i], candies[i + 1] + 1)
        }
    }
    return candies.reduce((a,b) => a + b, 0)
};