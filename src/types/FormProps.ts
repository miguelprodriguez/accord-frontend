import { FormFieldProps } from "./FormFieldProps";

type FieldsNoHookFormProps = Omit<FormFieldProps, "register" | 'errors'>

export interface FormProps {
    fields: FieldsNoHookFormProps[]
}