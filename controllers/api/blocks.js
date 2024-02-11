require('dotenv').config()
const Block = require('../../models/block')

const deleteBlock = async (req, res, next) => {
    try {
        const deletedBlock = await Block.findByIdAndDelete(req.params.id)
        res.locals.data.block = deletedBlock
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

const updateBlock = async (req, res, next) => {
    try {
        const updatedBlock = await Block.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.locals.data.block = updatedBlock
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

const createBlock = async (req, res, next) => {
    try {
        const createdBlock = await Block.create(req.body)
        res.locals.data.block = createdBlock
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

const getBlocks = async (req, res, next) => {
    try {

        const times = await Block.find(req.body)
        res.locals.data.times = times
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}
const respondWithBlocks = (req, res) => {
    res.json(res.locals.data.times)
}

const respondWithBlock = (req, res) => {
    res.json(res.locals.data.block)
}
module.exports = {
    deleteBlock,
    updateBlock,
    getBlocks,
    createBlock,
    respondWithBlock,
    respondWithBlocks
}