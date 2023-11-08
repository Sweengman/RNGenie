const jwt = require('jsonwebtoken')
const User = require('../../models/user')
const bcrypt = require('bcrypt')

module.exports = {
    create,
    login,
    checkToken
}

async function login(req, res) {
    try {
        const user = await User.findOne({email: req.body.email})
        

        const match = await bcrypt.compare(req.body.password, user.password);

    if(match) {
        //login
        const token = createJWT(user)
        res.json(token)
    } else { res.status(400).json('Bad Credentials')}

    } catch(err) {
        console.error(err)
        res.status(400).json(err)
    }
}

async function create(req, res) {
    try {
        const user = await User.create(req.body)

        const token = createJWT(user)
        
        res.json(token)
    } catch (err) {
        console.error(err)
        res.status(400).json(err)
    }
}

function checkToken(req, res) {
    res.json(req.exp)
}

// Helper functions
function createJWT(user) {
    return jwt.sign(
        { user },
        process.env.SECRET,
        { expiresIn: '24h' }
    )
}

