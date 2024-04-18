const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;

const users = [
   { id: 1, name: "Tushar", email: "tushar@tushar.com" },
   { id: 2, name: "Naruto", email: "naruto@naruto.com" },
   { id: 3, name: "Messi", email: "messi@messi.com" },
];

app.use(cors());

app.get("/", (req, res) => {
   res.send("Server is running successfully");
});

app.get("/users", (req, res) => {
   res.send(users);
});

app.listen(port, () => {
   console.log(`app running at port: ${port}`);
});
