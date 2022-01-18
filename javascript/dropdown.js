$(function() {

    $('.dropdown-toggle').on('click', function(event) {
      $('.dropdown-menu').slideToggle();
      event.stopPropagation();
    });
  
    $('.dropdown-menu').on('click', function(event) {
      event.stopPropagation();
    });
  
    $(window).on('click', function() {
      $('.dropdown-menu').slideUp();
    });
  
  });

  const countText = document.querySelector("#countText")
  let count = 0

  function countChecked(input){
      if(input.checked){
        count--
      }
      else{
          count++
      }
      input.oninput = (() =>{
            countText.textContent=count 
  })
  }

  