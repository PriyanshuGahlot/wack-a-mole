const tds = document.querySelectorAll('td');
tds.forEach(td => td.addEventListener('click', () => {
    if(td.classList.contains('mole')){
        score++;
        scoreText.textContent = score;
        td.classList.remove('mole');
    }
}));
addMole();

let score = 0;
const scoreText = document.getElementById('score');

function addMole(){
    const random = Math.floor(Math.random() * 8);
    tds[random].classList.add('mole');
    setTimeout(()=>{
        tds[random].classList.remove('mole');
        addMole();
    },2000);
}