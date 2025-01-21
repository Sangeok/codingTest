function solution(my_string) {
    let sum = 0;
    (my_string.match(/\d+/g) || []).map((item)=> sum = sum + parseInt(item));
    return sum;
}