function solution(my_string) {
    let strArr = my_string.split(' ');
    let numArr = [];
    let operatorArr = [];
    
    
    strArr.map((item) => {
        if(!isNaN(parseInt(item))) {
           numArr.push(item);
        } else operatorArr.push(item);
    })
    
    
    for(let i = 0; i<operatorArr.length; i++) {
        if(operatorArr[i] === "+") {
            let sum =  parseInt(numArr[0]) + parseInt(numArr[1]);
            numArr.splice(0,2);
            numArr.unshift(sum)
        }
        else {
            let sum = parseInt(numArr[0]) - parseInt(numArr[1]);
            numArr.splice(0,2);
            numArr.unshift(sum)
        }
    }

    return numArr[0];
}