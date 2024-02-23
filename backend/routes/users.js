const userRoutes = require("express").Router();
// const userData = require("../user-data");
const jwtLib = require("../libs/jwt");
const bcrypt = require('bcrypt');
const salf = 10;
const authMiddleware = require("../middlewares/authMiddleware");
const { PrismaClient } = require('@prisma/client');
const dayjs = require('dayjs');
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');


const prisma = new PrismaClient()

class Response {
  constructor(response) {
    this.res = response;
    this.status = 200;
    this.message = "Sucessful request";
  }

  setMessage(message) {
    this.message = message;
    return this;
  }

  setStatusCode(statusCode) {
    this.status = statusCode;
    return this;
  }

  setResult(data) {
    this.result = data;
    return this;
  }

  send() {
    this.res
      .status(this.status)
      .send({ data: this.result, message: this.message });
  }
}

userRoutes.get("/all", async (req, res) => {
  console.log("herere")
  try {
    let result = [];
    const employees = await prisma.user.findMany({ orderBy: { id: 'desc' }, where: { role: "employee" } });
    console.log("🚀 ~ userRoutes.get ~ employees:", employees)
    employees.forEach(element => {
      console.log("🚀 ~ userRoutes.get ~ element:", element)
      const dateFormat = dayjs(element.created);
      element.created = dateFormat.format("DD-MMM-YYYY h:mm A");
      element.profile = `http://localhost:8080/api/image/${getProfile(element.profile)}`
      result.push(element);
    });
    res.status(200).send({ id: 1, message: "Transaction completed.", data: result });
  } catch (err) {
    console.log("Error Message: " + err.message);
    res.status(500).send({ id: 0, message: "Something went wrong." })
  }

});

function getProfile(profile) {

  if (profile === null) {
    return "profile.png";
  } else {
    return profile;
  }
}




userRoutes.get("/", authMiddleware, async (req, res) => {
  const users = await prisma.user.findMany()
  return new Response(res).setResult(users).send();
  // res.send({ "result" : userData, "message": "success" });
});
userRoutes.get("/:userId", authMiddleware, async (req, res) => {
  const { userId } = req.params || {};

  try {
    const userIdNumber = parseInt(userId);
    if (isNaN(userIdNumber)) {
      return res.status(400).send("User ID must be a number!");
    }
    const foundUser = await prisma.user.findUnique({ where: { id: userIdNumber } });

    if (!foundUser) {
      return res.status(404).send({ message: "User not found" });
    }

    return res.status(200).send({ result: foundUser, message: "found user" });
  } catch (error) {
    res.status(500).send({ message: "Unknown error" });
    return;
  }
});
// userRoutes.post("/", async (req, res) => {
//   const { username, password } = req.body || {};

//   if (!username || !password) {
//     res.status(400).send({ message: "Username and Password are required!" });
//     return;
//   }

//   const newUser = { username, password: bcrypt.hashSync(password, salf) };
//   // userData.push(newUser);
//   const dbUser =  await prisma.user.create({ data: newUser });
//   res.send({ message: "Create a user!", result: dbUser });
// });

userRoutes.post("/", async (req, res) => {
  const user = req.body || {};
  // console.log("🚀 ~ userRoutes.post ~ user:", user)
  user.departmentId = 1;
  user.role = "employee";
  user.isActive = true;

  try {
    if (
      !user.firstname ||
      !user.lastname ||
      !user.username ||
      !user.gender ||
      !user.email ||
      !user.password ||
      !user.phonenumber ||
      !user.position ||
      !user.country ||
      !user.city ||
      !user.address
    ) {
      res.status(400).send({ id: 0, message: "All Input fields are required !" });
      return;
    }
    const username = await prisma.user.findFirst({ where: { username: user.username } });
    const email = await prisma.user.findFirst({ where: { email: user.email } });
    if (username) {
      return res.status(400).send({ id: 0, message: "Username already exist. " });
    }
    if (email) {
      return res.status(400).send({ id: 0, message: "Email already exist. " });
    }

    user.password = bcrypt.hashSync(user.password, salf)

    await prisma.user.create({
      data: user
    });
    return res.status(201).send({ id: 1, message: "Employee is created. " });


  } catch (err) {

    console.log("Error Message : " + err.message);
    return res.status(500).send({ id: 0, message: "Something went wrong." });
  }

})

