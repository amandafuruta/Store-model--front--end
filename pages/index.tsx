
import Logado from "./logado"
import Login from "./login"
import Redefinir_Senha from './login/redefinirsenha'

import { useState } from 'react'

export default function Index() {
  const [logado, setLogado] = useState(true)

  return (
    <>
      {
        logado?
        <Logado/>
        :
        <Login/>
      }
    </>
    
    
  )
};



// import React from 'react';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from 'react-router-dom';

// import Home from './Home/Home';
// import Login from './Login/Login';

// import StoreProvider from 'src/components/Store/Provider'

// // DEIXA A HOME PRIVADA
// import RoutesPrivate from 'src/components/Routes/Private/Private'

// // LOGIN CONTINUA PUBLICA

// const PagesRoot = () => (
//   <Router>
//     <StoreProvider>
//       <Switch>
//         <Route path="/login" component={Login} />
//         <RoutesPrivate path="/" component={Home} />
//       </Switch>
//     </StoreProvider>
//   </Router>
// )


// export default PagesRoot;

