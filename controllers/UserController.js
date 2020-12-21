const express = require('express')
const userService = require('../services/UserService')

const router = express.Router()

router.post('/create', async function (req, res) {
    
    if(req.body.name == undefined || req.body.class == undefined || req.body.type == undefined||req.body.gender){
        console.log(req.body)
    }

    var response = await userService.create(req.body)
    if(response == null){
        return res.status(400).send({error_msg:'User exist'});
    }
    res.send(response)
})



router.post('/:id/create_attendance', async function (req, res) {
    
    if(req.body.date == undefined || req.body.status == undefined ){
       return res.status(400).send({error_msg:'input missing'});
    }

    var response = await userService.createattendance(req.params.id,req.body)
    console.log(response)
    if(response == null){
        return res.status(400).send({error_msg:'Record creation failed'});
    }
    res.send(response)
})


router.get('/:id/get_attendance', async function (req, res) {
    var response = await userService.getAllattendance(req.params.id)
    res.send(response)
})
router.get('/:gender/user', async function(req,res)  {

        if(req.params.id == undefined)
        var response = await userService.getAllmale(req.params.gender)
        

        console.log(response)
        res.send(response)
})
router.get('/:class/get_userclass', async function(req,res)  {
        var response = await userService.class(req.params.class)
        console.log(response)
        res.send(response)
})
router.get('/:type/get_usertype', async function(req,res)  {
        var response = await userService.type(req.params.type)
        
        console.log(response)
        res.send(response)
})
router.get('/:date/get_attendancedate', async function(req,res)  {
        var response = await userService.date(req.params.date)
        console.log(response)
        res.send(response)
})
router.get('/:status/get_attendancestatus', async function(req,res)  {
        var response = await userService.status(req.params.status)
        console.log(response)
        res.send(response)
})
router.get('/get-allusers', async function (req, res) {
    var response = await userService.getAllusers()
    res.send(response)
})
router.get('/get-allattendance', async function (req, res) {
    var response = await userService.getAllattendance()
    res.send(response)
})

    

module.exports = router