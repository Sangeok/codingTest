function solution(people, limit) {
    people.sort((a,b) => a-b);
    
    let left = 0;
    let right = people.length-1;
    let count = 0;
    
    while(left <= right) {
        if(people[left] + people[right] <= limit) {
            // 맨 처음과 맨 마지막을 태운 경우
            left++;
            right--;
            count++;
        } else {
            // 맨 마지막 사람을 태우지 못한 경우 => people[right]가 혼자 타야하는 경우
            right--;
            count++;
        }
    }
    
    return count;
}