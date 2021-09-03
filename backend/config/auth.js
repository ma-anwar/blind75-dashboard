const jwt = require("express-jwt");
const jwksRsa = require("jwks-rsa");
const dotenv = require("dotenv");
dotenv.config({ path: "./config/config.env" });

exports.checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `${process.env.JWKS_URI}`,
  }),

  // Validate the audience and the issuer.
  audience: `${process.env.AUDIENCE}`,
  issuer: `${process.env.ISSUER}`,
  algorithms: ["RS256"],
});
