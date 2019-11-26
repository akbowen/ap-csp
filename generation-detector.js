/* This program determines the generation of a person born in the year entered by the user
 * and provides a random fact about that generation.
 */

// The generation facts (except for the Silent generation) are from danschawbel.com.

// initialize arrays
var silentFacts = ["The silent generation is so silent that not much is known about it.", "They're really quiet...", "They're probably retired."];
var boomerFacts = ["90% of Baby Boomers are married and 49% were married between 18 and 33.", "35% of all U.S. homeowners are Baby Boomers.", "70% of the disposable income in the U.S. is controlled by Baby Boomers."];
var genXFacts = ["36% of Gen X think it’s likely they will need to dip into their retirement savings to pay for non-retirement expenses.", "Gen X respondents ranked workplace flexibility as the most important perk (21%) and are more likely to walk away from their current job if flexibility isn’t available.", "41% of Gen Xers consider themselves entrepreneurs."];
var millennialFacts = ["Over 63% of Gen Y workers have a Bachelor’s Degree.", "81% of millennials have donated money, goods or services.", "39% of Millennials have a tattoo."];
var genZFacts = ["77% of Gen Zs are either extremely or very interested in volunteering to gain work experience.", "84% of Gen Zs multitask with an Internet-connected device while watching TV.", "One third of Gen Zs would like to retire by the age of 60 but only 17% think it’s possible."];

function start(){
    // initialize inputValid as true so the loop will run the first time
    var inputValid = true;
    // while loop can be broken and restarted if input is invalid
    while(inputValid == true){
        // asks user to enter year of birth
        var year = readInt("\nEnter a year of birth between 1928 and 2019: ");
        
        // validate input and return generation (with random fact);
        if(!(year >= 1928 && year <= 2019)){
            inputValid = false;
            break;
        }
        
        // pick a number between 0 and 2 to call an array item for the random fact
        var factNumber = Randomizer.nextInt(0, 2);
        
        // determine generation and return it, along with random fact called from array
        if(year >= 1928 && year <= 1945){
            println("This person's generation is Silent.\n");
            println(silentFacts[factNumber]);
        } else if(year >= 1946 && year <= 1964){
            println("This person's generation is Boomer.\n");
            println(boomerFacts[factNumber]);
        } else if(year >= 1965 && year <= 1980){
            println("This person's generation is Generation X.\n");
            println(genXFacts[factNumber]);
        } else if(year >= 1981 && year <= 1996){
            println("This person's generation is Millennial.\n");
            println(millennialFacts[factNumber]);
        } else if(year >= 1997 && year <= 2019){
            println("This person's generation is Generation Z.\n");
            println(genZFacts[factNumber]);
        } else {
            println("Error: the input was invalid.");
        }
        
        // ask user if they would like to repeat process
        inputValid = true;
        var repeat = readBoolean("Would you like to enter another birth year and repeat the process (true/false)? ");
        break; // break while loop
    }
    
    // restart program if input is invalid
    if(inputValid == false){
        println("\nThat was not a four-digit integer between 1928 and 2019.");
        start();
    }
    
    // restart program if user wants to
    if(repeat == true){
        start();
    }
}
