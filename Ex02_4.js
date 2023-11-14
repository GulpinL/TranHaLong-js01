var array1 = ["I", "Love", "U"];
var array2 = ["I", "Hate", "U", "So much"];

function GetElementArrayMissingFromFirstOne(array1, array2){
    var _array3 =[];
    var _check = false;
    for(var i=0;i< array1.length;i++){
        if(!array2.includes(array1[i])){
            _array3.push(array1[i]);
        }
    }
    return _array3;
}

console.log(GetElementArrayMissingFromFirstOne(array1,array2));