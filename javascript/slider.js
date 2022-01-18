const sliderValue = document.querySelector("#sliderText")
const inputSlide = document.querySelector("input")
let value

inputSlide.oninput = (() =>{
    value = inputSlide.value
    sliderValue.textContent = value
    sliderValue.classList.add("show")
})

inputSlide.addEventListener("mousemove", function(){
    
    let color = 'linear-gradient( 90deg, rgb(252, 191, 38) '+ value + '%, rgb(245, 245, 245) ' + value + '%)'
    inputSlide.style.background= color
})

