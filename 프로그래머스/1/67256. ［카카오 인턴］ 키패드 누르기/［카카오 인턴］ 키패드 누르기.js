function solution(numbers, hand) {
    let answer = '';
    
    let keypadCoord = {
        1 : [0,0],
        2 : [0,1],
        3 : [0,2],
        4 : [1,0],
        5 : [1,1],
        6 : [1,2],
        7 : [2,0],
        8 : [2,1],
        9 : [2,2],
        "*" : [3,0],
        0 : [3,1],
        "#" : [3,2]
    }
    
    let currentLeftHands = "*";
    let currentRightHands = "#";
    
    for(let number of numbers) {
        if([1,4,7].includes(number)) {
            currentLeftHands = number;
            answer = answer + "L";
        } else if([3,6,9].includes(number)) {
            currentRightHands = number;
            answer = answer + "R";
        } else {
            let leftToDistance = getDistance(keypadCoord[currentLeftHands], keypadCoord[number]);
            let rightToDistance = getDistance(keypadCoord[currentRightHands], keypadCoord[number]);
            if(leftToDistance > rightToDistance) {
                currentRightHands = number;
                answer = answer + "R";
            } else if(leftToDistance < rightToDistance) {
                currentLeftHands = number;
                answer = answer + "L";
            } else {
                if(hand === "right") {
                    currentRightHands = number;
                    answer = answer + "R";
                } else if (hand === "left") {
                    currentLeftHands = number;
                    answer = answer + "L";
                }
            }
        }
    }
    
    return answer;
}

function getDistance(pos1, pos2) {
    return Math.abs(pos1[0] - pos2[0]) + Math.abs(pos1[1] - pos2[1]);
}
