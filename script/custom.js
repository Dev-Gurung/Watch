
setInterval(digitalClock, 1000);
function digitalClock(){
    var time = new Date();
    var hrs = time.getHours();
    var mins = time.getMinutes();
    var secs = time.getSeconds();
     var am_pm = "PM";

    if(hrs > 12){
        hrs -= 12;
        am_pm = "PM";
    }
    if(hrs == 0){
        hrs = 12;
        am_pm = "AM";
    }
    if(hrs < 10){
        hrs = "0"+ hrs;
    }
    if(mins < 10 ){
        mins = "0" + mins;
    }
    if(secs < 10){
        secs =  "0" + secs;
    }

    var realTime  = hrs + ':' + mins + ':' + secs + " " +am_pm;
    document.getElementById('clock').innerHTML = realTime;
}

