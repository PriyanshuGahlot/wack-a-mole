const tds = document.querySelectorAll('td');
tds.forEach(td => td.addEventListener('click', () => {
    if(td.classList.contains('mole')){
        score++;
        strike = 0;
        strikeText.textContent = "strike: "+strike;
        scoreText.textContent = "score: "+score;
        td.classList.remove('mole');
    }
}));

addMole();

let strike = 0;
let score = 0;
const scoreText = document.getElementById('score');
const strikeText = document.getElementById('strike');

function addMole(){
    const random = Math.floor(Math.random() * 8);
    tds[random].classList.add('mole');
    setTimeout(()=>{
        if(tds[random].classList.contains('mole')){
            tds[random].classList.remove('mole');
            console.log('strike');
            strike++;
            strikeText.textContent = "strike: "+strike;
            if(strike === 3){
                setTimeout(()=>{
                    strike = 0;
                    score = 0;
                    scoreText.textContent = "score: 0";
                    strikeText.textContent = "strike: 0";
                    alert('Game Over');
                },1000);
            }
        }
        addMole();
    },3000);
}