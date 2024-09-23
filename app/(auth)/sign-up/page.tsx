import SignUpForm from '@/components/SignUpForm'
import React from 'react'

const SignUp = () => {
    return (
        <div className='form-container '>
            <span className="material-symbols-outlined text-[120px] flex justify-center">account_circle</span>
            <SignUpForm />
        </div>
    )
}

export default SignUp