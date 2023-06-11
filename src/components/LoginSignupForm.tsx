'use client';
import Image from 'next/image';
import React, { SyntheticEvent } from 'react'
import { useForm } from 'react-hook-form'
import accordIcon from '/public/icon.svg'

import Link from 'next/link';
import signupData from '@/data/signupData';
import FormInput from './FormInput';
import { usePathname } from 'next/navigation';
import loginData from '@/data/loginData';
import axios from 'axios';


const LoginSignupForm = () => {
    const router = usePathname()
    const mappedInput = router === '/login' ? loginData : signupData
    
    const { register, handleSubmit, formState: { errors }} = useForm();

    const onSubmit = (data: any, event: SyntheticEvent) =>{
        event.preventDefault()

        console.log("Data: ", data)
        axios.post(
            `${process.env.API_URL}/api/users/login`,
            data
        ).then(response => {
            console.log("Response: ", response)
        }).catch(error => {
            console.log("Error: ", error)
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
                    {router === '/login' ? "Don't have an account" : 'Already have an account?'}
                </span>
                <Link 
                    className='rounded-lg text-slate-500 border-2 border-gray p-2' 
                    href={`${router === '/login' ? '/signup': '/login'}`}
                >
                   {router === '/login' ? 'Signup': 'Login'}
                </Link>
            </div>
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
                {mappedInput.map((data: any) => {
                    return (
                        <FormInput 
                            label={data.label} 
                            register={register} 
                            errors={errors} 
                            validation={data.validation}
                            inputType={data.inputType}
                        />
                    )})
                }
            <button 
                className='hover:drop-shadow-xl rounded-xl text-white bg-violet-700 p-4' 
                type="submit"
            >
                 {router === '/login' ? 'Login' : 'Signup'}
            </button>
            </div>
        </form>
    )
}

export default LoginSignupForm