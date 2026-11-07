/*-------------------------------- Constants --------------------------------*/
const messageEl= document.querySelector('#message')
const boardboxes=document.querySelectorAll('div')
console.dir(boardboxes)
const winningcombs=['012','345','678','036','147','258','048','246']
const resetGame=document.querySelector('#reset')
/*---------------------------- Variables (state) ----------------------------*/
let gameDone=false
let turn='X'
let movesCounter=0
messageEl.textContent=`its ${turn} turn`

/*------------------------ Cached Element References ------------------------*/



/*-------------------------------- Functions --------------------------------*/
function selectbox (turn,index){
    boardboxes[index].textContent= turn
    movesCounter++
}
function turnRecored(content){
    let list=''
    boardboxes.forEach((box,index)=>{
        if (box.textContent===content){
            list+=`${index}`
        }
    })
    return list
}
function emptyspaces(){
    let list=''
    boardboxes.forEach((box,index)=>{
        if (box.textContent==="content"){
            list+=`${index}`
            
        }
    })
    return list
}
function matchChecker(turn){
    let WcurrentGame=turnRecored(turn)
    winningcombs.forEach((element)=>{
        console.log('one')
        if (element.split('').every((box)=>WcurrentGame.includes(box))){
            gameDone=true
            console.log(`found a match in ${element}`)
            messageEl.textContent=`🥳 ${turn} has won 🥳`
        }
    }) 
     // this section will check if there is a tie by recording a string of each of the 
     // turns and one of the remaining two empty spaces to check if a win combination
     // is possible to continue the game

    if((movesCounter>=7)&&(gameDone===false)){
        //Tcurrent
        let TcurrentGame1=(turnRecored(turn))
        let TcurrentGame2=(turnRecored(turnFlip(turn)))
        winningcombs.forEach((element)=>{
        console.log('one')
        //our if logic will check current turn positions with one of the empty spaces
        //(it will check the two empty spaces both seperatly) to look for possible winnin combs 
        // and if it finds a match in either x or o current positions, it will continue 
        // the game, else it will stop and display a tie 
        //*ik its impressive , took me a while to sketch it into paper :D
        /*this for current turn's possibilites */
        if ((element.split('').every((box)=>(TcurrentGame1+emptyspaces()[0]).includes(box)))
            ||(element.split('').every((box)=>(TcurrentGame1+emptyspaces()[1]).includes(box)))){
            gameDone=false
            console.log(`found a match in ${element}`)
        }
        /* this is for the opponent turn possibilties */
        else if ((element.split('').every((box)=>(TcurrentGame2+emptyspaces()[0]).includes(box)))
            ||(element.split('').every((box)=>(TcurrentGame2+emptyspaces()[1]).includes(box)))){
            gameDone=false
            console.log(`found a match in ${element}`)
        }
        /*if we dont find any possibilites in both turns*/
        else{
            gameDone=true
            console.log(`no possible combination`)
            messageEl.textContent="It's A Tie"
        }
    })       
    }
}
function turnFlip(turn){
    if(turn==='X'){
        return 'O'
    }
    else if(turn=='O'){
        return 'X'
    }
}
function resetboard(){
    boardboxes.forEach((element,index)=>{ 
        element.textContent=''
    })
    gameDone=false
    turn='X'
    movesCounter=0
    messageEl.textContent=`its ${turn} turn`

}
/*----------------------------- Event Listeners -----------------------------*/
boardboxes.forEach((box, index) => {
    box.addEventListener('click', () => {
        
        if((gameDone!==true)&&(box.textContent==="")){
            selectbox(turn, index)
            //we cant see a wining combination until board has 5 or more moves since its iterative 
            if(movesCounter>=5){
                matchChecker(turn)
            }
            if(gameDone!==true){
                    turn=turnFlip(turn)
                    messageEl.textContent=`its ${turn} turn`
                
            }
        }
    })
})
resetGame.addEventListener('click',()=>{
    resetboard()
})
