const container=document.querySelector(".container")
document.querySelector(".o-n-i").addEventListener("click",()=>{
	container.classList.add("change");
})
document.querySelector(".c-n-i").addEventListener("click",()=>{
	container.classList.remove("change");
})


const colors=["#6495ed","#7fffd4","#ffa07a","#f08080","#afeeee"];
let i=0;
Array.from(document.querySelectorAll(".n-a")).forEach((item)=>{
item.style.cssText = `background-color:${colors[i++]
}`;
})

Array.from(document.querySelectorAll(".n-b")).forEach((item) =>{
 item.onclick = () =>{
 	item.parentElement.parentElement.classList.toggle("change");
 };
});


