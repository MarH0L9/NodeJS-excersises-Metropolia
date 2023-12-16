const express = require('express');
const mongoose = require('mongoose');
const routes = require("./routes")

const app = express();
app.use(express.json());
app.use('/', routes);

//MongoDB connection
const mongoURL = 'mongodb+srv://marcoviope:TZvcPICt7oOXwVID@cluster0.qpclkuu.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(mongoURL, { dbName: 'moviedb', useNewUrlParser: true , useUnifiedTopology: true});         
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
