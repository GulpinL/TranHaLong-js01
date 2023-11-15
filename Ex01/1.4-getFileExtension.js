function GetExtensionOfFile(inputFileNameStr){
    for(var i = inputFileNameStr.length;i>0;i--){
        var _indexChar = inputFileNameStr.slice(i-1,i);
        // console.log("io : " + _indexChar);
        if(_indexChar =="."){
            return inputFileNameStr.slice(i,inputFileNameStr.length);
        }
    }
   
}
var fileNameStr1 = "image.png";
var fileNameStr2 = "Sound.mp3";

console.log(GetExtensionOfFile(fileNameStr1));
console.log(GetExtensionOfFile(fileNameStr2));
