const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// 첫 번째 줄에서 N과 M을 가져옵니다
const [N, M] = input[0].split(' ').map(Number);

// 듣도 못한 사람과 보도 못한 사람의 명단을 분리합니다
const notHeard = [];
for (let i = 1; i <= N; i++) {
    notHeard.push(input[i]);
}

const notSeen = [];
for (let i = N + 1; i <= N + M; i++) {
    notSeen.push(input[i]);
}

// 함수를 사용하여 듣보잡을 찾습니다
function findCommon(strArr1, strArr2) {
    let obj = {};
    let result = [];
    
    for (let str of strArr1) {
        obj[str] = (obj[str] || 0) + 1;
    }
    
    for (let str of strArr2) {
        obj[str] = (obj[str] || 0) + 1;
    }
    
    for (let [v, k] of Object.entries(obj)) {
        if (k > 1) {
            result.push(v);
        }
    }
    
    return result;
}

// 듣보잡을 찾고 사전순으로 정렬합니다
const result = findCommon(notHeard, notSeen).sort();

// 결과를 출력합니다
console.log(result.length);
console.log(result.join('\n'));