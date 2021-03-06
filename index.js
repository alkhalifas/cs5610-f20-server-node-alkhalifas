const express = require("express");
const index = express();
var cors = require('cors');

index.use(
    cors({
             credentials: true,
             origin: true
         })
);
index.options('*', cors());

const users = [
    {
        id : "1",
        githubId : "12345",
        firstName : "Saleh",
        lastName : "Alkhalifa",
        password: "password123",
        email : "saleh@gmail.com",
        paToken : "token123",
        favorites : ["123", "234"],
        favoritesString : "Python, R, SQL",
        userType: "user"
    },
    {
        id : "2",
        githubId : "23456",
        firstName : "Nicholas",
        lastName : "Shepard",
        password: "password123",
        email : "nicholas@gmail.com",
        paToken : "token123",
        favorites : ["123", "234", "345"],
        favoritesString : "Java, JS, SQL",
        userType: "admin"
    },
    {
        id : "3",
        githubId : "12345",
        firstName : "Will",
        lastName : "Cohen",
        password: "password123",
        email : "will@gmail.com",
        paToken : "token123",
        favorites : ["345", "456"],
        favoritesString : "Python, R, SQL",
        userType: "admin"
    },
];

const snippets = [
    {
        id : "1",
        gistId : "123",
        creator : "alkhalifas",
        dateCreated : "10/22/2020",
        lastModified: "10/22/2020",
        title : "Some title",
        description : "Some desc",
        codeText : "Code Test here",
        tags : ["Python", "R", "SQL"],
        shareableURL: "some URL",
        publicPost: false,
        recommended: false
    },
    {
        id : "2",
        gistId : "234",
        creator : "alkhalifas",
        dateCreated : "10/22/2020",
        lastModified: "10/22/2020",
        title : "Some title",
        description : "Some desc",
        codeText : "Code Test here",
        tags : ["JS", "Microsoft", "Login"],
        shareableURL: "some URL",
        publicPost: false,
        recommended: false
    },
    {
        id : "3",
        gistId : "345",
        creator : "alkhalifas",
        dateCreated : "10/22/2020",
        lastModified: "10/22/2020",
        title : "Some title",
        description : "Some desc",
        codeText : "Code Test here",
        tags : ["Python", "Login", "Azure"],
        shareableURL: "some URL",
        publicPost: true,
        recommended: false
    },
];

//////////////////////////////////////////// Functions ////////////////////////////////////////

function filterUserFavorites(database, keyword) {
    const results = [];
    database.forEach(function (user) {
        if (user.favorites.map(v => v.toLowerCase()).includes(keyword.toLowerCase())) {
            results.push(user)
        }
    });
    return results;
}
// console.log(filterUserFavorites(users, "123"))

function filterSnippetTags(database, keyword) {
    const results = [];
    database.forEach(function (snippet) {
        if (snippet.tags.map(v => v.toLowerCase()).includes(keyword.toLowerCase())) {
            results.push(snippet)
        }
    });
    return results;
}

// console.log(filterSnippetTags(snippets, "azure"))

/////////////////////////////////////////// API Endpoints ////////////////////////////////////////

// Welcome Page:
index.get("/", (req, res) => {
    res.send("API ACTIVE")
});

//////////////////// User Endpoints ///////////////////

// Get List of Users:
index.get("/users", (req, res) => {
    res.send(users)
});

// Get User by ID:
index.get("/users/:uid", (req, res) => {
    const userId = req.params["uid"];
    const user = users.find(user => user.id === userId);
    res.send(user)
});

// Get a Users Favorites:
index.get("/users/:uid/favorites", (req, res) => {
    const userId = req.params["uid"];
    const user = users.find(user => user.id === userId);
    res.send(user.favorites)
});

// Search User Favorites:
index.get("/search/users/:searchKeywords", (req, res) => {
    const keyWordString = req.params["searchKeywords"];
    const keyWordList = keyWordString.split("+");
    let uResults = [];
    for (let i = 0; i < keyWordList.length; i++) {
        let tmp = filterUserFavorites(users, keyWordList[i]);
        tmp.forEach(function (user) {
            if (!uResults.includes(user)) {
                uResults.push(user)
            }
        })
    }
    res.send(uResults)
});

//////////////////// Snippet Endpoints ///////////////////

// Get List of snippets:
index.get("/snippets", (req, res) => {
    res.send(snippets)
});

// Get Snippet by ID:
index.get("/snippets/:sid", (req, res) => {
    const snippetId = req.params["sid"];
    const snippet = snippets.find(snippet => snippet.id === snippetId);
    res.send(snippet)
});

// Get Snippet by gistid:
index.get("/snippets/gistId/:gid", (req, res) => {
    const gid = req.params["gid"];
    const snippet = snippets.find(snippet => snippet.gistId === gid);
    res.send(snippet)
});

// Get a Snippets Tags:
index.get("/snippets/:sid/tags", (req, res) => {
    const snippetId = req.params["sid"];
    const snippet = snippets.find(snippet => snippet.id === snippetId);
    res.send(snippet.tags)
});

// Search Snippet Tags
index.get("/search/snippets/:searchKeywords", (req, res) => {
    const keyWordString = req.params["searchKeywords"];
    const keyWordList = keyWordString.split("+");
    let uResults = [];
    for (let i = 0; i < keyWordList.length; i++) {
        let tmp = filterSnippetTags(snippets, keyWordList[i]);
        tmp.forEach(function (snippet) {
            if (!uResults.includes(snippet)) {
                uResults.push(snippet)
            }
        })
    }
    res.send(uResults)
});

// index.listen(3000);
index.listen(process.env.PORT || 3000, () =>
    console.log("Server is running...")
);
