import React, { useState } from "react";

const useInputValue = initialValue => {
    const [value, setValue] = useState(initialValue)
    const onChange = e => setValue(e.target.valye)

    return { value, onChange }
}

export const UserForm = ({ onSubmit }) => {
    const email = useInputValue('')
    const password = useInputValue('')

    return <form onSubmit={onSubmit}>
        <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
        <input placeholder="Password" type= 'password' value={password} onChange={e => setPassword(e.target.value)} />
        <button>Iniciar Sesión</button>
    </form>
}