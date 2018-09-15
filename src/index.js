module.exports = function getZerosCount(number, base) {
    const numbers = getZeroNumber(base);
    const result = [];

    numbers.forEach( (num, i) => {
        let summ = 0;
        let pair = i;
        while (number > pair) {
            summ += Math.floor(number / pair);
            pair *= i;
        }
        result.push(Math.floor(summ / numbers[i]));
    })

    return Math.min.apply(null, result);
}

function getZeroNumber(base) {
    const numbers = [];
    let n = base;
    for (let i = 2; i <= base;) {
        if (n % i == 0) {
            if (isNaN(numbers[i])) {
                numbers[i] = 0;
            }
            numbers[i]++;
             n /= i;
        } else {
            i++;
        }
    }
    return numbers;
}