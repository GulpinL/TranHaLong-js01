function GetRandomNumber(min, max){
    if(min >= max){
        console.log("Invalid Number");
        return null;
    }
    var _randomNum = Math.random() * (max - min) + min;
    _randomNum = parseInt(Math.round(_randomNum));
    return _randomNum;
}
function doTest(){
    var nums = [0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7],
    // var nums = [1,2,3,4,5,6,7,8,9,10],
    ranNums = [],
    i = nums.length,
    j = 0;
    
    while (i--) {
        j = Math.floor(Math.random() * (i+1));
        ranNums.push(nums[j]);
        nums.splice(j,1);
    }
    return ranNums;
}
// for(var i=0;i<20;i++){
//     console.log(GetRandomNumber(0,7));
// }
console.log(doTest());