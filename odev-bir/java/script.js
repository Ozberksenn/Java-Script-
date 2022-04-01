window.onload = () => {
   
let userName = prompt("Lütfen Kullanıcı Adınızı Girin :")
let myName=document.querySelector('#myName')
myName.innerHTML = `${userName}`

setInterval(
    function time(){
        var dateNow = new Date();
        let gunler = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
        var hr = dateNow.getHours();
        var minute = dateNow.getMinutes();
        var sec = dateNow.getSeconds();
        
        if(hr < 10){
            hr = "0" + hr;
        }
        if(minute < 10){
            minute = "0" + minute;
        }
        if(sec < 10){
            sec = "0" + sec;
        }
        myClock.innerHTML = `${hr} : ${minute} : ${sec}  ${gunler[dateNow.getDay()]}`
        },1000
    );

    



};
