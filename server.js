const express = require("express")
const app = express()


const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// app.use(function (req, res, next) {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Headers',
//                'Content-Type, X-Requested-With, Origin');
//     res.header('Access-Control-Allow-Methods',
//                'GET, POST, PUT, PATCH, DELETE, OPTIONS');
//     next();
// });


app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers',
               'Content-Type, X-Requested-With, Origin');
    res.header('Access-Control-Allow-Methods',
               'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    next();
});



// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/whiteboard', {useNewUrlParser: true});
//
// const quizSchema = mongoose.Schema({
//                                        name: String,
//                                        avg: Number
//                                    }, {collection: "quizzes"})
//
// const quizModel = mongoose.model("QuizModel", quizSchema)

// quizModel.find()
//     .then(quizzes => console.log(quizzes))


require("./controllers/snippets-controller")(app)

// app.listen(3000)

app.listen(process.env.PORT || 3003, () =>
    console.log("Server is running...")
);
