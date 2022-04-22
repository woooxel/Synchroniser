
const pointer_val = document.querySelector("#pointer")
var k = 0; 

setInterval(()=>{
    if(k<360){
    k++;
}else{k=0}
    pointer_val.style.transform = `rotate(${k}deg)`;
},10);