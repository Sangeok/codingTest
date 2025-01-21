// 해당 배열에서 몇번쨰로 큰 값인지를 결정하면 됨.

function solution(emergency) {
    const sortArr = [...emergency].sort((a,b) => b-a);
    console.log(sortArr)
    return emergency.map((item) => {return sortArr.indexOf(item) + 1});
}