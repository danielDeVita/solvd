/* QUICK SORT */

const quickSort = array => {
    //break case for recursion
    if (array.length <= 1) return array;
    //pivot element from array done with random method
    const pivot = array[Math.floor(Math.random() * array.length)];
    //minor than array
    const left = [];
    //larger than array
    const right = [];
    //iteration and comparison between array element and pivot element
    for (let i = 1; i < array.length; i++) {
        if (array[i] < pivot) left.push(array[i])
        else right.push(array[i])
    };
    //invoking recursion with every array concatenated until reaching break case
    return quickSort(left).concat(pivot).concat(quickSort(right));
}

// console.log(quickSort([5, 1, 4, 2, 8]));
// console.log(quickSort([10, 10, 16, 12]));
// console.log(quickSort([10, -2, -7, 4]));



/* MERGE SORT */

const mergeHelper = (leftArray, rightArray) => {
    //i for left array
    let leftIndex = 0;
    //i for right array
    let rightIndex = 0;
    //here we puto the result
    const orderedArray = [];
    //while there are still elements in left array and elements in right array we execute code
    while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
        //compare both values and then push one value or the other to orderedArray
        //and we increment index in each case
        if (leftArray[leftIndex] < rightArray[rightIndex]) {
            orderedArray.push(leftArray[leftIndex]);
            leftIndex++;
        } else {
            orderedArray.push(rightArray[rightIndex]);
            rightIndex++;
        };
    };
    //we return orderedArray concatenated with leftovers from other arrays
    return orderedArray.concat(leftArray.slice(leftIndex)).concat(rightArray.slice(rightIndex));
}

const mergeSort = array => {
    //break case for recursion, when array hast only 1 element
    if (array.length === 1) return array;
    //we get the midel of the array
    const mid = Math.floor(array.length / 2);
    //we get first half of array
    const left = array.slice(0, mid)
    //we get second half of array
    const right = array.slice(mid)
    //invoking recursion with both array as parameter of helper function (that returns 1 concatenated array)
    return mergeHelper(mergeSort(left), mergeSort(right))
}

// console.log(mergeSort([5, 1, 4, 2, 8]));
// console.log(mergeSort([10, 10, 16, 12]));
// console.log(mergeSort([10, -2, -7, 4]));



/* BUBLE SORT */

const bubleSort = array =>{
    
}