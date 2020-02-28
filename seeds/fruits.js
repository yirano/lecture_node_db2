// the whole point of seeding is to bring our database back to an initial
// state after we change a bunch of stuff during testing. to reset it.
exports.seed = async function(knex) {
	// clear out all the rows in our table
	await knex("fruits").truncate()

	// create some predictable test data
	await knex("fruits").insert([
		{ name: "dragon fruit", avgWeightOz: 16.7, delicious: true, color: "red" },
		{ name: "durian", avgWeightOz: 52.9, delicious: false, color: "yellow" },
		{ name: "rambutan", avgWeightOz: 1.1, delicious: true, color: "pink" },
		{ name: "lingonberry", avgWeightOz: 0.01, delicious: true, color: "red" },
		{ name: "golden gooseberry", avgWeightOz: 0.02, delicious: false, color: "yellow" },
	])
}
