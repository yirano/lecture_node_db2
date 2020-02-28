// migrations provide a way for us to change our database over time,
// as the data requirements change. you could run this migration now,
// and in a few months when you need to add a new column, you can just
// create a new migration.
exports.up = async function(knex) {
	// translates to `CREATE TABLE "fruits" ();`
	await knex.schema.createTable("fruits", (table) => {
		// translates to `"id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT`
		table.increments("id")
		// translates to `"name" TEXT NOT NULL UNIQUE`
		table.text("name").notNull().unique()
		// translates to `"avgWeightOz" FLOAT NOT NULL`
		table.float("avgWeightOz").notNull()
		// translates to `"delicious" BOOLEAN DEFAULT 1`
		table.boolean("delicious").defaultTo(1)
	})
}

// the down function should always reverse whatever happens in our up
// function.
exports.down = async function(knex) {
	// translates to `DROP TABLE IF EXISTS "fruits";`
	await knex.schema.dropTableIfExists("fruits")
}
