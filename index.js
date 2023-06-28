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

let spawnTime = 3000;

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
                    scoreText.textContent = "score: 0";
                    strikeText.textContent = "strike: 0";
                    alert('Game Over. Your score is '+score);
                    strike = 0;
                    score = 0;
                },1000);
            }
        }
        if(spawnTime > 700){
            spawnTime -= 100;
        }
        addMole();
    },spawnTime);
}