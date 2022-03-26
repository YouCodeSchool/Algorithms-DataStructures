

function rotateMatrix(mtrx){
    length = mtrx.length 
    elemLength = mtrx[0].length
    // console.log(elemLength)
    newMtrx = []
    // arr1 = [], arr2 = [], arr3 = []
    for (let i = 0 ; i < elemLength; i++) {
        // let elm = mtrx[i - 1 ][0]
        let arr = []
        for(let j = length; j > 0; j--){
            arr.push(mtrx[j - 1][i]);
        }
        // console.log(arr)
        newMtrx.push(arr)
        // arr1.push(mtrx[i - 1 ][0])
        // arr2.push(mtrx[i - 1 ][1])
        // arr3.push(mtrx[i - 1 ][2])
    }
    // mtrx = [arr1, arr2, arr3] 
    // mtrx.forEach(arr => {
    //     arr = arr
    // })
    // return arr1;
    // console.log(newMtrx)
    return newMtrx;
}


input = [
    [3,4,5],
    [6,8,2],
    [8,9,4],
]
res = rotateMatrix(input)

console.log(res);
