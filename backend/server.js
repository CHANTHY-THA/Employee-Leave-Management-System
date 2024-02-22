const express = require('express');
const app = express();
const cors = require('cors')
const userRoutes = require("./routes/users");
const departmentRoutes = require("./routes/departments");
const leaveRoutes = require('./routes/leave');
const authRoutes = require("./routes/auth");
const leaveTypeRoutes = require('./routes/leave-type');
const preDataRoutes = require('./routes/pre-data');
const authMiddleware = require('./middlewares/authMiddleware');
app.set("view engine", "ejs");

app.use(express.json());
var corsOptions = {
  origin: 'http://localhost:3000'
  // origin: "*"
};
app.use(cors(corsOptions));

// app.use("/api/user", userRoutes);
app.use("/api/department", authMiddleware, departmentRoutes);
app.use("/api/leave", authMiddleware, leaveRoutes);
app.use("/api/leavetype", authMiddleware, leaveTypeRoutes);
app.use("/api/predata", authMiddleware, preDataRoutes);
app.use("/api/user", authMiddleware, userRoutes);
app.use("/api/auth", authRoutes);
// app.use("/api", require("./routes/auth"));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Application listening at http://localhost:${PORT}`);
});