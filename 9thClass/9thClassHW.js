/* QUICK SORT */

const quickSort = array => {
    //break case for recursion
    if (array.length <= 1) return array;
    //pivot element from array done with random method
    const pivotIndex = Math.floor(Math.random() * array.length);
    const pivot = array[pivotIndex];
    //minor than array
    const left = [];
    //larger than array
    const right = [];
    //iteration and comparison between array element and pivot element
    for (let i = 0; i < array.length; i++) {
        //we dont' do nothing if the element is the same as the pivotIndex
        if (i === pivotIndex) continue;
        //if it is lesser than pivot we push to left array
        if (array[i] < pivot) left.push(array[i])
        //if it is greater than pivot we push to right array
        else right.push(array[i])
    };
    //invoking recursion with every array concatenated until reaching break case
    return quickSort(left).concat(pivot).concat(quickSort(right));
}

// console.log("QUICK SORT")
// console.log(quickSort([11, 22, 34, 45, 64, 90]));
// console.log(quickSort([90, 64, 45, 34, 22, 11]));
// console.log(quickSort([34, 64, 11, 45, 90, 22]));



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

// console.log("MERGE SORT");
// console.log(mergeSort([11, 22, 34, 45, 64, 90]));
// console.log(mergeSort([90, 64, 45, 34, 22, 11]));
// console.log(mergeSort([34, 64, 11, 45, 90, 22]));



/* BUBLE SORT */

const bubleSort = array => {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] > array[j]) {
                let aux = array[i]
                array[i] = array[j];
                array[j] = aux;
            }
        }
    }
    return array;
}

// console.log("BUBLE SORT");
// console.log(bubleSort([11, 22, 34, 45, 64, 90]));
// console.log(bubleSort([90, 64, 45, 34, 22, 11]));
// console.log(bubleSort([34, 64, 11, 45, 90, 22]));