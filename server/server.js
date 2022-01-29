const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const path = require("path");
// MB: calling authMiddleware to verify authenticity
const { authMiddleware } = require("./utils/auth");
const { typeDefs, resolvers } = require("./schemas");
const db = require("./config/connection");

const PORT = process.env.PORT || 3001;
const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  // MB: Add context to our server so data from the `authMiddleware()` function can pass data to the resolver functions that need it
  context: authMiddleware,
});

server.applyMiddleware({ app });

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// // Create/activate payment flow
// const domain = 'http://localhost:3002';

// app. post('/create-checkout-session', async (req, res) => {
//   const session = await.stripe.checkout.session.create({
//     customer_email: 'customer@example.com',
//     submit_type: 'donate',
//     billing_address_collection: 'auto',
//     shipping_address_collection: {
//       allowed_countries: ['US'],
//     },
//     line_items: [
//       {
//         price: '{{Price_ID}}', // TO DO, Insert the exact price id (for example, pr1234) of the product we are selling //
//         quantity: 1, 
//       },
//     ],
//     //fulfillment status
//     mode: 'payment', 
//     success_url: `${domain}/?success=true`,
//     cancel_url: `${domain}/?canceled=true`,
//     automatic_tax: {enabled: true},
//   });

//   res.redirect(303, session.url);
// });

// app.listen(3002, () => console.log('Running on Port 3002'));

// So that is setting up a piece of middleware. Which is serving up everything in the "/images" folder to the browser as a static asset.
app.use("/images", express.static(path.join(__dirname, "../client/images")));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
});
