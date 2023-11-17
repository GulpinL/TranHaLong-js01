var buttonsToGenerate = 5;// row = col
var btnList = [];
var currentClick = 0;
var currentBtnId;
var currentClickedBackCardImg;
var currentClickedFrontCardImg;

var clickBackId;
var clickFrontId;

function generateMeMe(){
    // create card book
    var listCardIndex = CreateRandomPair();
    var buttonNum = 16;
    var table = document.getElementById("myTable");
    
    for (var i = 0; i < buttonNum; i++) {
        var tr = document.createElement("tr");
        table.appendChild(tr);
        for (var j = 0; j < 4; j++, i++) {
            var td = document.createElement("td");// table cell
            var btn = document.createElement("button");
            var backCardImg = document.createElement("img");
            var frontCardImg = document.createElement("img");

            frontCardImg.src = GetSourceImgOnly(listCardIndex[i]);
            backCardImg.src = "../GameTrucXanh/ImgSource/backgroundCard.png";
            backCardImg.style.display = "";
            frontCardImg.style.display = "none";
            btn.id = "btn-" + i;
            backCardImg.id = "backCardImg-" + btn.id;
            frontCardImg.id = "frontCardImg-" + btn.id;

            // btn.classList.add('myCard');
            btn.addEventListener("click", flipCard)
            if (i >= buttonNum) {
            break;
            } else {
                // td  -> btn-> div -> img, img
                td.appendChild(btn);
                tr.appendChild(td);
                btn.appendChild(backCardImg);
                btn.appendChild(frontCardImg);
            }
      }
      i--;
    }
}

function flipCard() {
    console.log("Do0000");
    // alert("Button clicked, id "+this.id+", text:   "+this.innerHTML);
    var backIdImg = "backCardImg-" + this.id;
    var frontIdImg = "frontCardImg-" + this.id;
    var backCardImg = document.getElementById(backIdImg); 
    var frontCardImg = document.getElementById(frontIdImg); 
    frontCardImg.style.display = "";
    backCardImg.style.display = "none";

    currentClick++;// 0->1 
   if(currentClick==2){ // 2 card duoc chon
        currentClick = 0;
       // check
        if(frontCardImg.src === document.getElementById(clickFrontId).src){
        //    alert("TRUNG NHAU : backImgSrc: "+ frontCardImg.src+"\nfrontImgSrc"+document.getElementById(clickFrontId).src );
            //PLUS POITN
        }else{
            FlipDownBecauseOfNotMatch(backCardImg, frontCardImg);
            let clickBackCardImg = document.getElementById(clickBackId); 
            let clickFrontCardImg = document.getElementById(clickFrontId); 
            
            clickBackCardImg.style.display = "";
            clickFrontCardImg.style.display = "none";
          
        }
        // xoa luu
        clickBackId = "";
        clickFrontId = "";
    }
    else{// =1 -> luu card value    
        clickBackId = backIdImg;
        clickFrontId = frontIdImg;
    }
    
};
function FlipDownBecauseOfNotMatch(backCardImg, frontCardImg){// flip down
    var count = 1;
    const timer = setInterval(function (){
        count--;
        if (count === 0) {
            frontCardImg.style.display = "none";
            backCardImg.style.display = "";
   
            console.log("Turn of first card");
            
            clearInterval(timer);
            console.log("Ket Thuc Count Down");
        }
    }, 250);
}
function GetSourceImgOnly(index){
    if(index == 0){
        return "../GameTrucXanh/ImgSource/cat.png";
    }
    if(index == 1){
        return "../GameTrucXanh/ImgSource/dog.png";
    }
    if(index == 2){
        return "../GameTrucXanh/ImgSource/dragon-fruit.png";
    }
    if(index == 3){
        return "../GameTrucXanh/ImgSource/fairy.png";
    }
    if(index == 4){
        return "../GameTrucXanh/ImgSource/moon.png";
    }
    if(index == 5){
        return "../GameTrucXanh/ImgSource/mouse.png";
    }
    if(index == 6){
        return "../GameTrucXanh/ImgSource/star.png";
    }
    if(index == 7){
        return "../GameTrucXanh/ImgSource/sunny.png";
    }
}

function CreateRandomPair(){
    var nums = [0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7],
    ranNums = [],
    i = nums.length,
    j = 0;
    
    while (i--) {
        j = Math.floor(Math.random() * (i+1));
        ranNums.push(nums[j]);
        nums.splice(j,1);
    }
    return ranNums;
}