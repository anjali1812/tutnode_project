var db=require('../dbconn'); //reference of dbconnection.js
 
var usr={
getAllUsers:function(callback){
    return db.query("select * from user",callback);
},
    
viewprofile:function(email_id,callback){
    return db.query("select * from user where email_id=?",[email_id],callback);
},

forgetpassword:function(email_id,callback){
    return db.query("Select password from user where email_id=?",[email_id],callback);
    },

login:function(email_id,item,callback){
    return db.query("select * from user where email_id=? And password=?",[email_id,item.password],callback);
},

signup:function(item,callback){
    return db.query("insert into user values(?,?,?,?,?,?,?)",[item.email_id,item.u_name,item.password,item.mobile_no,item.city,item.gender,item.address],callback);
    },

deleteUser:function(email_id,callback){
     return db.query("delete from user where email_id=?",[email_id],callback);
    },

changepassword:function(email_id,item,callback){
    return db.query("update user set password=? where email_id=?",[item.password,email_id],callback);
    },
   
editpofile:function(email_id,item,callback){
     return db.query("update user set u_name=?,mobile_no=?,city=?,gender=?,address=? where email_id=?",[item.u_name,item.mobile_no,item.city,item.gender,item.address,email_id],callback);
    }
};
module.exports=usr;