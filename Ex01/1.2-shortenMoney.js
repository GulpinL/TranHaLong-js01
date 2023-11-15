var num1 = 1000;        //1k
var num2 = 1123400000;  //1.12B
var num3 = 1342222;     //1.34M
var num4 = 1934222211234000001;//134 222 211  234 000 001

function formatShortenMoney(num){
    // If number smaller than 1000 -> just return
    var _numStr = num + "";
    var _numStrShorten = "";
    if(num < 1000){
        console.log("Shorten Money: "+_numStrShorten);
        return;
    }

    // Rule BB, KB, MB, KBBB, MBBB, BBBB -> never see two letter 'M' or two letters 'K' at same time
    var _numE10 = _numStr.length;// 
    _numE10 = _numE10 - 1;
    var B = parseInt(_numE10/9);

    if(B > 0){
        for(var i=0;i<B;i++){
            _numStrShorten = "B"+_numStrShorten;
            _numE10 -=9;
        }
    }
    else{
        var M = parseInt(_numE10 /6);
        if(M > 0){
            _numStrShorten = "M"+_numStrShorten;
        }
        else{
            var K = parseInt(_numE10 /3);
            if(K > 0){
                _numStrShorten = "K"+_numStrShorten;
            }
        }
    }

    // Get head Number -> if go to this depth, always have 3 number
    var _headNumStr = _numStr[0];
    _headNumStr += ".";
    _headNumStr += _numStr[1];
    _headNumStr += _numStr[2];
    if(_numStr[2]== 0){                     // prevent: 1K -> 1.00K
        _headNumStr = _headNumStr.slice(0, _headNumStr.length-1);
        if(_numStr[2]==0){
            _headNumStr = _headNumStr.slice(0, _headNumStr.length-2);    
        }
    }
    _numStrShorten = _headNumStr + _numStrShorten;

    console.log("Shorten Money: "+_numStrShorten);
}

formatShortenMoney(num1); //Expected: 1K -> 1.00K
formatShortenMoney(num2); //Expected: 1.12B
formatShortenMoney(num3); //Expected: 1.34M
formatShortenMoney(num4); //Expected: 1.93BB
