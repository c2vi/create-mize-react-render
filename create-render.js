#!/usr/bin/env node

const fs = require("fs")

let project_name = process.argv[2]
if (!project_name) {
	project_name = "my-mize-react-render"
}

const working_dir = process.cwd()
const file_dir = __dirname

//check if dir alreay exists
if (fs.existsSync(working_dir + "/" + project_name)){
	console.log("There already exists a folder with the name " + project_name)
	process.exit()
}

console.log(working_dir + "/" + project_name)
fs.mkdirSync(working_dir + "/" + project_name)





