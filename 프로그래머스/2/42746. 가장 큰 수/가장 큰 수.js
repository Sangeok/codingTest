function solution(numbers) {
    let strNum = numbers.map((item) => item.toString());
    
    strNum.sort((a,b) => {
        return (b+a) - (a+b);
    })
    
    let result = strNum.join('');
    
    return result[0] === "0" ? "0" : result;
}