import readline from 'readline-sync';
import player from './classes/player.js';
import riddle from './classes/riddle.js';
import riddlesList from './riddles/riddlesList.js';

// game
function main(){
    // הודעת פתיחה
    console.log("Welcome to the riddle game\n");

    // מבקש את שם המשחק ויוצר שחקן
    const name = readline.question("Enter your name: ");

    const myPlayer = new player(name)

    // רץ על החידות
    for (const myRiddle of riddlesList){
        // יוצר אוביקט של חידה
        const newriddle = new riddle(myRiddle.id, myRiddle.name, myRiddle.taskDescription, myRiddle.correctAnswer);
        // מפעיל טיימר
        const start = Date.now();
        // מפעיל חידה
        newriddle.ask()
        // סוגר טיימר
        const end = Date.now();
        // שומר את משך זמן החידה
        myPlayer.recordTime(start, end);
    }

    // סיום המשחק
    console.log("You have successfully completed the game!\n");
    // הצגת סיכום
    myPlayer.showStats()
}
