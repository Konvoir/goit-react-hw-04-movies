import { lazy, Suspense } from 'react';
import { Route, Switch } from "react-router-dom";
import NavigationBar from './components/NavigationBar/NavigationBar';
import Container from './components/Container/Container';
// LOADER

const HomeView = lazy(() =>
    import('./views/HomeView'));
const MovieDetailsView = lazy(() =>
    import('./views/MovieDetailsView'));
const MoviesView = lazy(() =>
    import('./views/MovieView'));
  
export default function App() {
    return (
        <Container>
            <NavigationBar />
            <Suspense fallback={<h2>Loading . . .</h2>}>
                <Switch>
                    <Route path="/movies/:movieId">
                        <MovieDetailsView />
                    </Route>
                    <Route path="/movies" exact>
                        <MoviesView />
                    </Route>
                    <Route path="/" exact>
                        <HomeView />
                    </Route>
                </Switch>
            </Suspense>
        </Container>
    )
};







// const Navigation = lazy(() =>
//     import('./components/Navigation/Navigation'));
// const HomePage = lazy(() =>
//     import('./components/HomePage/HomePage')); 
// const MoviesPage = lazy(() =>
//     import('./components/MoviesPage/MoviesPage'));
// const MovieDetailsPage = lazy(() =>
//     import('./components/MovieDetailsPage/MovieDetailsPage'));
// const NotFoundPage = lazy(() =>
//     import('./components/NotFoundPage/NotFoundPage'));

// export default function App() {
//     return (
//         <Suspense fallback={<h2>Loading . . .</h2>}>
//             <Navigation />
//             <Switch>
//                 <Route path="/" exact component={HomePage}  />
//                 <Route path="/movies" exact component={MoviesPage} />
//                 <Route path="/movies/:movieId" component={MovieDetailsPage}  />
//                 <Route component={NotFoundPage}  />
//             </Switch>
//         </Suspense>
// )}