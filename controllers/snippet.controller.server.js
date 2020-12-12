const snippetService = require('../services/snippet.service.server')

module.exports = function (app) {
    app.get('/api/snippets/', (req, res) =>
        snippetService.findAllSnippets()
            .then(allSnippets => res.json(allSnippets)));

    app.get('/api/snippets/public', (req, res) =>
        snippetService.findAllPublicSnippets()
            .then(publicSnippets => res.json(publicSnippets)));

    app.get('/api/snippets/starred', (req, res) =>
        snippetService.findAllStarredSnippets()
            .then(starredSnippets => res.json(starredSnippets)));

    app.get('/api/snippets/id/:sid', (req, res) =>
        snippetService.findSnippetById(req.params['sid'])
            .then(snippet => res.json(snippet)));

    app.get('/api/snippets/gistid/:gid', (req, res) =>
        snippetService.findSnippetByGistId(req.params['gid'])
            .then(snippet => res.json(snippet)));

    app.get('/api/:cid/snippets', (req, res) =>
        snippetService.findSnippetByCreator(req.params['cid'])
            .then(snippet => res.json(snippet)));

    app.get('/api/:uid/likes', (req, res) =>
        snippetService.findLikesForUser(req.params['uid'])
            .then(snippet => res.json(snippet)));

    app.get('/api/:cid/snippets/public', (req, res) =>
        snippetService.findSnippetByCreatorAndPublic(req.params['cid'])
            .then(snippet => res.json(snippet)));

    app.get('/api/snippets/tags/:tagSearch', (req, res) =>
        snippetService.findSnippetByTag(req.params['tagSearch'])
            .then(snippet => res.json(snippet)));

    app.delete('/api/snippets/id/:sid', (req, res) =>
        snippetService.deleteSnippetById(req.params['sid'])
            .then(status => res.send(status)));

    app.post('/api/snippets', (req, res) =>
        snippetService.createSnippet(req.body)
            .then(newSnippet => res.json(newSnippet)));

    app.put('/api/snippets/id/:sid', (req, res) =>
        snippetService.updateSnippet(req.params['sid'], req.body)
            .then(status => res.send(status)));

    const documentation = (req, res) => {
        res.sendFile('documentation.html', {root: __dirname })};

    app.get("/", documentation);

};
