function solution(survey, choices) {
    const choiceObj = {
        1 : 3,
        2 : 2,
        3 : 1,
        4 : 0,
        5 : 1,
        6 : 2,
        7 : 3,
    }
    
    const mbti = {
        R : 0,
        T : 0,
        C : 0,
        F : 0,
        J : 0,
        M : 0,
        A : 0,
        N : 0
    }
    
    for(let i = 0; i<survey.length; i++) {
        let currentSurvey = survey[i];
        let currentChoice = choices[i];
        
        let currentScore = choiceObj[currentChoice];
        let betterChar;
        if(currentChoice < 4) {
            betterChar = currentSurvey.split('')[0];
            mbti[betterChar] = mbti[betterChar] + currentScore;
        } else if(currentChoice > 4) {
            betterChar = currentSurvey.split('')[1];
            mbti[betterChar] = mbti[betterChar] + currentScore;
        } else continue;
    }
    
    let result = "";
    if(mbti["R"] >= mbti["T"]) {
        result = result + "R";
    } else {
        result = result + "T";
    }
    
    if(mbti["C"] >= mbti["F"]) {
        result = result + "C";
    } else {
        result = result + "F";
    }
    
    if(mbti["J"] >= mbti["M"]) {
        result = result + "J";
    } else {
        result = result + "M";
    }
    
    if(mbti["A"] >= mbti["N"]) {
        result = result + "A";
    } else {
        result = result + "N";
    }
    
    return result;
}