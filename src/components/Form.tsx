'use client';
import Image from 'next/image';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import accordIcon from '/public/icon.svg'
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import ErrorMessage from './ErrorMessage';
import { FormProps } from '@/types/FormProps';
import FormField from './FormField';
import loginOrSignup from '@/axios/users/loginOrSignup';

const Form = ({ fields }: FormProps) => {
    const router = useRouter()
    const pathname = usePathname()
    const isLoginPage = pathname === '/login'

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [errorMessage, setErrorMessage] = useState('')

    const onSubmit = (data: any, event: any) => {
        event.preventDefault()
        loginOrSignup({ isLoginPage, data, router, setErrorMessage })
    }
    const onError = (errors: any) => console.log("Errors: ", errors);

    return (
        <form
            className='flex flex-col p-4 h-full justify-center'
            onSubmit={handleSubmit(onSubmit, onError)}
        >
            <div className="ml-auto flex gap-2 items-center">
                <span className='text-slate-500'>
                    {isLoginPage ? "Don't have an account" : 'Already have an account?'}
                </span>
                <Link
                    className='rounded-lg text-slate-500 border-2 border-gray p-2'
                    href={`${isLoginPage ? '/signup' : '/login'}`}
                >
                    {isLoginPage ? 'Signup' : 'Login'}
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
                {fields.map((field: any, index: number) => {
                    return (
                        <FormField
                            key={index}
                            label={field.label}
                            register={register}
                            errors={errors}
                            validation={field.validation}
                            inputType={field.inputType}
                        />
                    )
                })
                }
                <button className='hover:drop-shadow-xl rounded-xl text-white bg-violet-700 p-4'>
                    {isLoginPage ? 'Login' : 'Signup'}
                </button>
            </div>
        </form>
    )
}

export default Form