import SignInForm from '@/components/SignInForm'
import React from 'react'

const SignIn = async() => {

    return (
        <div className='form-container'>
            <span className="material-symbols-outlined text-[120px] flex justify-center">account_circle</span>
            <SignInForm />
        </div>
    )
}

export default SignIn