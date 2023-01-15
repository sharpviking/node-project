const { compare } = require("bcrypt");
const UserModel =require("../models/userSchema")
 
// function loginUser(req, res) {
//     var uname = req.body.email;
//     var pwd = req.body.password;
//     UserModel.findOne({email:uname}, function(err,myuser){
//       if(!err){
//         if(myuser.password===pwd){
//           res.send("login complete");
//         }
//       }else{
//         console.log(err);
//       }
//     })
// };

function loginUser(req, res) {
  var uname = req.body.email;
  var pwd = req.body.password;
  UserModel.findOne({email:uname}, async function(err,myuser){
    if(!err){
      let result = await compare(pwd,myuser.password);
      if(result){
        res.send("Login done");
      }else{
        res.send("login not done")
      }
    }else {
      res.send("login not done due to email not found");
    }
  })
};


module.exports = loginUser;