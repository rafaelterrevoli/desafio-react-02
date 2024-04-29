import Formulario from './Formulario'
import { useState } from "react"
import SocialButton from './SocialButton';
import Badge from 'react-bootstrap/Badge';



export default function Registro() {
  const [alert, setAlert] = useState({
    mensaje: "",
    color: ""
  });

  return (
    <>
      <SocialButton/>
      <h3>O usa el email para registrarte</h3>
      <Formulario setAlert={setAlert} />
   
      {alert.mensaje && <Badge bg={alert.color}>{alert.mensaje}</Badge>}
    </>
  )
}
