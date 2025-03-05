function solution(priorities, location) {
    let prioritiesObj = {};
    
    let queue = priorities.map((item, i) => {
        return {
            id : i,
            priority : item
        }
    })
    
    let count = 1;
    while(queue.length > 0) {
        let nowPriority = queue.shift();
        
        let isHigherPriority = queue.some((item) => item.priority > nowPriority.priority);
        if(isHigherPriority) {
            queue.push(nowPriority);
        }
        else {
            if(nowPriority.id === location) return count;
            count++;
        }
    }
    
    return count;
        
}