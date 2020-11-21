const snippetsService = require("../services/snippets-service");

module.exports = (app) => {

    const findAllSnippets = (req, res) =>
        res.send(snippetsService.findAllSnippets());

    const findSnippetById   = (req, res) =>
        res.send(snippetsService.findSnippetById(req.params['sid']));

    const findSnippetByGistId   = (req, res) =>
        res.send(snippetsService.findSnippetByGistId(req.params['gid']));

    const findSnippetsTags = (req, res) => {
        res.send(snippetsService.findSnippetsTags(req.params['sid']));
    };

    const updateSnippet = (req, res) => {
        console.log("SID: ", req.params['sid'])
        console.log("Body: ", req.body)
        snippetsService.updateSnippet(req.params['sid'], req.body);
        res.send(200)
    };

    const deleteSnippetById = (req, res) =>
        res.send(snippetsService.deleteSnippetById(req.params['sid']));

    const createSnippet = (req, res) =>
        res.send(snippetsService.createSnippet(req.params['creatorId']));

    app.get("/api/snippets", findAllSnippets);
    app.get("/api/snippets/id/:sid", findSnippetById);
    app.get("/api/snippets/gistid/:gid", findSnippetByGistId);
    app.get("/api/snippets/id/:sid/tags", findSnippetsTags);
    app.delete("/api/snippets/:sid", deleteSnippetById);
    app.post("/api/snippets/:creatorId", createSnippet);
    app.put("/api/snippets/:sid", updateSnippet);
};
