import { Category_Module } from "../Modules/category.js";




export async function getallcategory(){
    try{
      const data = await  Category_Module.findAll()
      return JSON.stringify(data)

   }catch(err){

       console.log("err on router category",err)
   }
}
export async function getcategorybyid(id){
    try{
        const data = await Category_Module.findAll({
            where: {
                category_id : id
            }
        })
      return JSON.stringify(data)

   }catch(err){

       console.log("err on router category",err)
   }
}

export async function addcategory(Category_Name){
    try{
       const data=  await Category_Module.create({
        category_name : Category_Name
    })
   //    const data1 =  JSON.stringify(data)
       // console.log("data from brand rout ",data)
      return JSON.stringify(data)

   }catch(err){

       console.log("err on router brand",err)
   }
}


export async function updatecategory(id,category_name){
    try{
        const data = await Category_Module.update(
            {
                category_name : category_name
            },{
                where : {
                    category_id : id
                }
            }
        )
   //    const data1 =  JSON.stringify(data)
       // console.log("data from brand rout ",data)
      return JSON.stringify(data)

   }catch(err){

       console.log("err on router brand",err)
   }
}


export async function deletecategory(id){
    try{
       const data=await  Category_Module.destroy({
        where :{
            category_id : id
        }
    })
   //    const data1 =  JSON.stringify(data)
       // console.log("data from brand rout ",data)
      return JSON.stringify(data)

   }catch(err){

       console.log("err on router brand",err)
   }
}

