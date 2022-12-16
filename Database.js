// import React from 'react'
import dotenv from "dotenv";
import Sequelize from "sequelize";

dotenv.config();


export const sequelize = new Sequelize(process.env.Database,process.env.User_name,process.env.Password,{
    host: process.env.host,
    port: process.env.port,
    dialect: "postgres"
})

// sequelize.sync().then(()=>{
// console.log("database sync")
// }).catch(err=>console.log(err))