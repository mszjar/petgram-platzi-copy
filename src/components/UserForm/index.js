import React, { Fragment, useState } from "react";
import { useInputValue } from "../../hooks/useInputValue";
import { Form, Input, Button } from '../UserForm/styles';

export const UserForm = ({ onSubmit, title }) => {
    const email = useInputValue('')
    const password = useInputValue('')

    return (
        < Fragment >
            <h2>{title}</h2>
            <Form onSubmit={onSubmit}>
                <Input placeholder="Email" value={email.value} onChange={email.onChange} />
                <Input placeholder="Password" type= 'password' value={password.value} onChange={password.onChange} />
                <Button>{title}</Button>
            </Form>
        </Fragment>
    )
}