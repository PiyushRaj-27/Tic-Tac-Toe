let turn = 0;
let state = [[0,0,0],[0,0,0],[0,0,0]];
let flag = 0;

function addTurn(a){
    if(turn%2==0){
        if (a.innerHTML == ""){
            a.innerHTML = 'X';
            turn++;
            let id = a.id;
            id = id.slice(1,3);
            state[id[0]][id[1]] = 'X';
            console.log(state);
            checkWin();
        }
        
    }
    else{
        if (a.innerHTML == ""){
            a.innerHTML = 'O';
            turn++;
            let id = a.id;
            id = id.slice(1,3);
            state[id[0]][id[1]] = 'O';
            console.log(state);
            checkWin();
        }
    }
}

function checkWin(){

    for(i = 0; i<3; i++){
        if((state[i][0] == state[i][1])&& (state[i][0] == state[i][2])&&(state[i][0]!=0)){
            flag = state[i][0];
            endGame(flag);
        }
    }
    for(i = 0; i<3; i++){
        if((state[0][i] == state[1][i])&& (state[0][i] == state[2][i])&&(state[0][i]!=0)){
            flag = state[0][i];
            endGame(flag);
        }
    }
    if((state[0][0] == state[1][1])&& (state[0][0]==state[2][2]) &&(state[0][0]!=0)){
        flag = state[0][0];
        endGame(flag);
    }
    else if((state[0][2]==state[1][1])&&(state[0][2]==state[2][0])&&(state[2][0]!=0)){
        flag = state[0][2];
        endGame(flag);
    }
    else if(turn == 9 && flag==0){
        endGame("No one");
    }
}

function endGame(a){
    let text = `The winner is ${a}`;
    let elem = document.getElementById("result");
    elem.style.display = "flex";
    elem.innerHTML = text;
}