/* TEST ARRAYS */
const sortedArray2 = [1, 2];
const sortedBackwardArray2 = [2, 1];
const randomArray2 = [2, 1];

const sortedArray10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sortedBackwardArray10 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const randomArray10 = [3, 1, 9, 6, 7, 2, 5, 10, 8, 4];

const sortedArray50 = [...Array(50).keys()];
const sortedBackwardArray50 = [...Array(50).keys()].reverse();
const randomArray50 = Array.from({ length: 50 }, () => Math.floor(Math.random() * 100));

const sortedArray200 = [...Array(200).keys()];
const sortedBackwardArray200 = [...Array(200).keys()].reverse();
const randomArray200 = Array.from({ length: 200 }, () => Math.floor(Math.random() * 1000));



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


/* PERFORMANCE */
function howLongItTakes(sortingAlgo, array) {
    const startTime = performance.now();
    sortingAlgo(array.slice());
    const endTime = performance.now();
    return endTime - startTime;
}

console.log(howLongItTakes(mergeSort, randomArray200));
