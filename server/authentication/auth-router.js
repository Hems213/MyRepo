const express = require('express')

const AuthCtrl = require('./controller')
const auth = require('./index')
const basicAuth = require('express-basic-auth')

const router = express.Router();
router.use(basicAuth({
    users: auth.getUsers(),
}));
router.get('/accessToken', AuthCtrl.getAccessToken);
router.get('/', AuthCtrl.rootMethod);
module.exports = router