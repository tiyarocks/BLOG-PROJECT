const {Users}=require('../data/db')
async function createUser(){
    username,
    email,
    password,
    token=genRandomString(32)
    bio,
    image
    const user=await Users.create({
        username,
        email,
        password,
        bio,
        image   //agar key aur value ka name same hai toh u can write it like this
    })
    return user
}
//now we need to make a folder to  create tokens