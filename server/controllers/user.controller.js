const mongoose = require('mongoose');
const express = require('express')
const User = require('../models/user.model');

const userRouter = express.Router();

userRouter.post('/sendData', async (req, res) => {
    const body = req.body.results
    // const data = await User(req.body.results[0]);

    // const ans = await data.save();
    // console.log(req.body.results);

    const data = await User.insertMany(body, { ordered: true })
    console.log(data)
})

userRouter.delete('/sendData', async (req, res) => {

    const result = await User.deleteMany()
    console.log(result)
})

userRouter.get('/page', async (req, res) => {
    let { page  } = req.query || 0
    if (page > 0) {
        page = (page - 1) * 10

    } else {
        page = 0;
    }
    console.log(page)
    const result = await User.find().skip(page).limit(10)
    res.send(result)
    console.log(result.length)
})


module.exports = userRouter;