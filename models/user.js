import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name :{
        type :String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password:{
            type : String,
            required : true
    },
    role : {
        type : String,
        enum : ['Admin','Alumni','student'],
        required : true
    }
})

const userModel1 = mongoose.model("User",userSchema)
export default userModel1;