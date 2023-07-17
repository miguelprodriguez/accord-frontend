'use client';
import FormContainer from '@/components/FormContainer'
import loginFields from '@/data/loginFields'
import React from 'react'

function Login() {
  return <FormContainer fields={loginFields} />
}

export default Login