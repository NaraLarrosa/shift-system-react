import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { Container } from '@mui/material';
import MainNavigation from './shared/components/Navigation/MainNavigation';
// import Users from './user/pages/Users';
// import Auth from './user/pages/Auth';
import { AuthContext } from './shared/context/auth-context';
import { useAuth } from './shared/hooks/auth-hooks';

function App() {
    console.log('FUNCIONO! :)');
    // const { token, login, userId } = useAuth();
    
    // let routes;

    // if (token) {
    //     routes = (
    //         <Switch>
    //             <Route path="/" exact>
    //                 {/* <Auth /> */}
    //                 HOLA COMO ESTAS?
    //             </Route>
    //             <Route path="/users" exact>
    //                 {/* <Users /> */}
    //                 PRUEBA
    //             </Route>
    //             {/* </Route>
    //             <Route path="/specialties" exact>
    //                 <Specialties />
    //             </Route>
    //             <Route path="/doctors">
    //                 <Doctors />
    //             </Route>
    //             <Route path="/shifts">
    //                 <Shifts /> */}
    //             <Redirect to="/" />
    //         </Switch>
    //     );
    // } else {
    //     routes = (
    //         <Switch>
    //             <Route path="/" exact>
    //                 {/* <Users /> */}
    //             </Route>
    //             <Route path="/auth">
    //                 {/* <Auth /> */}
    //             </Route>
    //             <Redirect to="/" />
    //         </Switch>
    //     );
    // }

    // return (
    //     <AuthContext.Provider
    //         value={{
    //             isLoggedIn: !!token,
    //             token: token,
    //             userId: userId,
    //             login: login,
    //         }}
    //     >
    //         <Router>
    //             <MainNavigation />
    //             <Container>
    //                 <main>{routes}</main>
    //             </Container>
    //         </Router>
    //     </AuthContext.Provider>
    // );
}

export default App;


