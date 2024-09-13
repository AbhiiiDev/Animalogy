
const mongoose=require('mongoose');

const connectDb=async()=>{
try {
    console.log(process.env)
    const con=await mongoose.connect(process.env.MONGO_URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })

    console.log(`mongodb connected: ${con.connection.host}`)
} catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);


}
}

module.exports={connectDb}