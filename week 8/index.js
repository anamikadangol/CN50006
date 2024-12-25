const mongoose = require("mongoose");


const MONGO_URI = "mongodb://localhost:27017/Week8"; 


mongoose.connect(MONGO_URI, { useUnifiedTopology: true, useNewUrlParser: true });

const db = mongoose.connection;


db.on("error", (err) => {
  console.log("Error occurred during connection: " + err);
});

db.once("connected", () => {
  console.log(`Connected to ${MONGO_URI}`);
});


const PersonSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: Number,
  Gender: String,
  Salary: Number,
});


const Person = mongoose.model("Person", PersonSchema, "personCollection");


const doc1 = new Person({
  name: "Jacky",
  age: 36,
  Gender: "Male",
  Salary: 3456,
});

doc1
  .save()
  .then((doc) => {
    console.log("Document added:", doc);
  })
  .catch((err) => {
    console.error(err);
  });


const manyPersons = [
  { name: "Simon", age: 42, Gender: "Male", Salary: 345600 },
  { name: "Neesha", age: 23, Gender: "Female", Salary: 2000 },
  { name: "Mary", age: 27, Gender: "Female", Salary: 5472 },
  { name: "Mike", age: 40, Gender: "Male", Salary: 4520 },
];

Person.insertMany(manyPersons)
  .then(() => {
    console.log("Data insertion successful");
  })
  .catch((error) => {
    console.error(error);
  });


Person.find()
  .limit(5)
  .then((docs) => {
    console.log("Documents (limit 5):", docs);
  })
  .catch((err) => {
    console.error(err);
  });


Person.find({ Gender: "Female", age: { $gt: 25 } })
  .then((docs) => {
    console.log("Filtered Documents (Female, Age > 25):", docs);
  })
  .catch((err) => {
    console.error(err);
  });


Person.countDocuments()
  .then((count) => {
    console.log("Total Document Count:", count);
  })
  .catch((err) => {
    console.error(err);
  });


Person.deleteMany({ age: { $gte: 25 } })
  .then((result) => {
    console.log("Deleted Documents:", result);
  })
  .catch((err) => {
    console.error(err);
  });


Person.updateMany({ Gender: "Female" }, { Salary: 555500 })
  .then((result) => {
    console.log("Updated Documents:", result);
  })
  .catch((err) => {
    console.error(err);
  });