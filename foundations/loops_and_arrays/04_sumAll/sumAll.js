const sumAll = function(left, right) {
    if (left > 0 && right > 0 && Number.isInteger(left) && Number.isInteger(right)) {
        if (left > right) {
            let temp = left;
            left = right;
            right = temp;
        }
        let sum = 0;
        for (let i = left; i <= right; ++i) sum += i;
        return sum;
    }
    return "ERROR";
};

// Do not edit below this line
module.exports = sumAll;
