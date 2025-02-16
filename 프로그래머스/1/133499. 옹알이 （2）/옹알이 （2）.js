function solution(babbling) {
    let regex1 = /^(aya|ye|woo|ma)+$/;
    let regex2 = /(aya|ye|woo|ma)\1+/;
    
    return babbling.filter((item) => regex1.test(item) && !regex2.test(item)).length;
}