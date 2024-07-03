function getColor(){
    const randomNumber=Math.floor(Math.random()*16777215); // 16777215is 0xFFFFFF in hexadecimal) scales this range up to almost 0xFFFFFF, but not including it.
    const colorCode ="#"+randomNumber.toString(16); //Converts the number to its hexadecimal representation.
document.body.style.backgroundColor = colorCode; //changes backgroundcolor 
document.getElementById("color-code").innerText=colorCode; //change h1 text color

navigator.clipboard.writeText(colorCode)
}

const btn = document.getElementById("btn")
btn.addEventListener("click", function(){
    getColor()
})

