const snippetsModel = require('../models/snippet.model.server');

const findAllSnippets = () => snippetsModel.find();
const findAllPublicSnippets = () => snippetsModel.find({'publicPost' : true});
const findSnippetById = (sid) => snippetsModel.findById(sid);
const findSnippetByGistId = (gid) => snippetsModel.find({'gistId' : gid});

const queryToDictList = (tagSearch) => {
    let tagsList = tagSearch.split("+");
    console.log("tagsList:", tagsList);

    const outList = [];
    tagsList.forEach((tag) => {

        let currentTag = {tags: tag};
        outList.push(currentTag)
    });
    console.log("outList: ", outList);
    return outList;
};

queryToDictList("this+is+a+query");

const findSnippetByTag = (tagSearch) => snippetsModel.find({ $or:
                                                                    queryToDictList(tagSearch)
                                                                });


const deleteSnippetById = (sid) => snippetsModel.deleteOne({_id: sid})

//########################################## Attempt 1 ##########################################

// const createTagQuery = (tagSearch) => {
//     let tagsList = tagSearch.split("+");
//     // console.log(tagsList)
//     let startQuery = "{"
//                      + "$or:["
//                      + "";
//     let midQuery = "";
//     let endQuery = "]}";
//
//     tagsList.forEach((tag) => {
//         // console.log('{tags:"'+tag +'"}')
//         midQuery = midQuery + " " + '{tags:"'+tag.toLowerCase() +'"},'
//     });
//     console.log(startQuery + midQuery + endQuery);
//     let finalQuery = startQuery + midQuery + endQuery
//     console.log(typeof finalQuery)
//
//     return JSON.parse(finalQuery)
// };
//
// const findSnippetByTag = (tagSearch) => snippetsModel.find(createTagQuery(tagSearch))

// createTagQuery("python+js");

// const findSnippetByTag = (tagSearch) => {
//     let myQuery = createTagQuery(tagSearch)
//     console.log(myQuery)
//     return snippetsModel.find(myQuery);
// }

// ################################ Attempt 2 #####################################################
// const changeQueryToList = (tagSearch) => {
//     let tagsList = tagSearch.split("+");
//     console.log(tagsList)
//     return tagsList
// }
// changeQueryToList("python+is+a+great+language")
// const findSnippetByTag = (tagSearch) => snippetsModel.find({tags: changeQueryToList(tagSearch))
// ########################################################################################


// const findSnippetsTags = (gid) => snippetsModel.find(gid);
// const deleteSnippetById = (gid) => snippetsModel.find(gid);
// const createSnippet = (gid) => snippetsModel.find(gid);
// const updateSnippet = (gid) => snippetsModel.find(gid);

module.exports = {
    findAllSnippets,
    findSnippetById,
    findSnippetByGistId,
    findSnippetByTag,
    findAllPublicSnippets,
    deleteSnippetById};
