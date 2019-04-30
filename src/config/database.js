const mongoose=require('mongoose');

const URI = 'mongodb+srv://apirest:apirest@cluster0-rqsae.mongodb.net/tallerninja?';
//mongodb+srv://apirest:<password>@cluster0-rqsae.mongodb.net/test?retryWrites=true

mongoose.connect(URI)
.then(db=>console.log('DB CONNECT'))
.catch(err=>console.log(err));

module.exports=mongoose;



/*const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://apirest:<password>@cluster0-rqsae.mongodb.net/test?retryWrites=true";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  client.close();
});*/