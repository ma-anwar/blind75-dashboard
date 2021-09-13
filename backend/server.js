const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cors = require("cors");
const jwt = require("express-jwt");
const jwksRsa = require("jwks-rsa");
const { checkJwt } = require("./config/auth");
const connectDB = require("./config/db");

dotenv.config({ path: "./config/config.env" });

(async () => {
  await connectDB();

  const user = require("./routes/user");

  const app = express();

  app.use(cors());
  app.use(express.json());

  if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
  }

  app.use(checkJwt);
  app.use("/api/v1/user", user);

  const HOST = process.env.HOST || "localhost";
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, HOST, () =>
    console.log(`Server started on port ${PORT} 🚀🚀🚀`)
  );
})();
