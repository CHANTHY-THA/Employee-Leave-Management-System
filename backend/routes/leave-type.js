const leaveTypeRoutes = require("express").Router();
const { PrismaClient } = require('@prisma/client');
const e = require("express");
const dayjs = require('dayjs');

const prisma = new PrismaClient()

leaveTypeRoutes.get("/all", async (req, res) => {
    try {
        let result = [];
        const leavetype = await prisma.leaveType.findMany({
            orderBy: { id: 'desc' }
        });
        leavetype.forEach(element => {
            const dateFormat = dayjs(element.created);
            element.created = dateFormat.format("DD-MMM-YYYY h:mm A");
            result.push(element);
        });
        res.status(200).send({ id: 1, message: "Success", data: result });
    } catch (err) {
        console.log("Error Message: " + err.message);
        res.status(500).send({ id: 0, message: "Something went wrong." })
    }
});

leaveTypeRoutes.post("/", async (req, res) => {
    const leaveType = req.body;
    console.log(req.body);
    try {
        const newLeaveType = {
            name: leaveType.name,
            amount: leaveType.amount
        }
        await prisma.leaveType.create({ data: newLeaveType });
        return res.status(201).send({ id: 1, message: "Create leave type is sussesfuly" });

    } catch (err) {
        console.log("Error Message : " + err.message);
        return res.status(500).send({ id: 0, message: "Something went wrong." });
    }


});

leaveTypeRoutes.put("/", async (req, res) => {
    const { id, name, amount } = req.body || {};
    try {
        if (!name) {
            return res.status(400).send({ id: 0, message: "Name is required !" });
        }
        const foundName = await prisma.leaveType.findUnique({ where: { id: id } });
        if (!foundName) {
            return res.status(404).send({ id: 0, message: "No data found!" });
        }
        const checkRecordExist = await prisma.leaveType.findFirst({ where: { name: name } });

        if (checkRecordExist && checkRecordExist?.id != id) {
            return res.status(400).send({ id: 0, message: "Transaction already exist." });
        } else {
            await prisma.leaveType.update({
                where: { id: id },
                data: { name: name, amount: amount }
            });
            return res.status(200).send({ id: 1, message: "Leave Type Updated!" })
        }

    } catch (err) {
        console.log("Error Message : " + err.message);
        return res.status(500).send({ id: 0, message: "Something went wrong." });
    }
})

leaveTypeRoutes.delete("/:id", async (req, res) => {
    const { id } = req.params || {};
    const leavetype_id = parseInt(id);
    if (isNaN(leavetype_id)) {
        return res.status(400).send("Department ID must be a number!");
    }
    try {
        const foundDepartment = await prisma.leaveType.findUnique({ where: { id: leavetype_id } });
        if (!foundDepartment) {
            return res.status(404).send({ message: "No data found." });
        } else {
            await prisma.leaveType.delete({ where: { id: leavetype_id } })
            return res.status(200).send({ id: 1, message: "Deleted" })
        }
    } catch (err) {
        console.log("Error Message: " + err.message);
        return res.status(500).send({ id: 0, message: "Something went wrong." })
    }

})


module.exports = leaveTypeRoutes;