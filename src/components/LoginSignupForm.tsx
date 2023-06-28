'use client';
import Image from 'next/image';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import accordIcon from '/public/icon.svg'

import Link from 'next/link';
import signupData from '@/data/signupData';
import FormInput from './FormInput';
import { usePathname, useRouter } from 'next/navigation';
import loginData from '@/data/loginData';
import axios from 'axios';
import ErrorMessage from './ErrorMessage';


const LoginSignupForm = () => {
    const router = useRouter()
    const pathname = usePathname()
    const isLoginPage = pathname === '/login'
    const inputFieldsList = isLoginPage ? loginData : signupData

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [errorMessage, setErrorMessage] = useState('')

    const onSubmit = (data: any, event: any) => {
        event.preventDefault()

        axios.post(
            `${process.env.NEXT_PUBLIC_API_URL}/api/users/${isLoginPage ? 'login' : 'signup'}`,
            data,
            { withCredentials: true } // for setting cookies
        ).then(response => {
            console.log("Response: ", response)
            router.push('/')
        }).catch(error => {
            console.log("Error: ", error)
            setErrorMessage(error.response.data.message)
        })
    }
    const onError = (errors: any) => console.log("Errors: ", errors);

    return (
        <form
            className='flex flex-col p-4 h-full justify-center'
            onSubmit={handleSubmit(onSubmit, onError)}
        >
            <div className="ml-auto flex gap-2 items-center">
                <span className='text-slate-500'>
                    {pathname === '/login' ? "Don't have an account" : 'Already have an account?'}
                </span>
                <Link
                    className='rounded-lg text-slate-500 border-2 border-gray p-2'
                    href={`${pathname === '/login' ? '/signup' : '/login'}`}
                >
                    {pathname === '/login' ? 'Signup' : 'Login'}
                </Link>
            </div>
            {errorMessage !== '' && <ErrorMessage text={errorMessage} />}
            <div className="flex-1 flex flex-col justify-center">
                <div className='flex items-center pb-5 gap-5'>
                    <Image
                        src={accordIcon}
                        alt='Accord icon'
                        width={100}
                        height={100}
                    />
                    <div>
                        <h1 className='text-xl font-black'>Welcome to Accord</h1>
                        <h2 className='text-slate-500 text-base'>Register your account</h2>
                    </div>
                </div>
                {inputFieldsList.map((data: any, index: number) => {
                    return (
                        <FormInput
                            key={index}
                            label={data.label}
                            register={register}
                            errors={errors}
                            validation={data.validation}
                            inputType={data.inputType}
                        />
                    )
                })
                }
                <button className='hover:drop-shadow-xl rounded-xl text-white bg-violet-700 p-4'>
                    {pathname === '/login' ? 'Login' : 'Signup'}
                </button>
            </div>
        </form>
    )
}

export default LoginSignupForm