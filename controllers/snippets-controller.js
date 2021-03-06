// const snippetsService = require("../services/snippets-service");
const snippetService = require('../services/snippet.service.server')
module.exports = (app) => {

    app.get('/api/snippets/', (req, res) =>
    snippetService.findAllSnippets()
        .then(allSnippets => res.json(allSnippets)));

    app.get('/api/snippets/:sid', (req, res) =>
        snippetService.findSnippetById(req.params['sid'])
            .then(snippet => res.json(snippet)))

    // const findAllSnippets = (req, res) =>
    //     res.send(snippetsService.findAllSnippets());
    //
    // const findSnippetById   = (req, res) =>
    //     res.send(snippetsService.findSnippetById(req.params['sid']));
    //
    // const findSnippetByGistId   = (req, res) =>
    //     res.send(snippetsService.findSnippetByGistId(req.params['gid']));
    //
    // const findSnippetsTags = (req, res) => {
    //     res.send(snippetsService.findSnippetsTags(req.params['sid']));
    // };
    //
    // const updateSnippet = (req, res) => {
    //     // console.log("SID: ", req.params['sid']);
    //     // console.log("Body: ", req.body);
    //     snippetsService.updateSnippet(req.params['sid'], req.body);
    //     res.send(200)
    // };
    //
    // const deleteSnippetById = (req, res) =>
    //     res.send(snippetsService.deleteSnippetById(req.params['sid']));
    //
    // // const createSnippet = (req, res) =>
    // //     res.send(snippetsService.createSnippet(req.params['creator']));
    //
    // const createSnippet = (req, res) => {
    //     res.send(snippetsService.createSnippet(req.body, console.log("Controller: ", req.body)))
    // };
    //     //     .then(actualSnippet => res.send(actualSnippet))
    //     // res.send( console.log("Controller: ", req.body), snippetsService.createSnippet(req.body));
    //     //    res.status( console.log("Controller: ", req.body)).send(snippetsService.createSnippet(req.body));
    //
    // const searchSnippetForTags = (req, res) => {
    //     res.send(snippetsService.searchSnippetForTags(req.params['query']))
    // };
    //
    // const documentation = (req, res) => {
    //     res.sendFile('documentation.html', {root: __dirname })
    // };
    //
    // app.get("/", documentation);
    // app.get("/api/snippets", findAllSnippets);
    // app.get("/api/snippets/id/:sid", findSnippetById);
    // app.get("/api/snippets/gistid/:gid", findSnippetByGistId);
    // app.get("/api/snippets/id/:sid/tags", findSnippetsTags);
    // app.get("/api/search/snippets/:query", searchSnippetForTags);
    // app.delete("/api/snippets/:sid", deleteSnippetById);
    // app.post("/api/snippets/", createSnippet);
    // app.put("/api/snippets/:sid", updateSnippet);
};
