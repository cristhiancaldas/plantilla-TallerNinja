const mongoose=require('mongoose');

const URI = 'mongodb+srv://apirest:apirest@cluster0-rqsae.mongodb.net/tallerninja?';
//mongodb+srv://apirest:<password>@cluster0-rqsae.mongodb.net/test?retryWrites=true

mongoose.connect(URI)
.then(db=>console.log('DB CONNECT'))
.catch(err=>console.log(err));

module.exports=mongoose;