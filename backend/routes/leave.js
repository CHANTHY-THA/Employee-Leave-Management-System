const leaveRoutes = require("express").Router();
const { PrismaClient } = require('@prisma/client');
const e = require("express");
const dayjs = require('dayjs');

const prisma = new PrismaClient()

leaveRoutes.get("/all", async (req, res) => {
    try {
        let result = [];
        const leave = await prisma.leave.findMany({ 
            orderBy: { id: 'desc'} ,
            include: {
                employee: true,
                leavetype: true
            }
        });
        leave.forEach(element => {
            const dateFormat = dayjs(element.created);
            element.fromDate = dateFormat.format("DD-MMM-YYYY h:mm A");
            element.toDate = dateFormat.format("DD-MMM-YYYY h:mm A");
            element.created = dateFormat.format("DD-MMM-YYYY h:mm A");
            result.push(element);
        });
        res.status(200).send({ id: 1, message: "Transaction completed.", data: result });
    } catch (err) {
        console.log("Error Message: " + err.message);
        res.status(500).send({ id: 0, message: "Something went wrong." })
    }
});

leaveRoutes.post("/", async (req, res) => {
    const leave = req.body;
    try {
        const newLeave = {
            employeeid: leave.employeeid,
            leaveStatusid: leave.leaveStatusid,
            leaveTypeid: leave.leaveTypeid,
            totalLeave: leave.totalLeave,
            fromDate: leave.fromDate,
            toDate: leave.toDate,
            reason: leave.reason
        }
        await prisma.leave.create({ data: newLeave });
        return res.status(201).send({ id: 1, message: "Apply leave is sussesfuly" });

    } catch (err) {
        console.log("Error Message : " + err.message);
        return res.status(500).send({ id: 0, message: "Something went wrong." });
    }

});

// leaveRoutes.put("/", async (req, res) => {
//     const { departmentName, id } = req.body || {};
//     try {
//         if (!departmentName) {
//             return res.status(400).send({ id: 0, message: "Department name is required !" });
//         }
//         const foundDepartment = await prisma.department.findUnique({ where: { id: id } });
//         if (!foundDepartment) {
//             return res.status(404).send({ id: 0, message: "No data found!" });
//         }
//         const checkRecordExist = await prisma.department.findFirst({ where: { departmentName: departmentName } });
//         console.log("checkRecordExist : " + checkRecordExist);
//         if (checkRecordExist && checkRecordExist?.id != id) {
//             return res.status(400).send({ id: 0, message: "Transaction already exist." });
//         } else {
//             await prisma.department.update({
//                 where: { id: id },
//                 data: { departmentName: departmentName }
//             });
//             return res.status(200).send({ id: 1, message: "Transaction completed." })

//         }
//         // console.log("department : " + foundDepartment);
//     } catch (err) {
//         console.log("Error Message : " + err.message);
//         return res.status(500).send({ id: 0, message: "Something went wrong." });
//     }

// })

// leaveRoutes.delete("/:id", async (req, res) => {
//     const { id } = req.params || {};
//     const dep_id = parseInt(id);
//     if (isNaN(dep_id)) {
//         return res.status(400).send("Department ID must be a number!");
//     }
//     try {
//         const foundDepartment = await prisma.department.findUnique({ where: { id: dep_id } });
//         if (!foundDepartment) {
//             return res.status(404).send({ message: "No data found." });
//         } else {
//             await prisma.department.delete({ where: { id: dep_id } })
//             return res.status(200).send({ id: 1, message: "Transaction completed." })
//         }
//     } catch (err) {
//         console.log("Error Message: " + err.message);
//         return res.status(500).send({ id: 0, message: "Something went wrong." })
//     }

// })


module.exports = leaveRoutes;