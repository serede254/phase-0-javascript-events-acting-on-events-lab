const dodger=getElementById("dodger");


function moveDodgerRight(){
    let rightHand =dodger.style.left.replace("px","");
    let left =parseInt(rightHand,10);
    if(left<360){
        dodger.style.left=`${left+1}px`;
    }
    }
    function moveDodgerLeft(){
        let leftHand =dodger.style.left.replace("px","");
        const left =parseInt(leftHand,10);
        if(left>0){
            dodger.style.left=`${left-1}px`;
        }
        }
    

