const strpassword=document.querySelector('#password')
const btncopy=document.querySelector('#btncopy')
const lengthElement=document.querySelector('#passwordlength')
const numberelement=document.querySelector('#number')
const captialelement=document.querySelector('#captial')
const smallelement=document.querySelector('#small')
const symbolelent=document.querySelector('#symbol')
const frm=document.querySelector('#frm')

btncopy.addEventListener('click',async()=>{
    const pass=strpassword.value;
    if(pass){
        await navigator.clipboard.writeText(pass)
       alert("copied to clipboard")
    }
    else{
        alert("there is no password")
    }
    
})


function generater(min,max){
    const limit=max-min+1
    return String.fromCharCode(Math.floor(Math.random()*limit)+min)
}
function captitalvalue(){
    return generater(65,90)
}
function sumallvalue(){
    return generater(97,122)
}
function numbervalue(){
    return generater(48,57)
}
function symbolvalue(){
    let symbolval="!@#$%^&*()-=/{}.,'"
    return symbolval[Math.floor(Math.random()*symbolval.length)]
}


const sum=[
    {
        element:numberelement,
        fun:numbervalue
    },
    {
        element:captialelement,
        fun:captitalvalue
    },
    {
        element:smallelement,
        fun:sumallvalue
    },
    {
        element:symbolelent,
        fun:symbolvalue
    }
]  

frm.addEventListener('submit',(e)=>{
    e.preventDefault();

    const limit=lengthElement.value
    let generatervalue=""
    const newArray=sum.filter(({element})=>element.checked);
    console.log(newArray)
    for(i=0;i<limit;i++){
    const index=Math.floor(Math.random()*newArray.length)
    const letter=newArray[index].fun();
    generatervalue+=letter;
}
strpassword.value=generatervalue

})


 
 



