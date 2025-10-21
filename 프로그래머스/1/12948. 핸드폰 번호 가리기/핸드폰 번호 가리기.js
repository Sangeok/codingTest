function solution(phone_number) {
    const new_phone_number = phone_number.split('');
    let canShowMinNum = new_phone_number.length-4;
    
    for(let i = 0; i<canShowMinNum; i++) {
        new_phone_number[i] = "*";
    }
    
    return new_phone_number.join('')
}