import { useState } from "react"

export default function Formulario(props) {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [rePass, setRePass] = useState("");
  const patronEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/; 
  
  function sendForm(event) {
    event.preventDefault();
    console.log(userName, email, pass, rePass);
    if (userName === ''){
      props.setAlert({mensaje: 'Debes Ingresar tu nombre', color: 'danger'})
      return
    }else if (email === ''){
      props.setAlert({mensaje: 'Debes Ingresar tu email', color: 'danger'})
      return
    }else if (!patronEmail.test(email)){
      props.setAlert({mensaje: 'Formato incorrecto del email', color: 'danger'})
    }else if (pass == ''){
      props.setAlert({mensaje: 'Debes Ingresar tu contraseña', color: 'danger'})
      return
    }else if (rePass === ''){
      props.setAlert({mensaje: 'Debes confirmar tu contraseña', color: 'danger'})
      return
    }else if (pass !== rePass){
      props.setAlert({mensaje: 'La contraseña no coincide', color: 'danger'})
      setPass('');
      setRePass('');
    }else{
      props.setAlert({mensaje: 'Registro Completado', color: 'info'})
      return
    }

  }

  return (
    <>
      <form onSubmit={sendForm}>
        <input placeholder="Ingrese tu nombre" type="text" value={userName} onChange={(event) => (
          setUserName(event.target.value)
        )} />
        <input placeholder="Ingresa tu email" type="text" value={email} onChange={(event) => (
          setEmail(event.target.value)
        )} />
        <input placeholder="Ingrese tu contraseña" type="password" value={pass} onChange={(event) => (
          setPass(event.target.value)
        )} />
        <input placeholder="Confirma tu contraseña" type="password" value={rePass} onChange={(event) => (
          setRePass(event.target.value)
        )} />
        <button type="sumit">Registrarse</button>
      </form>
    </>
  )
}
