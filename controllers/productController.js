import { Product_Module } from "../Modules/product.js"

export async function getallproducts(){
    try{
      const data = await  Product_Module.findAll()
      return JSON.stringify(data)

   }catch(err){

       console.log("err on router category",err)
   }
}
export async function getproductbyid(id){
    try{
        const data = await Product_Module.findAll({
            where: {
                product_id : id
            }
        })
      return JSON.stringify(data)

   }catch(err){

       console.log("err on router category",err)
   }
}

export async function addproduct(product_name, product_price, sub_product_id,brand_id){
    try{
       const data=  await Product_Module.create({
        product_name,
        product_price,
        sub_product_id,
        brand_id
    })
  
      return JSON.stringify(data)

   }catch(err){

       console.log("err on router brand",err)
   }
}


export async function updateproduct(id,product_name, product_price, sub_product_id,brand_id){
    try{
        const data = await Product_Module.update({
            product_name,
             product_price,
              sub_product_id,
              brand_id

        },{
            where : {
                product_id : id
            }
        })
  
      return JSON.stringify(data)

   }catch(err){

       console.log("err on router brand",err)
   }
}


export async function deleteproduct(id){
    try{
       const data=await Product_Module.destroy({
        where :{
            product_id : id
        }
    })
 
      return JSON.stringify(data)

   }catch(err){

       console.log("err on router brand",err)
   }
}
