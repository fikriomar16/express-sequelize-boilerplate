import user from "#models/user.js"

export const getAllUserData = async (limit = 10, offset = 0, where = {}, distinct = true, orderCol = null, orderBy = null) => {
	const data = await user.findAll({
		where: {
			...where,
		},
		limit,
		offset,
		distinct,
	})
	return data
}