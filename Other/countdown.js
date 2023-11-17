let count = 60;

const timer = setInterval(CountDown, 1000);

function CountDown(){
    count--;
    console.log(count);
    if (count === 0) {
        clearInterval(timer);
        console.log("Ket Thuc Count Down");
    }
}
// setInterval (callback, milliseconds); //1000 milliseconds = 1 second



// function MyCountDown(myTime){
//     setInterval(DisplayCountDown, 1000); 
// }

// function DisplayCountDown(currentTime){
//     if(currentTime >= 0){
//         console.log(currentTime);
//         currentTime--;
//     }
// }
// MyCountDown(5);

// function Dis(num){
//     for(let i = 0;i<num;i++){
//         (function (i){
//             if(i%2==0){
//                 console.log("Me: "+ i);
//             }
//         })(i)
//     }
//     // for(let i = 0;i<num;i++){
//     //     hello = (i)=>{
//     //         console.log("Me: "+ i);
//     //     }
//     //     hello(i)
//     // }
// }

// Dis(5);