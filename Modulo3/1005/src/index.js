const { MongoClient } = require("mongodb");

const client = new MongoClient(
  "mongodb+srv://gabrielcorreaamaral94:<19jPHoXJr1Imteqf>@arniateste.h7v0yp4.mongodb.net/"
);

const pokemons = client.db("arnia").collection("pokemon");

// IIFE
async () => {
  await pokemons.insertOne({
    nome: "Squirtle",
    geracao: 1,
  });
  await client.close;
};

// //Create
// pokemons.insertOne();
// //Read
// pokemons.find();
// pokemons.findOne();
// //Update
// pokemons.updateOne();
// //Delete
// pokemons.deleteOne();
