import express from "express";
import Sequelize from "sequelize";
import dotenv from "dotenv";
import { BrandRouter } from "./routes/Brand.js";
import { sequelize } from "./Database.js";
import { CategoryRouter } from "./routes/category.js";
import { ProductRouter } from "./routes/products.js";
import { Sub_CategoryRouter } from "./routes/sub_category.js";




const app = express();

 app.use(express.json())


 const PORT = 5000

//  export 

sequelize.authenticate().then(()=>{
    console.log('Connection has been established successfully.')
    sequelize.sync({alter:true}).then(()=>{
        console.log("database sync")
        }).catch(err=>console.log(err))
}).
catch((err)=>console.log("err da",err))

dotenv.config();

app.get("/", function (req, res) {
    res.send("WELCOME TO E-COMMERS WEBSIT");
  });





  app.use('/products',ProductRouter)
  app.use('/subcategory',Sub_CategoryRouter)
  app.use('/category',CategoryRouter)
  app.use("/brand", BrandRouter)
app.listen(PORT,()=>console.log("port started in 5000"))
