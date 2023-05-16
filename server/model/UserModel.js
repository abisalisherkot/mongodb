const mongoose=require("mongoose");
const userSchema=new mongoose.Schema(
{
   name:{
       type:String,
       required:true,
   },
   details:{
       type:String,
       required:true,
   }
},
{
   timestamps:true,
   versionKey:false,
}

);
const User=mongoose.model("User",userSchema);
module.exports=User