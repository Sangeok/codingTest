function solution(sizes) {
    const sortSizes = sizes.map(([w,h]) => [Math.max(w,h), Math.min(w,h)]);
    
    const maxWidth = Math.max(...sortSizes.map(([w,h]) => w));
    const maxHeight = Math.max(...sortSizes.map(([w,h]) => h));
    
    return maxWidth * maxHeight;
}