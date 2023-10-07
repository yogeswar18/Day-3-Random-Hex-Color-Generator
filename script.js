
function generateHexColor(){
    let color1=Math.random();
    color1=Math.random().toString(16).substring(2,8);
    let hexcolor1="#"+color1;
    let color2=Math.random();
    color2=Math.random().toString(16).substring(2,8);
    let hexcolor2="#"+color2;
    let color3=Math.random();
    color3=Math.random().toString(16).substring(2,8);
    let hexcolor3="#"+color3;
    document.body.style.background ="linear-gradient(45deg, " + hexcolor1 + ", " + hexcolor2 + ", " + hexcolor3 + ")";
    const hex=document.querySelector(".hex");
    hex.innerHTML=hexcolor1+","+hexcolor2+","+hexcolor3;
    
}
const generateColor=document.querySelector(".color");
generateColor.addEventListener("click",generateHexColor);
