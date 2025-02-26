function solution(k, tangerine) {
    // 각 크기별 귤의 개수를 저장하는 객체
    const countBySize = {};
    
    // 각 크기별 귤의 개수 계산
    tangerine.forEach(size => {
        countBySize[size] = (countBySize[size] || 0) + 1;
    });
    
    // 개수를 기준으로 내림차순 정렬
    const counts = Object.values(countBySize).sort((a, b) => b - a);
    
    // k개를 채울 때까지 귤 선택
    let total = 0;
    let types = 0;
    
    for (const count of counts) {
        total += count;
        types++;
        
        if (total >= k) {
            break;
        }
    }
    
    return types;
}

// function solution(k, tangerine) {
//     let obj = {};

//     for(let i = 0; i<tangerine.length; i++) {
//         obj[tangerine[i]] = (obj[tangerine[i]] || 0) + 1;
//     }

//     const objArr = Object.entries(obj);
//     objArr.sort((a,b) => a[1] - b[1]);
    
//     let newArr = [];
//     for(let i = 0; i<objArr.length; i++) {
//         for(let j = 0; j<objArr[i][1]; j++) {
//             newArr.push(objArr[i][0]);
//         }
//     }

//     let spliceArr = newArr.splice(newArr.length-k,k);
    
//     let set = new Set(spliceArr);
    
//     return set.size;
    
    
// }

// k = 6
// [1,3,2,5,4,5,2,3] => [1,2,2,3,3,4,5,5] => [1,4,3,3,5,5,2,2] = [3,3,5,5,2,2]

// k = 4
// [5,5,2,2]

// k = 2
// [3,2,2,2,1,1,1,1] => [1,1,1,1,2,2,2,3]