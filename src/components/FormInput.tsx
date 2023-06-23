import Image from "next/image"
import { SyntheticEvent, useState } from "react"
import eyeIcon from '/public/eye.svg'
import eyeSlashIcon from '/public/eye-slash.svg'

const FormInput = (
    {
        label, 
        register, 
        errors,
        validation,
        inputType
    }: {
        label: string,
        register: any,
        errors: any,
        validation: any, 
        inputType: string
    }) => {
    const [isPasswordShown, setIsPasswordShown] = useState(false)
    const loweredCaseLabel = label.toLowerCase()

    const handleInputType = () => {
        if (inputType === 'password' && !isPasswordShown) return 'password'
        return 'text'
    }

    const handlePasswordToggle = (event: SyntheticEvent) => {
        event?.preventDefault()
        setIsPasswordShown(isPasswordShown => !isPasswordShown)
    }

    return (
        <div className='pb-4'>
            <label className='pb-2 font-semibold'>{label}</label>
            <div className={
                `
                    border-2 ${errors[loweredCaseLabel] ? 
                        'border-red-700' :
                        'border-slate-500'
                    } 
                    focus-within:border-violet-700 flex rounded-lg gap-2 p-2
                `
            }>
                <input 
                    className='outline-none w-full'
                    {...register(loweredCaseLabel, validation)} 
                    aria-invalid={errors[loweredCaseLabel]} 
                    type={handleInputType()}
                />
                {inputType === 'password' && 
                    <button type="button" onClick={handlePasswordToggle}>
                        {
                            <Image 
                                src={isPasswordShown ? eyeSlashIcon : eyeIcon} 
                                alt={''} 
                            />
                        }
                    </button>
                }
            </div>
             {
                errors[loweredCaseLabel] && 
                <p className='text-red-700 text-sm' role="alert">
                    {errors[loweredCaseLabel].message}
                </p>
            }
        </div>
    )
}

export default FormInput