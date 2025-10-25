function solution(nums) {
    let newSet = new Set([...nums]);
    
    return newSet.size > nums.length / 2 ? nums.length / 2 : newSet.size;
}