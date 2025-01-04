const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect('mongodb+srv://seabhra:<db_password>@cluster0.ygp67.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        handleError(error);
    }
};

module.exports = connectDB;const handleError = (error) => {
    console.error(`Database connection error: ${error.message}`);
    process.exit(1);
};

module.exports = connectDB;