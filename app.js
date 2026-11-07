/*-------------------------------- Constants --------------------------------*/
const messageEl= document.querySelector('#message')
const boardboxes=document.querySelectorAll('div')
const winningcomps=['012','345','678','036','147','258','048','246']
/*---------------------------- Variables (state) ----------------------------*/
let gameDone=false
let turn='O'


/*------------------------ Cached Element References ------------------------*/



/*-------------------------------- Functions --------------------------------*/
function selectbox (index){
    console.log(`helllo from box ${index}`)   
}
function matchChecker(turn){
    let currentGame=''
    boardboxes.forEach((box,index)=>{
        if (box.textContent===turn){
            currentGame+=`${index}`
        }
    })
    winningcomps.forEach((element)=>{
        console.log('one')
        if (element.split('').every((box)=>currentGame.includes(box))){
            gameDone=true
            console.log(`found a match in ${element}`)
            messageEl.textContent=`🥳 ${turn} has won 🥳`
        }

    })   
}
function turnFlip(turn){
    if(turn==='X'){
        turn='O'
    }
    else if(turn=='O'){
        turn='X'
    }
}


/*----------------------------- Event Listeners -----------------------------*/
boardboxes.forEach((box, index) => {
    box.addEventListener('click', () => {
        selectbox(index)
        if(gameDone!==true){
            matchChecker(turn)
        }


    })
})
