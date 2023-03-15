module.exports = {
    index: (req,res)=> {
        res.render('index')
    },
    admin: (req,res)=> {
        res.render('admin',{
        admin: req.query.admin
        })
    },
    error: (req,res)=> {
        res.render('error',{
        message : 'No tienes los privilegios para ingresar'
        })
    }
}