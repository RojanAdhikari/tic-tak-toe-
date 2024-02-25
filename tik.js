    let boxes = document.querySelectorAll(".box");
    // box vanni div lai select gareko query selector use garera 
   

    let msg =document.querySelector("#msg");
    let con =document.querySelector(".msgcon");
    let turnO = true;
    // yo value true ho vane  O aauxa yedi yo value false ho vane X aauxa 


    // aaba winning patter 2D array ma store garne 
    const winPatterns = [
        [0 ,1,2],
        [3,4,5],
        [6,7,8],
        [0,4,8],
        [2,5,8],
        [0,3,6],
        [2,4,6],
        [1,4,7]
    ]

    // taie yo event listiner haleko buji ra xas hoina  k hunxa 
    /* sun aaba yo step ma chai hoina jaba button click hunxa ni  trunO ko vale true xa vane  inner text vitra o print hunxa ani 
    akao player  turn ko lagi fasle hunxa ani jaba turn ko value fase xa vane X print hunxa ani arko player ko turn true hunxa 
    */
    boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if (turnO) {
            box.innerText = "O";// playre O
            turnO = false;
        } else {
            box.innerText = "X";//palyer Y a
            turnO = true;
        }
        box.disabled =true;
        /* check winner function lai call garea .jaba kunai pani button click hunxa taba checkwinner call hunxa ani 
        tala vayo loop lai run garxa */ 
        checkwinner();

    });
    });
    const showwinner = (winner) => {
        msg.innerText = `Congratulations winner is ${winner}`;
        con.classList.remove("hide");
    }
    const checkwinner = () => {
        for ( var pattern of winPatterns) {
            // console.log(pattern[0],pattern[1],pattern[2]);
            // // yo code ko matlab boxes vanni array ko yo index ma jau yani ki boxes array ko 0 index ma 
            // console.log( boxes[pattern[0]],boxes[pattern[1]],boxes[pattern[2]]);

            
            let pos1Val = boxes[pattern[0]].innerText;
            let pos2Val = boxes[pattern[1]].innerText;
            let pos3Val = boxes[pattern[2]].innerText;
        /* yedi pos1 ,pos2,pos3 ko values empty xaina ra  pos1,pos2,pos3 ko value equal xa vane 
        */
            if(pos1Val != "" && pos2Val != ""&& pos3Val!= ""){
        if(pos1Val === pos2Val && pos2Val === pos3Val){
            console.log("winner");
            showwinner(pos1Val);
        }
        }
    };
    }
