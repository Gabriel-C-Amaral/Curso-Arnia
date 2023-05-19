const { MongoClient } = require("mongodb");

const client = new MongoClient(
  "mongodb+srv://userteste:senhateste123@arniateste.h7v0yp4.mongodb.net/"
);

const pokemons = client.db("arnia").collection("pokemon");

// IIFE
(async () => {
  await pokemons.insertOne({
    nome: "Abra",
    geracao: 1,
  });
  await client.close();
})();

// async function run() {
//   try {
//     await client.connect();
//     console.log("Connected correctly to server");
//   } catch (err) {
//     console.log(err.stack);
//   } finally {
//     await client.close();
//   }
// }
// run().catch(console.dir);

// //Create
// pokemons.insertOne();
// //Read
// pokemons.find();
// pokemons.findOne();
// //Update
// pokemons.updateOne();
// //Delete
// pokemons.deleteOne();
