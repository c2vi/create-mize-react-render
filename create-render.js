#!/usr/bin/env node

const fs = require("fs")
const { exec } = require('child_process');

let project_name = process.argv[2]
if (!project_name) {
	project_name = "my-mize-react-render"
}

const working_dir = process.cwd()
const file_dir = __dirname
const project_dir = working_dir + "/" + project_name

//check if dir alreay exists
if (fs.existsSync(working_dir + "/" + project_name)){
	console.log("There already exists a folder with the name " + project_name)
	process.exit()
}

//make the folder
fs.mkdirSync(project_dir)

process.chdir(project_dir)

//yarn init
const init_log = exec("yarn init -y")

//copy over the template
exec("cp -r " + file_dir + "/template/* " + project_dir)
exec("cp -r " + file_dir + "/template/.babelrc " + project_dir)

//package.json
const package_json = `{
	"name": "` + project_name + `",
	"version": "1.0.0",
	"license": "MIT",
	"scripts": {
		"dev": "webpack ./src",
		"build": "webpack ./src"
	}
}`

fs.writeFileSync(project_dir + "/package.json", package_json)
fs.mkdirSync(project_dir + "/public")

//mize.toml
const mize_toml = `
[[render]]
id = "` + project_name + `"
folder = "` + project_name + `"
main = "build/main.js"
webroot = "public"
`

fs.writeFileSync(project_dir + "/mize.toml", mize_toml)

//yarn add
const dev_deb_log = exec("yarn add -D @babel/core @babel/preset-env babel-loader eslint eslint-config-airbnb-base react-tracked webpack webpack-cli @babel/plugin-transform-runtime @babel/preset-react")

const deb_log = exec("yarn add react react-dom")

//yarn install
const install_log = exec("yarn install")

//log all the data from all the exec's
dev_deb_log.stdout.on('data', function(data) {
	process.stdout.write(data);
});
deb_log.stdout.on('data', function(data) {
	process.stdout.write(data);
});
init_log.stdout.on('data', function(data) {
	process.stdout.write(data);
});
install_log.stdout.on('data', function(data) {
	process.stdout.write(data);
});



