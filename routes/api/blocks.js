const router = require('express').Router()
const blockCtrl = require('../../controllers/api/blocks')


router.delete('/:id', blockCtrl.deleteBlock, blockCtrl.respondWithBlock)
router.put('/:id', blockCtrl.updateBlock, blockCtrl.respondWithBlock)
router.post('/', blockCtrl.createBlock, blockCtrl.respondWithBlock)
router.get('/:id', blockCtrl.getBlocks, blockCtrl.respondWithBlock)
router.get('/', blockCtrl.getBlocks, blockCtrl.respondWithBlocks)
module.exports = router