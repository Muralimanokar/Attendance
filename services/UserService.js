const db = require('../models')

const user = db.user
const attendance = db.attendance


const Sequelize = require('sequelize');

const Op = Sequelize.Op;

exports.create = async (data) => {
    var usertmp = {
        name: data.name,
        class: data.class,
        type: data.type,
        gender:data.gender
    }

    try {
        usertmp = await user.create(usertmp);
        console.log(usertmp)
        //delete usertmp.dataValues.class
        //console.log(usertmp)
    } catch (e) {
        console.log(e)
        usertmp = null
    }

    return usertmp
}

exports.createattendance = async (userId, data) => {
    var recordTmp = {
        user_id: userId,
        date: data.date,
        status: data.status,
        
    }

    try {
        
        recordTmp = await attendance.create(recordTmp)
        
    } catch (e) {
       console.log(e)
        recordTmp = null
    }
    return recordTmp
}

exports.getAllattendance = async (userId) => {
    var all = await attendance.findAll({
        where: {
            user_id: userId,
        }
    })
   
    return all
}
exports.getAllmale = async (usergender) => {
    var all = await user.findAll({
        where: {
            gender: usergender,
        }
    })
       return all
}
exports.class = async (userclass) => {
    var all = await user.findAll({
        where: {
            class: userclass,
        }
    })
   
    return all
}
exports.type = async (usertype) => {
    var all = await user.findAll({
        where: {
            type: usertype,
        }
    })
   
    return all
}
exports.date = async (attendancedate) => {
    var all = await attendance.findAll({
        where: {
            date: attendancedate,
        }
    })
   
    return all
}
exports.status = async (attendancestatus) => {
    var all = await attendance.findAll({
        where: {
            status: attendancestatus,
        }
    })
   
    return all
}

exports.getAllusers = async () => {
    return user.findAll()
}
exports.getAllattendance = async () => {
    return attendance.findAll()
}