const snippetsModel = require('../models/snippet.model.server');

const findAllSnippets = () => snippetsModel.find();
const findAllPublicSnippets = () => snippetsModel.find({'publicPost' : true});
const findSnippetById = (sid) => snippetsModel.findById(sid);
const findSnippetByGistId = (gid) => snippetsModel.find({'gistId' : gid});

const queryToDictList = (tagSearch) => {
    let tagsList = tagSearch.split("+");
    // console.log("tagsList:", tagsList);

    const outList = [];
    tagsList.forEach((tag) => {

        let currentTag = {tags: tag.toLowerCase()};
        outList.push(currentTag)
    });
    // console.log("outList: ", outList);
    return outList;
};

const findSnippetByTag = (tagSearch) => snippetsModel.find({ $or:
                                                                    queryToDictList(tagSearch)
                                                                });

const deleteSnippetById = (sid) => snippetsModel.deleteOne({_id: sid});

const newSnippetHandler = (newSnippet) => {
    newSnippet.dateCreated = new Date().toLocaleString();
    newSnippet.lastModified = newSnippet.dateCreated;
    newSnippet.tags = newSnippet.tags.toLowerCase();

    return newSnippet
}

const createSnippet = (newSnippet) => snippetsModel.create(newSnippetHandler(newSnippet));

const updateTimeChanger = (updatedSnippet) => {
    updatedSnippet.lastModified = new Date().toLocaleString();
    return updatedSnippet
}

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
    updateSnippet};
