let count = 0
const ofcli = document.getElementById('first-li')

setInterval(()=>{
    count++
    const li = document.querySelector('.active')
    li.classList.remove('active')
    
    if(count >= 4){
        ofcli.classList.add('active')
        count = 0
    } else {
        li.nextElementSibling.classList.add('active')
    }
    
}, 2500)


document.querySelector('.btnnavbar').addEventListener('click', ()=>{
    document.querySelector('.btnnavbar').classList.toggle('target')
    document.querySelector('.navbarlist').classList.toggle('clickon')
})

