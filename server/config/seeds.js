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
      name: "Cargo Van",
      description:
        "Perfect for small jobs around town. Our cargo vans feature nerf bars to help you step into the van easier. Examples of how it can be used: twin-sized mattress, spring box, three-seater sofa and two nightstands. The price of the cargo van is based on a day use and doesn't include other fees for use.",
      image: "cargo-van.jpg",
      // category: categories[2]._id,
      price: 30.0,
      quantity: 5,
    },
    {
      name: "Pickup Truck",
      description:
        "A great option for local jobs and an amazing tool to move big items quickly or for those who need to buy large items from the hardware store.Examples of how it can used: for local quick big-item purchases, to transport your boat or motorcycle and to tow your car to the mechanic.The price of the pickup truck is based on a day use and doesn't include other fees for use.",
      image: "pickup-truck.jpg",
      // category: categories[2]._id,
      price: 30.0,
      quantity: 5,
    },
    {
      name: "10ft Truck",
      description:
        "Perfect option to move a 1-bedroom apartment or a studio and a do a short or long distance move. This truck is 10' x 6' x 6' (LxWxH) and has a towing capacity of 6,000 lbs. Examples of how it can be used: To move a king sized bed, frame, loveseat, two end tables and a four piece dining room table. The price of the 10ft truck truck is based on a day use and doesn't include other fees for use.",
      image: "10ft-truck.jpg",
      // category: categories[2]._id,
      price: 35.0,
      quantity: 5,
    },
    {
      name: "15ft Truck",
      description:
        "An amazing option for small families who are in need of moving 2 bedroom apartments or condos. This truck features a load ramp to make loading and unloading easier. This truck is 15' x 8' x 7' (LxWxH) and has a towing capacity of 10,000 lbs. Examples of how it can be used: To move a king sized bed, washer, dryer, fridge, dressers and a 3 seater sofa. The price of the 15ft truck is based on a day use and doesn't include other fees for use.",
      image: "15ft-truck.jpg",
      // category: categories[2]._id,
      price: 40.0,
      quantity: 5,
    },
    {
      name: "20ft Truck",
      description:
        "Our largest truck available. It is perfect for growing families in need of moving a 2-3 bedroom home or large apartment. This truck features a load ramp to make loading and unloading easier. This truck is 19'x 8' x 7' (LxWxH) and has a towing capacity of 7,500 lbs. Examples of how it can be used: two king size mattresses, a crib, dressers, a sectional sofa, a coffee table, a 6-person dining table with chairs. The price of the 20ft truck is based on a day use and doesn't include other fees for use.",
      image: "20ft-truck.jpg",
      // category: categories[2]._id,
      price: 45.0,
      quantity: 5,
    },
    {
      name: "Moving Crew consultation",
      description:
        "Let us do the hard job for you. Our highly-trained moving professionals will take great care of your items and can assist you from packing all the way to delivering and unboxing. Add this option to your cart and you will receive a call from our moving consultant to discuss your needs and provide you a quote.",
      image: "moving-crew-consultation.jpg",
      // category: categories[0]._id,
      price: 0,
      // quantity: 5,
    },
    {
      name: "4'x8' Cargo Trailer",
      description:
        "This enclosed trailer will suit your needs perfectly. Our small cargo trailers are easy to load with a low rear deck and it has a wide rear door opening. This option has a cargo capacity of 142 cubic feet, and it is very popular for both personal and business moves.",
      image: "small-cargo-trailer.jpg",
      // category: categories[0]._id,
      price: 25.0,
      quantity: 5,
    },
    {
      name: "6'x12' Cargo Trailer",
      description:
        "This cargo trailer is one of the public's favorite trailers for rent for cross country moves. It has a low deck, smooth floor and a wide-open access door. ",
      image: "large-cargo-trailer.jpg",
      // category: categories[0]._id,
      price: 30.0,
      quantity: 5,
    },
    {
      name: "Apartment Kit",
      description:
        "This is the ideal assortment of moving boxes and cushions perfect for your apartment move. It has everything you need to box and protect your beloved items. With this kit, you will get the following: 15 medium moving boxes, 10 small moving boxes, 1 cushion foam, 2 bubble rolls, 50 yard roll of tape, packing paper and a tv cover.",
      image: "apartment-kit.jpg",
      // category: categories[1]._id,
      price: 100.0,
      quantity: 50,
    },
    {
      name: "1-2 Bedroom Kit",
      description:
        "This kit has everything you need to move a 1-2 bedroom apartment or house. We provide you all the supplies needed to pack, organize and protect your personal items. This kit includes: 25 medium boxes, 15 small boxes, 10 large boxes, 1 cushion foam package, 1 roll of packing paper, 2 boxes for your dishes, 1 55 yard roll of tape and a flat screen tv cover.",
      image: "1-2-bedroom-kit.jpg",
      // category: categories[1]._id,
      price: 200.0,
      quantity: 50,
    },
    {
      name: "3-4 Bedroom Kit",
      description:
        "Perfect kit for those needing to move a 3-4 bedroom house. This kit includes large items to box, organize and protect your loved items. This kit includes: 10 extra-large boxes, 35 medium boxes, 15 large boxes, 20 small boxes, 1 roll of packing paper, 4 boxes for your dishes, 3 matress covers and 1  55 yard roll tape.",
      image: "3-4-bedroom-kit.jpg",
      // category: categories[1]._id,
      price: 300.0,
      quantity: 50,
    },
    {
      name: "Extra-Large moving box",
      description:
        "This box is perfect to store big bulky items such as comforters, bulky clothing and more. This box is recyclable and can hold up to 65 pounds.",
      image: "extra-large-boxes.jpg",
      // category: categories[1]._id,
      price: 3.0,
      quantity: 200,
    },
    {
      name: "Large box",
      description:
        "This box is ideal to move household items such as lamps, board games, books, etc. It can be recycled and it can hold up to 65 pounds.",
      image: "large-boxes.jpg",
      // category: categories[1]._id,
      price: 2.5,
      quantity: 200,
    },
    {
      name: "Medium box",
      description:
        "This box is ideal to move decor, office items, toys and small appliances. It can be recycled and it can hold up to 65 pounds.",
      image: "medium-boxes.jpg",
      // category: categories[1]._id,
      price: 2.0,
      quantity: 200,
    },
    {
      name: "Small box",
      description:
        "Our smaller box is ideal to move items such as sheets, small appliances and canned food. It can be recycled and it can hold up to 65 pounds.",
      image: "small-boxes.jpg",
      // category: categories[1]._id,
      price: 1.5,
      quantity: 200,
    },
    {
      name: "Dolly",
      description:
        "A must have tool for those diy-ers looking to move their household items. This dolly is perfect to move 3 boxes at once and other furniture. It can hold 600 to 800 pounds. The price is based on rental per day.",
      image: "dolly.jpg",
      // category: categories[1]._id,
      price: 10.0,
      quantity: 30,
    },
    {
      name: "Padded Blankets",
      description:
        "These blankets are heavy duty and are perfect to move your big items such as dressers, nightstands and other furniture. By using them, you avoid getting your beloved items scratched.The price is based on rental per day.",
      image: "padded-blankets.jpg",
      // category: categories[1]._id,
      price: 10.0,
      quantity: 50,
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
