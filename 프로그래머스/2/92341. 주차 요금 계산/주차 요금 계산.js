function solution(fees, records) {
    let inObj = new Map();
    let usingObj = {};
    let carNumArr = [];
    
    // inObj, usingObj data 삽입
    for(let i = 0; i<records.length; i++) {
        let info = records[i].split(' ');
        let [time, carNum, data] = info;
        
        if(!carNumArr.includes(carNum)) carNumArr.push(carNum);
    
        
        if(data === "IN") {
            inObj.set(carNum, getMin(time));
        } else if(data === "OUT") {
            let getInTime = inObj.get(carNum);
            let outTime = getMin(time);
            
            usingObj[carNum] = usingObj[carNum] ? usingObj[carNum] + outTime - getInTime :  outTime - getInTime;
            inObj.delete(carNum);
        }
    }
    
    // out이 없는 애들도 data 삽입
    for(const [key, value] of inObj) {
        let getInTime = value;
        let carNum = key;
        let outTime = getMin("23:59");
        
        usingObj[carNum] = usingObj[carNum] ? usingObj[carNum] + outTime - getInTime :  outTime - getInTime;
    }
    
    // 계산
    let result = [];
    carNumArr.sort();
    for(let i = 0; i<carNumArr.length; i++) {
        let key = carNumArr[i];
        let usingTime = usingObj[key];
        
        let price = calPrice(fees, usingTime);
        result.push(price);
    }
    
    return result;
}
    
function getMin(time) {
    let [hour, min] = time.split(":");
    return Number(hour) * 60 + Number(min);
}

function calUsingTime(inTime, outTime) {
    return Number(outTime) - Number(inTime);
}

function calPrice(fees, usingTime) {
    let [defaultTime, defaultPrice, unitTIme, unitPrice] = fees;
    
    if(usingTime > defaultTime) {
        return defaultPrice + (Math.ceil((usingTime - Number(defaultTime)) / unitTIme) * unitPrice);
    } else {
        return defaultPrice;
    }
}