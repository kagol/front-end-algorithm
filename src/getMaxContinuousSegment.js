// 在一个无序整数数组中，找出连续增长片段最长的一段, 增长步长是1。Example: [3,2,4,5,6,1,9], 最长的是[4,5,6]
function getMaxContinuousSegment(array, step=1){
    var targetMap = new Map();
    var numberOfRepeats = 1;
    for(var i=0;i<array.length;i++){
        var prevItem = array[i];
        var nextItem = array[i+1];
        if(nextItem - prevItem === step){
            numberOfRepeats++;
            if(numberOfRepeats === 2){
                targetMap.set(numberOfRepeats, [prevItem, nextItem]);
            }else if(numberOfRepeats > 2){
                targetMap.set(numberOfRepeats, targetMap.get(numberOfRepeats-1).concat(nextItem))
            }
        }else{
            numberOfRepeats = 1;
        }
    }
    var repeatNumbers = [...targetMap.keys()];
    var maxKey = Math.max(...repeatNumbers)
    var maxSegment = targetMap.get(maxKey);
    return maxSegment;
}

var array = [3,2,4,5,6,1,9];
var result = getMaxContinuousSegment(array);
console.log('result:', result);
