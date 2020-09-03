const fs = require("fs");
const data = require("./data.json");
const { age, date, graduation } = require("./utils");
const Intl = require("intl");

//show
exports.show = (req, res) => {
	const { id } = req.params;

	const foundTeacher = data.teachers.find((teacher) => {
		return teacher.id == id;
	});

	if (!foundTeacher) return res.send("Teacher not found!");

	const teacher = {
		...foundTeacher,
		age: age(foundTeacher.birth),
		graduation: graduation(foundTeacher.graduation),
		classes: foundTeacher.classes.split(","),
		created_at: new Intl.DateTimeFormat("pt-BR").format(
			foundTeacher.created_at
		),
	};

	return res.render("teachers/show", { teacher });
};

//create
exports.post = (req, res) => {
	const keys = Object.keys(req.body);

	for (key of keys) {
		if (req.body[key] == "") return res.send("Please, fill all the fields");
	}

	let { avatar_url, name, birth, graduation, type, classes } = req.body;

	birth = Date.parse(birth);
	const created_at = Date.now();
	const id = Number(data.teachers.length + 1);

	data.teachers.push({
		id,
		avatar_url,
		name,
		birth,
		graduation,
		type,
		classes,
		created_at,
	});

	fs.writeFile("data.json", JSON.stringify(data, null, 2), (err) => {
		if (err) return res.send("Write file error!");

		return res.redirect("/teachers");
	});
};

//update
exports.edit = (req, res) => {
	const { id } = req.params;

	const foundTeacher = data.teachers.find((teacher) => {
		return teacher.id == id;
	});

	if (!foundTeacher) return res.send("Teacher not found!");

	const teacher = {
		...foundTeacher,
		birth: date(foundTeacher.birth),
	};

	return res.render("teachers/edit", { teacher });
};
