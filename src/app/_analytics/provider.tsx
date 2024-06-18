 
'use client'
import { useAuth, useUser } from '@clerk/nextjs'
import { auth } from '@clerk/nextjs/server'
import { userInfo } from 'os'
import posthog from 'posthog-js'
import { PostHogProvider, usePostHog } from 'posthog-js/react'
import React, { useEffect } from 'react'

if (typeof window !== 'undefined') {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
    
        api_host: "/ingest",
        ui_host: 'https://us.posthog.com',
        person_profiles: 'identified_only'
     // or 'always' to create profiles for anonymous users as well
  })
}
export function CSPostHogProvider({ children }:{children:React.ReactNode}) {
    return <PostHogProvider client={posthog}>
      <PostHogAuthWrapper>{children}</PostHogAuthWrapper>   
        </PostHogProvider>
}
function PostHogAuthWrapper({children}:{children:React.ReactNode})
{   
    const auth= useAuth();
     
    const userinfo = useUser();
    useEffect(()=>
        {
            if(userinfo.user){
                posthog.identify(userinfo.user.id,{
                    email:userinfo.user.emailAddresses[0]?.emailAddress,
                })
            }else if(!auth.isSignedIn){
                posthog.reset()
            }
        },[auth,userInfo])

        return children
}