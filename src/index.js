import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import TI from './TI';
import Mate from './Mate';
import{
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Humanas from './Humanas';
import Linguagem from './Linguagem';
import Natureza from './Natureza';
import Automoção from './Automoção';
import MetaVerso from './MetaVerso';
import Realidadeaumentada from './Realidade aumentada';
import IA from './I.A';
import Machine from './Machine learning';
import Perfil from './Perfil';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/ti",
    element: <TI/>,
  },
  {
    path: "/Mate",
    element: <Mate/>,
  },
  {
    path: "/Humanas",
    element: <Humanas/>,
  },
  {
    path: "/Linguagem",
    element: <Linguagem/>,
  },
  {
    path: "/Natureza",
    element: <Natureza/>,
  },
  {
    path: "/Automoção",
    element: <Automoção/>,
  },
  {
    path: "/Metaverso",
    element: <MetaVerso/>,
  },
  {
    path: "/Realidadeaumentada",
    element: <Realidadeaumentada/>,
  },
  {
    path: "/IA",
    element: <IA/>,
  },
  {
    path: "/Machine",
    element: <Machine/>,
  },
  {
    path: "/Perfil",
    element: <Perfil/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
