var num1 = 10000000;
var num2 = 123456;
var num3 = 12000.02;

function formatMoney(num){ 
    var _numStr = num + "";
    var _intPart = parseInt(Number(num));
    var _intPartLength = (_intPart+"").length;      
    var _floatPart = _numStr.slice(_intPartLength, _numStr.length);
    var _leftNumPerThousandLength = _intPartLength % 3;                
    // Get very first number of input number, ex: 12 000 000 -> get 12 
    var _numFormat = _numStr.slice(0, _leftNumPerThousandLength);    
    if(_leftNumPerThousandLength != 0){
        _numFormat += ",";
    }   
    // For every 3 step, add ',' to the end
    var j = 0;
    for (let i = _leftNumPerThousandLength; i < _intPartLength; i++){
        _numFormat +=_numStr[i];
        j++;
        if(j%3 == 0 && i!=(_intPartLength-1)){
            _numFormat += ",";
        }
    }
    // Get float left part
    _numFormat +=_floatPart;
    console.log("Num Format: "+_numFormat);
    
}

var convertedNum1 = formatMoney(num1);
var convertedNum2 = formatMoney(num2);
var convertedNum3 = formatMoney(num3);
// formatMoney(1234);
// formatMoney(12000000.0009);
// formatMoney(13000000);
