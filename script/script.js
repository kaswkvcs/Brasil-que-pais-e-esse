const nav = document.getElementsByTagName("nav")[0];
const topnav = nav.offsetTop;

const listReg = document.getElementById("ul-regioes");

window.onscroll=function(){
    fixedNavOnTop();
    fixedListregOnTop();
}

function fixedNavOnTop(){
    if(window.pageYOffset >= topnav){
        nav.classList.add("FixedNav");
        listReg.classList.add("FixedListReg");
    }
    else{
        nav.classList.remove("FixedNav");
        listReg.classList.remove("FixedListReg");
    }
}
