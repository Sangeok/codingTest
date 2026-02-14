function solution(bridge_length, weight, truck_weights) {
    let bridge = new Array(bridge_length).fill(0);
    let timer = 0;
    let bridgeSum = 0;
    
    while(truck_weights.length > 0) {
        timer++;
        
        let outofBridgeNum = bridge.shift();
        bridgeSum = bridgeSum - outofBridgeNum;
        
        if(bridgeSum + truck_weights[0] <= weight) {
            let nowTruckValue = truck_weights.shift();
            bridge.push(nowTruckValue);
            bridgeSum = bridgeSum + nowTruckValue;
        } else {
            bridge.push(0);
        }
    }
    
    return timer + bridge_length;
}