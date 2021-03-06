const mongoose = require("mongoose");
const snippetSchema = mongoose.Schema({
                                          // id: String,
                                          gistId: String,
                                          creator: String,
                                          dateCreated: Date,
                                          lastModified: Date,
                                          title: String,
                                          description: String,
                                          codeText: String,
                                          tags: Array,
                                          likes: Array,
                                          language: String,
                                          shareableURL: String,
                                          publicPost: Boolean,
                                          recommended: Boolean,

                                   }, {collection: "snippets"});

module.exports = snippetSchema;
