const User = require("../models/user.model");

const findAllUser = async () => {
    const users = await User.findAll()
    return users
}
const findByUsername=async(username)=>{
    const user=await User.findOne({where:{username:username}})
    return user
}

const creatUser=async(params)=>{
    const {username,password}=params
    const existsUser=await findByUsername(username)
    if (existsUser) {
        throw new Error('user artiq var')
    }
    const user = await User.create(
        {
            username:username,
            password:password
        }
    )
    return user
}


module.exports = {
    findAllUser,
    findByUsername,
    creatUser
}