const User = require("../models/userDb")
const bcrypt = require("bcrypt")


const saveUser = async (req, res) => {
    try {
        
        const { name, password } = req.body
        
        const user = new User({
            name,
            password
        })
        await user.save()
        res.status(201).json({
            message: "User saved successfully"
        })


    } catch (error) {
        res.status(500).json({
            error: error.message
        })

    }
}
const getUser=async(req,res)=>{
    try {
        const user=await User.find()
        res.json(user)
    } catch (error) {
        res.status(404).json({
            error:error.message
        })
    }
}

module.exports={saveUser,getUser}