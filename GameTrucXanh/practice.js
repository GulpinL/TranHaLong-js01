var num1 = 10000000;
var num2 = 123456;
var num3 = 12000.02;

function checkFloat(num){
    // var newNum = num /1;
    var newNum = parseInt(Number(num));
    console.log(newNum);
}

function formatMoney(num){ 
    var numString = num+"";
    var numIntPart = parseInt(Number(num));
    var numAbs = Math.abs((num - numIntPart));
    var numLeftString = numString.slice((numIntPart+"").numLength,numString.numLength);
    console.log("Me me: " + numLeftString);
    
    if( numAbs < 0.0000000001){
        console.log("Check Nguyen");
        ConvertNumIntStyle(numString);
        return;
    }
    else{
        console.log("Day la so float");
    }
}

function ConvertNumIntStyle(numString){    //1 200                  
    var numLength = numString.numLength;    // 4
    var leftNum = numLength %3;             // 1
    var newNumString = "";
    console.log("Content in Int: " + numString);
    console.log("type of: "+ typeof(numString));

    if(leftNum != 0){
        for(var i = 0 ;i < leftNum;i++){   // 1 200 000  //0 1 2 3 4 5 6
            newNumString += numString[i];
        }
        newNumString += ",";
        console.log("do1");
    }

    for(var j = leftNum ;j < numLength;j++){   // 1 200 000  //0 1 2 3 4 5 6
        newNumString += numString[j];
        if(j%3 ===0){
            newNumString += ",";
        }
        console.log("do2");
    }

    console.log("Convert Num: "+newNumString);

}

// var convertedNum1 = formatMoney(num1);
// var convertedNum2 = formatMoney(num2);
// var convertedNum3 = formatMoney(num3);
// formatMoney(1234);
// formatMoney(12000000.0002);
formatMoney(13000000);


// var string1 = "";
// var string2 = "long";
// var string3 = string1 +string2[2];
// string1 += string2[3];
// console.log(string1);
// console.log(string2);
// console.log(string3);
