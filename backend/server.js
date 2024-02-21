const express = require('express');
const app = express();
const cors = require('cors')
const userRoutes = require("./routes/users");
const departmentRoutes = require("./routes/departments");
const leaveRoutes = require('./routes/leave');
const authRoutes = require("./routes/auth");
app.set("view engine", "ejs");

app.use(express.json());
var corsOptions = {
  origin: 'http://localhost:3000'
  // origin: "*"
};
app.use(cors(corsOptions));

// app.use("/api/user", userRoutes);
app.use("/api/department",departmentRoutes);
app.use("/api/leave",leaveRoutes);
app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
// app.use("/api", require("./routes/auth"));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Application listening at http://localhost:${PORT}`);
});