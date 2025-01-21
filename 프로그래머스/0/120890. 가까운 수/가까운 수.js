// n을 배열에 넣고 index 상에 -1, +1인 수와 비교해보기

function solution(array, n) {
    array.push(n);
    let newArr = array.sort((a,b)=>a-b);
    let nIndex = newArr.indexOf(n);
    
    if(nIndex-1 === -1) {
        return newArr[nIndex+1];
    }
    else if(nIndex+1 === newArr.length) {
        return newArr[nIndex-1];
    }
    else {
        let min1 = newArr[nIndex] - newArr[nIndex-1];
        let min2 = newArr[nIndex+1] - newArr[nIndex];
        
        if(min1 > min2) {
            return newArr[nIndex+1];
        }
        else if(min1 < min2) {
            return newArr[nIndex-1];
        }
        else if(min1 === min2) return newArr[nIndex-1];
    }
    
}