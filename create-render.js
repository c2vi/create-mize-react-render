

const project_name = process.argv[1]

//check if dir alreay exists
if (fs.existsSync(project_name)){
	console.log("There already exists a folder with the name " + project_name)
	process.exit()
}

console.log(process.cwd())
console.log(__dirname)

fs.mkdir(project_name)





