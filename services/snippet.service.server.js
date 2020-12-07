const snippetsDao = require('../daos/snippets.dao.server');
const findAllSnippets = () => snippetsDao.findAllSnippets();
const findAllPublicSnippets = () => snippetsDao.findAllPublicSnippets();
const findAllStarredSnippets = () => snippetsDao.findAllStarredSnippets();
const findSnippetById = (sid) => snippetsDao.findSnippetById(sid);
const findSnippetByGistId = (gid) => snippetsDao.findSnippetByGistId(gid);
const findSnippetByTag = (tagSearch) => snippetsDao.findSnippetByTag(tagSearch);
const deleteSnippetById = (sid) => snippetsDao.deleteSnippetById(sid);
const createSnippet = (newSnippet) => snippetsDao.createSnippet(newSnippet);
const updateSnippet = (sid, updatedSnippet) => snippetsDao.updateSnippet(sid, updatedSnippet);

module.exports = {
    findAllSnippets,
    findSnippetById,
    findSnippetByGistId,
    findSnippetByTag,
    findAllPublicSnippets,
    deleteSnippetById,
    createSnippet,
    updateSnippet,
    findAllStarredSnippets}
