import { useState, useEffect } from 'react';
import { Link, Route } from 'react-router-dom';
import * as bookShelfAPI from '../services/bookshelf-api';
import { PageTitle } from '../PageTitle/PageTitle';
import AuthorSubView from './AuthorSubView';

export default function AuthorView() {
  const [authors, setAuthors] = useState(null);

  useEffect(() => {
    bookShelfAPI.fetchAuthors().then(setAuthors);
  }, []);

  return (
    <>
      <PageTitle text="Avtors" />
    </>
  );
}
