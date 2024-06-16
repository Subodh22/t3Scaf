import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export function TopNav(){
    return(
      <nav className="flex w-full items-center justify-between p-4 font-semibold text-xl border-b">
        <div>Gallery</div>
        <div>
            <SignedOut>
                <SignInButton/>
            </SignedOut>
            <SignedIn>
                <UserButton/>
            </SignedIn>
             </div>
      </nav>
    )
  }