const express = require('express')
const router = express.Router();

const Form = require('../models/Form')

const { body, validationResult } = require('express-validator');

// get all form 
router.get('/fetchallforms', async (req, res) => {
    try {
        const forms = await Form.find();
        res.json(forms)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

// add form 
router.post('/addform', async (req, res) => {
    try {
        const { name, email, subject, message } = req.body
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const form = new Form({
            name, email, subject, message
        })
        const savedForm = await form.save();
        res.json(savedForm);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

module.exports = router;