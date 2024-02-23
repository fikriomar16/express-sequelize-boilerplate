'use strict'
import db from "./index.js"

const { sequelize, Sequelize, DataTypes } = db

const user = sequelize.define('user', {
	id: {
		allowNull: false,
		autoIncrement: true,
		primaryKey: true,
		type: Sequelize.INTEGER
	},
	firstName: {
		type: Sequelize.STRING
	},
	lastName: {
		type: Sequelize.STRING
	},
	email: {
		type: Sequelize.STRING,
		unique: true,
	},
	username: {
		type: Sequelize.STRING,
		unique: true,
	},
	password: {
		type: Sequelize.STRING
	},
	createdAt: {
		allowNull: false,
		type: Sequelize.DATE,
		defaultValue: new Date(),
	},
	updatedAt: {
		allowNull: false,
		type: Sequelize.DATE,
		defaultValue: new Date(),
	}
}, {
	freezeTableName: true,
	tableName: 'users',
})

export default user