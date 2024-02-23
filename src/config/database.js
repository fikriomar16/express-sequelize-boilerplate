import dotenv from 'dotenv'

dotenv.config()

const database = {
	"development": {
		"username": process.env.DB_USERNAME_DEV,
		"password": process.env.DB_PASSWORD_DEV,
		"database": process.env.DB_DATABASE_DEV,
		"host": process.env.DB_HOST_DEV,
		"port": process.env.DB_PORT_DEV,
		"dialect": "mysql",
		"dialectOptions": {
			"connectTimeout": 220000
		},
		"pool": {
			// "max": 5,
			// "min": 0,
			"acquire": 220000,
			"idle": 10000
		},
		"benchmark": true,
		"timezone": "+07:00"
	},
	"test": {
		"username": process.env.DB_USERNAME_TEST ?? process.env.DB_USERNAME_DEV,
		"password": process.env.DB_PASSWORD_TEST ?? process.env.DB_PASSWORD_DEV,
		"database": process.env.DB_DATABASE_TEST ?? process.env.DB_DATABASE_DEV,
		"host": process.env.DB_HOST_TEST ?? process.env.DB_HOST_DEV,
		"port": process.env.DB_PORT_TEST ?? process.env.DB_PORT_DEV,
		"dialect": "mysql",
		"dialectOptions": {
			"connectTimeout": 220000
		},
		"pool": {
			// "max": 5,
			// "min": 0,
			"acquire": 220000,
			"idle": 10000
		},
		"benchmark": true,
		"timezone": "+07:00"
	},
	"production": {
		"username": process.env.DB_USERNAME_PROD,
		"password": process.env.DB_PASSWORD_PROD,
		"database": process.env.DB_DATABASE_PROD,
		"host": process.env.DB_HOST_PROD,
		"port": process.env.DB_PORT_PROD,
		"dialect": "mysql",
		"dialectOptions": {
			"connectTimeout": 220000
		},
		"pool": {
			// "max": 5,
			// "min": 0,
			"acquire": 220000,
			"idle": 10000
		},
		"timezone": "+07:00"
	}
}
// https://github.com/sequelize/sequelize/issues/10858

export default database