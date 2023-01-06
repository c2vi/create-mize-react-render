#!/usr/bin/env node

const fs = require("fs")

const project_name = process.argv[1]
const working_dir = process.cwd()
const file_dir = __dirname

//check if dir alreay exists
if (fs.existsSync(working_dir + project_name)){
	console.log("There already exists a folder with the name " + project_name)
	process.exit()
}


fs.mkdirSync(working_dir + project_name)





