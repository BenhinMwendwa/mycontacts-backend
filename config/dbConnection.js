const mongoose = require("mongoose");

const connectDb = async () => {
    try {
        console.log("🔄 Attempting to connect to MongoDB...");
        const connect = await mongoose.connect(process.env.CONNECTION_STRING);
        console.log("✅ Database connected successfully!");
        console.log(`   Host: ${connect.connection.host}`);
        console.log(`   Database: ${connect.connection.name}`);
    } catch (err) {
        console.error("❌ Database connection failed!");
        console.error("Error details:", err.message);
        
        if (err.message.includes('whitelist')) {
            console.log("\n💡 Solution: Add your IP to MongoDB Atlas whitelist:");
            console.log("1. Go to https://cloud.mongodb.com");
            console.log("2. Navigate to Network Access");
            console.log("3. Click 'Add IP Address'");
            console.log("4. Click 'Add Current IP Address' or use '0.0.0.0/0' for development");
        }
        
        process.exit(1);
    }
}

module.exports = connectDb;