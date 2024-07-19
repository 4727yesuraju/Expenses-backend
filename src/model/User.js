const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = mongoose.Schema({
    firstName : {
        require : [true,"firstName is required"],
        type : String
    },
    lastName : {
        require : [true,"lastName is required"],
        type : String
    },
    email : {
        require : [true,"email is required"],
        type : String
    },
    password : {
        required : [true,"Password is required"],
        type : String
    },
    isAdmin : {
        type : Boolean,
        default : false
    }
},
{
    timestamps : true
});

//hash password
userSchema.pre("save",async function(next){
     if(!this.isModified("password")){
        next()
     }
     const salt = await bcrypt.genSalt(10);
     this.password = await bcrypt.hash(this.password,salt);
     next();
})

const User = mongoose.model("User",userSchema);

module.exports = User;