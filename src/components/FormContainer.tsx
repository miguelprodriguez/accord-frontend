import React from 'react'
import LoginSignupForm from './LoginSignupForm'
import happyPeople from '/public/happy-people.jpg'
import Image from 'next/image'

const FormContainer = () => {
  return (
    <div className="flex flex-wrap items-stretch justify-center rounded-xl shadow-2xl border-slate-700 min-h-[700px] w-[1080px]">
        <div className="basis-full min-h-full md:basis-1/2">
            <Image 
              className="min-h-full w-full object-cover object-center rounded-xl " 
              src={happyPeople} 
              alt='Happy people' 
            />
        </div>
        <div className="basis-full min-h-full md:basis-1/2">
            <LoginSignupForm />
        </div>
    </div>
  )
}

export default FormContainer