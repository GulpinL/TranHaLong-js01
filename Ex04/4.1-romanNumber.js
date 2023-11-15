var listRomanValueTable =       [ 1,   5,  10,  50,  100, 500, 1000];
var listRomanCharTable =        ["I", "V", "X", "L", "C", "D", "M"];
            //index             //0    1    2    3    4    5    6

function ConvertToRomanNumber3(num){
    var str = "";
    var index = 6;
    str = RecursionRomanStr(num,str,index);
}

function RecursionRomanStr(num, str, index){
    if(index < 0 ){
        console.log(str);
        return ;
    }
    if(n <0){
        console.log(str);
        return ;
    }

    // Check value per e10
    var n = Math.floor(num / listRomanValueTable[index]);
    if(n <= 5){
        if(n == 0){
            
        } else if(n == 5){
            str += listRomanCharTable[index+1];
        }
        else if(n == 4){
            str += listRomanCharTable[index];
            str += listRomanCharTable[index+1];
        }else{        
            for(var i =0;i< n;i++){
                str+= listRomanCharTable[index]
            }
        }
    }
    // n = 5 6 7 8 9
    else{
        // 9        -> I, V, X, index = I -> IX
        if(n == 9){                 
            str += listRomanCharTable[index];
            str += listRomanCharTable[index+2];
        //6 7 8     -> I, V, X, index = I -> VI , VII, VIII
        }else{                      
            str += listRomanCharTable[index+1];
            for(var i =0;i< n -5 ;i++){
                str+= listRomanCharTable[index]
            }
        }
    }

    num -= n*listRomanValueTable[index];
    RecursionRomanStr(num, str, index-2);
}

/*
for(var i=1;i<199;i++){
    ConvertToRomanNumber3(i);
}
*/

var num1 = 99; 
var num2 = 456;
var num3 = 701;
var num4 = 4;
var num5 = 777;
ConvertToRomanNumber3(num1);
ConvertToRomanNumber3(num2);
ConvertToRomanNumber3(num3);
ConvertToRomanNumber3(num4);
ConvertToRomanNumber3(num5);