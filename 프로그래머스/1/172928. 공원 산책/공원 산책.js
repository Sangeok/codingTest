function solution(park, routes) {
    let W = park[0].length;
    let H = park.length;
    
    let direction = {
        "N" : [-1,0],
        "W" : [0, -1],
        "E" : [0, 1],
        "S" : [1, 0]
    }
    
    let currentX = 0;
    let currentY = 0;
    
    for(let i = 0; i<park.length; i++) {
        const index = park[i].indexOf("S");
        if(index !== -1) {
            currentY = i;
            currentX = index;
            break;
        }
    }
    
    for(let route of routes) {
        const [path, num] = route.split(" ");
        let tempX = currentX;
        let tempY = currentY;
        let check = true;
        
        const [moveY, moveX] = direction[path];
        
        for(let i = 1; i<=Number(num); i++) {
            
            tempX = tempX + moveX;
            tempY = tempY + moveY;

            // 만약 움직일 수 없다면
            if(tempX < 0 || tempX >= W || tempY >= H || tempY < 0) {
                check = false;
                break;
            }
            
            // 만약 움직일 수 없다면
            if(!canMoved(park, tempX, tempY)) {
                check = false;
                break;
            }
        }
        
        // 움직이는데 문제가 없었다면
        if(check) {
            currentX = currentX + moveX * num;
            currentY = currentY + moveY * num;
        }
    }
    
    return [currentY, currentX];
    
}
    
function canMoved(park, x, y) {
    return park[y][x] !== "X";
}