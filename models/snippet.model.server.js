const mongoose = require("mongoose");
const snippetSchema = require("./snippet.schema.server");
const snippetModel = mongoose.model("snippetModel", snippetSchema);

module.exports = snippetModel;

