import express from "express";
import { addsubcategory, deletesubcategory, getallsubcategory, getsubcategorybyid, updatesubcategory } from "../controllers/subCategoryController.js";
import {sub_category_Module} from "../Modules/subcategory.js"


const router = express.Router()


router.get("/",async(req,res)=>{
    try{
        const data = await getallsubcategory()
        res.send(data)

    }catch(err){
        console.log("err on sub_category" , err)
    }
})

router.post("/add",async(req,res)=>{
    try{
        const {sub_category,category_id} = req.body
        const data = await addsubcategory(sub_category,category_id)
        res.send(data)
    }catch(err){
        console.log("err on add sub_category",err)
    }
})

router.get("/by/:id",async(req,res)=>{
    const id = req.params.id
    const data = await getsubcategorybyid(id)
    res.send(data)
})


router.put("/update/:id",async(req,res)=>{
    try{
        const id = req.params.id
        const {sub_category_name,category_id} = req.body
        const data = await updatesubcategory(id,sub_category_name,category_id)
        res.send(data)
    }catch(err){
        console.log("err on update sub category",err)
    }
})





router.delete("/delete/by/:id",async(req,res)=>{
   try{
    const id = req.params.id
    const data = await deletesubcategory(id)
    res.send(data)
    }catch(err){
        console.log("delete in sub_category",err)
    }
})



export const Sub_CategoryRouter = router ;