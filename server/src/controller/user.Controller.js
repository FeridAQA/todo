const { userService } = require("../services")

const getUsers = async (req, res) => {
    try {
        let users = await userService.findAllUser()
        res.json(users)
    } catch (error) {
        res.status(500).json({ message: error?.message })
    }
}

const createUserController = async (req, res) => {
    try {
        let user = await userService.creatUser(req.body)
        res.json(user)
    } catch (error) {
        res.status(409).json({ message: error?.message })
    }
}


module.exports = {
    getUsers,
    createUserController
}