export interface FormFieldProps {
    label: string;
    validation: FieldsValidation;
    inputType: string;
    register: any;
    errors: any
}

interface FieldsValidation {
    required: string,
    minLength?: { value: number, message: string },
    maxLength?: { value: number, message: string },
    pattern?: { value: RegExp, message: string },
}