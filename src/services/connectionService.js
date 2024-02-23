import db from "#models/index.js"

const { sequelize, Sequelize, DataTypes } = db

export const authDb = () => {
	sequelize.authenticate().then(() => {
		console.log(`[CONNECT] Connected to Database Successfully`)
	}).catch((err) => {
		console.error(`[ERROR] Error While Connecting to Database`)
		console.error(err)
	})
}