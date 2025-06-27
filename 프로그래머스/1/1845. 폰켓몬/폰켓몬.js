function solution(nums) {
    let setNum = new Set(...[nums]);
    
    return nums.length/2 > setNum.size ? setNum.size : nums.length/2
}