console.log("Yello");

let box_class = document.getElementsByClassName("box")
let colorArray = ["green","blue","black","purple","pink","cyan"]
document.querySelectorAll(".box").forEach(a => a.style.backgroundColor=colorArray[(Math.floor(Math.random()*colorArray.length))%colorArray.length]);
