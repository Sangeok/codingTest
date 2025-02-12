function solution(nums) {
    let getPocketMonNum = nums.length/2;
    
    const removeDupArr = [...new Set(nums)];
    
    // 만약 중복을 제거 했음에도 불구하고 getPocketMonNum보다 크면
    if(removeDupArr.length >= getPocketMonNum) {
        return getPocketMonNum;
    }
    else {
        return removeDupArr.length;
    }
    
    
}