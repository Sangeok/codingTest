function solution(numbers, hand) {
    let result = '';
    
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
            result = result + "L";
        } else if([3,6,9].includes(number)) {
            currentRightHands = number
            result = result + "R";
        } else {
            let leftHandsDistance = getDistance(keypadCoord[currentLeftHands], keypadCoord[number]);
            let rightHandsDistance = getDistance(keypadCoord[currentRightHands], keypadCoord[number]);
            
            if(leftHandsDistance > rightHandsDistance) {
                currentRightHands = number;
                result = result + "R"
            } else if(leftHandsDistance < rightHandsDistance) {
                currentLeftHands = number;
                result = result + "L";
            } else {
                if(hand === "right") {
                    currentRightHands = number;
                    result = result + "R"
                } else if(hand === "left") {
                    currentLeftHands = number;
                    result = result + "L";
                }
            }
        }
    }
    
    return result;
}

function getDistance(pos1, pos2) {
    return Math.abs(pos1[0] - pos2[0]) + Math.abs(pos1[1] - pos2[1]);
}

