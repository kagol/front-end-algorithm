// 在一个无序整数数组中，找出连续增长片段最长的一段, 增长步长是1。Example: [3,2,4,5,6,1,9], 最长的是[4,5,6]
function getMaxContinuousSegment(array, step=1){
    var targetMap = new Map();
    var numberOfContinuous = 1;
    for(var i=0;i<array.length;i++){
        var currentItem = array[i];
        var nextItem = array[i+1];
        if(nextItem - currentItem === step){
            numberOfContinuous++;
            var oldItems = numberOfContinuous === 2 ? [currentItem] : targetMap.get(numberOfContinuous-1);
            targetMap.set(numberOfContinuous, oldItems.concat(nextItem));
        }else{
            numberOfContinuous = 1;
        }
    }
    var continuousNumberArray = [...targetMap.keys()];
    var maxKey = Math.max(...continuousNumberArray)
    var maxSegment = targetMap.get(maxKey);
    return maxSegment;
}

var array = [3,2,4,5,6,1,9];
var result = getMaxContinuousSegment(array);
console.log('result:', result);
