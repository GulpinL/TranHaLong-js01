function CalculateCombination(k ,n){
    // Check valid input
    if( k > n){
        console.log("Invalid input");
        return;
    }

    var _combination = 0;
    // Check special input to output faster
    if(k ===0 || k === n){
        _combination = 0;
        console.log("Combination: "+ _combination);
        return;
    }

    if(k === 1){
        _combination = n;
        console.log("Combination: "+ _combination);
        return;
    }

    // Calculate n! k! (n-k)!
    var _n = RecursionCombination(n);
    var _k = RecursionCombination(k);
    var _n_k = RecursionCombination(n-k);
    // Calculate combination
    _combination = _n /(_k*_n_k);
    console.log("Combination: "+ _combination);
}

// n! = n * (n - 1) * (n - 2) * ... * 1
function RecursionCombination(num){
    console.log("current num:"+ num);
    if(num == 1){
        return 1;
    }
    num = num* RecursionCombination(num-1);
    return num;
}

CalculateCombination(3,6);      //Expected: 20
CalculateCombination(5,9);      //Expected: 126
CalculateCombination(2,100);    //Expected: 4950
