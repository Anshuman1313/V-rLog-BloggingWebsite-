import mongoose from "mongoose";

export const ConnectDB = async () =>{
    await mongoose.connect('mongodb+srv://Anshuman:anshuman1313@cluster0.8hohy73.mongodb.net/blog-app');
    console.log("DB Connected");
}