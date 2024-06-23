import "server-only";
import { db } from ".";
import { auth } from "@clerk/nextjs/server";
import { NotNull, and, eq } from "drizzle-orm";
import { images } from "./schema";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import analyticsServerClient from "../analytics";
 
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
  if(!image) {redirect("/")}
  if(image.userId!= user.userId)throw new Error("Unauthorized");
  return image;

}

export async function deleteImageById(id:number){
  const user =auth()
  if (!user.userId) throw new Error("Unauthorized");
  await db
    .delete(images)
    .where(and(eq(images.id, id), eq(images.userId, user.userId)));
    analyticsServerClient.capture({
      distinctId:user.userId,
      event:"delete image",
      properties:{
        imageId:id
      }

    })
  // revalidatePath("/")
  redirect("/");
}