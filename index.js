
let readLineSync = require("readline-sync");
let kuler = require("kuler");

let getUserName = readLineSync.question("Hey! What's Your Name? :) ")
console.log(kuler(`\nHey ${getUserName} Welcome to Quizify!!`, "#22d3ee"))
console.log("Please select options from a/b/c/d Only");
let leaderBoardSortedList = [];
/** Creating a database for Questions*/
let score = 0;
const database = {
    data: [
        {
            question: `let a={} and b={} console.log(a==b) console.log(a===b)`,
            options: {
                a: `false false`,
                b: `false true`,
                c: `true false`,
                d: `true true`,
            },
            correctAnswer: `a`,
        },
        {
            question: `Object.assign(target,src) creates which copy`,
            options: {
                a: "Deep Copy",
                b: "Nested Copy",
                c: "Shalloe Copy",
                d: "creates a new reference",
            },
            correctAnswer: "c",
        },
        {
            question: "Is method chaining possible with forEach?",
            options: {
                a: "Yes",
                b: "No",
            },
            correctAnswer: "b",
        },
    ],
};

/** Creating database for leaderboard */
const leaderboard = {
    data: [
        {
            name: "Sridevi",
            score: 3
        },
        {
            name: "Rajeev",
            score: 1
        },
        {
            name: "Sai",
            score: 2
        }
    ]
}

/** Play the Game! */
const playTheGame = (userAnswer, correctAnswer) => {
    if (userAnswer === correctAnswer) {
        score++;
        console.log(kuler("Correct Answer !", "#059669"))
    } else {
        console.log(kuler("Incorrect Answer :(", "#dc2626"));
        console.log(`Correct Answer is ${correctAnswer}`)
    }
}

/** Question & Options Prompt */
const showQuestionsAndOptions = (database) => {
    for (let i = 0; i < database.data.length; i++) {
        console.log(`\nQ${i + 1} - ${database.data[i].question}\n`);
        for (let key in database.data[i].options) {
            console.log(`${key} - ${database.data[i].options[key]} `)
        }
        let userQuestionPrompt = readLineSync.question("Enter your answer (a/b/c/d) - ").toLowerCase();
        playTheGame(userQuestionPrompt, database.data[i].correctAnswer)
    }
};

/** Display Leaderboard */
const showLeaderBoard = (leaderboard) => {
    leaderboard.data.push({ name: getUserName, score: score });
    leaderBoardSortedList = leaderboard.data.sort((a, b) => b.score - a.score);
    for (let leader of leaderBoardSortedList) {
        console.log(`${leader.name} - Score: ${leader.score}`)
    }
}

showQuestionsAndOptions(database);

console.log(`Your score is ${score}\n`)

console.log("*********LEADERBOARD*********\n");
showLeaderBoard(leaderboard)
console.log("\n*****************************\n");

console.log(kuler(`${leaderBoardSortedList[0].name} Nuvvu Thop Amma !!!`, "#fcd34d"))