'use client';
import FormContainer from "@/components/FormContainer";
import signupFields from "@/data/signupFields";

export default function Signup() {
  return <FormContainer fields={signupFields} />
}
