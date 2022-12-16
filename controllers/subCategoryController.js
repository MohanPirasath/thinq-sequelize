import { sub_category_Module } from "../Modules/subcategory.js";

export async function getallsubcategory(){
    try{
      const data = await  sub_category_Module.findAll()
      return JSON.stringify(data)

   }catch(err){

       console.log("err on router category",err)
   }
}
export async function getsubcategorybyid(id){
    try{
        const data = await sub_category_Module.findAll({
            where : {
                sub_category_id  : id
            }
        })
      return JSON.stringify(data)

   }catch(err){

       console.log("err on router category",err)
   }
}

export async function addsubcategory(sub_category,category_id){
    try{
       const data=  await sub_category_Module.create({
        category_id : category_id,
        sub_category_name : sub_category
    })
   //    const data1 =  JSON.stringify(data)
       // console.log("data from brand rout ",data)
      return JSON.stringify(data)

   }catch(err){

       console.log("err on router brand",err)
   }
}


export async function updatesubcategory(id,sub_category_name,category_id){
    try{
        const data = await sub_category_Module.update({
            sub_category_name,
            category_id
        },{
            where : {
            sub_category_id  : id
            }
        })
   //    const data1 =  JSON.stringify(data)
       // console.log("data from brand rout ",data)
      return JSON.stringify(data)

   }catch(err){

       console.log("err on router brand",err)
   }
}


export async function deletesubcategory(id){
    try{
       const data=await sub_category_Module.destroy({
        where:{
            sub_category_id  : id
        }
    })
   //    const data1 =  JSON.stringify(data)
       // console.log("data from brand rout ",data)
      return JSON.stringify(data)

   }catch(err){

       console.log("err on router brand",err)
   }
}
