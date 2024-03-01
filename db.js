var  mongoose=require('mongoose')
const mongooseUrl='mongodb://localhost:27017/'
var connectMongoose=async()=>{
    await mongoose.connect(mongooseUrl);
    
}
// module.exports=connectMongoose;
connectMongoose();