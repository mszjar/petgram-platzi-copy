import React, { Fragment } from "react";
import Context from "../Context";
import { UserForm } from "../components/UserForm";

export const NotRegisteredUser = () => {
    return (
        <Context.Consumer>
            {
                ({ activateAuth }) => {
                    return <Fragment>
                        <UserForm title='Registrarse' onSubmit={ activateAuth } />
                        <UserForm title='Iniciar Sesion' onSubmit={ activateAuth } />
                    </Fragment>
                }
            }
        </Context.Consumer>
    )
}