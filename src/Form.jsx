import React, {useState} from 'react'
import useFormValidation from './useFormValidation'


let initialState = {
    name : '',
    email : '',
    password : '',
    confirmPassword : '',
    activeElement : ''
}
const Form = () => {

    let [formData, setFormData] = useState(initialState)

    let {isName, isEmail, isPassword, isConfirmPassword} = useFormValidation(formData)

    const handleChange = event => [
        setFormData(prev => ({...prev, [event.target.name] : event.target.value, activeElement : event.target.name}))
    ]

    const handleSubmit = event => {
        event.preventDefault()
        console.log(formData)
        setFormData(initialState)
    }

  return (
    <form  onSubmit={handleSubmit} className='rounded-lg mt-3 m-auto w-1/2 flex flex-col justify-center items-center bg-sky-500 box-border p-4 '>
        <h1 className='font-bold text-3xl' >Login Page</h1>
        <div className='flex flex-col w-full mb-1' >
            <label className='font-bold text-md mb-1' >Enter your name</label>
            <input className='h-12 rounded-md outline-none ' type="text" placeholder='Enter your name here' name='name' value={formData.name}  onChange={handleChange} />
            <span className={`text-xs mt-1 text-white font-semibold ${'name' == formData.activeElement ? 'block' : 'invisible'}`} >{!isName && 'Name should be greater than 3 letter'}</span>
        </div>
        <div className='flex flex-col w-full mb-1' >
            <label className='font-bold text-md mb-1' >Enter your email id</label>
            <input className='h-12 rounded-md outline-none ' type="email" placeholder='Enter your email id here' name='email' value={formData.email}  onChange={handleChange}/>
            <span className={`text-xs mt-1 text-white font-semibold ${'email' == formData.activeElement ? 'block' : 'invisible'} `} > {!isEmail && 'Not a valid email Id'}</span>
        </div>
        <div className='flex flex-col w-full mb-1' >
            <label className='font-bold text-md mb-1' >Enter your password</label>
            <input className='h-12 rounded-md outline-none ' type="text" placeholder='Enter your password here' name='password' value={formData.password} onChange={handleChange} />
            <span className={`text-xs mt-1 text-white font-semibold ${'password' == formData.activeElement ? 'block' : 'invisible'} `} >{!isPassword && 'Password should be of minimum 8 character'}</span>
        </div>
        <div className='flex flex-col w-full mb-1' >
            <label className='font-bold text-md mb-1' >Confirm password</label>
            <input className='h-12 rounded-md outline-none ' type="text" placeholder='Re-enter your password' name='confirmPassword' value={formData.confirmPassword} onChange={handleChange} />
            <span className={`text-xs mt-1 text-white font-semibold ${'confirmPassword' == formData.activeElement ? 'block' : 'invisible'} `} >{!isConfirmPassword && 'Password does not match the entered password'}</span>
        </div>
        <input className='text-ld border-2 w-2/5 h-10 rounded-lg text-white font-bold hover:text-black hover:bg-white transition ' disabled={!isName && !isEmail && !isPassword && !isConfirmPassword}  type="submit" />
    </form>
  )
}

export default Form