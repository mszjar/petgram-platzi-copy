import React, { Fragment, useState } from "react";
import { useInputValue } from "../../hooks/useInputValue";
import { Error, Form, Input, Button, Title } from '../UserForm/styles';

export const UserForm = ({ error, onSubmit, title }) => {
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
            <Title>{title}</Title>
            <Form onSubmit={handleSubmit}>
                <Input placeholder="Email" value={email.value} onChange={email.onChange} />
                <Input placeholder="Password" type= 'password' value={password.value} onChange={password.onChange} />
                <Button>{title}</Button>
            </Form>
            {error && <Error>{error}</Error>}
        </Fragment>
    )
}