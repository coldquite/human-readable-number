module.exports = function toReadable(number) {
    let answer = '';
    let digit;

    if (number === 0)
        return 'zero';

    while (number > 0) {


        digit = getFirstDigit(number);
        if (number / 100 >= 1) {
            answer += numToString(digit) + " hundred";
            number -= 100 * digit;
        } else if (number / 10 >= 2 || number / 10 === 1) {
            if (answer !== '')
                answer += ' ';
            answer += tensToString(digit);
            number -= 10 * digit;
        } else if (number / 10 > 1) {
            number -= 10;
            if (answer !== '')
                answer += ' ';
            return (answer + teensToString(number));
        } else {
            if (answer !== '')
                answer += ' ';
            return answer += numToString(digit);
        }
    }

    return answer;
}

function numToString(number) {
    switch (number) {
        case 1:
            return "one"
        case 2:
            return "two"
        case 3:
            return "three"
        case 4:
            return "four"
        case 5:
            return "five"
        case 6:
            return "six"
        case 7:
            return "seven"
        case 8:
            return "eight"
        case 9:
            return "nine"
        default:
            return "zero"
    }
}

function tensToString(number) {
    switch (number) {
        case 2:
            return "twenty"
        case 3:
            return "thirty"
        case 4:
            return "forty"
        case 5:
            return "fifty"
        case 6:
            return "sixty"
        case 7:
            return "seventy"
        case 8:
            return "eighty"
        case 9:
            return "ninety"
        default:
            return "ten"
    }
}

function teensToString(number) {
    switch (number) {
        case 1:
            return "eleven"
        case 2:
            return "twelve"
        case 3:
            return "thirteen"
        case 4:
            return "fourteen"
        case 5:
            return "fifteen"
        case 6:
            return "sixteen"
        case 7:
            return "seventeen"
        case 8:
            return "eighteen"
        case 9:
            return "nineteen"
        default:
            return "ten"
    }
}

function getFirstDigit(num) {
    while (num >= 10) {
        num = Math.floor(num / 10);
    }
    return num;
}
