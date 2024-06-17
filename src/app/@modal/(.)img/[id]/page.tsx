import { getImageById } from "~/server/db/queries";

 
export default async function PhotoModal({
    params:{id:photoId},
}:{
    params:{id:string};
}
){  
    const vartoNumId = Number(photoId);
    if (Number.isNaN(vartoNumId)) throw new Error("Invalid Photo Id")
    const image = await getImageById(vartoNumId) 

    return <div>
        <img src={image.url} className="w-96"/>
    </div>
}