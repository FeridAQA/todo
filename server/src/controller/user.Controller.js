const { userService } = require("../services")

const getUsers = async (req, res) => {
   try {
    let users=await userService.findAll()
    res.json(users)
   } catch (error) {
    res.status(500).json({ message: "Error fetching users" })
   }
}
module.exports={
    getUsers
}