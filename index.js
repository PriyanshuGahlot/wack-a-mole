const tds = document.querySelectorAll('td');
tds.forEach(td => td.addEventListener('click', () => {
    if(td.classList.contains('mole')){
        console.log('hit');
        td.classList.remove('mole');
    }
}));
addMole();


function addMole(){
    const random = Math.floor(Math.random() * 8);
    tds[random].classList.add('mole');
    setTimeout(()=>{
        tds[random].classList.remove('mole');
        addMole();
    },3000);
}