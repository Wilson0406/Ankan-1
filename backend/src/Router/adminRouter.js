const express = require('express');
const adminRoute = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const cloud = require('cloudinary').v2;

const KEY = "ANKANKARMAKAR";
const Admin_data = require('../schema/adminSchema');
const admin_verify = require('../access/adminAccess')
const Admin_blog = require('../schema/admin_blog');
const Admin_post = require('../schema/admin_post')
const Data=require('../schema/schema')



adminRoute.post('/admin_signin', async (req, res) => {

    try {
        const { email, password } = req.body;
        let email_data = await Admin_data.findOne({ email });

        if (email_data) {
            const isMatch = await bcrypt.compare(password, email_data.password);

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


adminRoute.get('/admin_active', admin_verify, async (req, res) => {
    try {
        const verify = await jwt.verify(req.cookies.access_token, "ANKANKARMAKAR")
        const admin_profile = await Admin_data.findOne({ _id: verify.id });
        if (admin_profile) {
            res.status(200).send(admin_profile)
        } else {
            res.status(400).send()
        }
    }
    catch (e) {
        res.status(400).send()
    }
})


adminRoute.post('/admin_post',admin_verify, async (req, res) => {
    try {

        const title = req.body.title;
        const link = req.body.link;
        const keywords = req.body.keywords;

        const creator = req.body.creator;
        const description=req.body.description;
        const country= req.body.country;
        const category= req.body.category;

        cloud.config({
            cloud_name: 'do69xdw9x',
            api_key: '158449624671379',
            api_secret: 'hqlgcrTjSIEVzoBh9XTMDicszWI'
        })
        const file = req.files.image_url;
        
        if (file.size <= 700000) {

            const data_image = await cloud.uploader.upload(file.tempFilePath);
            if (data_image) {
                
                const admin_post_data = new Admin_post({ title, link, keywords, creator, description, image_url: data_image.url, country, category })

                const result = await admin_post_data.save();

                if (result) {
                    res.status(200).send(result);
                } else {
                    res.status(400).send();
                }
            }
        } else {
            res.status(400).json("file is too large");
        }

    } catch (e) {
        res.status(400).send();
    }



})

adminRoute.post('/admin_blog', admin_verify, async (req, res) => {

    try {
        const image_url = "";
        const title = req.body.title;
        const description = req.body.description;
        const author = req.body.author;


        cloud.config({
            cloud_name: 'do69xdw9x',
            api_key: '158449624671379',
            api_secret: 'hqlgcrTjSIEVzoBh9XTMDicszWI'
        })
        const file = req.files.image_url;
        if (file.size <= 700000) {

            const data_image = await cloud.uploader.upload(file.tempFilePath);

            if (data_image) {
                const saveData = new Admin_blog({ image_url: data_image.url, title, description, author });

                const result = await saveData.save();
                if (result) {
                    res.status(200).send(result);
                } else {
                    res.status(400).send();
                }
            }
        }
        else {
            res.status(400).send({ mess: "file size too big" });
        }


        const saveData = new Admin_blog({ image_url, title, description, author });

        const result = await saveData.save();
        if (result) {
            res.status(200).send(result);
        } else {
            res.status(400).send();
        }


    } catch (e) {
        res.status(400).send();
    }
})

adminRoute.get('/all_user',async(req,res)=>{
    try{
       const get_datails=await Data.find({});
       if(get_datails){
           
           res.status(200).send(get_datails)
       }else{
           res.status(400).send("no user found")
       }

    }catch(e){
        res.status(400).send();
    }
})

adminRoute.post('/admin_logout',(req,res)=>{

        res.clearCookie('access_token');
    
        res.status(200).send();
         
})


module.exports = adminRoute;