import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react/cjs/react.development';
import { PageTitle } from '../PageTitle/PageTitle';
import * as bookShelfAPI from '../services/bookshelf-api';

export default function BookDetailsView() {
  const [book, setBook] = useState(null);
  const { bookId } = useParams();

  useEffect(() => {});

  return (
    <>
      <PageTitle text={`book 1`} />
    </>
  );
}
