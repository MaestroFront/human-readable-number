module.exports = toReadable = (number) => {

    const str = String(number); // перевод числа в строку

    const arrayOne = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']; // массив обозначений чисел от 1 до 9
    const arrayTwo = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']; // массив обозначений чисел от 11 до 19
    const arrayThree = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']; // массив обозначений чисел с нулём на конце от 10 до 90
    const hundred = 'hundred'; // обозначение числа, состоящего из трёх цифр и с двумя нулями на конце

    const numberZero = number === 0; // цифра 0

    const element1 = str[0] - 1; // первая цифра числа равняется элементу выбранного массива
    const element2 = str[1] - 1; // вторая цифра числа равняется элементу выбранного массива
    const element3 = str[2] - 1; // третья цифра числа равняется элементу выбранного массива

    const number1 = arrayOne[element1]; // 1 2 3 4 5 6 7 8 9
    const number2 = arrayThree[element1]; // 10 20 30 40 50 60 70 80 90
    const number3 = `${number2} ${arrayOne[element2]}`; // числа от 10 до 100 без 0 на конце
    const number4 = arrayTwo[element2]; // 11 12 13 14 15 16 17 18 19
    const number5 = `${arrayOne[element1]} ${hundred}`; // 100 200 300 400 500 600 700 800 900
    const number6 = `${number5} ${arrayOne[element3]}`; // 101 102 103 104 105 106 107 108 109
    const number7 = `${number5} ${arrayThree[element2]}`; // 110 120 130 140 150 ... 970 980 990
    const number8 = `${number5} ${arrayTwo[element3]}`; // 111 112 113 114 115 116 117 118 119
    const number9 = `${number7} ${arrayOne[element3]}`; // все остальные числа до 1000

    const length1 = str.length === 1; // число с 1 цифрой
    const length2 = str.length === 2; // число с двумя цифрами
    const length3 = str.length === 3; // число с тремя цифрами

    const zero = 'zero'; // обозначение цифры 0
    const zero1 = str[1] === '0'; // вторая цифра в числе 0
    const zero2 = str[2] === '0'; // третья цифра в числе 0

    const sum = +(str[1] + str[2]); // число, состоящее из второй и третьей цифры

    if (numberZero) {
        return zero;
    } else if (length1) {
        return number1;
    } else if (length2 && zero1) {
        return number2;
    } else if (length2 && !zero1 && number > 20) {
        return number3;
    } else if (length2 && number < 20) {
        return number4;
    } else if (length3 && zero1 && zero2) {
        return number5;
    } else if (length3 && zero1 && str[2] <= '9') {
        return number6; 
    } else if (length3 && zero2) {
        return number7;
    } else if (length3 && sum < 20) {
        return number8;
    } else {
        return number9;
    }
    
}
