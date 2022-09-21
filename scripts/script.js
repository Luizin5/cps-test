// coisas do botao
button = document.getElementById("btn")
counter = 0
// coisas do timer
timer = document.getElementById("timer")
seconds = 0

start_counter = function(){
 
  if(counter != 0)
  {
    return
  }
  
  interval = setInterval(function(){
    seconds++
    timer.innerText = `00:0${seconds}`
    document.getElementById("cps").innerText = `${counter/seconds}cps`
    
    //console.log(seconds == 10)
    if(seconds == 10)
    {
      timer.innerText = `00:${seconds}`
      console.log("é")
      clearInterval(interval)
      
    }
  },1000)

}

start = function()
{
  start_counter()
  counter++
  button.innerText =`${counter}`
}