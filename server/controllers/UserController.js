const User=require("../model/UserModel");
exports.newUser=async (req,res)=>{
    try{
        const{name,details}=req.body;
        const params={};
        if(name){
            params.name=name
        }if(details){
            params.details=details
        }
        if(!(params?.name &&params?.details)){
            res.status(400).send({message:"All input is required"})
        }
        const user=await User.create({
            name:params?.name,
            details:params?.details
        })
        user.save();
        res.status(201).json(user);
    }catch(err){
        console.log(err);
    }
};
exports.getAllUsers=async(req,res)=>{
    try{
        const user=await User.find({});
    }catch(err){
        
    }
}