'use client';
import FormContainer from '@/components/FormContainer'
import loginData from '@/data/loginData'
import React from 'react'

function Login() {
  return <FormContainer fields={loginData} />
}

export default Login