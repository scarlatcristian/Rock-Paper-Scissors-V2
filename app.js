let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_p = document.querySelector('.result > p');
const fire_div = document.getElementById('fire');
const water_div = document.getElementById('water');
const grass_div = document.getElementById('grass');

function getComputerChoice(){
    const choices =['Charmander','Squirtle','Bulbasaur'];
    const randomNumber = Math.floor(Math.random() *3);
    return choices[randomNumber];
};

function win(user, computer){
    userScore++;
    userScore_span.innerText = userScore;
    result_p.innerText = user + ' wins against ' + computer + '. You win!';
}

function lose(user, computer){
    computerScore++;
    computerScore_span.innerText = computerScore;
    result_p.innerText = user + ' lost against ' + computer +'. You lose!';
}

function draw(user, computer){
    result_p.innerText = `Both ${user}s  are equally strong. It's a tie`;
}

function game(userChoice){
    const computerChoice = getComputerChoice();
    switch(userChoice +' '+ computerChoice){
        case 'Charmander Bulbasaur':
        case 'Squirtle Charmander' :
        case 'Bulbasaur Squirtle' :
            win(userChoice, computerChoice);
            break;
        case'Charmander Squirtle':
        case'Squirtle Bulbasaur':
        case'Bulbasaur Charmander':
            lose(userChoice, computerChoice);
            break;
        case'Charmander Charmander':
        case'Squirtle Squirtle':
        case'Bulbasaur Bulbasaur':
            draw(userChoice, computerChoice);
            break;

    }
    return computerChoice;
};

function main(){
fire_div.addEventListener('click', function(){
    game('Charmander');
})

water_div.addEventListener('click', function(){
    game('Squirtle');
})

grass_div.addEventListener('click', function(){
    game('Bulbasaur');
})
};

main();