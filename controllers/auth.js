const { expressjwt: jwt } = require("express-jwt");
const jwksRsa = require("jwks-rsa");
const config = require("../config");

// Authentication middleware
// This middleware will check access token in authorization headers of a request
// It will verify access token against Auth0 JSON Web Key Set
exports.checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 10,
    jwksUri: `${config.AUTH0_URI}/.well-known/jwks.json`,
  }),
  audience: `${config.AUTH0_URI}/api/v2/`,
  issuer: `${config.AUTH0_URI}/`,
  algorithms: ["RS256"],
});

exports.checkRole = (role) => (req, res, next) => {
  const user = req.auth;
  if (user && user[`${config.AUTH0_NAMESPACE}/roles`].includes(role)) next();
  else return res.status(401).send("You are not authorized to access this resource!");
};
