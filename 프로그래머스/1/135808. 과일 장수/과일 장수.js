function solution(k, m, score) {
    let sum = 0;
    
    score.sort((a,b) => b-a);
    let newArr = chunkArr(score,m);
    
    for(let i = 0; i<newArr.length; i++) {
        let min = Math.min(...newArr[i]);
        sum = sum + (min *m);
    }
    return sum;
    
}

function chunkArr(array,size) {
    return Array.from({length : Math.floor(array.length/size)}, (_,i) => array.slice(i*size, (i+1)*size));
    
}