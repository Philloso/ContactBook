var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('contactlist',['contactlist']);
var bodyParser = require('body-parser');
  

//-------------Set static file path ----------

app.use(express.static(__dirname + "/public"));

//-------------- Use Body Parser -------------

app.use(bodyParser.json());
  
//----------- gets contact list from DB -------

app.get('/contactlist', function(req, res){
    console.log("I received a GET request")  
    
  db.contactlist.find(function(err, docs){
      console.log(docs);
      res.json(docs);
  });
    
});

//-------- Add contact to DB ------------

 app.post('/contactlist', function (req, res) {
     console.log(req.body);
     db.contactlist.insert(req.body, function(err, doc){
         res.json(doc);
     });
 });

//--------- deletes contacts-----------------

app.delete('/contactlist/:id', function(req, res){
    var id = req.params.id;
    console.log(id);
    db.contactlist.remove({_id: mongojs.ObjectId(id)}, function (err, doc){
       res.json(doc); 
    });
});

//--------------------------------------------

app.get('/contactlist/:id', function(req, res){
    var id = req.params.id;
    console.log(id);
    db.contactlist.findOne({_id: mongojs.ObjectId(id)}, function (err, doc){
      res.json(doc); 
    });
    
});

//------------------Add to HTML------------

app.put('/contactlist/:id', function (req, res){
    var id = req.params.id;
    console.log(req.body.name);
    db.contactlist.findAndModify({query: {_id: mongojs.ObjectId(id)},
       update: {$set: {name: req.body.name, email: req.body.email, number: req.body.number }}, new: true}, function (err, doc){
          res.json(doc);                        
    });
});
  
//------------- Listen on port 3000 ------------

app.listen(3000);
console.log("Yep Yep! your Server is running on port 3000");






