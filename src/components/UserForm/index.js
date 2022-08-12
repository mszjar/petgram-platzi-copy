import React, { Fragment, useState } from "react";
import { useInputValue } from "../../hooks/useInputValue";
import { Error, Form, Input, Button, Title } from '../UserForm/styles';
import { Spinner } from "../../styles/animation";

export const UserForm = ({ error, disabled, onSubmit, title }) => {
    const email = useInputValue('')
    const password = useInputValue('')

    const handleSubmit = (event) => {
        event.preventDefault()
        onSubmit({ 
            email: email.value,
            password: password.value 
        })
    }

    return (
        < Fragment >
            <Form disabled={disabled} onSubmit={handleSubmit}>
                <Title>{title}</Title>
                <Input disabled={disabled} placeholder="Email" value={email.value} onChange={email.onChange} />
                <Input disabled={disabled} placeholder="Password" type= 'password' value={password.value} onChange={password.onChange} />
                <Button disabled={disabled}>{title}</Button>
                {
                    disabled
                        ? <Spinner />
                        : ''
                }
            </Form>
            {error && <Error>{error}</Error>}
        </Fragment>
    )
}