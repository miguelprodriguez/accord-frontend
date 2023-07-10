'use client';
import FormContainer from "@/components/FormContainer";
import signupData from "@/data/signupData";

export default function Signup() {
  return <FormContainer fields={signupData} />
}
