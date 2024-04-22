import { errorHandlingResponse } from "#utils/error_handler.js"
import { getAllUserData } from "#utils/userData.js"

export const testGetUser = async (req, res) => {
	try {
		let conditions = {}
		const users = await getAllUserData(20, 0, conditions)
		if (users) {
			return res.json({
				status: 'success',
				data: users,
			})
		}
		return res.status(404).json({
			status: 'error',
			message: 'Data Not Found'
		})
	} catch (error) {
		errorHandlingResponse(res, error)
	}
}