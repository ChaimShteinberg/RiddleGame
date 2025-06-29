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

    // בחירת קושי
    const level = readline.question('Choose difficulty: easy / medium / hard: ');

    const riddleList = riddlesList.filter(Vriddle => Vriddle.level === level)

    // רץ על החידות
    for (const myRiddle of riddleList){
        // יוצר אוביקט של חידה
        const newriddle = new riddle(myRiddle.id, myRiddle.level, myRiddle.name, myRiddle.taskDescription, myRiddle.correctAnswer); 
        // מפעיל חידה
        newriddle.ask(myPlayer)
    }
    // סיום המשחק
    console.log("You have successfully completed the game!\n");
    // הצגת סיכום
    myPlayer.showStats()
}

main()
