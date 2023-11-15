// Only count upper case Word +1 
// Need a hold dictionary to check valid word
// -> use hash or dictionary to check all meaning word
function CountWordAppearInString(inputStr){
    var count = 1;
    for(var i = inputStr.length;i>0;i--){
        var _indexChar = inputStr.slice(i-1,i);
        if(_indexChar === _indexChar.toUpperCase()){
            count++;
            // console.log(_indexChar);
        }
    }
    return count;
}

var str1 = "oneTwoThree";// 3
var str2 = "iLoveUSoMuch";// 5


console.log(CountWordAppearInString(str1));
console.log(CountWordAppearInString(str2));

