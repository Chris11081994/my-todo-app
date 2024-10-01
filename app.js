const inputBox = document.querySelector(".input-box");
console.log(inputBox)
const liContainer= document.querySelector(".li-container");
const myBtn = document.getElementById("myBtn");

myBtn.addEventListener("click", ()=>{
    //let newList = window.prompt("enter new task")
    if(inputBox.value===""){
        alert("write something in the box")
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        liContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML= "\u00d7"
        li.appendChild(span)
    }

    inputBox.value="";
    saveData();
   
})

liContainer.addEventListener("click", (e)=>{
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }

    else if(e.target.tagName=== "SPAN"){
        e.target.parentElement.remove()
        saveData();
    }
}, false);

const saveData= ()=>{
    localStorage.setItem("data", liContainer.innerHTML)
}


const showData = ()=>{
    liContainer.innerHTML= localStorage.getItem("data")
}

showData();