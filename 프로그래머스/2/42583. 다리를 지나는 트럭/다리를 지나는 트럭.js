function solution(bridge_length, weight, truck_weights) {
    let bridge = new Array(bridge_length).fill(0);
    let timer = 0;
    let bridgeSum = 0;
    
    while(truck_weights.length > 0) {
        timer++;
        
        bridgeSum = bridgeSum - bridge.shift();
        
        if(bridgeSum + truck_weights[0] <= weight) {
            let currentValue = truck_weights.shift();
            bridge.push(currentValue);
            bridgeSum = bridgeSum + currentValue;
        } else {
            bridge.push(0);
        }
    }
    
    return timer + bridge_length;
}