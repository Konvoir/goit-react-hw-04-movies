import { lazy, Suspense } from 'react';
import { Route, Switch  } from "react-router-dom";

const Navigation = lazy(() =>
    import('./components/Navigation/Navigation'));
const HomePage = lazy(() =>
    import('./components/HomePage/HomePage')); 
const MoviesPage = lazy(() =>
    import('./components/MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() =>
    import('./components/MovieDetailsPage/MovieDetailsPage'));
const NotFoundPage = lazy(() =>
    import('./components/NotFoundPage/NotFoundPage'));

export default function App () {
    return (
        <Suspense fallback={<h2>Loading . . .</h2>}>
            <Navigation />
            <Switch>
                <Route path="/" component={HomePage} exect />
                <Route path="/movies" component={MoviesPage} exect />
                <Route path="/movies/:movieId" component={MovieDetailsPage}  />
                <Route component={NotFoundPage}  />
            </Switch>
        </Suspense>
)}