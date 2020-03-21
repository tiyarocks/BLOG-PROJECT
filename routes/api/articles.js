const {Router}=require('express')
const {createArticle}=require('../../controllers/articles')
const { findUserByToken }=require('../../controllers/users')

const route=Router()

//GET request to  /api/articles
route.get('/',(req,res)=>{
    res.send('TODO: list of all articles')
})

//POST request to /api/articles
route.post('/',async(req,res)=>{

  
    let auth=req.headers['authorization']
    if(auth.startsWith('Token')){
        let token=auth.split('')[1]

        //jis user ka token jaa rha hoga that user will become the author in this case
        let user=await findUserByToken(token)
        let a=req.body.article
        let article=await createArticle(
            a.title,
            a.description,
            a.body,
            user.username
        )
        res.send(article)
        
    }
    //cannot create an article without an author
    else{
        res.status(401).send({
            "errors" : {
                "body": [
                  "Authorization token empty"
                ]
              }
        })
    }
    

})
module.exports={
    route
}