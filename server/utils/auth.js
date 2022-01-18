const jwt = require("jsonwebtoken");
const secret = "mysecretsshhhhh";
const expiration = "2h";

module.exports = {
  // function for our authenticated routes that will only need to pass a request.
  authMiddleware: function ({ req }) {
    // allows token to be sent via  req.query or headers
    let token = req.body.token || req.query.token || req.headers.authorization;
    // We split the token string into an array and return actual token
    if (req.headers.authorization) {
      token = token.split(" ").pop().trim();
    }

    if (!token) {
      return req;
    }

    // if token can be verified, add the decoded user's data to the request so it can be accessed in the resolver
    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch {
      console.log("Invalid token");
    }
    // return the request object so it can be passed to the resolver as `context`
    return req;
  },

  // Sign token makes the token that will be used to secure. Here, it's a function that takes username, email and _id
  signToken: function ({ username, email, _id }) {
    // payload is the data that holds the json object
    const payload = { username, email, _id };
    // this is what we use to sign the jwt with 3 values: data, secret, expiresIn
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
