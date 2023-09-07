// Code your solutions in this file

function writeCards(names, event){
    let cardsToSend = [];

    for(let i = 0; i < names.length; i++){
        cardsToSend.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }

    return cardsToSend;
}

function countDown(downFrom){
    while (downFrom >= 0){
        console.log(downFrom);
        downFrom--;
    }
}

