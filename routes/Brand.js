import express from "express";
import { Router } from "express";
import { sequelize } from "../Database.js";
// import { Brand_Module } from "../Modules/Brand.js";
import { Brand_Module } from "../Modules/Brand.js";
import { addbrand, deletebrand, getallbrand, getbyid, updatebrand } from "../controllers/Brand_controllers.js";

const router = express.Router()

router.get("/",async(req,res)=>{
    try{
        const result =await getallbrand()
       res.send( result)


    }catch(err){

        console.log("err on router brand",err)
    }


     }
     )
router.get("/by/:id",async(req,res)=>{
    try{
        const id = req.params.id
        const data = await getbyid(id)
   
        res.send(data)

    }catch(err){

        console.log("err on router brand",err)
    }


     })

     router.post("/add",async(req,res)=>{
        try{
        const Brand_Name = req.body.Brand_Name
        const result = await addbrand(Brand_Name)
            res.send(result)


        }catch(err){
            console.log("err on post of brand",err)
        }


     })
     router.put("/update/:id",async(req,res)=>{
        try{
            const id = req.params.id;
            const Brand_Name = req.body.Brand_Name
            const result = await updatebrand(id,Brand_Name)
          
            res.send(result)
        }catch(err){
            console.log("err on update brand",err)
        }
     })


     router.delete("/delete/by/:id",async(req,res)=>{
        try{
        const id = req.params.id
        const result = deletebrand(id)
            res.send(result)


        }catch(err){
            console.log("err on post of brand",err)
        }

     })















































    //   Brand_Module.findAll().then((data)=>{
    //     console.log("data from brand rout ",data)
    //     res.send("ok")
    //      }).catch((err)=>console.log("err on router brand",err))
  
// res.send("done")



        
    //    await Brand_Module.create({
    //         Brand_Name : Brand_Name
    //     }).then((data)=>res.redirect("/"))
    //     .catch(err=> console.log("err on brand add",err))









export const BrandRouter = router ;