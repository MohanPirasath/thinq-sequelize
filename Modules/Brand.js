import Sequelize from "sequelize";
// import sequelize from "../index.js"
import { sequelize } from "../Database.js";



  export const Brand_Module = sequelize.define("brand",{
     Brand_id : {
        type: Sequelize.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement: true
     },
     Brand_Name : {
        type: Sequelize.STRING,
        allowNull:false
     }
},{
    freezeTableName: true
});

// module.exports = Brand_Module

