setInterval(() => {
    const time=document.querySelector("#time")
    let date=new Date()
    let hours=date.getHours()
    let minutes=date.getMinutes()
    let seconds=date.getSeconds()
    let day_nigth="PM"
    if(hours>12){
        day_nigth="PM"
        hours=hours-12
    }
    if(minutes<10){
        minutes="0"+minutes
    }
    time.textContent=hours+":"+minutes+":"+seconds+" "+day_nigth
}, );