const mongoose = require("mongoose")
const snippetSchema = require("./snippetSchema")
const snippetModel = mongoose.model("snippetModel", snippetSchema)


const createSnippet = (newSnippet) =>
    quizModel.create(newSnippet)


module.exports = {
    createSnippet
}
