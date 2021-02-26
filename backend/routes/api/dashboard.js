const express = require('express');
const asyncHandler = require('express-async-handler');
const { Op } = require("sequelize")
const { Task } = require("../../db/models")

const router = express.Router();


router.post('/task', asyncHandler(async function(req, res) {
    const {  userId,
        singleStep,
        tags,
        lengthInMin,
        type,
        startDate,
        emptyDate,
        sizeInFlOz,
        mon,
        tues,
        wed,
        thur,
        fri,
        sat,
        sun,
        night,
        morning,
        activeIngredients}  = req.body;

    const task = await Task.add({ 
        userId,
        singleStep,
        tags,
        lengthInMin,
        type,
        startDate,
        emptyDate,
        sizeInFlOz,
        mon,
        tues,
        wed,
        thur,
        fri,
        sat,
        sun,
        night,
        morning,
        activeIngredients
    })
    return res.json({
        task
    });
}));

router.get('/:userId', asyncHandler(async function(req, res) {
    console.log("THIS IS THE USERRR", req.params.userId)
    const list = await Task.findAll({
        where: {
            userId: req.params.userId
        }
    });
    return res.json({list})
}))


//List of Finished Products
// Works! 
//should this be at this route tho???
router.get('/empty/:userId', asyncHandler(async function(req, res) {
    console.log("THIS IS THE EMPTY LIST")
    const list = await Task.findAll({
        where: [{
            emptyDate: { [Op.gt]: 0 }
        }]
    });
    
    return res.json({list})
}))

//MorningRoutine
// Works! 
router.get('/morning/:userId', asyncHandler(async function(req, res) {
    console.log("THIS IS THE MORNING LIST")
    const list = await Task.findAll({
        where: [{
            morning: true
        }]
    });
    
    return res.json({list})
}))

//EveningRoutine
// Works! 
router.get('/evening/:userId', asyncHandler(async function(req, res) {
    console.log("THIS IS THE EVENING LIST")
    const list = await Task.findAll({
        where: [{
            night: true
        }]
    });
    
    return res.json({list})
}))

//MondayRoutine
// Works! 
router.get('/monday/:userId', asyncHandler(async function(req, res) {
    console.log("THIS IS THE MONDAY LIST")
    const list = await Task.findAll({
        where: [{
            mon: true
        }]
    });
    
    return res.json({list})
}))

//TuesdayRoutine
// Works! 
router.get('/tuesday/:userId', asyncHandler(async function(req, res) {
    console.log("THIS IS THE TUESDAY LIST")
    const list = await Task.findAll({
        where: [{
            tues: true
        }]
    });
    
    return res.json({list})
}))

//WednesdayRoutine
// Works! 
router.get('/wednesday/:userId', asyncHandler(async function(req, res) {
    console.log("THIS IS THE WEDNESDAY LIST")
    const list = await Task.findAll({
        where: [{
            wed: true
        }]
    });
    
    return res.json({list})
}))

//ThursdayRoutine
// Works! 
router.get('/thursday/:userId', asyncHandler(async function(req, res) {
    console.log("THIS IS THE thursday LIST")
    const list = await Task.findAll({
        where: [{
            thur: true
        }]
    });
    
    return res.json({list})
}))


//FridayRoutine
// Works! 
router.get('/friday/:userId', asyncHandler(async function(req, res) {
    console.log("THIS IS THE thursday LIST")
    const list = await Task.findAll({
        where: [{
            fri: true
        }]
    });
    
    return res.json({list})
}))

//SaturdayRoutine
// Works! 
router.get('/saturday/:userId', asyncHandler(async function(req, res) {
    console.log("THIS IS THE saturday LIST")
    const list = await Task.findAll({
        where: [{
            sat: true
        }]
    });
    
    return res.json({list})
}))

//SundayRoutine
// Works! 
router.get('/sunday/:userId', asyncHandler(async function(req, res) {
    console.log("THIS IS THE sunday LIST")
    const list = await Task.findAll({
        where: [{
            sun: true
        }]
    });
    
    return res.json({list})
}))
//Exfoliation
// Works! 
router.get('/treatments/exfoliants/:userId', asyncHandler(async function(req, res) {
    console.log("THIS IS THE TREATMENT LIST")
    const list = await Task.findAll({
        where: [{
            tags:{
                [Op.like]: '%exfoliation%'
            } 
        }]
    });
    
    return res.json({list})
}))

//EyeCreams
//Works!
router.get('/eyecreams/:userId', asyncHandler(async function(req, res) {
    console.log("THIS IS THE EYECREAM LIST")
    const list = await Task.findAll({
        where: [{
            tags:{
                [Op.like]: '%eye cream%'
            } 
        }]
    });
    
    return res.json({list})
}))

//Moisturizers
//Works!
router.get('/moisturizers/:userId', asyncHandler(async function(req, res) {
    console.log("THIS IS THE MOISTURIZER LIST")
    const list = await Task.findAll({
        where: [{
            tags:{
                [Op.like]: '%moisturizer%'
            } 
        }]
    });
    
    return res.json({list})
}))

//Serums
//Works!
router.get('/serums/:userId', asyncHandler(async function(req, res) {
    console.log("THIS IS THE SERUMS LIST")
    const list = await Task.findAll({
        where: [{
            tags:{
                [Op.like]: '%serum%'
            } 
        }]
    });
    
    return res.json({list})
}))

//Oils
//Works!
router.get('/oils/:userId', asyncHandler(async function(req, res) {
    console.log("THIS IS THE OILS LIST")
    const list = await Task.findAll({
        where: [{
            tags:{
                [Op.like]: '%oil%'
            } 
        }]
    });
    
    return res.json({list})
}))

//spf
//Works!
router.get('/spf/:userId', asyncHandler(async function(req, res) {
    console.log("THIS IS THE SPF LIST")
    const list = await Task.findAll({
        where: [{
            tags:{
                [Op.like]: '%spf%'
            } 
        }]
    });
    
    return res.json({list})
}))

//spf
//Works!
router.get('/spf/:userId', asyncHandler(async function(req, res) {
    console.log("THIS IS THE SPF LIST")
    const list = await Task.findAll({
        where: [{
            tags:{
                [Op.like]: '%spf%'
            } 
        }]
    });
    
    return res.json({list})
}))
module.exports = router;