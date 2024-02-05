import { useState } from "react";
import "./App.css";
import Registro from "./components/Registro";
import 'bootstrap/dist/css/bootstrap.min.css';

function App (){
  const [error, SetError] = useState ("")
  return (
    <>
    <Registro/>
    </>
  )
};