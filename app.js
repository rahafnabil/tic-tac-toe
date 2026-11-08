/*-------------------------------- Constants --------------------------------*/
const msgEl=document.querySelector('#message')
//const boardboxs=document.querySelectorAll('div')
const box0=document.getElementById('0')
const box1=document.getElementById('1')
const box2=document.getElementById('2')
const box3=document.getElementById('3')
const box4=document.getElementById('4')
const box5=document.getElementById('5')
const box6=document.getElementById('6')
const box7=document.getElementById('7')
const box8=document.getElementById('8')

console.log(box0,box1,box2,box3,box4,box5,box6,box7,box8)


/*---------------------------- Variables (state) ----------------------------*/
let currentPlayer='X'


/*------------------------ Cached Element References ------------------------*/
msgEl.textContent=`it's ${currentPlayer}'s turn`


/*-------------------------------- Functions --------------------------------*/



/*----------------------------- Event Listeners -----------------------------*/
/*boardboxs.forEach((element,index)=>{
    element.addEventListener('click',()=>{
        element.textContent= currentPlayer
    })
})*/
box0.addEventListener('click',()=>{
    box0.textContent=currentPlayer
})
box1.addEventListener('click',()=>{
    box1.textContent=currentPlayer
})

box2.addEventListener('click',()=>{
    box2.textContent=currentPlayer
})
box3.addEventListener('click',()=>{
    box3.textContent=currentPlayer
})
box4.addEventListener('click',()=>{
    box4.textContent=currentPlayer
})
box5.addEventListener('click',()=>{
    box5.textContent=currentPlayer
})
box6.addEventListener('click',()=>{
    box6.textContent=currentPlayer
})
box7.addEventListener('click',()=>{
    box7.textContent=currentPlayer
})
box8.addEventListener('click',()=>{
    box8.textContent=currentPlayer
})