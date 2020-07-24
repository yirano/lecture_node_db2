
exports.seed = async function (knex) {
  // clear out our table
  // truncate does more than .del(), like resetting autoincrementing ID
  // restarts table
  await knex("fruits").truncate()
  await knex("fruits").insert([
    { name: "dragon fruit", avgWeightOz: 15.6, delicious: true, color: "red" },
    { name: "durian", avgWeightOz: 52.9, delicious: false, color: "yellow" },
    { name: "rabutan", avgWeightOz: 1.1, delicious: true, color: "pink" }
  ])
}
