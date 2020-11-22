const express = require("express")
const index = express();
const app = express()


const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

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

index.listen(process.env.PORT || 3000, () =>
    console.log("Server is running...")
);
