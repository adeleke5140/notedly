import React from 'react';

import { useQuery, gql } from '@apollo/client';

import Note from '../components/Note';

import { GET_NOTE } from '../gql/query';

const NotePage = props => {
  const id = props.match.params.id;

  const { loading, error, data } = useQuery(GET_NOTE, { variables: { id } });

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error! Note not found</p>;

  return <Note note={data.note} />;
};

export default NotePage;

//now the question is; why are we creating this component?
//what is the use case?
//so we want to be able to view and link to individual notes in the web app

//so when we have a particular id in the url bar, we get the content of the id displayed to us as a page
