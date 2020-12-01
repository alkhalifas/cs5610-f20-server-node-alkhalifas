let snippets = require("./snippets");

const findAllSnippets = () =>
    snippets;

const findSnippetById = (sid) =>
    snippets.find(snippet => snippet.id === sid);

const findSnippetByGistId = (gid) =>
    snippets.find(snippet => snippet.gistId === gid);

const findSnippetsTags = (sid) => {
    return snippets.find(snippet => snippet.id === sid).tags;
};

const deleteSnippetById = (sid) =>
    snippets = snippets.filter(snippet => snippet.id !== sid);

const createSnippet = (cid) => {
    const newSnippet = {
        id: Math.floor(100000000000000000 + Math.random() * 900000000000000000) + "",
        // id: Math.random().toString(36).substr(2, 25),
        creatorId: cid,
        dateCreated : new Date().toLocaleString(),
        lastModified: new Date().toLocaleString(),
        // title : "New Title",
        // description : "New Description",
        // codeText : "Enter Code Here",
        // tags : [],
        // shareableURL: "",
        // publicPost: false,
        // recommended: false
    };
    snippets.push(newSnippet);
    console.log("Snippet Created")
    return newSnippet
};

const updateSnippet = (sid, newSnippet) => {
    oldSnippet = snippets.find(snippet => snippet.id === sid);
    oldSnippet.gistId = newSnippet.gistId;
    oldSnippet.lastModified = new Date().toLocaleString();
    oldSnippet.title = newSnippet.title;
    oldSnippet.description = newSnippet.description;
    oldSnippet.codeText = newSnippet.codeText;
    oldSnippet.tags = newSnippet.tags;
    oldSnippet.shareableURL = newSnippet.shareableURL;
    oldSnippet.publicPost = newSnippet.publicPost;
    oldSnippet.recommended = newSnippet.recommended;
    console.log("Update Made")
};

function filterSnippetTags(database, keyword) {
    const results = [];
    database.forEach(function (snippet) {
        if (snippet.tags.map(v => v.toLowerCase()).includes(keyword.toLowerCase())) {
            results.push(snippet)
        }
    });
    return results;

}

const searchSnippetForTags = (query) => {
    // const keyWordString = req.params["query"];
    const keyWordList = query.split("+");
    let uResults = [];
    for (let i = 0; i < keyWordList.length; i++) {
        let tmp = filterSnippetTags(snippets, keyWordList[i]);
        tmp.forEach(function (snippet) {
            if (!uResults.includes(snippet)) {
                uResults.push(snippet)
            }
        })
    }
    console.log("Tags Filtered")
    return uResults;

}

module.exports = {
    findAllSnippets: findAllSnippets,
    findSnippetByGistId: findSnippetByGistId,
    findSnippetById: findSnippetById,
    findSnippetsTags: findSnippetsTags,
    deleteSnippetById: deleteSnippetById,
    updateSnippet: updateSnippet,
    createSnippet: createSnippet,
    searchSnippetForTags: searchSnippetForTags,
}
