import React from 'react'
import Form from './Form'
import happyPeople from '/public/happy-people.jpg'
import Image from 'next/image'
import { FormProps } from '@/types/FormProps'

const FormContainer = ({ fields }: FormProps) => {
  return (
    <div className="flex justify-center items-center h-full px-8">
      <div className="flex flex-wrap items-stretch justify-center rounded-xl shadow-2xl border-slate-700 min-h-[700px] w-[1080px]">
        <div className="basis-full min-h-full md:basis-1/2">
          <Image
            className="min-h-full w-full object-cover object-center rounded-xl "
            src={happyPeople}
            alt='Happy people'
          />
        </div>
        <div className="basis-full min-h-full md:basis-1/2">
          <Form fields={fields} />
        </div>
      </div>
    </div>
  )
}

export default FormContainer