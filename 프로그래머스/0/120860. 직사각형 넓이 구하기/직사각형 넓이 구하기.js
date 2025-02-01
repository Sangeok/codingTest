function solution(dots) {
    let xDots = dots.map((item) => item[0]);
    let yDots = dots.map((item) => item[1]);
    
    let width = Math.max(...xDots) - Math.min(...xDots);
    let height = Math.max(...yDots) - Math.min(...yDots);
    
    return width * height;
}