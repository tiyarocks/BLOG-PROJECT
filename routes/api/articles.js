const {Router}=require('express')
const route=Router()
//GET request to  /api/articles
route.get('/',(req,res)=>{
    res.send('TODO: list of all articles')
})
//POST request to /api/articles
route.post('/',(req,res)=>{
    res.send('TODO: article has been added')
})
module.exports={
    route
}