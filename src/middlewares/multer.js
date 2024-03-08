import multer from 'multer'
import { basename as _basename, extname, join } from 'path'
import { fileURLToPath } from 'url'
import dotenv from "dotenv"
import { whiteListImage, whiteListPdf } from '#utils/whiteList.js'
dotenv.config()

const basename = _basename(fileURLToPath(import.meta.url))

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, join(basename, '../files'))
	},
	filename: function (req, file, cb) {
		let name = `${whiteListImage.includes(file.mimetype) ? 'img' : 'file'}-${Date.now()}`
		if (req.body.filename) {
			name = req.body.filename
		}
		cb(null, `${name}${extname(file.originalname)}`);
	}
})

const upload = multer({
	storage,
	limits: {
		fileSize: 5 * 1024 * 1024,
	},
	fileFilter: function (req, file, cb) {
		if (whiteListImage.includes(file.mimetype) || whiteListPdf.includes(file.mimetype)) {
			cb(null, true)
		} else {
			req.errorExt = {
				status: false,
				error: "Not an image or pdf file",
				name: "MulterError",
				message: "File is not allowed",
				field: "file",
			}
			cb(null, false, new Error("File isn't allowed"))
			// cb(null, false)
		}
	}
})

const multerUpload = upload.single('file')

export const multerHelper = async (req, res, next) => {
	multerUpload(req, res, function (err) {
		if (err instanceof multer.MulterError) {
			console.log(err)
			return res.status(403).send(err)
		} else if (err) {
			console.log(err)
			return res.status(403).send(err)
		} else if (req.errorExt) {
			console.log(req.errorExt)
			return res.status(403).send(req.errorExt)
		}
		next()
	})
}