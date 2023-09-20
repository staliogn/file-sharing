import mongoose from "mongoose";



const DBconnection = async ()=>{
    const MONODB_URI = `mongodb+srv://user:Manan@file-sharing.fbtyvl9.mongodb.net/?retryWrites=true&w=majority`;
    try{
        await mongoose.connect(MONODB_URI,{ useNewUrlParser: true});
        console.log('Database connected');
    }catch(error){
        console.error('Error whlie connecting with the database', error.message);
    }
}
export default DBconnection;