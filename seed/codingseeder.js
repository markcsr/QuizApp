const Product = require('../models/codingQuestions');
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
        question: `Consider the following code:
        #include<stdio.h>
        int recursive_sum(int n)
        {
              if(n == 0)
                return 0;
              return n + recursive_sum(n - 1);
        }
        int main()
        {
             int n = 5;
             int ans = recursive_sum(n);
             printf("%d",ans);
             return 0;
        }
        Which of the following is the base case for the above recursive code?`,
        answers: ["if(n == 0)", "return 0", "return n + recursive_sum(n – 1)", "if(n == 1)"],
        right: "if(n == 0)"
    }),
    new Product({
        question: `How many times is the function recursive_sum() called when the following code is executed?
        #include<stdio.h>
        int recursive_sum(int n)
        {
              if(n == 0)
                return 0;
              return n + recursive_sum(n - 1);
        }
        int main()
        {
             int n = 5;
             int ans = recursive_sum(n);
             printf("%d",ans);
             return 0;
        }`,
        answers: ["4", "5", "6", "7"],
        right: "6"
    }),
    new Product({
        question: `What is the output of the following code?
        #include<stdio.h>
        int recursive_sum(int n)
        {
              if(n == 0)
                return 0;
              return n + recursive_sum(n - 1);
        }
        int main()
        {
             int n = 0;
             int ans = recursive_sum(n);
             printf("%d",ans);
             return 0;
        }`,
        answers: ["-1", "0", "1", "runtime error"],
        right: "0"
    }),
    new Product({
        question: `What is the output of the following code?
        #include<stdio.h>
        int recursive_sum(int n)
        {
              if(n == 0)
                return 0;
              return n + recursive_sum(n - 1);
        }
        int main()
        {
             int n = -4;
             int ans = recursive_sum(n);
             printf("%d",ans);
             return 0;
        }`,
        answers: ["0", "-10", "1", "runtime error"],
        right: "runtime error"
    }),
    new Product({
        question: "When the Breadth First Search of a graph is unique?",
        answers: ["When the graph is a Binary Tree", "When the graph is a Linked List", "When the graph is a n-ary Tree", "When the graph is a Ternary Tree"],
        right: "When the graph is a Linked List"
    }),
    new Product({
        question: "Which of the following is the most commonly used data structure for implementing Dijkstra’s Algorithm?",
        answers: ["Max priority queue", "Stack", "Circular queue", "Min priority queue"],
        right: "Max priority queue"
    }),
    new Product({
        question: "What is the time complexity of Dijikstra’s algorithm?",
        answers: ["O(N)", "O(N3)", "O(N2)", "O(logN)"],
        right: "O(N2)"
    }),
    new Product({
        question: "Dijkstra’s Algorithm cannot be applied on ______",
        answers: ["Directed and weighted graphs", "Graphs having negative weight function", "Unweighted graphs", "Undirected and unweighted graphs"],
        right: "Graphs having negative weight function"
    }),
    new Product({
        question: "Which one of the following is false?",
        answers: ["Heap sort is an in-place algorithm", "Heap sort has O(nlogn) average case time complexity", "Heap sort is stable sort", "Heap sort is a comparison-based sorting algorithm"],
        right: "Heap sort is stable sort"
    }),
    new Product({
        question: "Which is not a valid type of JOIN?",
        answers: ["INNER JOIN", "LEFT UPPER JOIN", "OUTER JOIN", "LEFT OUTER JOIN"],
        right: "LEFT UPPER JOIN"
    }),

];

var done = 0;
for (var i = 0; i < product.length; i++) {
    product[i].save((err, result) => {
        done++;
        if (done == product.length) {
            exit();
        }
    })
};
function exit() {
    mongoose.disconnect();
    console.log('done');
}