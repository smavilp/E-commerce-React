import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Login = () => {

  const {register, handleSubmit} = useForm()
  const navigate = useNavigate()

  const submit = data => {
    axios
      .post("https://e-commerce-api-v2.academlo.tech/api/v1/users/login", data)
      .then(resp => {
        localStorage.setItem("token", resp.data.token)
        navigate("/")
      })
      .catch(error => console.error(error))
  }

  //para cerrar sesión utilizar un localStore.clear. Puede ser un renderizado que si se ha iniciado seción, en vez del formulario de login muestre un boton para salir de las sesión.

  return (
    <Form style={{ width:"90%", maxWidth:"25em"}} className='mt-5 mx-auto' onSubmit={handleSubmit(submit)} >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" {...register("email")} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" {...register("password")} />
      </Form.Group>
      <Button variant="danger" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default Login;