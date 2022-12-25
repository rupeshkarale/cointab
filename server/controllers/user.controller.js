const mongoose = require('mongoose');
const express = require('express')
const User = require('../models/user.model');

const userRouter = express.Router();

userRouter.post('/sendData', async (req, res) => {
    try {
        const body = req.body
        // const data = await User(req.body.results[0]);

        // const ans = await data.save();
        // console.log(req.body.results);

        const data = await User.insertMany(body, { ordered: true })
        res.send(data).status(201)
    } catch (error) {
        res.send(error).status(404)
    }
    
    
})

userRouter.delete('/sendData', async (req, res) => {
try {
    const result = await User.deleteMany()
    res.send(result).status(201)
} catch (error) {
    res.send(error).status(404)

}
    
    
})

userRouter.get('/page', async (req, res) => {
    let { page  } = req.query || 0
    if (page > 0) {
        page = (page - 1) * 10

    } else {
        page = 0;
    }
    
    const result = await User.find().skip(page).limit(10)
    res.send(result)
    
})
userRouter.get('/count', async (req, res) => {
    try {
        let count = await User.count({})
        res.send({
            count:count
        }).status(201)
    } catch (error) {
        res.send(error)
    }

})


module.exports = userRouter;