userRoutes.put("/", async (req, res) => {
  // const user = req.body || {};
  const id = req.body.id;
  const user = req.body;
  user.departmentId = parseInt(user.departmentId);
  delete user.id;
  delete user.created;
  delete user.updated;
  // user.remove(created)
  // user.remove(id)
  try {
    if (
      !user.firstname ||
      !user.lastname ||
      !user.username ||
      !user.gender ||
      !user.email ||
      !user.password ||
      !user.phonenumber ||
      !user.position ||
      !user.country ||
      !user.city ||
      !user.address
    ) {
      res.status(400).send({ id: 0, message: "All Input fields are required !" });
      return;
    }
    delete user.password;
    const userFound = await prisma.user.findUnique({ where: { id: id } });
    if (!userFound) {
      return res.status(404).send({ id: 0, message: "No data found!" });
    }
    const usernameExist = await prisma.user.findFirst({ where: { username: user.username } });
    const emailExist = await prisma.user.findFirst({ where: { email: user.email } });

    if (usernameExist && usernameExist?.id != id) {
      return res.status(400).send({ id: 0, message: "Username already exist. " });
    }
    else if (emailExist && emailExist?.id != id) {
      return res.status(400).send({ id: 0, message: "Email already exist. " });
    } else {
      // user.password = bcrypt.hashSync(user.password, salf)
      await prisma.user.update({
        where: { id: id },
        data: user
      });
      return res.status(200).send({ id: 1, message: "User updated successfully." })

    }
    // console.log("department : " + foundDepartment);
  } catch (err) {
    console.log("Error Message : " + err.message);
    return res.status(500).send({ id: 0, message: "Something went wrong." });
  }
});

userRoutes.delete("/:id", async (req, res) => {
  const { id } = req.params || {};
  const user_id = parseInt(id);
  if (isNaN(user_id)) {
    return res.status(400).send("Department ID must be a number!");
  }
  try {
    const foundUser = await prisma.user.findUnique({ where: { id: user_id } });
    if (!foundUser) {
      return res.status(404).send({ message: "No data found." });
    } else {
      await prisma.user.delete({ where: { id: user_id } })
      return res.status(200).send({ id: 1, message: "Transaction completed." })
    }
  } catch (err) {
    console.log("Error Message: " + err.message);
    return res.status(500).send({ id: 0, message: "Something went wrong." })
  }
});

userRoutes.put("/changePassword", authMiddleware, async (req, res) => {
  // const user = req.body || {};
  const id = req.userId;
  // const { id } = req.params || 0;
  const passwordDto = req.body;
  // user.remove(created)
  // user.remove(id)

  try {
    if (
      !passwordDto.newPassword ||
      !passwordDto.confirmPassword ||
      !passwordDto.currentPassword
    ) {
      res.status(400).send({ statusCode: 400, message: "All Input fields are required !" });
      return;
    }

    if (passwordDto.newPassword != passwordDto.confirmPassword) {
      res.status(400).send({ statusCode: 400, message: "New Password & Confirm Password must be the same !" });
    }

    const userFound = await prisma.user.findUnique({ where: { id: id } });
    console.log("🚀 ~ userRoutes.put ~ userFound:", userFound)

    if (!userFound) {
      return res.status(400).send({ statusCode: 400, message: "No data found!" });
    }

    if (!bcrypt.compareSync(passwordDto.currentPassword, userFound.password)) {
      return res.status(400).send({ statusCode: 400, message: "Current password incorrect" });
    }
    // user.password = bcrypt.hashSync(user.password, salf)
    await prisma.user.update({
      where: { id: id },
      data: { password: bcrypt.hashSync(passwordDto.newPassword, salf) }
    });
    return res.status(201).send({ statusCode: 201, message: "Password updated successfully." })


    // console.log("department : " + foundDepartment);
  } catch (err) {
    console.log("Error Message : " + err.message);
    return res.status(500).send({ statusCode: 400, message: "Something went wrong." });
  }
});
const imagePath = "C:/Users/prosn/Desktop/Employee-Leave-Management-System/backend/images/"


const storage = multer.diskStorage({

  destination: (req, file, cb) => {
    console.log("🚀 ~ file:", file)
    cb(null, 'images/')
  },
  filename: (req, file, cb) => {

    let filename = uuidv4().slice(-12);
    filename = `${filename}_${file.originalname}`
    // `${file.fieldname}_dateVal_${Date.now()}_${file.originalname}`)
    cb(null, filename)
  },
})

const upload = multer({ storage: storage })


userRoutes.post("/proileImage", upload.single('file'), async (req, res) => {
  console.log("🚀 ~ userRoutes.post ~ req1234:", req.file.filename)
  const id = req.userId;
  const filename = req.file.filename;

  // const user = req.body || {};

  // user.remove(created)
  // user.remove(id)

  try {





    // const userFound = await prisma.user.findUnique({ where: { id: id } });
    // console.log("🚀 ~ userRoutes.put ~ userFound:", userFound)

    // if (!userFound) {
    //   return res.status(400).send({ statusCode: 400, message: "No data found!" });
    // }

    // if (!bcrypt.compareSync(passwordDto.currentPassword, userFound.password)) {
    //   return res.status(400).send({ statusCode: 400, message: "Current password incorrect" });
    // }
    // // user.password = bcrypt.hashSync(user.password, salf)
    await prisma.user.update({
      where: { id: id },
      data: { profile: filename }
    });
    return res.status(201).send({ statusCode: 201, message: "Profile updated successfully." })


    // console.log("department : " + foundDepartment);
  } catch (err) {
    console.log("Error Message : " + err.message);
    return res.status(500).send({ statusCode: 400, message: "Profile update failed." });
  }
});



module.exports = userRoutes;
