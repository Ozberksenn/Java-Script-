window.onload = () => {


    let FORM = document.querySelector('#userForm')
    FORM.addEventListener('submit',fonk)
    let ALERT = document.querySelector('#alert')
    let LIST = document.querySelector('#Ilist')
    let CLEAR = document.querySelector('#clear')
    CLEAR.addEventListener("click",list_clear)
    
    
    

    let alertfunction = (title,message,cls) =>  ` <div class="alert alert-${cls} alert-dismissible fade show" role="alert">
    <strong>${title}</strong> ${message}
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>
    `
    function list_clear(){
        let secim = confirm("Tüm liste silinecek. Emin Misiniz?");
         if (secim == true) {
            let silinecekler = document.querySelectorAll("li");
            
 
            for (let j = 0; j < silinecekler.length; j++) {
                silinecekler[j].remove();
                ALERT.innerHTML = alertfunction(
                    "BAŞARILI !!",
                    "İşlem başarıyla tamamlanmıştır",
                    "success"
                )
                
        }
    }

    }


    function fonk(event){
        event.preventDefault();
        let USERNAME = document.querySelector('#username')
        let SCORE = document.querySelector('#score') 
        
        if(USERNAME.value && SCORE.value){
            listFunction(USERNAME.value,SCORE.value)
            USERNAME.value = ""
            SCORE.value = ""
        }else{
            ALERT.innerHTML = alertfunction(
                "UYARI ! ! ! ",
                "EKSİK BİL BİLGİ GİRDİNİZ...",
                "danger"
            )
            
        }
    }

 /*   <li class="list-group-item d-flex justify-content-between align-items-center">
    A list item
    <span class="badge bg-primary rounded-pill">14</span>
  </li> */

  

  function listFunction(username,score){
    let liDOM=document.createElement('li')
    liDOM.innerHTML = `${username} <span class="badge bg-primary rounded-pill">${score}</span>`
    liDOM.classList.add(
        'list-group-item','d-flex','justify-content-between','align-items-center', 
    )
    LIST.append(liDOM)
    } 
   
};