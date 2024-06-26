import { getImageById } from "~/server/db/queries";
import { Modal } from "./modal";
import FullImagePage from "~/app/components/full-image-pages";

 
export default async function PhotoModal({
    params:{id:photoId},
}:{
    params:{id:string};
}
){  
  

    return <Modal>
       <FullImagePage photoId={photoId}/>
    </Modal>
}