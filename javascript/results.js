let btnClicked = false
let savedAppCard 
let savedArrow 
let savedCollapseID 
let collapseClass

function arrowClicked(appCard, arrow) {
    if(appCard.style.opacity === '0.5'){     
        closeAppCard(appCard,arrow)
    }
else if( savedAppCard !== appCard && btnClicked=== true && appCard.style.opacity !== '0.5'){
        savedArrow.click()
        openAppCard(appCard,arrow)
}
    else{
        openAppCard(appCard,arrow)
    }
}

function closeMiniAppCard() {
    savedArrow.click()
}

function closeAppCard(appCard, arrow){
       
    appCard.style.opacity = '1'
    appCard.style.transition = 'opacity 0.3s ease-in-out'
    appCard.style.marginBottom = '0px'
    arrow.style.transform = 'rotate(90deg)'
    arrow.style.transition = 'transform 0.3s ease-in-out'   
    btnClicked =false

}

function openAppCard(appCard, arrow){
    appCard.style.opacity = '0.5'
    appCard.style.transition = 'opacity 0.3s ease-in-out'
    savedAppCard= appCard
    defineMargin() 
    arrow.style.transform = 'rotate(-90deg)'
    arrow.style.transition = 'transform 0.3s ease-in-out'
    savedArrow = arrow
    btnClicked = true
}


function defineMargin(){
    if(window.innerWidth >= 1200){
            savedAppCard.style.marginBottom = "300px"
        }
        if(window.innerWidth < 1200 && window.innerWidth >= 1000){
            savedAppCard.style.marginBottom = "340px"
        }
        if(window.innerWidth < 1000 && window.innerWidth > 576){
            savedAppCard.style.marginBottom = "580px"
        }
        if(window.innerWidth < 576){
            savedAppCard.style.marginBottom = "0px"
        }
        
}

$(window).resize( function() {
    if(window.innerWidth >= 1200){
        savedAppCard.style.marginBottom = "300px"
    }
    if(window.innerWidth < 1200 && window.innerWidth >= 980){
        savedAppCard.style.marginBottom = "340px"
    }
    if(window.innerWidth < 980 && window.innerWidth > 576){
        savedAppCard.style.marginBottom = "580px"
    }
    if(window.innerWidth < 576){
        savedAppCard.style.marginBottom = "0px"
    }
})

