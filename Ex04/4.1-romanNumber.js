var listRomanValueTable =       [ 1,   5,  10,  50,  100, 500, 1000];
var listRomanCharTable =        ["I", "V", "X", "L", "C", "D", "M"];
            //index             //0    1    2    3    4    5    6

function ConvertToRomanNumber3(num){
    var str = "";
    var index = 6;
    str = RecursionRomanStr(num,str,index);
}

function RecursionRomanStr(num, str, index){//  199, "", 4
    if(index < 0 ){
        console.log("Final str: "+ str);
        return ;
    }
    if(n <0){
        console.log("Final str: "+ str);
        return ;
    }

    var n = Math.floor(num / listRomanValueTable[index]);// = 900 /1000 = 0, index =6
    if(n <= 5){
        if(n == 0){
            
        } else if(n == 5){
            str += listRomanCharTable[index+1];
        }
        else if(n == 4){
            str += listRomanCharTable[index];
            str += listRomanCharTable[index+1];
        }else{        //1 2 3
            for(var i =0;i< n;i++){
                str+= listRomanCharTable[index]
            }
        }
    }
    else{// >5
        if(n == 9){// 9 -> I V X -> I X
            str += listRomanCharTable[index];
            str += listRomanCharTable[index+2];
        }else{//6 7 8 -> I V X -> VI , VII, VIII
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