const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Data = require('../schema/schema');
const Admin_data=require('../schema/adminSchema');
const jwt = require('jsonwebtoken');
const bcrypt=require('bcrypt');
const KEY = "ANKANKARMAKAR";
const user_verify=require('../access/userAccess')




// user registation
router.post('/user_signup', async (req, res) => {

    try {
        const { fname, lname, email, password } = req.body;

        const data = await Data.findOne({ email });

        if (!data) {
            const saveData = new Data({ fname, lname, email, password });
            const response = await saveData.save();
            if (response != null) {
                res.status(200).send(response)
            } else {
                res.status(400).send();
            }
        }
        else {
            res.status(400).json({ mess: "user already register" })
        }


    } catch (e) {
        res.status(400).send();
    }
})

// user_signin
router.post('/user_signin', async (req, res) => {

    try {
        const { email, password } = req.body;
        let email_data = await Data.findOne({ email });

        if (email_data) {
            const isMatch=await bcrypt.compare(password,email_data.password);

            if (isMatch) {

                const token = await jwt.sign({ id: email_data._id }, KEY);
                res.cookie("access_token", token, {
                    expiresIn: '2h',
                    httpOnly: true
                });
                res.status(200).send(email_data);;

            } else {
                res.status(400).send("error");
            }
        } else {
            res.status(400).json({ mess: "email not registed" })
        }
    } catch (e) {
        res.status(400).send("error");
    }
})

router.post('/user_logout',(req,res)=>{

    res.clearCookie('access_token');
    
    res.status(200).send();
})

router.get('/user_active',user_verify,async(req,res)=>{

    try {
        const verify = await jwt.verify(req.cookies.access_token, "ANKANKARMAKAR")
        const user_profile = await Data.findOne({ _id: verify.id });
        if (user_profile) {
            res.status(200).send(user_profile)
        } else {
            res.status(400).send()
        }
        
    }
    catch (e) {
        res.status(400).send()
    }
})




module.exports = router;