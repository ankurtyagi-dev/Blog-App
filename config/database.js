import mongoose from "mongoose";
 
const connectWithDb = () => {
    mongoose.connect(process.env.DATABASE_URL)
    .then(console.log("Database Connected"))
    .catch((error) => {
        console.log("Database Connection Error");
        console.log(error);
    })
}

export default connectWithDb;