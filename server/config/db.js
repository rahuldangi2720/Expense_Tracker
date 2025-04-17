const { default: mongoose } = require("mongoose");
exports.connectDB = async () => {
  try {
    // const connect = await mongoose.connect(process.env.MONGO_URL);
    const connect = await mongoose.connect(
      "mongodb+srv://rahuldangi905019:dangi9050@cluster0.nuhcr2e.mongodb.net/"
    );

    if (connect) {
      console.log("MongoDb is connected");
    }
  } catch (error) {
    console.log(error);
  }
};
