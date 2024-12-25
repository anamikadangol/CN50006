var express = require("express");
var bodyParser = require("body-parser");
var fs = require("fs");
var app = express();


app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', function (req, res) {
    res.send("Hello, this is my first Express APP");
});

app.get('/about', function (req, res) {
    res.send("This is a basic Express APP");
});

app.get('/users/:userId/books/:bookId', function (req, res) {
    res.send(req.params);
});


app.get('/GetStudents', function (req, res) {
    fs.readFile(__dirname + "/Student.json", 'utf8', function (err, data) {
        if (err) {
            res.status(500).send("Error reading file");
        } else {
            res.json({
                status: true,
                data: JSON.parse(data)
            });
        }
    });
});


app.get('/GetStudentid/:id', function (req, res) {
    fs.readFile(__dirname + "/Student.json", 'utf8', function (err, data) {
        if (err) {
            res.status(500).send("Error reading file");
        } else {
            var students = JSON.parse(data);
            var student = students["Student" + req.params.id];
            if (student) {
                res.json(student);
            } else {
                res.status(404).send({ error: "Student not found" });
            }
        }
    });
});


app.get('/studentinfo', function (req, res) {
    res.sendFile('StudentInfo.html', { root: __dirname });
});


app.post('/submit-data', function (req, res) {

    var name = req.body.firstName + ' ' + req.body.lastName;
    var age = req.body.myAge;
    var gender = req.body.gender;
    var qualifications = req.body.Qual;


    console.log(req.body);


    res.json({
        status: true,
        message: "Form Details",
        data: {
            name: name,
            age: age,
            gender: gender,
            qualifications: qualifications
        }
    });
});


app.listen(5001, function () {
    console.log("Server is running on port 5001");
});