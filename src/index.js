const express = require("express");
require("./db/mongoose");
const userRouter = require("../src/routers/user");
const taskRouter = require("../src/routers/task");

const app = express();
const port = process.env.PORT || 3000;

//used to parse the data
app.use(express.json());

//User router
app.use(userRouter);
//Task router
app.use(taskRouter);

// Server listening
app.listen(port, () => {
  console.log("Server is running on port: " + port);
});
