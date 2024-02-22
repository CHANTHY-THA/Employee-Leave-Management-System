const preDataRoutes = require("express").Router();
const { PrismaClient } = require('@prisma/client');
const e = require("express");
const dayjs = require('dayjs');

const prisma = new PrismaClient()

preDataRoutes.get("/all", async (req, res) => {
    try {
        let result = [];
        const leavetype = await prisma.preData.findMany({
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

preDataRoutes.post("/", async (req, res) => {
    const predata = req.body;
    try {
        const newPredata = {
            criterial: predata.criterial,
            value: predata.value
        }
        await prisma.preData.create({ data: newPredata });
        return res.status(201).send({ id: 1, message: "Create pre data is sussesfuly" });

    } catch (err) {
        console.log("Error Message : " + err.message);
        return res.status(500).send({ id: 0, message: "Something went wrong." });
    }


});

preDataRoutes.put("/", async (req, res) => {
    const { id, criterial, value } = req.body || {};
    try {
        if (!criterial) {
            return res.status(400).send({ id: 0, message: "Name is required !" });
        }
        const foundName = await prisma.preData.findUnique({ where: { id: id } });
        if (!foundName) {
            return res.status(404).send({ id: 0, message: "No data found!" });
        }

        await prisma.preData.update({
            where: { id: id },
            data: { criterial: criterial, value: value }
        });
        return res.status(200).send({ id: 1, message: "Value is Updated!" })

    } catch (err) {
        console.log("Error Message : " + err.message);
        return res.status(500).send({ id: 0, message: "Something went wrong." });
    }
})

preDataRoutes.delete("/:id", async (req, res) => {
    const { id } = req.params || {};
    const pre_id = parseInt(id);
    if (isNaN(pre_id)) {
        return res.status(400).send("Department ID must be a number!");
    }
    try {
        const fountPredata = await prisma.preData.findUnique({ where: { id: pre_id } });
        if (!fountPredata) {
            return res.status(404).send({ message: "No data found." });
        } else {
            await prisma.preData.delete({ where: { id: pre_id } })
            return res.status(200).send({ id: 1, message: "Deleted" })
        }
    } catch (err) {
        console.log("Error Message: " + err.message);
        return res.status(500).send({ id: 0, message: "Something went wrong." })
    }

})


module.exports = preDataRoutes;