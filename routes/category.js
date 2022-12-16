import express from "express";
import { addcategory, deletecategory, getallcategory, getcategorybyid, updatecategory } from "../controllers/categoryController.js";
// import {Category_Module} from "../Modules/category.js"
// import Category_Module


const router = express.Router()


router.get("/",async(req,res)=>{
    try{
        const data = await getallcategory()
        res.send(data)
    }catch(err){
        console.log("err on category get",err)
    }
})

router.get("/by/:id",async(req,res)=>{
    try{
        const id = req.params.id
        const data = await getcategorybyid(id)
        res.send(data)

    }catch(err){
        console.log("err on categ get by id",err)
    }
})

router.post("/add",async(req,res)=>{
    try{
        const Category_Name = req.body.Category_Name
        const data = await addcategory(Category_Name)
        res.send(data)


    }catch(err){
        console.log("eer on category add", err)
    }
})

router.put("/update/:id",async(req,res)=>{
    try{
        const id = req.params.id
        const category_name = req.body.category_name
        const result = updatecategory(id,category_name)
        res.send(result)
    }
    catch(err){
        console.log("err on category update",err)
    }
   
})

router.delete("/delete/by/:id",async(req,res)=>{
    try{
        const id = req.params.id
        const data = await deletecategory(id)
        res.send(data)
    }catch(err){
        console.log("err delete in category",err)
    }
})


export const CategoryRouter = router ;