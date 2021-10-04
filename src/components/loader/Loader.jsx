import React from 'react'
// import Loader from "react-loader-spinner";
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Loader } from 'rsuite';
import "./loader.scss"

const Spinner = () => {
    const body = document.getElementById("root").style.position = "fixed"
    console.log(body)
    return (
        <section className="loader_spinner">
            <Loader
                type="Puff"
                color="#00BFFF"
                height={100}
                width={100}
                // timeout={3000000} //3 secs
            />
            
        </section>
        
    )
}

export default Spinner
