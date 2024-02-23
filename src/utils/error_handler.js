export const errorHandlingResponse = (res, error) => {
	console.error({ error, message: "Something's Wrong" })
	if (error.name == 'SequelizeAccessDeniedError') {
		return res.status(500).json({ code: 'ER_ACCESS_DENIED_ERROR', message: "Something's Wrong, Please check your console" })
	} else {
		return res.status(500).json({ error, message: "Something's Wrong" })
	}
}