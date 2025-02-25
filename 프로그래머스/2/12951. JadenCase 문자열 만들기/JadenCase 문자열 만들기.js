function solution(s) {
    let sReplace = s.replaceAll(' ',"-");
    let sArr = sReplace.split('');
    
    if(isNaN(sArr[0])) {
        sArr[0] = sArr[0].toUpperCase();
    }
    
    
    for(let i = 1; i<sArr.length; i++) {
        if(sArr[i] === "-") continue;
        
        if(isNaN(sArr[i]) && sArr[i-1] === "-") {
            sArr[i] = sArr[i].toUpperCase();
        }
        else sArr[i] = sArr[i].toLowerCase();
    }
    
    return sArr.join('').replaceAll('-',' ');
}