import mongoose from 'mongoose';

mongoose.set('strictQuery', true);

const connection = async () => {
    try {
        const { connection: conn } = await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`Database is connected on ${conn.host}`);
    } catch (error) {
        console.error("Error connecting to the database:", error);
    }
};

export default connection;
