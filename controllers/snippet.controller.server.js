const snippetService = require('../services/snippet.service.server')

module.exports = function (app) {
    app.get('/api/snippets/', (req, res) =>
        snippetService.findAllSnippets()
            .then(allSnippets => res.json(allSnippets)));

    app.get('/api/snippets/public', (req, res) =>
        snippetService.findAllPublicSnippets()
            .then(allSnippets => res.json(allSnippets)));

    app.get('/api/snippets/id/:sid', (req, res) =>
        snippetService.findSnippetById(req.params['sid'])
            .then(snippet => res.json(snippet)));

    app.get('/api/snippets/gistid/:gid', (req, res) =>
        snippetService.findSnippetByGistId(req.params['gid'])
            .then(snippet => res.json(snippet)))

    app.get('/api/snippets/tags/:tagSearch', (req, res) =>
        snippetService.findSnippetByTag(req.params['tagSearch'])
            .then(snippet => res.json(snippet)))

    app.delete('/api/snippets/id/:sid', (req, res) =>
        snippetService.deleteSnippetById(req.params['sid'])
            .then(status => res.send(status)))
};
