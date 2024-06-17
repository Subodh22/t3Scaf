import { getImageById } from "~/server/db/queries";
 
export default async function FullImagePage(props:{id:number}
 
){  
     
    const image = await getImageById(props.id) 

    return ( <img src={image.url} className="w-96"/>)
     
}