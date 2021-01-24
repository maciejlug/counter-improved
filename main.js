window.onload = function() {
  document.getElementById("content").style.display="none";
}
  function validation(){
    var today = new Date();
    var day = today.getDate();
    var year = today.getFullYear();
    var month = today.getMonth()+1;
    var btn = document.getElementById("value");
    dateArray = btn.value.split("-");

    if(parseInt(dateArray[0])>year){
      counter()
      }else{
        if(parseInt(dateArray[1])>month){
          counter()
        }else{
          if(parseInt(dateArray[2])>day){
            counter()
            }else{
              alert("use future date")
            }
        }
      }
      }

function counter() {
  // Input date to count from
  document.getElementById("everything").classList.add('animation')
  countDownDate = new Date(`${dateArray[1]} ${dateArray[2]}, ${dateArray[0]} 00:00:00`).getTime();
  document.getElementById("content").style.removeProperty('display');

  // Get today's date and time

  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = format(hours);
  document.getElementById("minutes").innerHTML = format(minutes);
  document.getElementById("seconds").innerHTML = format(seconds);
  
// Update the count down every 1 second

  setInterval(counter, 1000)
};




  // Add 0 if result is lesser than 10

function format(time){
  return time < 10 ? "0"+time : time;
}

 


