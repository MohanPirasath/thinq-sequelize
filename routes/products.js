import express from "express";
import { addproduct, deleteproduct, getallproducts, getproductbyid, updateproduct } from "../controllers/productController.js";
import {Product_Module} from "../Modules/product.js"
 

const router = express.Router()


router.get("/",async(req,res)=>{
    try{
        const data = await getallproducts()
        res.send(data)
    }catch(err){
        console.log("err on product ",err)
    }
    // res.send("product")
})

router.get("/by/:id",async(req,res)=>{
    try{
        const id = req.params.id
        const data =await getproductbyid(id)
        res.send(data)
    }catch(err){
        console.log("err on product get by id",err)
    }
})







router.post("/add",async(req,res)=>{
    try{
        const { product_name, product_price, sub_product_id,brand_id}=req.body

        const data = await addproduct(product_name, product_price, sub_product_id,brand_id)
        res.send(data)
    }catch(err){
        console.log("err on product add",err)
    }
   
})

router.put("/update/:id",async(req,res)=>{
    try{
        const id = req.params.id
        const { product_name, product_price, sub_product_id,brand_id}=req.body
        const data = await updateproduct(id,product_name, product_price, sub_product_id,brand_id)
        res.send(data)

    }catch(err){
        console.log("err on update of products",err)
    }
})


router.delete("/delete/by/:id",async(req,res)=>{
    try{
        const id = req.params.id
        const data = await deleteproduct(id)
        res.send(JSON.stringify(data))
    }catch(err){
        console.log("err on delete products",err)
    }
})












export const ProductRouter = router ;