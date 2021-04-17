const Product = require('../models/logicQuestion');
const mongoose = require('mongoose');

const url = "mongodb+srv://adwait:adwait@cluster0.bh8xc.mongodb.net/quizzapp?retryWrites=true&w=majority"
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
})
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('Database is connected successfully on port 27017!!!');
});

const product = [
    new Product({
        question: `7 6 1 7 9 2 4 1 5 6 4 9 2 3 4 1 2 5 8 5 8 4 8 3 1 2 7 5 2 6 7 3 9 5 3   How many such 7’s are there in the above arrangement each of which is immediately followed by a digit which has a numerical value of more than four?`,
        answers: ["0", "1", "2", "3"],
        right: "3"
    }),
    new Product({
        question: `How many pairs of letters are there in the word “DODECAGON” which has as many letters between them in the word as in the English alphabetical series (Both backward and forward direction)?`,
        answers: ["1", "2", "3", "4"],
        right: "3"
    }),
    new Product({
        question: `863 725 278 549 875  If ‘1’ is subtracted from all the even digits and ‘2’ is subtracted from all the odd digits and then the numbers are arranged in ascending order, which of the following will be the second largest number?`,
        answers: ["863", "725", "278", "549"],
        right: "863"
    }),
    new Product({
        question: `863 725 278 549 875
        If all the three digits within each number are arranged in descending order then what will be the difference between second digit of the smallest number and third digit of the largest number thus formed?`,
        answers: ["1", "2", "3", "4"],
        right: "1"
    }),
    new Product({
        question: `Look at this series: 12, 11, 13, 12, 14, 13, … What number should come next?`,
        answers: ["10", "16", "13", "15"],
        right: "15"
    }),
    new Product({
        question: `Which word does NOT belong with the others?`,
        answers: ["wing", "fin", "beak", "rudder"],
        right: "beak"
    }),
    new Product({
        question: `If “*” is called “+”, “/” is called “*”, “-” is called  “/”, “+” is called “-”. 40/20 – 5 * 10 + 5 = ?`,
        answers: ["170", "160", "150", "175", "None of these"],
        right: "None of these"
    }),
    new Product({
        question: `If Reena says, “Anjali's father Raman is the only son of my father-in-law Ramanand”, then how is Piyu, who is the sister of Anjali, related to Ramanand ?`,
        answers: ["Wife", "Sister", "Grand-daughter", "Daughter", "None of these"],
        right: "Grand-daughter"
    }),
    new Product({
        question: `Which word does NOT belong with the others?`,
        answers: [`parsley`, `basil`, `dill`, `mayonnaise`],
        right: `mayonnaise`
    }),
    new Product({
        question: ` Which word does NOT belong with the others?`,
        answers: ["rye", "sourdough", "pumpernickel", "loaf"],
        right: "rye"
    }),

];

const com = async () => {

    var done = 0;
    for (var i = 0; i < product.length; i++) {
        await product[i].save((err, result) => {
            done++;
            if (done == product.length) {
                exit();
            }
        })
    };
}
com();
function exit() {
    mongoose.disconnect();
    console.log('done');
}