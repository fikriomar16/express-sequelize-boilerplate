import fs from 'fs'

const dirs = [
	'./src/files',
	'./src/photo',
]

export const checkDir = () => {
	dirs.forEach(dir => {
		if (fs.existsSync(dir)) {
			console.log(`[EXISTS] [${dir}] Directory Already Exists`)
		} else {
			fs.mkdirSync(dir)
			console.log(`[CREATE] [${dir}] Directory Created`)
		}
	})
}