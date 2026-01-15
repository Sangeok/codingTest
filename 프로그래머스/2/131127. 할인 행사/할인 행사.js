function solution(want, number, discount) {
    let obj = {};
    let result = 0;
    
    for(let i = 0; i<want.length; i++) {
        obj[want[i]] = number[i];
    }
    
    for(let i = 0; i<=discount.length-10; i++) {
        let obj2 = {};
        let check = true;
        for(let k = i; k<i+10; k++) {
            obj2[discount[k]] = (obj2[discount[k]] + 1) || 1
        }
        
        for(let k = 0; k<want.length; k++) {
            if(obj[want[k]] !== obj2[want[k]]) {
                check = false;
                break;
            }
        }
        
        if(check) result++;
    }
    
    return result;
}

// 10일간의 회원 자격
// 회원일 시 매일 한 가지 제품을 할인함 (할인 제품은 하루에 한 개만 구매 가능)
// 자신이 원하는 제품과 수량이 할인하는 날짜와 10일 연속으로 일치하는 경우 회원가입
