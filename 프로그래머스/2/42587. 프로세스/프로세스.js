function solution(priorities, location) {
    let count = 1;
    
    let queue = priorities.map((item, i) => {
        return {
            id : i,
            priority : item
        }
    })
    
    while(queue.length > 0) {
        let currentItem = queue.shift();
        let hasHigherPriority = queue.some((item) => item.priority > currentItem.priority);
        
        if(hasHigherPriority) {
            queue.push(currentItem);
        }
        else {
            if(currentItem.id === location) return count;
            
            count++;
        }
    }
    
    return count;
}