const jwtSecret = 'testsecretkjsadhjknbadksjsfasdfkj' //typically this stored in a secured storage and injected into app via env
const jwt = require('jsonwebtoken');
const expressjwt = require('express-jwt');
generateJwtToken = (userInfo) => {
    const username = userInfo.user;
    const data = {
        time: Date(),
        userId: username,
    }
    const token = jwt.sign(
        data,
        jwtSecret,
        { expiresIn: 60 * 60 }
    );
    return token;

}

validateJwtAuth = () => {
    return expressjwt.expressjwt({
        secret: jwtSecret,
        algorithms: ["HS256"],
    });
}

module.exports = {
    generateJwtToken,
    validateJwtAuth
}