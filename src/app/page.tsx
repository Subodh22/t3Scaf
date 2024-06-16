 

import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
 
import { getMyImages } from "~/queries";
 
export const dynamic = "force-dynamic";


async function Images(){
const images = await getMyImages()

 return(
    <div className="flex flex-wrap justify-center gap-4">
       
        {
       images.map((image,index)=>(
          <div key={image.id+"-"+index} className="w-48">
            <div>{image.name}</div>
            <Image 
            src={image.url}
            width={480}
            height={480}
            style={{objectFit:"contain"}}
            alt={image.name}
            />

          </div>
        ))
        }

      </div>
  )

}

export default async function HomePage() {
  
   
  return (
    <main className="">
      <SignedOut>
        <div className="h-full w-full text-2xl text-center">
          Please sign in
        </div>
      </SignedOut>
       <SignedIn>
      <Images/>
       </SignedIn>
    
    </main>
  );
}
