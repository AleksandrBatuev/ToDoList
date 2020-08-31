let express = require('express');
let fs = require('fs');
let body_parser = require('body-parser');
let cors = require ('cors');
let data_users = fs.readFileSync('user.json');
let data_tasks = fs.readFileSync('task.json');
let users = JSON.parse(data_users);
let tasks = JSON.parse(data_tasks);

let app = express();

app.use(cors());
app.use(body_parser.json());
app.use(body_parser.urlencoded({extended: true}));

function tasks_transformed (tasks) {
	tasks.sort(function (a, b) {
		if (a.priority > b.priority) {
			return -1;
		}
		if (a.priority < b.priority) {
			return 1;
		}
	return 0;
	});
	fs.writeFileSync('task.json', JSON.stringify(tasks));
};


app.listen(3001, function () {
	console.log('API app started');
})

app.get('/user_list', function User_list(req, res) {
	res.send(users);
})

app.get('/task_list', function Task_list(req, res) {
	tasks_transformed(tasks)
	res.send(tasks);
})

app.post('/new_task', function New_task(req, res) {
	let new_task = {
		id: Date.now(),
		name: req.body.name,
		priority: req.body.priority,
		id_user: req.body.id_user
	};
	tasks.push(new_task);
	tasks_transformed(tasks);
	fs.writeFileSync('task.json', JSON.stringify(tasks));
	res.send(tasks);
})

app.post('/delete_task', function Delet_task(req, res) {
	let del_id = req.body.id;
	const index = tasks.findIndex(n => n.id === del_id);
	if (index !== -1) {
  	tasks.splice(index, 1);
		tasks_transformed(tasks);
		fs.writeFileSync('task.json', JSON.stringify(tasks));
		res.send(tasks);
	}
})

app.post('/priority_plus', function Priority_plus(req, res) {
	let priority_id = req.body.id;
	let priority_new = req.body.priority + 1;
	const index = tasks.findIndex(n => n.id === priority_id);
	delete tasks[index]['priority'];
	tasks[index]['priority'] = priority_new;
	tasks_transformed(tasks);
	fs.writeFileSync('task.json', JSON.stringify(tasks));
	res.send(tasks);
})

app.post('/priority_minus', function Priority_minus(req, res) {
	let priority_id = req.body.id;
	let priority_new = parseInt(req.body.priority) - 1;
	const index = tasks.findIndex(n => n.id === priority_id);
	delete tasks[index]['priority'];
	tasks[index]['priority'] = priority_new;
	tasks_transformed(tasks);
	fs.writeFileSync('task.json', JSON.stringify(tasks));
	res.send(tasks);
})
