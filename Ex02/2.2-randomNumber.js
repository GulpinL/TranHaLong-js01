function GetRandomNumber(min, max){
    if(min >= max){
        console.log("Invalid Number");
        return null;
    }
    var _randomNum = Math.random() * (max - min) + min;
    // float
    _randomNum = parseInt(Math.round(_randomNum));
    return _randomNum;
}

console.log(GetRandomNumber(2,5));