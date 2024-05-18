import React, { useState } from 'react'
import Input from './input'

const Form = () => {
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [phone, setphone] = useState('')
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !email || !phone) {
            alert('The form is empty')
            return
        } else {
            alert(
                `Name: ${name}, Email: ${email} Phone Number: ${phone}`)
            console.log(
                `Name: ${name}, Email: ${email}, Phone Number: ${phone}`
            )
            setname('')
            setemail('')
            setphone('')
        }
    }
    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <Input placeholder={'Enter your name'} type={'text'} name={'name'} value={name} onChange={setname} />
            <Input placeholder={'Enter your email'} type={'email'} name={'email'} value={email} onChange={setemail} />
            <Input placeholder={'Enter your phone number'} type={'number'} name={'phone'} value={phone} onChange={setphone} />
            <button type='submit'>Submit</button>
        </form>
    )
}

export default Form