// function solution(numbers) {
//     // 숫자 배열을 문자열로 변환
//     const strNumbers = numbers.map(num => num.toString());
    
//     // 두 수를 연결했을 때 더 큰 수가 되는 순서로 정렬
//     // (b+a) - (a+b)는 양수면 b가 앞에, 음수면 a가 앞에 오도록 함
//     strNumbers.sort((a, b) => {
//         return (b + a) - (a + b);
//     });
    
//     // 정렬된 배열을 하나의 문자열로 합침
//     const answer = strNumbers.join('');
    
//     // 결과가 '0'으로 시작하면 (모든 요소가 0인 경우) '0' 반환
//     return answer[0] === '0' ? '0' : answer;
// }

function solution(numbers) {
    const strNumbers = numbers.map((item) => item.toString());
    
    strNumbers.sort((a,b) => b-a)
    
    strNumbers.sort((a,b) => {
        return (b+a) - (a+b);
    });
    
    let str = strNumbers.join('');
    
    return str[0] === "0" ? "0" : str;
}