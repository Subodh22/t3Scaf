import Link from "next/link";

const mockUrls = [
"https://utfs.io/f/01ece4cc-91c2-43d9-a5c0-e3b54c8ed30e-2vi1s1.png",
"https://utfs.io/f/e7cb0c17-baf9-4754-8aa4-7b117f7c0340-2vi10g.png",
"https://utfs.io/f/5449dbbf-760d-4eab-9dce-04b02bde139f-ec3sdn.png",
"https://utfs.io/f/137b5a64-3a7f-4124-907b-fcd6107becf2-ec3t3f.png"
 
];

const mockData= mockUrls.map((url,index)=>({
  id:index+1,
  url
}))


export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">{
        [...mockData,...mockData,...mockData].map((image)=>(
          <div key={image.id} className="w-48">
            <img src={image.url}/>

          </div>
        ))
        }

      </div>
    
    </main>
  );
}
