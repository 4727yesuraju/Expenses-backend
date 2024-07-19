const mongoose = require('mongoose');

const dbConnect = async ()=>{
      try{
        await mongoose.connect(process.env.MONGODB_CONN_STR)
        console.log("DB connected Successfully");
      }catch(error){
        console.error(`Error ${error.message}`);
      }
}

module.exports = dbConnect;