import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form"
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import './styles.css'

const Form = ({ setShowForm, confirmarOrden, setShowCart }) =>{
    const MySwal = withReactContent(Swal)
    const [mailCompare, setMailCompare] = useState ();
    const {
        register, 
        formState: { errors },
        handleSubmit, 
    } = useForm();

    const onSubmit = (data) =>{
        confirmarOrden(data);
        let timerInterval;
        MySwal.fire({
            title: "Sus datos fueron recibidos",
            html: <p>Espera mientras se genera la orden</p>,
            timer: 6000,
            timerProgressBar: true,
            didOpen: () => {
             Swal.showLoading();
        },
        willClose: () => {
            clearInterval(timerInterval);
      }
        })
    }

    const cancelar = (e) => {
        e.preventDefault ();
        e.currentTarget.parentNode.parentNode.parentNode.classList.add(
            "scale-out-ver-bottom"
        );
        setTimeout(()=>{
            setShowForm(false);
        }, 600)
    }
    return(
        <div>
            <div className="titleForm">
                <h2>Ingrese sus datos para continuar con la compra</h2>
            </div>
            <form className="formContainer" onSubmit={handleSubmit(onSubmit)}>
                <label>Nombre </label>
                <input 
                    name='name'
                    type= 'text'
                    className="input"
                    {...register('name',{
                        required: "Ingresar el nombre",
                        minLength:{
                            value: 3, 
                            message: "Por favor ingresar el nombre completo",
                        },
                    })}
                />
                <p>{errors.name?.message}</p>
                <label>E-mail</label>
                <input 
                    name='email'
                    type= 'email'
                    className="input"
                    {...register('email',{
                        required: "Ingresar el e-mail",
                        onChange: (e) => setMailCompare(e.target.value),
                    })}
                />
                <p>{errors.email?.message}</p>
                <label>Repetir Email</label>
                <input
                    name="emailbis"
                    type="email"
                    className="input"
                    {...register("emailbis", {
                        required: "Este campo no puede estar vacio",
                        validate: (value) => value === mailCompare || "El mail no coincide",
                    })}
                 />
                <p className="formErrorMessage">{errors.emailbis?.message}</p>
                <label>Télefono</label>
                <input 
                    name='phone'
                    type= 'number'
                    className="input"
                    {...register('phone',{
                        required: "Ingresar el télefono",
                        minLength:{
                            value: 3, 
                            message: "Faltas caracteres, ingresar el télefono completo",
                        },
                    })}
                />
                <p>{errors.phone?.message}</p>
                <label>Domicilio</label>
                <input 
                    name='address'
                    type= 'text'
                    className="input"
                    {...register('address',{
                        required: "Ingresar el domicilio",
                    })}
                />
                <p>{errors.address?.message}</p>
                <>
                <button onClick={(e)=>{
                        cancelar(e)
                        setShowCart(true)
                    }}>
                        Cancelar
                </button>
                <button type="submit">
                    Finalizar la compra
                </button>
                </>
                
            </form>
          
        </div>
    )
}

export default Form