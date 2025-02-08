const express = require("express");
const bcrypt = require("bcrypt");
const cors = require("cors");
const app = express();
const port = 4000;


app.use(cors());
app.use(express.json());
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get("/", (req, res) => {
  res.send("Backend working fine");
});

app.post("/register", async (req, res) => {
    const { username, password } = req.body;
  
    if (!username || !password) {
      return res
        .status(400)
        .json({ error: "Username and password are required" });
    }
  
    try {
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(password, saltRounds);
      const userDoc = await User.create({ username, password: hashedPassword });
      res.status(201).json({ message: "User registered successfully" });
    } catch (err) {
      console.error("Error registering user:", err);
      if (err.code === 11000) {
        return res.status(400).json({ error: "Username already exists" });
      }
      return res.status(500).json({ error: "Failed to register user" });
    }
  });
  