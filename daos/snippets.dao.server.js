const snippetsModel = require('../models/snippet.model.server');

const findAllSnippets = () => snippetsModel.find();
const findAllPublicSnippets = () => snippetsModel.find({'publicPost' : true});
const findAllStarredSnippets = () => snippetsModel.find({'recommended' : true});
const findSnippetById = (sid) => snippetsModel.findById(sid);
const findSnippetByGistId = (gid) => snippetsModel.find({'gistId' : gid});
const findSnippetByCreator = (cid) => snippetsModel.find({'creator' : cid});
const findLikesForUser = (uid) => snippetsModel.find({"likes" : uid});

const findSnippetByCreatorAndPublic = (cid) => snippetsModel.find( {$or :
                                                                    [
                                                                        {'creator' : cid},
                                                                        {'publicPost' : true}
                                                                    ]});

const queryToDictList = (tagSearch) => {
    let tagsList = tagSearch.split("+");
    const outList = [];
    tagsList.forEach((tag) => {
        let currentTag = {tags: tag.toLowerCase()};
        outList.push(currentTag)
    });
    return outList;
};

const findSnippetByTag = (tagSearch) => snippetsModel.find({ $or:
                                                                    queryToDictList(tagSearch)
                                                                });

const deleteSnippetById = (sid) => snippetsModel.deleteOne({_id: sid});

const newSnippetHandler = (newSnippet) => {
    newSnippet.dateCreated = new Date().toLocaleString();
    newSnippet.lastModified = newSnippet.dateCreated;
    newSnippet.tags = newSnippet.tags.map(v => v.toLowerCase());

    return newSnippet
};

const createSnippet = (newSnippet) => snippetsModel.create(newSnippetHandler(newSnippet));

const updateTimeChanger = (updatedSnippet) => {
    updatedSnippet.lastModified = new Date().toLocaleString();
    return updatedSnippet
};

const updateSnippet = (sid, updatedSnippet) => snippetsModel.updateOne(
                                                                   {_id: sid},
                                                                   {$set: updateTimeChanger(updatedSnippet)}
                                                                    );

module.exports = {
    findAllSnippets,
    findSnippetById,
    findSnippetByGistId,
    findSnippetByTag,
    findAllPublicSnippets,
    deleteSnippetById,
    createSnippet,
    updateSnippet,
    findAllStarredSnippets,
    findSnippetByCreator,
    findSnippetByCreatorAndPublic,
    findLikesForUser};
