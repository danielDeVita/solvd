const filterByPropertyA = (obj) => {
    if (!obj || typeof obj !== "object") throw new Error("pass an object as parameter")
    return Object.keys(obj).includes("a") ? obj : undefined
}

const customFilterUnique = (arr, cb) => {
    if (typeof cb !== "function") throw new Error("pass a function as cb");

    let newSet = new Set()

    for (const obj of arr) {
        let objectFiltered = cb(obj)
        if (typeof objectFiltered === "object") newSet.add(objectFiltered)
    }
    return Array.from(newSet);
};

let arrayOfObjects = [
    { a: 1, b: 2 },
    { c: 3, d: 4 },
    { a: 5, b: 6 },
    { e: 7, f: 8 },
    { g: 9, h: 0 }
];
// console.log(customFilterUnique(arrayOfObjects, filterByPropertyA)) //[ { a: 1, b: 2 }, { a: 5, b: 6 } ]
// console.log(customFilterUnique("notAnObject", filterByPropertyA)) //pass an object as parameter
// console.log(customFilterUnique(arrayOfObjects, "filterByPropertyA")) //pass a function as cb

const chunkArray = (arr, chunkSize) => {
    if (!chunkSize || typeof chunkSize !== "number" || chunkSize <= 0) throw new Error("pass a numeric positive chunkSize value")
    if (chunkSize > arr.length) throw new Error(`chunkSize can't be larger than ${arr.length}`)
    let arrayOfArrays = []
    for (let i = 0; i < arr.length; i + chunkSize) {
        let miniArray = arr.splice(0, chunkSize)
        arrayOfArrays.push(miniArray)
    }
    return arrayOfArrays;
};
// console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], 2));//[ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ], [ 7, 8 ], [ 9, 0 ] ]
// console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], 11));//chunkSize cant be larger than the length of the array
// console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], 0));//pass a numeric positive chunkSize value

const customShuffle = (arr) => {
    if (!arr || !arr.length) throw new Error("pass an array with at least 1 element")
    let newArr = [...arr]
    for (let i = 0; i < arr.length; i++) {
        const randomIndex = Math.floor(Math.random() * arr.length);
        [newArr[i], newArr[randomIndex]] = [newArr[randomIndex], newArr[i]];
    }
    return newArr
}
// console.log(customShuffle([1, 2, 3, 4, 5]));//5 elements array in random order
// console.log(customShuffle([]));//pass an array with at least 1 element

const getArrayIntersection = (arr1, arr2) => {
    let largerArray = arr1.length > arr2.length ? arr1 : arr2
    let shorterArray = arr1.length < arr2.length ? arr1 : arr2
    let commonElements = []
    for (let i = 0; i < largerArray.length; i++) {
        for (let j = 0; j < shorterArray.length; j++) {
            if (largerArray.includes(shorterArray[j])) commonElements.push(shorterArray[j])
        }
    }
    return commonElements.filter((element, index) => index === commonElements.indexOf(element)
    )
}
// console.log(getArrayIntersection([1, 2, 3, 4, 5, 6], [4, 5, 6, 7, 8]));

const getArrayUnion = (arr1, arr2) => {
    let newArr = [...arr1, ...arr2]
    return newArr.filter((element, index) => index === newArr.indexOf(element))
}
// console.log((getArrayUnion([1, 2, 3, 4], [3, 4, 5, 6])));

const measureArrayPerformance = (fn, arr) => { }