Array.prototype.myEach = function(callback){
    let array = this;
    for (let i = 0; i < array.length; i++){
        callback(array[i]);
    }
}
// function logIfEven(num) {
//     if (num % 2 === 0) {
//       console.log(`${num} is an even number!`);
//     }
// }

Array.prototype.myMap = function(callback){
    let array = this;
    let mapped = [];
    array.myEach(function(el){
        mapped.push(callback(el));
    })
    return mapped
}


Array.prototype.myReduce = function(callback, acc){
    let array = this;
    if (acc === undefined){
        acc = array[0];
        for(let i=1; i < array.length; i ++){
            acc = callback(acc, array[i]);
        }
    }else{
        array.myEach(function(el){
            acc = callback(acc, el)});
    }
    // array.myEach(function(el){
    //     initialValue = callback(initialValue, el)});
    return acc;
}

// // without initialValue
// [1, 2, 3].myReduce(function(acc, el) {
//     return acc + el;
//   }); // => 6
  
//   // with initialValue
//   [1, 2, 3].myReduce(function(acc, el) {
//     return acc + el;
//   }, 25); // => 31