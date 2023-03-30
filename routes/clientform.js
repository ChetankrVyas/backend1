const express = require('express')
const router = express.Router();
const path = require('path');
const multer = require('multer');

const Clientform = require('../models/Clientform')

const { body, validationResult } = require('express-validator');

// get all clientform 
router.get('/fetchallclientforms', async (req, res) => {
    try {
        const clientforms = await Clientform.find();
        res.json(clientforms)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})
// client form 
// var storage = multer.diskStorage({
//     destination:function(req,file,cb){
//         cb(null,'uploads/')
//     },
//     filename:function(req,file,cb) {
//         let ext = path.extname(file.originalname)
//         cb(null,Date.now()+ext)
//     }
// })
// var upload = multer({
//     storage:storage,
//     fileFilter:function(req,file,callback){
//         if(
//             file.mimetype== "image/png"||
//             file.mimetype== "image/jpg"
//         ){
//             callback(null,true)
//         }else{
//             console.log('only jpg and png file supported')
//             callback(null,false)
//         }
//     },
// })
router.post('/addclientform',async (req, res) => {
    try {
        const { name, email, pnumber, orgname, project, description, attachment} = req.body
        // console.log(req.file)
        // if(req.file){
        //     Clientform.attachment= req.file.path
        // }
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const form = new Clientform({
            name, email, pnumber, orgname, project, description, attachment
        })
        const savedForm = await form.save();
        res.json(savedForm);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

module.exports = router;