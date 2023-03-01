const {getUserEvents} = require('../models/userEvent_model')

const getUserEventsController = async (req, res) => {
    //get body 
    var username = req.body.username
    const result = await getUserEvents(username);
    res.send(result)
}

module.exports = {getUserEventsController}