import Sequelize from "sequelize";

import { sequelize } from "../Database.js";

export const Product_Module = sequelize.define("product",{
    product_id : {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true

    },
    product_name:{
        type : Sequelize.STRING,
        allowNull: false

    },
    product_price:{
        type: Sequelize.INTEGER,
        allowNull:false

    },
    sub_product_id :{
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
            model:"sub_category",
            key:"sub_category_id"
        }

    },
    brand_id:{
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{
            model:"brand",
            key:"Brand_id"
        }
    }
},{
    freezeTableName : true

})