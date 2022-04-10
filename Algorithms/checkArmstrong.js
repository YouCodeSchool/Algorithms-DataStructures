
const convertToNum = (num) => {
    return Number(num);
}

const checkArmstronNum = (num) => {
    
    let numArr = [];
    let sum = 0;


    numArr = Array.from(String(num), convertToNum)


    numArr.forEach(arrElem => {
        sum += Math.pow(arrElem, numArr.length);
    })

    if(sum == num) {
        return true;
    }
    else {
        return false;
    }
}

input = 153;

console.log(checkArmstronNum(153));
console.log(checkArmstronNum(371));
console.log(checkArmstronNum(407));
console.log(checkArmstronNum(477));