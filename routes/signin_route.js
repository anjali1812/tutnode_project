var express = require('express');
var router = express.Router();
var user2=require('../model/project_model');

router.get('/:email_id?',function(req,res,next){
  if(req.params.email_id){
    user2.forgetpassword(req.params.email_id,function(err,rows){
    if(err)
    {
    res.json(err);
    }
    else
    {
    res.json(rows);
    }
    });

  }
  else{
  user2.getAllUsers(function(err,rows){
     
    if(err)
    {
    res.json(err);
    }
    else
    {
    res.json(rows);
    }

  });
}
});

router.post('/',function(req,res,next){   //add the tasks
 
    user2.signup(req.body,function(err,rows){
      if(err)
      {
      res.json(err);
      }
      else{
      res.json(rows);//or return count for 1 &amp;amp;amp; 0
      }
      });
});
module.exports=router;