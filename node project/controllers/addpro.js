const productmodel =require("../models/proSchema");


function addpro(req,res){
    let obj = {
        name : req.body.name,
        total: req.body.total,
        category: req.body.category,
        price: req.body.price
    }
    let resultData = new productmodel(obj);
    resultData.save().then(item => {
        res.send("pro added successfully")
    }).catch((err) => {
        console.log("error in adding data");
    })
};

module.exports = addpro;