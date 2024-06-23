import { clerkClient } from "@clerk/nextjs/server";
import { Button } from "~/components/ui/button";
import { deleteImageById, getImageById } from "~/server/db/queries";
 
export default async function FullImagePage(props:{photoId:string}
 
){  
    const vartoNumId = Number(props.photoId);
    console.log(vartoNumId)
    if (Number.isNaN(vartoNumId)) throw new Error("Invalid Photo Id")
   
 
    const image = await getImageById(vartoNumId) 
    const uplaoderInfo = await clerkClient.users.getUser(image.userId);

    return (
        <div className="flex h-full w-full min-w-0 "> 
        <div className="flex flex-shrink   justify-center items-center"> 
        <img src={image.url} className=" flex-shrink object-contain"/>
        </div>
        <div className="flex w-48 flex-shrink-0  flex-col border-l gap-2 ">
        <div className=" text-lg text-center p-2 border-b">
            {image.name}
        </div>
        <div className="flex flex-col p-2">
        <span>
            Uploaded By : 
        </span>
        <span>
            {uplaoderInfo.fullName}
        </span>
        </div>
        <div className="flex flex-col p-2">
        <span>
            Created On : 
        </span>
        <span>
         {new Date(image.createdAt).toLocaleDateString()}
        </span>
        <div>
            <form 
            action={async()=>
                {
                    "use server"
                    await deleteImageById(vartoNumId);
                }}
            > 
            <Button variant="destructive">Delete</Button>
            </form>
        </div>
        </div>

        </div>
        </div>
    
    
    )
     
}