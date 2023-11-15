// -We have a rectangle garden with 3 row and 5 column: -each cell had a bomb or no bomb: ( 0: SAFE, 1: BOMB)
// -
//  problem: find all the safe way to go from the left to the right of the
//  garden.
// Input: [ [0,1,1], [0,1,1], [0,1,1], [0,1,1], [0,0,1]]
// Output : [ [0,0,0,0,0] , [0,0,0,0,1]]

// -> suppose: column = row , row = column
// left to right -> up to down
// output is index of array but WEIRD

// [0,1,1], 
// [0,1,1], 
// [0,1,1], 
// [0,1,1], 
// [0,0,1]]

// [ [0,0,0,0,0] , [0,0,0,0,1]]
// if have same +- 1 index same value -> can connect together
// 3e5 = 729
// [1,0,1],         
// [0,0,0],   ->    [1,0,0,0,0]
// [0,1,0],         [0,0,1,1,0]
// [0,1,0],         [1,0,0,0,0]
// [0,0,0]]


// suppose we can go DIAGONAL
var array2D = [ [0,1,1], [0,1,1], [0,1,1], [0,1,1], [0,0,1]];
class Vector2 {
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
}

function GetRightPath(array2D){
    var pathList = [];
    // current pos = [0][0]
    for(var col = 0; col < 5;col++){
        // CHECK up right
        // CHECK middle right
        // CHECK down right






        // for(var row = 0; row < 3; row++){
        //     if(array2D[col][row] == 0){
        //         if(col!=0){
        //             if()
        //         }else{
        //             var pos = new Vector2;
        //             pos.x = col;
        //             pos.y = row;
        //             pathList.push(pos);
        //         }
        //     }
            
        // }
    }

    return pathList;
    // No path exception
}

console.log(GetRightPath(array2D));

// for(var col = 0; col < 5;col++){
//     // for(var row = 0; row < 3; row++){
//     //     pathList.push([]);
//     // }
//     for(var row = 0; row < 3; row++){
//         for( var i=0;i < pathList.length;i++){
//             if(array2D[col][row] == 0 && true){             // break when meet first va;ue
//                 pathList[i].push(row);
//             }
//         }
//     }
// }
