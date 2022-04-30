const router = require ('express').Router()
const fs = require ('fs')
const uniqid = require ('uniqid')

router.get('/api/notes',(req, res)=> {
    fs.readFile('db/db.json', 'utf8', (err,data)=>{
        if(err) throw err
        return res.json(JSON.parse(data))
    })
})

router.post ('/api/notes', (req, res)=> {
    fs.readFile('db/db.json', 'utf8', (err,data)=>{
        if(err) throw err
        const db = JSON.parse(data)
        req.body.id = uniqid()
        db.push(req.body)
        fs.writeFile('db/db.json',JSON.stringify(db) , (err)=> {
            if (err) throw err 
            res.json (db)
        })
    })
})


module.exports = router