const mongoose = require("mongoose");
const app = require("./app.js");
const keys = require("./config/keys");

process.on("uncaughtException", (err) => {
  console.log("UNCAUGHT EXCEPTION! Shutting down...");
  console.log(err);
  process.exit(1);
});

mongoose
  .connect(keys.dbstring, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connection successful"));

const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () =>
  console.log(`server is running at port ${PORT}`)
);

process.on("unhandledRejection", (err) => {
  console.log("UNHANDLED REJECTION! Shutting down...");
  console.log(err);
  server.close(() => {
    process.exit(1);
  });
});
