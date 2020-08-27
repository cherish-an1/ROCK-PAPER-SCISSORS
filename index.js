class Game {
    constructor() {
        this.userScore = document.getElementById('user-score');
        this.compScore = document.getElementById('comp-score');
        this.chooseOne = ['rock', 'paper', 'scissors'];
        this.showTurn =  document.getElementById('show-turn');
        this.board = {
            'rock': `<span class="text-center">
                        <p class="h5 font-monospace text-uppercase">rock</p>
                        <i class="fas fa-hand-rock"></i>
                    </span>`,
            'paper': `<span class="text-center">
                        <p class="h5 font-monospace text-uppercase">paper</p>
                        <i class="fas fa-hand-paper"></i>
                    </span>`,
         'scissors': `<span class="text-center">
                        <p class="h5 font-monospace text-uppercase">scissor</p>
                        <i class="fas fa-hand-scissors"></i>
                    </span>`,
            'win' :  `<span class="text-center">                        
                            <i class="fas fa-check"></i>
                    </span>`,
            'loss': `<span class="text-center">                        
                            <i class="fas fa-times"></i>
                    </span>`,
            'draw': `<span class="text-center">                        
                            <i class="fas fa-bars"></i>
                    </span>`,
            'face': `<span class="">                        
                            <i class="fas fa-user-circle"></i>
                    </span>`,
            'robot':`<span class="">                        
                            <i class="fas fa-robot"></i>
                    </span>`
        };
    }

    // get random number
    getRandom(number) {
        return Math.floor(Math.random() * Math.floor(number));
    }
    
    // user chooses rock
    rock(){
        const user = 'rock';
        const comp = this.chooseOne[this.getRandom(3)];
        const result = this.evaluateScore(user, comp);
        this.showCurrentTurn(user, comp, result);
    }
    // user chooses paper
    paper(){
        const user = 'paper';
        const comp = this.chooseOne[this.getRandom(3)];
        const result = this.evaluateScore(user, comp);
        this.showCurrentTurn(user, comp, result);
    }

    //user chooses scissors
    scissors(){
        const user =  'scissors';
        const comp =  this.chooseOne[this.getRandom(3)];
        const result = this.evaluateScore(user, comp);
        this.showCurrentTurn(user, comp, result);
    }

    // now, let's evaluate the scores
    evaluateScore(user, computer){
        let userScore = parseInt(this.userScore.textContent);
        let compScore = parseInt(this.compScore.textContent);
        let result = ''

        // if and else statement
        if(user != computer){
            if(user === 'rock'){
                if(computer === 'scissors'){
                    userScore ++;
                    result = 'win';
                } else {
                    compScore ++;
                    result = 'loss';
                }
            }
            if(user === 'paper'){
                if(computer === 'rock'){
                    userScore ++;
                    result = 'win';
                }else {
                    compScore ++;
                    result =  'loss';
                }
            }
            if(user === 'scissors'){
                if(computer === 'paper'){
                    userScore ++;
                    result ='win';
                }else {
                    compScore ++;
                    result = 'loss';
                }
            }

            // increment scoreboard 
            this.userScore.textContent = userScore;
            this.compScore.textContent = compScore;
        } else {
            result = 'draw';
        }
        return result;
    }

    //show the result on the scoreboard 

    showCurrentTurn(user, computer, result){

        if(this.showTurn.innerHTML){
            this.showTurn.classList.remove('fade-in');
            setTimeout(() =>{
                this.showTurn.innerHTML = `${this.board['face']} ${this.board[user]} ${this.board[result]} ${this.board[computer]} ${this.board['robot']}`;
                this.showTurn.classList.add('fade-in');
            }, 500);
        }else {
            this.showTurn.innerHTML = `${this.board['face']} ${this.board[user]} ${this.board[result]} ${this.board[computer]} ${this.board['robot']}`;
            this.showTurn.classList.add('fade-in');
        }
    }

}
    //eventlisteners
function eventListeners() {
    const game = new Game ();
    const rock = document.getElementById('rock');
    const paper = document.getElementById('paper');
    const scissors = document.getElementById('scissors');

    rock.addEventListener("click", (e)=> {
        e.preventDefault();
        game.rock();
    });

    paper.addEventListener("click", (e)=> {
        e.preventDefault();
        game.paper();
    });

    scissors.addEventListener("click", (e)=> {
        e.preventDefault();
        game.scissors();
    });
};

document.addEventListener('DOMContentLoaded', (e) =>{
    eventListeners();
});








