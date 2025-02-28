const express = require('express');
const bcrypt  =require('bcrypt');
const jwt = require('jwt')
const User = require('../models2');
const router  = express.Router();

router.post('/register',async(req,res) => {
    const {email,password} = req.body;

    try{
        let user = await User.find(email);
        if(user) return res.status(400).json({error:"User Exists!!"});

        const pwd = await bcrypt.hash(password,10);
        user = new User({email,password:pwd})
        await user.save(); 
        res.json({user:"User Regsitered"})
    }
    catch(err){
        res.status(500).json({error:"Server Error"})
    }
})


router.post('/login',async(req,res) => {
    const {email,password} = req.body;

    try{
        let user = await User.find(email);
        if(!user) return res.status(400).json({error:"User Not Found"});

        const isMatch = await bcrypt.compare(password,user.password);
        if(!isMatch) return res.status(400).json({error:"Invalid Credentials"})

        const token = jwt.sign({email:user.email},process.env.JWT_SECRET,{expiresIn:"1h"});
        
        res.cookie("token", token ,{
            httpOnly:true,
            secure: process.env.NODE_ENV === 'production',
            sameSite:'strict'
        });

        res.json({message:"Logged in successsfully"});
    }

    catch(err){
        res.status(500).json({error:"Server Error"});
    }
});

router.post('/logout',async(req,res) => {
    res.clearCookie("token");
    res.json({message:'Logged out succesfully'})
})

module.exports = router;