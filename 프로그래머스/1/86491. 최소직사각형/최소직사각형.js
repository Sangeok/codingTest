function solution(sizes) {
    let sortSizes = sizes.map(([w,h]) => [Math.min(w,h), Math.max(w,h)]);
    
    let maxSizeInMin = Math.max(...sortSizes.map(([w,h]) => w));
    let maxSizeInMax = Math.max(...sortSizes.map(([w,h]) => h));
    
    return maxSizeInMin * maxSizeInMax;
}