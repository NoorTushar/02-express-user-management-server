const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;

// middleware:
app.use(cors());
app.use(express.json());

const users = [
   { id: 1, name: "Tushar", email: "tushar@tushar.com" },
   { id: 2, name: "Naruto", email: "naruto@naruto.com" },
   { id: 3, name: "Messi", email: "messi@messi.com" },
];

app.get("/", (req, res) => {
   res.send("Server is running successfully");
});

app.get("/users", (req, res) => {
   res.send(users);
});

app.post("/users", (req, res) => {
   console.log("post request hitting from server side");
   console.log(req.body);
   const newUser = req.body;
   newUser.id = users.length + 1;
   users.push(newUser);
   res.send(newUser);
});

app.listen(port, () => {
   console.log(`app running at port: ${port}`);
});
