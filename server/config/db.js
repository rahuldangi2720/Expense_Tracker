const { default: mongoose } = require("mongoose");
exports.connectDB = async () => {
  try {
    // const connect = await mongoose.connect(process.env.MONGO_URL);
    const connect = await mongoose.connect(
      "mongodb+srv://rahuldangi905019:rahul321@cluster0.svieqqm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );

    if (connect) {
      console.log("MongoDb is connected");
    }
  } catch (error) {
    console.log(error);
  }
};
