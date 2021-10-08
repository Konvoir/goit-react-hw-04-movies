// import friends from './data/friends.json';
// import {FriendList} from './components/FriendList/FriendList';
// import AppBar from './AppBar/AppBar';
// import HomeView from "../Vievs/HomeView";
// import AuthorsView from '../Vievs/AuthorsView';
// import BooksView from '../Vievs/BooksView';
// import BooksDetailsView from '../Vievs/BooksDetailsView';
// import { Container } from '../Container/Container.jsx';
import { lazy, Suspense } from 'react';
import { Route, NavLink } from "react-router-dom";


import styled from "@emotion/styled";
import toast, { Toaster } from 'react-hot-toast';
// import { Home } from '../Navigation/Home.jsx';
// import { Movies } from '../Navigation/Movies.jsx';

const notify = () => toast('Here is your toast.');
const StyledNavLink = styled(NavLink)`
color: coral;
`;

const Navigation = lazy(() =>
import('../Navigation/Navigation'))









export const App = () => {      
  return (
      <div>
        <button onClick={notify}>Make me a toast</button>
      <Toaster />
     
     
      {/* <Container> */}
      
      <nav>
        <StyledNavLink to="/home">HomePage link</StyledNavLink>
      </nav>

        <Switch>
          <Route path="/home" >
          <Home></Home>
          <Movies />
          </Route>
        </Switch>

{/* </Container> */}

       </div>
    )
}






// export const App = () => {
//   return (
//     <Container>
//       <AppBar />

//       <button onClick={notify}>Make me a toast</button>
//       <Toaster />

//       <Route path="/" exect>
//         <HomeView />
//       </Route>

//       {/* <Route path="/authors">
//       <AuthorsView />
//       </Route> */}

//        <Route path="/books">
//       <BooksView />
//       </Route>
//     </Container>
//   );
// };
