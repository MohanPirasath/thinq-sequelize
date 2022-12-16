
import { Brand_Module } from "../Modules/Brand.js";

export async function getallbrand(){
     try{
       const data = await  Brand_Module.findAll()
       const data1 =  JSON.stringify(data)
        // console.log("data from brand rout ",data)
       return data1

    }catch(err){

        console.log("err on router brand",err)
    }
}
export async function getbyid(id){
     try{
       const data = await  Brand_Module.findAll({where: {
        Brand_id: id
      }})
    //    const data1 =  JSON.stringify(data)
        // console.log("data from brand rout ",data)
       return JSON.stringify(data)

    }catch(err){

        console.log("err on router brand",err)
    }
}
export async function addbrand(Brand_Name){
     try{
        const data=  await Brand_Module.create({
            Brand_Name : Brand_Name
            })
    //    const data1 =  JSON.stringify(data)
        // console.log("data from brand rout ",data)
       return JSON.stringify(data)

    }catch(err){

        console.log("err on router brand",err)
    }
}
export async function updatebrand(id,Brand_Name){
     try{
        const data = await Brand_Module.update(
            {
                Brand_Name : Brand_Name
            },{
                where :{
                      Brand_id: id
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
export async function deletebrand(id){
     try{
        const data=   await Brand_Module.destroy({
            where :{
             Brand_id : id
            }
             })
    //    const data1 =  JSON.stringify(data)
        // console.log("data from brand rout ",data)
       return JSON.stringify(data)

    }catch(err){

        console.log("err on router brand",err)
    }
}


