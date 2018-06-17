var express = require('express');
var router = express.Router();
var user1=require('../model/project_model');

router.get('/:email_id?',function(req,res,next){
  if(req.params.email_id){
    user1.viewprofile(req.params.email_id,function(err,rows){
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

router.post('/:email_id',function(req,res,next){   //add the tasks
 
    user1.login(req.params.email_id,req.body,function(err,rows){
      if(err)
      {
      res.json(err);
      }
      else{
      res.json(rows);//or return count for 1 &amp;amp;amp; 0
      }
      });
});

router.put('/:email_id',function(req,res,next){
    user1.editpofile(req.params.email_id,req.body,function(err,rows){
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