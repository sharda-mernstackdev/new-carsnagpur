

const mongoose= require ('mongoose')

const connectDB=async ()=>{
    try {
        await mongoose.connect('mongodb+srv://jcishardawaghmare:2nw5yxZcdjhB0RX1@carsnagpur.gcvtr.mongodb.net/carsnagpur')
        console.log('mongo connected');
        
    } catch (error) {
        console.log(error);
        
    }
}
module.exports={connectDB}