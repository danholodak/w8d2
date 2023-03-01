Array.prototype.bubbleSort = function() {
    let array = this;
    let sorted = false;
    let firstSorted = array.length
    let temp = 0
    while (sorted === false){
        sorted = true;
        for (let i = 0; i < firstSorted-1; i++){
            if (array[i] > array[i+1]){
                temp = array[i+1];
                array[i+1] = array[i];
                array[i] = temp;
                sorted = false;
            }
        }
        firstSorted-=1;
    }
    return array;
}