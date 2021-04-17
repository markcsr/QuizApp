const Product = require('../models/mathsQuestion');
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
        question: `How many positive divisors does 4000 = 25 53 have?`,
        answers: ["49", "73", "65", "15"],
        right: "15"
    }),
    new Product({
        question: `Mina has 6 different skirts, 3 different scarfs and 7 different tops to wear. She has exactly one orange scarf, exactly one blue skirt, and exactly one black top. If Mina randomly selects each item of clothing, find the probability that she will wear those clothings for the outfit.`,
        answers: ["1321", "1126", "4411", "273"],
        right: "1126"
    }),
    new Product({
        question: `There are 6 possible routes (1, 2, 3, 4, 5, 6) from Chennai to Kochi and 4 routes (7, 8, 9, 10) from the Kochi to the Trivendrum. If each path is chosen at random, what is the probability that a person can travel from the Chennai to the via the 4th and 9th road?`,
        answers: ["367", "59", "231", "124"],
        right: "124"
    }),
    new Product({
        question: `If two 14-sided dice one is red and one is blue are rolled, find the probability that a 3 on the red die, a 5 on the blue die are rolled.`,
        answers: ["4167", "3197", "5216", "1196"],
        right: "3197"
    }),
    new Product({
        question: `Suppose, R is a random real number between 5 and 9. What is the probability R is closer to 5 than it is to 6?`,
        answers: ["12.5%", "18%", "73%", "39.8%"],
        right: "12.5%"
    }),
    new Product({
        question: `A ball is thrown at a circular bin such that it will land randomly over the area of the bin. Find the probability that it lands closer to the center than to the edge?`,
        answers: ["51%", "25%", "72%", "34%"],
        right: "25%"
    }),
    new Product({
        question: `A programmer has a 95% chance of finding a bug every time she compiles his code, and it takes her three hours to rewrite the code every time she discovers a bug. Find the probability that she will finish her program by the end of her workday. (Assume that a workday is 9 hours)`,
        answers: ["76%", "44%", "37%", "28%"],
        right: "28%"
    }),
    new Product({
        question: `The probability that it rains tomorrow is 0.72. Find the probability that it does not rain tomorrow?`,
        answers: ["65%", "43%", "28%", "32%"],
        right: "28%"
    }),
    new Product({
        question: `What is the possibility such that the inequality x2 + b > ax is true, when a=32.4 and b=76.5 and x∈[0,30].`,
        answers: [`1.91`, `4.3`, `2.94`, `6.1`],
        right: `1.91`
    }),
    new Product({
        question: `The length of alike metals produced by a hardware store is approximated by a normal distribution model having a mean of 7 cm and a standard deviation of 0.35 cm. Find the probability that the length of a randomly chosen metal is between 5.36 and 6.14 cm?`,
        answers: ["0.562", "0.2029", "3.765", "1.576"],
        right: "0.2029"
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