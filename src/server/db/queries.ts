import "server-only";
import { db } from ".";
import { auth } from "@clerk/nextjs/server";
import { NotNull } from "drizzle-orm";
 
export async function getMyImages(){
    const user= auth()

    if (!user.userId) throw new Error("Unauthorized");

    const images = await db.query.images.findMany({
        where:(model,{eq})=>eq(model.userId,user.userId),
      orderBy:(model,{desc})=>desc(model.id)
    })
    return images
}

export async function getImageById(imageId:number){
   const user = auth()
   if(!user.userId) throw new Error("Unauthorized User")
  const image = await db.query.images.findFirst({
    where:(model,{eq})=>eq(model.id,imageId)
  })
  if(!image) throw new Error("No Image found")
  if(image.userId!= user.userId)throw new Error("Unauthorized");
  return image;

}
