import { useState, useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import * as bookShelfAPI from '../services/bookshelf-api';
import { PageTitle } from '../PageTitle/PageTitle';

export default function BooksView() {
  const { url } = useRouteMatch();
  const [books, setBooks] = useState(null);

  useEffect(() => {
    bookShelfAPI.fetchBooks().then(setBooks);
  }, []);

  return (
    <>
      <PageTitle text="books"></PageTitle>
    </>
  );
}
