import { useState } from "react"

const useFormValidation = ({name, email, password, confirmPassword}) => {

    console.log('useFormValidation')

    let data = {
        isName : false,
        isEmail : false,
        isPassword : false,
        isConfirmPassword : false
    }

    if(name.length > 3){
        data.isName = true
    }
    if(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-z]{2,}/.test(email)){
        data.isEmail = true
    }
    if(password)
        if(password.length >= 8)
            data.isPassword = true 
            if(confirmPassword)
                if(password == confirmPassword)
                    data.isConfirmPassword = true

    return data
}

export default useFormValidation