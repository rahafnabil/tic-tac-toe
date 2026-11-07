/*-------------------------------- Constants --------------------------------*/
const messageEl= document.querySelector('#message')
const boardboxes=document.querySelectorAll('div')
console.dir(boardboxes)
/*---------------------------- Variables (state) ----------------------------*/
let gameDone=false
let turn='X'


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
    console.log(`x positions are ${currentGame}`)
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
