const express = require('express');
const asyncHandler = require('express-async-handler');
const { Task } = require("../../db/models")

const router = express.Router();

router.get('/:userId', asyncHandler(async function(req, res) {
    console.log("THIS IS THE USERRR", req.params.userId)
    const list = await Task.findAll({
        where: {
            userId: req.params.userId
        }
    });
    return res.json({list})
}))

module.exports = router;