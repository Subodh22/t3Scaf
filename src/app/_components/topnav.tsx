 
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
 
 
import { SimpleUploadButton } from "./simple-upload-button";

export function TopNav(){
  
    return(
      <nav className="flex w-full items-center justify-between p-4 font-semibold text-xl border-b">
        <div>Gallery</div>
        <div className="flex flex-row gap-4 items-center">
            <SignedOut>
                <SignInButton/>
            </SignedOut>
            <SignedIn>
             <SimpleUploadButton/>
                <UserButton/>
            </SignedIn>
             </div>
      </nav>
    )
  }