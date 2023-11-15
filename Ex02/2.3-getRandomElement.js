function GetRandomElementFromArray(array){
    var _max = array.length - 1;
    var _min = 0;
    var _randomIndex = GetRandomNumber(_min,_max);
    return array[_randomIndex];
}

function GetRandomNumber(min, max){
    if(min >= max){
        console.log("Invalid Number");
        return null;
    }
    var _randomNum = Math.random() * (max - min) + min;
    _randomNum = parseInt(Math.round(_randomNum));
    return _randomNum;
}

var array = ["I", "Love", "U"];
console.log(GetRandomElementFromArray(array));