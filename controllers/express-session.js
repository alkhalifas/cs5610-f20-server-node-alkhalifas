module.exports = (app) => {
    const setSessionAttribute = (req, res) => {
        const attr = req.params['attr'];
        const value = req.params['value'];
        req.session[attr] = value;
        res.send(value)
    };

    const getSessionAttribute = (req, res) => {
        const attr = req.params['attr'];
        const value = req.session[attr];
        res.send(value)
    };

    const invalidateSession = (req, res) => {
        req.session.destroy();
        res.send(200)
    };

    let users = [];

    const register = (req, res) => {
        const username = req.params["username"];
        const password = req.params["password"];
        const user = {username, password};
        users.push(user);
        req.session["profile"] = user;
        res.send(user)
    };

    const login = (req, res) => {
        const username = req.params["username"];
        const password = req.params["password"];
        const user = users.find(u => u.username === username && u.password === password);
        if(user) {
            req.session["profile"] = user;
            res.send(user)
        } else {
            res.send(403)
        }
    };

    const profile = (req, res) => {
        const user = req.session["profile"];
        res.send(user)
    };

    const logout = (req, res) => {
        req.session.destroy();
        res.send(200)
    };

    app.get("/api/session/set/:attr/:value", setSessionAttribute);
    app.get("/api/session/get/:attr/:value", getSessionAttribute);
    app.get("/api/session/kill", invalidateSession);
    app.get("/api/register", register);
    app.get("/api/login", login);
    app.get("/api/profile", profile);
    app.get("/api/logout", logout)
};
