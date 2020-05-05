
const main = document.querySelector('.main')

let date = new Date();

let slideMonths = document.querySelectorAll(".month");
  arrowLeft = document.querySelector("#prev"),
  arrowRight = document.querySelector("#next"),
  current = parseInt(date.toLocaleDateString(date.getMonth())[0])-1
  
  function reset() {
    for (let i = 0; i < slideMonths.length; i++) {
      slideMonths[i].style.display = "none";
      
    }
  }

  function startSlide() {
    reset();
    slideMonths[current].style.display = "grid"
      

        let today = slideMonths[current].children[date.getDate(date.getDay())-1];

            today.style.color = "white"
            
  }

  function slideLeft() {
    reset();
    slideMonths[current - 1].style.display = "grid";
    current--;
  }
 
  function slideRight(){
    reset();
    
      slideMonths[current + 1].style.display = "grid";
      current++;
      
  }
  arrowRight.addEventListener("click", function() {
      if (current === slideMonths.length - 1){
        current = -1;
        
      }
    slideRight()
  });
  
  arrowLeft.addEventListener("click", function() {
    if (current === 0) {
      current = slideMonths.length;
    }
    slideLeft();
    
  });

  
  startSlide();

  

  





            

            






