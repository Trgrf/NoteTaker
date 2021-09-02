const router = require('express').Router();

const notesRouter = require('./html.js');
const apiRouter = require('./api')


router.use('/', notesRouter);
router.use('/api', apiRouter);
module.exports = router;