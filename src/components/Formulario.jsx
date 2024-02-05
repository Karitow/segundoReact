import { useState } from "react";
const Formulario = ({ setError }) => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const validandoDatos = (evento) => {
    evento.preventDefault();
    const { nombre, email, password, confirmPassword } = formData;
    const validarDatos =
      !nombre || !email || !password || !confirmPassword;
    const validarPassword = password !== confirmPassword;
    validarDatos
      ? setError({
          error: true,
          msg: "Completa todos los campos para iniciar sesión.",
          color: "warning",
        })
      : setError({
          error: false,
          mensaje: "Cuenta creada exitosamente.",
          color: "success",
        });
    if (validarPassword) {
      setError({
        error: true,
        mensaje: "Las contraseñas no coinciden",
        color: "danger",
      });
      return;
    }
    // para dejar los input desde cero
    setFormData({
      nombre: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };
  const Change = (evento) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // propiedad dinamica que esta en constante cambio en el input por eso los corchetes, no es un array
  };
  return (
    <>
      <form
        className="formulario"
        onSubmit={(evento) => {
          validandoDatos(evento);
        }}
      >
        <div className="form-group mb-3">
          <input
            type="text"
            name="nombre"
            className="form-control"
            placeholder="Nombre"
            onChange={Change}
            value={formData.nombre}
          />
        </div>
        <div className="form-group mb-3">
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="email@ejemplo.com"
            onChange={Change}
            value={formData.email}
          />
        </div>
        <div className="form-group mb-3">
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="password"
            onChange={Change}
            value={formData.password}
          />
        </div>
        <div className="form-group mb-3">
          <input
            type="password"
            name="confirmPassword"
            className="form-control"
            placeholder="Confirma contraseña"
            onChange={Change}
            value={formData.confirmPassword}
          />
        </div>
        <button type="submit" className="btn btn-success">
          Registrarse
        </button>
      </form>
    </>
  );
};

export default Formulario;