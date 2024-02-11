const departmentRoute = require("express").Router();
const { PrismaClient } = require('@prisma/client');
const e = require("express");
const dayjs = require('dayjs');

// import { Department } from "@prisma/client";
const prisma = new PrismaClient()
// let today = dayjs();

departmentRoute.get("/", async (req, res) => {
    try{
        let result = [];
        const departments = await prisma.department.findMany({orderBy:{id:'desc'}});
        departments.forEach(element => {
            const dateFormat = dayjs(element.created);
            element.created = dateFormat.format("DD-MMM-YYYY h:mm A");
            result.push(element);
        });
        res.status(200).send({id:1,message:"Transaction completed.",data:result});
    }catch(err){
        console.log("Error Message: " + err.message);
        res.status(500).send({id:0, message: "Something went wrong."})
    }
    
});

departmentRoute.post("/",async (req,res)=>{
    const dep_name = req.body.departmentName;
    try{
        if(!dep_name){
            res.status(400).send({id: 0, message:"Department name is required !"});
            return;
        }
        const foundDepartment = await prisma.department.findFirst({where:{departmentName:dep_name}});
        if(!foundDepartment){
            await prisma.department.create({ data: {departmentName:dep_name} });
            return res.status(201).send({id:1, message:"Transaction completed. "});
        }else{
            // console.log("department:" + foundDepartment.id)
            return res.status(400).send({id: 0, message: "Transaction already exist. "});
        }
        
    }catch(err){

        console.log("Error Message : " + err.message);
        return res.status(500).send({id: 0, message: "Something went wrong."});
    }
    
    
});

departmentRoute.put("/", async(req,res)=>{
    const {departmentName,id} = req.body || {};
    try{
        if(!departmentName){
            return res.status(400).send({id:0, message:"Department name is required !"});
        }
        const foundDepartment = await prisma.department.findUnique({where:{id:id}});
        if(!foundDepartment){
            return res.status(404).send({id:0, message:"No data found!"});
        }
        const checkRecordExist = await prisma.department.findFirst({where:{departmentName:departmentName}});
        console.log("checkRecordExist : " + checkRecordExist);
        if(checkRecordExist && checkRecordExist?.id != id){
            return res.status(400).send({id: 0, message:"Transaction already exist."});
        }else{
            await prisma.department.update({
                where:{id:id},
                data:{departmentName:departmentName}
            });
            return res.status(200).send({id:1,message:"Transaction completed."})
            
        }
        // console.log("department : " + foundDepartment);
    }catch(err){
        console.log("Error Message : " + err.message);
        return res.status(500).send({id:0,message:"Something went wrong."});
    }
    
})

departmentRoute.delete("/:id", async (req,res)=>{
    const {id} = req.params || {};
    const dep_id = parseInt(id);
    if (isNaN(dep_id)) {
      return res.status(400).send("Department ID must be a number!");
    }
    try{
        const foundDepartment = await prisma.department.findUnique({where:{id:dep_id}});
        if(!foundDepartment){
            return res.status(404).send({ message: "No data found." });
        }else{
            await prisma.department.delete({where:{id:dep_id}})
            return res.status(200).send({id:1, message:"Transaction completed."})
        }
    }catch(err){
        console.log("Error Message: " + err.message);
        return res.status(500).send({id:0, message:"Something went wrong."})
    }
    
})


module.exports = departmentRoute;