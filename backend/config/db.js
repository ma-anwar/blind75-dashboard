const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const database = await mongoose.connect(
      `mongodb://${process.env.MONGO_HOST}`,
      {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
      }
    );
    mongoose.connection.on("disconnect", handleDisconnect);
    mongoose.connection.on("error", handleDisconnect);

    console.log("MongoDB connected 🔌");
  } catch (error) {
    console.log(`Error connecting to DB: ${error.message}`);
    process.exit(1);
  }
};

function handleDisconnect(error) {
  console.log(`DB Error: ${error.message}`);
  process.exit(1);
}

module.exports = connectDB;
