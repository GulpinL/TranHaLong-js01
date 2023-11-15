var _listSentence = ["van " , "ngan ", "tram " ,"muoi ", "linh "];//
                    // 0       1       2       3       4
function ReadUnderTenThousand(num){ //199
    var _str = "";
    var _e10 = 1000;

    for(var i = 1;i < 5;i++){
        var n = Math.floor(num/_e10); 

        if(n != 0){                                      // != 0 -> calculate other x10
            if(_e10 !=1){                               // kiem tra coi co phai hang don vi         
                _str = _str + ReplaceStringNumber(n) + " ";
                _str = _str + _listSentence[i];
            }
            else{
                if(_str.length == 0){                               // kiem tra neu chi co duy nhat 1 so
                    _str = _str + ReplaceStringNumber(n);
                }                                                   // hang don vi
                else if(_str.includes("muoi")){                     // check hang chuc
                    _str = _str + ReplaceStringNumber(n) + " ";
                }
                else{                                               // add 'linh'
                    _str = _str + _listSentence[i];
                    _str = _str + ReplaceStringNumber(n) + " ";
                }
            }
            num -= n*_e10;
        }
        _e10 /=10;
    };
    return _str;
}

function ReadVNNumber(num){
    var _numStr = num + "";
    var _strVietNamese = "";
    
    if(num >=10000){
        // lay so dau
        var _strNum3 = _numStr.slice(0,_numStr.length - 4);
        var _numHead = +_strNum3;
        _strVietNamese += ReadUnderTenThousand(_numHead);// 70
        _strVietNamese += "van ";           
    }
    num = num % 10000;    
    _strVietNamese += ReadUnderTenThousand(num);
    return _strVietNamese;
}

 function ReplaceStringNumber(num){
    if(num == 1){
        return "mot";
    }
    if(num == 2){
        return "hai";
    }
    if(num == 3){
        return "ba";
    }
    if(num == 4){
        return "bon";
    }
    if(num == 5){
        return "nam";
    }
    if(num == 6){
        return "sau";
    }
    if(num == 7){
        return "bay";
    }
    if(num == 8){
        return "tam";
    }
    if(num == 9){
        return "chin";
    }
}

var num1 = 726503;
var num2 = 988;

console.log(ReadVNNumber(num1));
console.log(ReadVNNumber(num2));
console.log(ReadVNNumber(702401));