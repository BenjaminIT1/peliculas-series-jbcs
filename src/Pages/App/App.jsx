import { useRoutes, BrowserRouter } from 'react-router-dom';
import React from 'react';


//Todos estos son componentes
import Home from '../home/home';
import Peliculas from '../Peliculas/peliculas';
import Series from '../series/series';
import Carga from '../carga/carga';

//componentes partes
import Navbar from '../../components/Navbar/indexNavbar'
import Footer from '../footer/footer';

import '../../styles/styles.css';


const AppRoutes = () =>{
  //useRoutes es un hook que permite decirle a la aplicacion que pagina mostrar dependiendo la direccion en la que estemos
  let routes = useRoutes([
    {
      //es / (nombre en la url de cada vista)
      path:'/',
      element: <Home/>
    },
    {
      path:'/Peliculas',
      element: <Peliculas/>
    },
    {
      path:'/Series',
      element: <Series/>
    },
    {
      path:'/carga',
      element: <Carga/>
    },
  ])
  return routes
}

const App = () => {
    //retornamos los elementos (rutas)
  return (
    //Componente para manejar la navegacion
  <BrowserRouter>
  <AppRoutes/>
  <Navbar></Navbar>
  <Footer></Footer>
  </BrowserRouter>
  )
}

export default App;
