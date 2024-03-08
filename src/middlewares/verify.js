import jwt from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config()

export const verifyToken = async (req, res, next) => {
	const authHeader = req.headers['authorization']
	const token = authHeader && authHeader.split(' ')[1]
	if (token == null) return res.status(401).json({ status: false, access: 'Unauthorized', message: "You Don't Have Any Authorization" })
	await jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
		if (err) {
			console.error(err)
			return res.status(403).json({ status: false, access: 'Forbidden', message: "Session Expired" })
		}
		req.user = decoded
		next()
	})
}