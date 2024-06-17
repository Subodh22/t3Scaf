import { getImageById } from "~/server/db/queries";
import { Modal } from "./modal";
import FullImagePage from "~/app/components/full-image-pages";

 
export default async function PhotoModal({
    params:{id:photoId},
}:{
    params:{id:string};
}
){  
    const vartoNumId = Number(photoId);
    if (Number.isNaN(vartoNumId)) throw new Error("Invalid Photo Id")
   

    return <Modal>
       <FullImagePage id={vartoNumId}/>
    </Modal>
}