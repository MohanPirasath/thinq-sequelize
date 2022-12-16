import Sequelize from "sequelize";
import { sequelize } from "../Database.js";

export const Category_Module = sequelize.define("category",{
    category_id :{
        type: Sequelize.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement: true
    },
    category_name :{
        type:Sequelize.STRING,
        allowNull:false
    },

},{
    freezeTableName: true
});


