import React from "react";
import { useNavigate } from "react-router-dom";
import Title from "../Title";
import './styles.css';

const Hero = () => {
    const navigate = useNavigate();

    const onClick = ()=>{
        navigate ('/productos')
    }
   
    return (
        <section className="hero">
            <article className="heroContainer">
                <div className= "textBox">
                    <Title titulo='Bienvenidos a Green Life'/>
                    <h2>
                        Tu tienda sustentable
                    </h2>
                    <button onClick={onClick}>
                            Productos
                    </button>
                </div>
            </article>
        </section>
    )
}
export default Hero