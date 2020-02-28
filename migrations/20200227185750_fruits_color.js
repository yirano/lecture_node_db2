// migrations build off of each other, so since the fruits table was already
// created in the last migration file, we don't have to create it again. we
// can build off of it.

exports.up = async function(knex) {
	await knex.schema.alterTable("fruits", (table) => {
		// create a new color column on the existing fruits table
		table.text("color")
	})
}

exports.down = async function(knex) {
	await knex.schema.alterTable("fruits", (table) => {
		table.dropColumn("color")
	})
}
