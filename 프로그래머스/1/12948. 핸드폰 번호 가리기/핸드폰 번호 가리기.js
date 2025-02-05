function solution(phone_number) {
    const phone_numberArr = phone_number.split('');
    const masked = phone_numberArr.map((item,i) => {
        if(phone_number.length - i >4) {
            return "*"
        } else return item;
    })
    
    return masked.join('')
}