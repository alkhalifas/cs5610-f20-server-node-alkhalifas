const mongoose = require("mongoose");
const snippetSchema = mongoose.Schema({
                                          // id: String,
                                          gistId: String,
                                          creator: String,
                                          dateCreated: String,
                                          lastModified: String,
                                          title: String,
                                          description: String,
                                          codeText: String,
                                          tags: Array,
                                          shareableURL: String,
                                          publicPost: Boolean,
                                          recommended: Boolean,

                                   }, {collection: "snippets"});

module.exports = snippetSchema;
