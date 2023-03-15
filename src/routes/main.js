const router = require('express').Router();

const {index, admin, error} = require('../controllers/mainController');
const accessAdmin = require('../middlewares/accessAdmin');

router
    .get('/',index)
    .get('/admin', accessAdmin, admin)
    .get('/error',  error)

module.exports = router