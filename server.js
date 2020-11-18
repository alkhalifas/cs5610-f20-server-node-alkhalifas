const express = require("express");
const app = express();

const users = [
    {
        id : "1",
        name : "Saleh",
        favorites : ["Python", "R", "SQL"],
        favoritesString : "Python, R, SQL"
    },
    {
        id : "2",
        name : "Nic",
        favorites : ["Java", "python", "JS"],
        favoritesString : "Java, Python, JS"
    },
    {
        id : "3",
        name : "Will",
        favorites : ["JS", "Microsoft", "Mongo", "Python"],
        favoritesString : "JS, Microsoft, Mongo"
    },
];
//     console.log(users[0].favorites[0])
//
// function filterByFavoritesList(array, singleWord) {
//         return array.filter(Object.favorites.some())
// }

// function filterByValue(array, string) {
//     return array.filter(o => Object.keys(o).some(k => o[k].toLowerCase().includes(string.toLowerCase())))
// }
// console.log(filterByValue(users, 'Will'));

function filterWithLists(database, keyword) {
    const results = [];
    database.forEach(function (user) {
        if (user.favorites.map(v => v.toLowerCase()).includes(keyword.toLowerCase())) {
            results.push(user)
        }
        });
    return results;
}
//
// console.log(filterWithLists(users, "js"));


// Welcome Page
app.get("/", (req, res) => {
    res.send(200)
});

// Get List of Users
app.get("/users", (req, res) => {
    res.send(users)
});

// Get User by ID
app.get("/users/:uid", (req, res) => {
    const userId = req.params["uid"];
    const user = users.find(user => user.id === userId);
    res.send(user)
});

// Get a Users Favorites
app.get("/users/:uid/favorites", (req, res) => {
    const userId = req.params["uid"];
    const user = users.find(user => user.id === userId);
    res.send(user.favorites)
});

// Search Keywords
app.get("/search/:searchKeywords", (req, res) => {
    const keyWordString = req.params["searchKeywords"];
    // console.log(keyWordString);
    const keyWordList = keyWordString.split("+");
    // console.log(keyWordList);
    let uResults = []

    for (var i = 0; i < keyWordList.length; i++) {
        // console.log(keyWordList[i])
        let tmp = filterWithLists(users, keyWordList[i])
        tmp.forEach(function (user) {
            uResults.push(user)
        })
        // console.log(uResults[0][0]["favorites"])
        res.send(uResults)
    }
    ;
})


app.listen(3000);
