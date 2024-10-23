const express = require("express");
const colors = require('colors');
const cors = require('cors');

require("dotenv").config();
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const connectDB = require('./config/db.js')
const port = process.env.PORT;

const app = express();

// Connect to DB
connectDB();

app.use(cors())

app.use(
  '/graphql', 
  graphqlHTTP({
  schema,
  graphiql: process.env.NODE_ENV === 'development'
}))

app.get("/", (req, res) => {
  res.send("Hello World ");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
});
