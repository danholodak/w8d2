Array.prototype.uniq = function() {
    uniqueArray = [];
    this.forEach(function(el){
        if (!uniqueArray.includes(el)){
            uniqueArray.push(el);
        }
    }); 
    return uniqueArray   
}



Array.prototype.twoSum = function() {
    let pairs = [];
    const array = this;
        for(let i = 0; i < array.length; i++){
            for (let j = i; j < array.length; j++){
                if (array[i] + array[j] === 0){
                    pairs.push([i, j]);
                }
            }
        }
    return pairs;
}
Array.prototype.transpose = function() {
    let transposed = [];
    const array = this;
    for(let i = 0; i < array.length; i++){
        transposed.push([]);
    }
    for(let i = 0; i < array.length; i++){
        for (let j = 0; j < array.length; j++){
            transposed[j].push(array[i][j]);
        }
    }
    return transposed;
}
