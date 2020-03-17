const {Router}=require('express')
const route=Router()//same thing diff syntax
const articlesRoute=require('./articles').route
const profilesRoute=require('./profiles').route
route.use('/articles',articlesRoute)
route.use('/profiles',profilesRoute)
module.exports={
    route 
}