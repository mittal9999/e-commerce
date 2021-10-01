import  mongoose from "mongoose";

const Connection =  async(username , password) => {
    const URL = `mongodb://mittal_mca:mongodbMittu99@cluster0-shard-00-00.vqy3f.mongodb.net:27017,cluster0-shard-00-01.vqy3f.mongodb.net:27017,cluster0-shard-00-02.vqy3f.mongodb.net:27017/cluster0?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
    await mongoose.connect(URL,{useNewUrlParser: true, useUnifiedTopology: true})
    console.log('Database connected sucessfully..');
   }catch (error) {
        console.log('Error:',error.message);
   }

}

export default Connection;