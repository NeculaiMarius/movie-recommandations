import { ReactNode } from "react";

export default function AuthLayout({ children,}:{children:ReactNode}){
    return(
        <div className='h-[100dvh] flex items-center justify-center pl-8 pr-8'>
            {children}
        </div>
    )
}