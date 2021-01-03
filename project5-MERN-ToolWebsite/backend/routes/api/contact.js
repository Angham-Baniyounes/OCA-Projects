const express = require('express');
const router = express.Router();
const Messages = require('../../models/contact');

router.get('/', (req,res) =>{
    res.send('this is home page!')
})

router.get('/:id', (req,res) =>{
    res.send('user one  ')
})
router.post('/message', (request, response) => {
    const msg = new Messages({
        fullName: request.body.fullName,
        email: request.body.email,
        subject: request.body.subject,
        textarea: request.body.textarea,
    });
    msg.save()
    .then(data =>{
        response.json(data)
    })
    .catch(error =>{
        response.json(error)
    })
    response.send('Contact route');
});

module.exports = router;