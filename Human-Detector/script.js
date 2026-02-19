'use strict';

const h3 =document.getElementById('result');
document.getElementById('startBtn').addEventListener('click', function(){
    let score=0;
    
    let sleepHour;
while (true) {
    const sleepHour= Number(prompt('How many hours do you sleep per day'))

    // Check if it is a valid number between 0 and 24
    if (!isNaN(sleepHour) && sleepHour >= 0 && sleepHour <= 24) {
        break; // valid input -> exit loop
    } 
    else {
        alert('Please enter a valid number between 0 and 24.');
    }
}
    if (sleepHour >= 4 && sleepHour <= 24) {
    score++;
}

    let music;
while(true) {
    music= prompt('Do you enjoy music? (yes/no)').toLowerCase().trim();
        //check if it is only "yes" or "no"
    if(music==='yes' || music==='no'){
         break;// valid input -> exit loop
    }
    else{
        alert('Please enter yes or no.');
    }
}
    if(music==='yes'){
        score++;
    }
    
    let getTired;
while(true) {
    getTired=prompt("Do you get tired?(yes/no)").toLowerCase().trim();

    if(getTired==='yes' || getTired==='no'){
        break;
    }
    else{
        alert('please enter yes or no.')
    }
}
    if(getTired==='yes'){
        score++;
    }
    const math= Number(prompt('35-10'))
    if(math===25){
        score++
    }

    if(score===3 || score===4){
        h3.textContent='You are definitely human!';
    }
    else if(score===1 || score===2){
        h3.textContent='Half human. half robot!';
    }
    else{
        h3.textContent='Robot detected!';
    }

})