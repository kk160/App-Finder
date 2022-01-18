const btnMeditation = document.querySelector("#btnMedi")
const btnWorkOut = document.querySelector("#btnWO")
const btnTracking = document.querySelector("#btnTracking")
const btnHealth = document.querySelector("#btnHS")
const btnHIIT = document.querySelector("#btnHIIT")
//const btnGratis = document.querySelector("btnGratis")
//const btnKosten = document.querySelector("#btnKosten")
//const btnAndroid = document.querySelector("#btnAndroid")
//const btnIOS = document.querySelector("#btnIOS")
//const btnGeraet = document.querySelector("#btnMit")
//const btnOhneGeraet = document.querySelector("#btnOhne")


function changeColor(){
  if(this.classList.contains("btn-light")){
    this.classList.remove("btn-light")
    this.classList.add("btn-warning")
    console.log("clicked")
    
  }else{
    this.classList.remove("btn-warning")
    this.classList.add("btn-light")
  }
}

function changeColorFilter(btn){
  if(btn.classList.contains("btn-light")){
    btn.classList.remove("btn-light")
    btn.classList.add("btn-warning")
    console.log("clicked")
    
  }else{
    btn.classList.remove("btn-warning")
    btn.classList.add("btn-light")
  }
}

btnMeditation.onclick = changeColor
btnWorkOut.onclick = changeColor
btnTracking.onclick = changeColor
btnHealth.onclick = changeColor
btnHIIT.onclick = changeColor
//btnGratis.onclick = changeColor
//btnKosten.onclick = changeColor
//btnAndroid.onclick = changeColor
//btnIOS.onclick = changeColor
//btnGeraet.onclick = changeColor
//btnOhneGeraet.onclick = changeColor