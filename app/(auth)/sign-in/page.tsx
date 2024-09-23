import SignInForm from '@/components/SignInForm'
import React from 'react'
import { sql } from '@vercel/postgres'

const SignIn = async() => {

    return (
        <div className='form-container'>
            <span className="material-symbols-outlined text-[120px] flex justify-center">account_circle</span>
            <SignInForm />
        </div>
    )
}

export default SignIn