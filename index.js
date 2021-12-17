window.onload = function () {
  
    var seconds = 00; 
    var tens = 00; 
    var appendTens = document.getElementById("tens")
    var appendSeconds = document.getElementById("seconds")
    var buttonStart = document.getElementById('button-start');
    var buttonStop = document.getElementById('button-stop');
    var buttonReset = document.getElementById('button-reset');
    var Interval ;
    var btn = document.getElementById('btn');
    var min;
    var sec;

    btn.onclick = ()=>{
     min= document.getElementById('time').value;
     sec = document.getElementById('secs').value;
     console.log(min);
    }

    buttonStart.onclick = function() {
      
      clearInterval(Interval);
       Interval = setInterval(startTimer, 10);
    }
    
    buttonStop.onclick = function() {
      clearInterval(Interval);
    }
  
    buttonReset.onclick = function() {
       clearInterval(Interval);
      tens = "00";
        seconds = "00";
      appendTens.innerHTML = tens;
        appendSeconds.innerHTML = seconds;
    }
   
    function startTimer () {
        console.log(min);
        tens++; 
        if(seconds>min-1 && tens>sec){
            alert("Time Completed!")
            clearInterval(Interval);
         tens = "00";
           seconds = "00";
         appendTens.innerHTML = tens;
           appendSeconds.innerHTML = seconds;
        }
      
      if(tens <= 9){
        appendTens.innerHTML = "0" + tens;
      }
      
      if (tens > 9){
        appendTens.innerHTML = tens;
        
      } 
      
      if (tens > 99) {
        console.log("seconds");
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        tens = 0;
        appendTens.innerHTML = "0" + 0;
      }
      
      if (seconds > 9){
        appendSeconds.innerHTML = seconds;
      }
    
    }
  
  }