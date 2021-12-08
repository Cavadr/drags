// Task.1,4 Drag drops 

let box=document.querySelector(".box")
let dragArea=document.querySelector(".drag-area")
let id;
box.ondragstart=()=>{
    id=document.getElementById("drag").getAttribute("id");
    // console.log(id);
    // console.log("drag start")
}

let box2=document.querySelector(".box2")
let dragArea2=document.querySelector(".drag-area2")
let id2;
box.ondragstart=()=>{
    id2=document.getElementById("drag2").getAttribute("id2");
    // console.log(id);
    // console.log("drag start")
}

let box3=document.querySelector(".box3")
let dragArea3=document.querySelector(".drag-area3")
let id3;
box.ondragstart=()=>{
    id3=document.getElementById("drag3").getAttribute("id3");
    // console.log(id);
    // console.log("drag start")
}

// box.ondragend=()=>{
//     console.log("drag end")
// }

// box.ondrag=()=>{
//     console.log("on drag")
// }

dragArea.ondragenter=()=>{
    console.log("drag element enter")
}

dragArea.ondragleave=()=>{
    console.log("drag element leave")
}

dragArea.ondragover=(e)=>{
    e.preventDefault();
    console.log("drag element drop over")
}

dragArea.ondrop=function() {
     let dragElement=document.getElementById(id);
     dragArea.appendChild(dragElement);

}


dragArea2.ondragenter=()=>{
    console.log("drag element enter")
}

dragArea2.ondragleave=()=>{
    console.log("drag element leave")
}

dragArea2.ondragover=(c)=>{
    c.preventDefault();
    console.log("drag element drop over")
}

dragArea2.ondrop=function() {
     let dragElement2=document.getElementById(id2);
     dragArea2.appendChild(dragElement2);

}


// dragArea3.ondragenter=()=>{
//     console.log("drag element enter")
// }

// dragArea3.ondragleave=()=>{
//     console.log("drag element leave")
// }

// dragArea3.ondragover=(b)=>{
//     b.preventDefault();
//     console.log("drag element drop over")
// }

// dragArea3.ondrop=function() {
//      let dragElement3=document.getElementById(id3);
//      dragArea3.appendChild(dragElement3);

// }