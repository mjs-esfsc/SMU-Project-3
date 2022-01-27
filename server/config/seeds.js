const mongoose = require("mongoose");

const db = require("./connection");
const { User, Product } = require("../models");

// Open/create the db connection
db.once("open", async () => {
  // await Category.deleteMany();
  // set up your categories
  // const categories = await Category.insertMany([
  //     { name: 'Services' },
  //     { name: 'Supplies' },
  //     { name: 'Trucks' }
  // ]);

  // console.log('categories seeded');

  await Product.deleteMany({});
  //assign Services, Supplies, and Trucks offered by quantity
  const products = await Product.insertMany([
    {
      name: "Horse and Wagon",
      description: "Some information about the product",
      image: "horse-and-wagon.jpg",
      // category: categories[2]._id,
      price: 25.0,
      quantity: 4,
    },
    {
      name: "Pickup Truck",
      description: "Some information about the product",
      image: "pickup.png",
      // category: categories[2]._id,
      price: 25.0,
      quantity: 5,
    },
    {
      name: "10ft Truck",
      description: "Some information about the product",
      image: "10Large.png",
      // category: categories[2]._id,
      price: 25.0,
      quantity: 5,
    },
    {
      name: "15ft Truck",
      description: "Some information about the product",
      image: "14Large.png",
      // category: categories[2]._id,
      price: 25.0,
      quantity: 5,
    },
    {
      name: "20ft Truck",
      description: "Some information about the product",
      image: "20Large.png",
      // category: categories[2]._id,
      price: 25.0,
      quantity: 5,
    },
    {
      name: "Full Moving Crew",
      description: "Some information about the product",
      image: "This is a Placeholder",
      // category: categories[0]._id,
      price: 25.0,
      quantity: 5,
    },
    {
      name: "1 Person Crew",
      description: "Some information about the product",
      image: "This is a Placeholder",
      // category: categories[0]._id,
      price: 25.0,
      quantity: 5,
    },
    {
      name: "2 Person Crew",
      description: "Some information about the product",
      image: "This is a Placeholder",
      // category: categories[0]._id,
      price: 25.0,
      quantity: 5,
    },
    {
      name: "Bubble Wrap",
      description: "Some information about the product",
      image: "This is a Placeholder",
      // category: categories[1]._id,
      price: 25.0,
      quantity: 500,
    },
    {
      name: "Small Box",
      description: "Some information about the product",
      image: "This is a Placeholder",
      // category: categories[1]._id,
      price: 25.0,
      quantity: 500,
    },
    {
      name: "Medium Box",
      description: "Some information about the product",
      image: "This is a Placeholder",
      // category: categories[1]._id,
      price: 25.0,
      quantity: 500,
    },
    {
      name: "Large Box",
      description: "Some information about the product",
      image: "This is a Placeholder",
      // category: categories[1]._id,
      price: 25.0,
      quantity: 500,
    },
    {
      name: "Appliance Dolly",
      description: "Some information about the product",
      image: "This is a Placeholder",
      // category: categories[1]._id,
      price: 25.0,
      quantity: 5,
    },
    {
      name: "Padded Blankets",
      description: "Some information about the product",
      image: "This is a Placeholder",
      // category: categories[1]._id,
      price: 25.0,
      quantity: 500,
    },
  ]);

  console.log("products seeded");

  await User.deleteMany();
  //consolidate
  await User.create({
    firstName: "Allen",
    lastName: "Cheslik",
    email: "acheslik@testmail.com",
    password: "password12345",
    address: "5208 Jessica St",
    phone: "915-584-0816",
    orders: [
      {
        products: [products[0]._id, products[1]._id, products[2]._id],
      },
    ],
  });

  await User.create({
    firstName: "Allen",
    lastName: "Cheslik",
    email: "acheslik2@testmail.com",
    password: "password12345",
    address: "5208 Jessica St",
    phone: "915-584-0816",
  });

  console.log("users seeded");

  process.exit();
});
