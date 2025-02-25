const express = require('express');
const stuffCtrl = require('../controllers/stuff');

const router = express.Router();

router.post('/', stuffCtrl.createThing); 
router.get('/', stuffCtrl.getAllStuff);
router.get('/:id', stuffCtrl.getOneThing);
router.put('/:id', stuffCtrl.modifyThing);
router.delete('/:id', stuffCtrl.deleteThing);

module.exports = router;