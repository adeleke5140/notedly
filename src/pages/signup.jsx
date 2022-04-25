import React, { useEffect, useState } from 'react';
import { useMutation, useApolloClient, gql } from '@apollo/client';

import UserForm from '../components/UserForm';
//signup mutation

const SIGNUP_USER = gql`
  mutation signUp($email: String!, $username: String!, $password: String!) {
    signUp(email: $email, username: $username, password: $password)
  }
`;

const SignUp = props => {
  useEffect(() => {
    document.title = 'Sign Up -- Notedly';
  });

  const client = useApolloClient();
  const [signUp, { loading, error }] = useMutation(SIGNUP_USER, {
    onCompleted: data => {
      localStorage.setItem('token', data.signUp);

      client.writeData({ data: { isLoggdIn: true } });

      props.history.push('/');
    }
  });

  return (
    <>
      <UserForm action={signUp} formType="signup" />

      {loading && <p>Loading...</p>}

      {error && <p>Error creating account!</p>}
    </>
  );
};

export default SignUp;
