import React, {useCallback} from 'react'
import {FormContainer} from "../Form.container";
import {SignIn} from "./SignIn";


export const SignInContainer = () => {
    const initialValues = {}
    const handleSubmit = useCallback((formData) => {
        console.log(formData);

    }, [])
    return (
        <FormContainer
            initialValues={initialValues}
            onSubmit={handleSubmit}
            component={SignIn}
        />
    )
}