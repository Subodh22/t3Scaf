import { getImageById } from "~/server/db/queries";
 
import FullImagePage from "~/app/components/full-image-pages";

 
export default async function PhotoPage({
    params:{id:photoId},
}:{
    params:{id:string};
}
){  
    const vartoNumId = Number(photoId);
    if (Number.isNaN(vartoNumId)) throw new Error("Invalid Photo Id")
   

    return  <FullImagePage id={vartoNumId}/>
     
}