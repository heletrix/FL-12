function isBigger(first, second) {
    return first > second;
}

function isSmaller(first, second) {
    return isBigger(second,first);
}

console.log(isSmaller(5,1));