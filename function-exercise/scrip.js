window.onload = () => {

    let n = 0;
    let artan = document.querySelector('#number')
    let one = document.querySelector('#button-one')
    let two = document.querySelector('#button-two')

    one.addEventListener("click",tikla)
    two.addEventListener("click",tikla)


    function tikla(){
        console.log(this.id)
        this.id == 'button-one' ? n+=1 : n-=1
        number.innerHTML = n
    }
    

};