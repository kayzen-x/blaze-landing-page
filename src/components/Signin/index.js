import React from 'react'
import {
    Container,
    FormWrap,
    Icon,
    FormContent,
    Form,
    FormH1,
    FormLabel,
    FormInput,
    FormButton,
    Text
 } from './SigninElements'
import { Link } from 'react-router-dom'

const SignIn = () => {
  return (
    <Container>
        <FormWrap>
            <Icon to="/"> blaze </Icon>
            <FormContent>
                <Form action="#">
                    <FormH1> Sign in to your account </FormH1>
                    <FormLabel htmlFor='for'> Email </FormLabel>
                    <FormInput type='email' required/>
                    <FormLabel htmlFor='for'> Password </FormLabel>
                    <FormInput type='password' required/>
                    <FormButton type='submit'> Continue </FormButton>
                    <Link> Forgot password? </Link>
                </Form>
            </FormContent>
        </FormWrap>
    </Container>
  )
}

export default SignIn