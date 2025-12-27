function solution(friends, gifts) {
    let giftScoreObj = {}
    let giftObj = {}
    let result = {};
    
    for(let i = 0; i<friends.length; i++) {
        for(let j = 0; j<friends.length; j++) {
            if(friends[i] === friends[j]) continue;
            
            const newKey = friends[i] + " " + friends[j];
            giftObj[newKey] = 0;
        }
    }
    
    for(let gift of gifts) {
        giftObj[gift] = (giftObj[gift] + 1) || 1;
    }
    
    for(let friend of friends) {
        giftScoreObj[friend] = 0;
    }
    
    for(let gift of gifts) {
        let [nowFriends, giftedFriends] = gift.split(" ")
        giftScoreObj[nowFriends] = giftScoreObj[nowFriends] + 1;
        giftScoreObj[giftedFriends] = giftScoreObj[giftedFriends] - 1;
    }
    
    for(let [key, value] of Object.entries(giftObj)) {
        let [nowFriends, giftedFriends] = key.split(" ")
        let newKey = giftedFriends + " " + nowFriends;
        
        const getNewValue = giftObj[newKey];
        
        // console.log("key", key)
        // console.log("newKey", newKey)
        // console.log("value", value)
        // console.log("getNewValue", getNewValue)
        // console.log("=============")
        
        // 기록이 있고 누가 더 많이 줬느냐로 판단한 경우
        if(value > getNewValue) {
            result[nowFriends] = (result[nowFriends] + 1) || 1;
        } else if(value < getNewValue) {
            result[giftedFriends] = (result[giftedFriends] + 1) || 1;
        } else {
            // 만약 서로 선물을 하지 않았던 경우 혹은 주고받은 수가 같은 경우
            if(giftScoreObj[nowFriends] > giftScoreObj[giftedFriends]) {
                result[nowFriends] = (result[nowFriends] + 1) || 1;
            } else if(giftScoreObj[nowFriends] < giftScoreObj[giftedFriends]) {
                result[giftedFriends] = (result[giftedFriends] + 1) || 1;
            }
        }
        
        // console.log("result", result)
    }
    
    let max = 0;
    // result에 아무 결과도 없으면 0 반환
    if(Object.entries(result).length === 0) {
        return 0;
    } else {
        for(let [key, value] of Object.entries(result)) {
            if(value > max) {
                max = value;
            }
        }
        return max / 2;
    }
    
    
    
}

// result : 다음 달에 누가 선물을 많이 받을지 예측

// 누가 더 많이 줬는지를 어떤식으로 해결하지

// gift obj에 돌면서 count를하고 friends를 돌면서 그것을 따지면 되려나

// 결국은 다음 달 선물 예측은 선물 지수 + 주고 받은 사람 중에 누가 더 선물을 많이 줬냐로 결정

// 두 사람이 선물을 주고 받은 기록이 있다면 이번 달 까지 두 사람 사이에 더 많은 선물을 준 사람이 1개 더받음
// 주고 받은 기록 X 혹은 주고 받은 선물 수가 같을 시, 선물 지수가 더 큰 사람이 작은 사람에게 1개

// 선물 지수 : A가 친구들에게 준 선물이 3개, 받은 선물이 10개 인 경우 A의 선물 지수 : -7
// 선물 지수 : B가 친구들에게 준 선물이 3개, 받은 선물이 2개라면 B의 선물 지수 : 1
// 선물 지수가 같으면 다음 달에 선물을 주고받지 X
