function solution(skill, skill_trees) {
    let result = 0;
    for(let i = 0; i<skill_trees.length; i++) {
        let currentSkill = skill_trees[i].split("");
        let queue = skill.split("");
        let check = true;
        
        for(let j = 0; j<currentSkill.length; j++) {
            if(!queue.includes(currentSkill[j])) {
                continue;
            } else {
                let shift = queue.shift();
                if(shift !== currentSkill[j]) {
                    check = false;
                    break;
                }
            }
        }
        
        if(check) result++;
    }
    
    return result;
}