function solution(people, limit) {
    people.sort((a,b) => a-b);
    
    let left = 0;
    let right = people.length-1;
    
    let count = 0;
    
    while(left <= right) {
        if(people[left] + people[right] <= limit) {
            // left, right 둘 다 태운 경우.
            left++
            right--
            count++
        } else {
            // left, right 둘 다 태울 수 없는 경우.
            // right는 혼자 태워야 함.
            right--;
            count++;
        }
    }
    
    return count;
}