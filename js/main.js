var eventHeader = document.getElementById("event-header"),
  eventName = document.getElementById("event-name"),
  eventDate = document.getElementById("date"),
  myButton = document.getElementById("button"),
  output = document.getElementById("output"),
  
  eventDateValue,
  countDown,
  millEdate;


/* function calcDate() {
  result = eventDateValue - theDate;
  return result;
} */
myButton.addEventListener('click',()=>{
   countDown = setInterval (()=> {
    timePassing();   
  }, 1000) 
})



function timePassing() {
  if (eventDate.value == "" || eventName.value == "") {
    output.innerHTML = "Please Enter Your Event Time";
  } else  {
    let theDate = new Date(),
        time = theDate.getTime(),
        millEdate = new Date(eventDate.value).getTime(),
        result = millEdate - time,
        day = Math.floor(result / (1000 * 60 * 60 * 24)),
        hour = Math.floor((result % (1000 * 60 * 60 * 24 )) / (1000 * 60 * 60)),
        min = Math.floor((result % (1000 * 60 * 60 )) / (1000 * 60 )),
        seconds = Math.floor((result % (1000 * 60 )) / (1000));

    output.innerHTML = ' The Remain Time Is : '+ day +'  Day :  '+ hour +' Hour : ' + min +
     ' Min : ' + seconds +' Seconds ' ;

  
   if(result> 0){
    
    result -= 1;


  } else {

    clearInterval(countDown);
    output.innerHTML = "Done the Event is Today";

  } 
}
};
