function solution(s) {
    const arr = s.split(" ");
    
    for(let i = 0; i<arr.length; i++) {
        let newStr = "";
        for(let k = 0; k<arr[i].length; k++) {
            // console.log("arr[i][k]", arr[i][k])
            if(k % 2 === 0) {
                newStr = newStr + arr[i][k].toUpperCase();
            } else {
                newStr = newStr + arr[i][k].toLowerCase();
            }
        }
        arr[i] = newStr;
    }
    
    console.log(arr)
    
    return arr.join(' ')
}