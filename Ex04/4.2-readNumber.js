var _listSentence = ["vạn " , "ngàn ", "trăm " ,"mươi ", "linh "];//
                    // 0       1        2        3       4
function ReadUnderTenThousand(num){ //1230
    var _num1000 = Math.floor( num /1000 );
    num = num % 1000;
    var _num100 = Math.floor( num /100 );
    num %= 100;
    var _num10 = Math.floor( num /10 );
    num %= 10;
    var _num1 = num;

    var _str = "";
    if(_num1000 != 0){
        _str += ReplaceStringNumber(_num1000) + _listSentence[1];//ngan
    }
    if(_num100 != 0){
        _str += ReplaceStringNumber(_num100) + _listSentence[2];//tram
    }
    if(_num10 != 0){
        if(_num10 == 1){
            _str += "mười ";
        }else{
            _str += ReplaceStringNumber(_num10) + _listSentence[3];//ngan
        }
    }
    if(_num1 != 0){
        if(_num1 == 1&& _num10==1){ // 11 -> muoi mot
            _str += "một";
        }
        else if(_num10 == 0 && _num100 != 0){   // 101 -> 1 tram linh mot
            _str += "linh " + ReplaceStringNumber(_num1);
            
        }
        else if(_num1 == 1){   // 101 -> 1 tram linh mot
            _str += "mốt";
            
        }
        else{
            _str += ReplaceStringNumber(_num1);
        }
    }

    return _str;


}
function ReplaceStringNumber(num){
    if(num == 1){
        return "một ";
    }
    if(num == 2){
        return "hai ";
    }
    if(num == 3){
        return "ba ";
    }
    if(num == 4){
        return "bốn ";
    }
    if(num == 5){
        return "năm ";
    }
    if(num == 6){
        return "sáu ";
    }
    if(num == 7){
        return "bảy ";
    }
    if(num == 8){
        return "tám ";
    }
    if(num == 9){
        return "chín ";
    }
    if(num == 11){
        return "moots";
    }
}

function ReadVNNumber(num){
    var _numStr = num + "";
    var _strVietNamese = "";
    // Get "Van" part
    if(num >= 10000){
        var _strNum3 = _numStr.slice(0,_numStr.length - 4);
        var _numHead = +_strNum3;
        _strVietNamese += ReadUnderTenThousand(_numHead);
        _strVietNamese += "vạn ";           
    }
    // Other part that smaller than "1 Van"
    num = num % 10000;    
    _strVietNamese += ReadUnderTenThousand(num);
    return _strVietNamese;
}


var num1 = 726503;
var num2 = 988;

console.log(ReadVNNumber(num1));
console.log(ReadVNNumber(num2));
console.log(ReadVNNumber(702410));