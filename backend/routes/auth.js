const authRoutes = require("express").Router();
const userData = require("../user-data");
const bcrypt = require('bcrypt');
const jwtLib = require("../libs/jwt");
const authMiddleware = require("../middlewares/authMiddleware");
const { PrismaClient } = require("@prisma/client");
const dayjs = require('dayjs');
const prisma = new PrismaClient()
authRoutes.post("/login", async (req, res) => {
    const { username, password } = req.body || {};
    console.log("🚀 ~ authRoutes.post ~ req.body:", req.body)

    if (!username || !password) {
        return res.status(400).send({ message: "Username and password required" });
    }

    const foundUser = await prisma.user.findFirst({ where: { username: username } });
    console.log("🚀 ~ authRoutes.post ~ foundUser:", foundUser)

    // console.log({password, foundPassword: foundUser.password});
    if (!foundUser || !bcrypt.compareSync(password, foundUser.password)) {
        return res.status(401).send({ statusCode: 401, message: "User or password incorrect" });
    }

    const result = {
        token: jwtLib.generateToken(foundUser.id),
        data: {
            id: foundUser.id,
            username: foundUser.username,
            role: foundUser.role
        }
    }

    return res.status(200).send({ statusCode: 200, result: result, message: "Login successful" });
})

authRoutes.post("/profile", authMiddleware, async (req, res) => {
    loginId = req.userId;
    console.log("userId", loginId);
    const foundUser = await prisma.user.findUnique({ where: { id: loginId } });
    console.log("🚀 ~ authRoutes.post ~ foundUser:", foundUser)
    const dateFormat = dayjs(foundUser.created);
    foundUser.created = dateFormat.format("DD-MMM-YYYY")
    console.log("🚀 ~ authRoutes.post ~ foundUser:", foundUser)
    const { password: _, ...noPassUserData } = foundUser;

    return res.status(200).send({ result: noPassUserData, message: "found user" });
})

module.exports = authRoutes