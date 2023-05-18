const reverseArray = (array) => {
    let reversedArray = [];
    for (let element of array) {
        reversedArray.unshift(element);
    }
    return reversedArray;
}

const reverseArrayInPlace = (array) => {
    for (let index = 0; index < array.length; index++) {
        let lastValue = array.pop();
        array.splice(index, 0, lastValue);
    }
}


console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]