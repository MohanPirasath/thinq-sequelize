import Sequelize from "sequelize";
import { sequelize } from "../Database.js";
import { Category_Module } from "./category.js";


export const sub_category_Module = sequelize.define("sub_category",{
    sub_category_id:{
        type : Sequelize.INTEGER,
        allowNull :false,
        primaryKey:true,
        autoIncrement:true
    },
    category_id:{
        type: Sequelize.INTEGER,
        allowNull : false,
        references:{
            model : "category",
            key:"category_id",
        } 

    },
    sub_category_name : {
        type : Sequelize.STRING,
        allowNull : false
    }
},{
freezeTableName : true
});

// Category_Module.hasMany(sub_category_Module)


