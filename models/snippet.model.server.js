const mongoose = require("mongoose");
const snippetSchema = require("./snippet.schema.server");
const snippetModel = mongoose.model("snippetModel", snippetSchema);

// const findAllSnippets = () => snippetModel.find().populate('snippets');
// const findSnippetById = (sid) => snippetModel.findById(sid);
// const findSnippetByGistId = (gid) => snippetModel.find({gistId : gid});
// const createSnippet = (snippet) => snippetModel.create(snippet);

module.exports = snippetModel;

