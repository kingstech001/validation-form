import React from "react"

const Input = ({ type, placeholder, name, value, onChange }) => {
    
    return (
        <input
            type={type}
            placeholder={placeholder}
            name={name}
            value={value}
            onChange={(e)=> onChange(e.target.value)}
        />
    )
}

export default Input