const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const dashboardRouter = require('./dashboard.js')
const asyncHandler = require('express-async-handler');
const db = require('../../db/models')
const {User, Task} = db



router.get('/', function(res, req) {
    res.json({name:"test"})
})
router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/dashboard', dashboardRouter);

module.exports = router;