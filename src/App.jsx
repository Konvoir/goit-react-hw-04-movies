import { lazy, Suspense } from 'react';
import { Route, Switch } from "react-router-dom";
import NavigationBar from './components/NavigationBar/NavigationBar';
import Container from './components/Container/Container';

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