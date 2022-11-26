const jwtAuth = require('./jwtAuth');
getAccessToken = (req, res) => {
    try {
        const jwtToken = jwtAuth.generateJwtToken(req.auth);
        return res.status(200).json({ success: true, token: jwtToken });
    } catch (err) {
        console.log(err);
        res.status(500).json({ success: false, data: 'Something went wrong' });
    }
}
rootMethod = (req, res) => {
    //do nothing 
    return res.status(200).json({ success: true });
}
errorHandling = (err, req, res, next) => {
    if (err.name === "UnauthorizedError") {
        res.status(401).json({ success: false, data: 'Invalid Token' });
    } else {
        next(err);
    }
}

module.exports = {
    getAccessToken,
    rootMethod,
    errorHandling
}