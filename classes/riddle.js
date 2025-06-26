import readline from 'readline-sync';

// מבנה חידה

export default class riddle{
    constructor(id, name, taskDescription, correctAnswer){
        this.id = id,
        this.name = name, 
        this.taskDescription = taskDescription, 
        this.correctAnswer = correctAnswer
    }

    // פעילות החידה
    ask(){
        // מציג את החידה
        console.log(`Riddle number ${this.id}: \n\n` +
            `The riddle is: ${this.taskDescription}\n`);    
            
        let test = true;
        while (test){
            // ממתין לקלט מהמשתמש
            const Answer = readline.question("Answer the riddle: ");
            // בודק את התשובה ומגיב בהתאם
            if (Answer === this.correctAnswer){
                test = false;
                console.log("\ncorrect Answer \n");                
            } else {
                console.log("\nWrong, Try again\n");                
            }
        }
    }
}   
