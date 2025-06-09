function solution(phone_number) {
    let phone_numberLength = phone_number.length;
    let markArr = Array.from({length : phone_numberLength}).fill('*');
    
    for(let i = phone_numberLength-4; i<phone_numberLength; i++) {
        markArr[i] = phone_number[i];
    }
                             
    let result = markArr.join('')
    
    return result;
}