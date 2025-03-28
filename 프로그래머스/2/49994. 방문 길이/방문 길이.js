function solution(dirs) {
    let pathSet = new Set();
    
    let direction = {
        U : [0,1],
        D : [0,-1],
        R : [1,0],
        L : [-1,0]
    };

    let x = 0;
    let y = 0;
    let count = 0;
    
    for(let dir of dirs) {
        let nowX = direction[dir][0] + x;
        let nowY = direction[dir][1] + y;
        
        if(nowX > 5 || nowY > 5 || nowX < -5 || nowY <-5) {
            continue;
        }
        
        let path = `x${x},y${y}->x${nowX},y${nowY}`;
        let reversePath = `x${nowX},y${nowY}->x${x},y${y}`;
        
        if(!pathSet.has(path) && !pathSet.has(reversePath)) {
            pathSet.add(path);
            pathSet.add(reversePath);
            count++;
        }
        
        x = nowX;
        y = nowY;
        
    }
    return count;
}