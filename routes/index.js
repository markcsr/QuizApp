const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const easy = require('../models/codingQuestions');
const score = require('../models/score');
const maths = require('../models/mathsQuestion');
const logic = require('../models/logicQuestion');
router.use('/user', require('../routes/user'));
const helpme = require('../models/feedback.js')


router.get('/', (req, res) => {
    if (req.cookies.jwt) {
        const result = jwt.verify(req.cookies.jwt, "2Jyq1y57Ae9MgCE007Z8OGzWKWRQeAPA");
        req.session.user = result.username;
        res.render('main/home', { user: req.session.user });
    } else {
        req.session.user = null;
        res.render('main/index', { user: req.session.user });
    }
})


router.get('/easy', async (req, res) => {
    const result = await easy.find({});
    res.render('main/easyquiz', { user: req.session.user, result: result });
});

router.get('/medium', async (req, res) => {
    const result = await maths.find({});
    res.render('main/mediumquiz', { user: req.session.user, result: result });
});
router.get('/hard', async (req, res) => {
    const result = await logic.find({});
    res.render('main/hardquiz', { user: req.session.user, result: result });
});


router.post('/submit/easy', async (req, res) => {
    const rightAns = [];
    var point = 0
    const result = await easy.find({});
    result.forEach(element => {
        rightAns.push(element.right);
    });
    const checkAns = await Object.values(req.body)
    for (var i = 0; i < rightAns.length; i++) {
        if (rightAns[i] == checkAns[i]) {
            point++;
        }
    }
    if (req.session.user) {
        const latestScore = new score({ diff: "Coding", score: point, user: req.session.user });
        await latestScore
            .save()
            .then(() => {
                res.render('main/succes', { user: req.session.user, point: point })
                return;
            })
            .catch((err) => console.log(err));
    } else {
        res.render('main/succes', { user: req.session.user, point: point })
    }
});

router.post('/submit/medium', async (req, res) => {
    const rightAns = [];
    var point = 0
    const result = await maths.find({});
    result.forEach(element => {
        rightAns.push(element.right);
    });
    const checkAns = await Object.values(req.body)
    for (var i = 0; i < rightAns.length; i++) {
        if (rightAns[i] == checkAns[i]) {
            point++;
        }
    }
    if (req.session.user) {
        const latestScore = new score({ diff: "Maths", score: point, user: req.session.user });
        await latestScore
            .save()
            .then(() => {
                res.render('main/succes', { user: req.session.user, point: point })
                return;
            })
            .catch((err) => console.log(err));
    } else {
        res.render('main/succes', { user: req.session.user, point: point })
    }
});

router.get('/feedback', (req, res) =>{
    res.render('main/feedback', { user: req.session.user })

});

router.post('/submit/hard', async (req, res) => {
    const rightAns = [];
    var point = 0
    const result = await logic.find({});
    result.forEach(element => {
        rightAns.push(element.right);
    });
    const checkAns = await Object.values(req.body)
    for (var i = 0; i < rightAns.length; i++) {
        if (rightAns[i] == checkAns[i]) {
            point++;
        }
    }
    if (req.session.user) {
        const latestScore = new score({ diff: "Logic", score: point, user: req.session.user });
        await latestScore
            .save()
            .then(() => {
                res.render('main/succes', { user: req.session.user, point: point })
                return;
            })
            .catch((err) => console.log(err));
    } else {
        res.render('main/succes', { user: req.session.user, point: point })
    }

});
router.post('/feedback', async (req, res) => {
    const { fname, lname, email, country, feedback } = req.body;
    console.log(req.body)
    
    const latestFeedback = new helpme({ fname, lname, email, country, feedback });
    latestFeedback
        .save()
        .then(() => {
            const message = "Thank you we will look after the issues.";
            res.render('main/feedback', { user: req.session.user });


            return;
        })
        .catch((err) => console.log(err));

});
router.get('/Article', (req, res) =>{
    res.render('main/Article', { user: req.session.user })

});
router.get('/video', (req, res) =>{
    res.render('main/video', { user: req.session.user })

});

module.exports = router;