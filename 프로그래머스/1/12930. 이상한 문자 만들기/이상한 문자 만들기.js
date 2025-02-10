function solution(s) {
    let newArr = s.split(' ');
    let result = ""
    for(let i = 0 ;i<newArr.length; i++) {
        let str = "";
        for(let j = 0; j<[...newArr[i]].length; j++) {
            if(j % 2 === 0) {
                str = str + newArr[i][j].toUpperCase();
            }
            else {
                str = str + newArr[i][j].toLowerCase();
            }
        }
        if(i !== newArr.length-1) result = result + str + " "
        else result = result + str
    }
    console.log(result)
    return result;
    
}