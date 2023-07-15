'use client'
import React, { useCallback, useState } from 'react'
import { useForm,SubmitHandler,FieldValues } from 'react-hook-form';

type Variant = 'LOGIN' | 'REGISTER'

const Authform = () => {
    const [variant,setVariant] = useState<Variant>('LOGIN')
    const [isLoading,setisLoading] = useState(false)
    const toggle = useCallback(()=>{
        if(variant==='LOGIN'){
            setVariant('REGISTER')
        }else{
            setVariant('LOGIN')
        }
    },[variant])
    const {
        register,
        handleSubmit,
        formState:{
            errors
        }
    } = useForm<FieldValues>({
        defaultValues:{
            name:'',
            email:'',
            password:''
        }
    })
    const onSubmit : SubmitHandler<FieldValues> = (data)=>{
        setisLoading(true)
    }
  return (
    <div></div>
  )
}

export default Authform