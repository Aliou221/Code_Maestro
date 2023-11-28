const menu=document.querySelector("#menu-burger");
const navbar=document.querySelector("#nav");

    menu.addEventListener("click", ()=>{
        if(nav.style.display=="none"){
            document.getElementById("nav").style.display="flex";
            document.getElementById("menu-burger").innerHTML="&#10005;";
        }
        else{
            document.getElementById("nav").style.display="none";
            document.getElementById("menu-burger").innerHTML="&#9776;";
        }
    });