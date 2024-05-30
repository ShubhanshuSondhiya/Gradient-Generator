let div_1 = document.getElementById("div_1");
let div_2 = document.getElementById("div_2");
let copy = document.getElementById("cpy_btn");
let code = document.getElementById("grd_code");
let Hex1 = "#0309e1";
let Hex2 = "#d3789c";

const hex_value = () => {
    let myHexVal = "0123456789abcdef"
    let colour = "#";
    for(let i=0; i<6; i++){
        colour = colour + myHexVal[Math.floor(Math.random()*16)];
    }
    return colour;
};
const switch_1 = () => {
    Hex1 = hex_value();
    document.body.style.backgroundImage = `linear-gradient(to right, ${Hex1},${Hex2})`
    div_1.innerHTML= Hex1;
    code.innerText = `background-image: linear-gradient(to right, ${Hex1},${Hex2})`;
};
const switch_2 = () => {
    Hex2 = hex_value();
    document.body.style.backgroundImage = `linear-gradient(to right, ${Hex1},${Hex2})`
    div_2.innerHTML= Hex2;
    code.innerText = `background-image: linear-gradient(to right, ${Hex1},${Hex2})`;
};

div_1.addEventListener("click", switch_1);
div_2.addEventListener("click", switch_2);

copy.addEventListener('click', ()=>{
    alert("Copied");
    navigator.clipboard.writeText(code.innerText);
});
code.addEventListener('click', ()=>{
    alert("Copied");
    navigator.clipboard.writeText(code.innerText);
});