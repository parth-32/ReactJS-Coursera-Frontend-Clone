import React from 'react'
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
// import { Loader } from 'rsuite';
import "./loader.scss"
import Modal from "@mui/material/Modal";

const Spinner = (props) => {

    return (
        <Modal
			open={props.open}
			
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description"
			style={{ background: "rgba(0,0,0,0.5)" }}
		>
			<span className="loader_spinner">
            <Loader
                type="Puff"
                color="#00BFFF"
                height={100}
                width={100}
                // timeout={3000000} //3 secs
            />
            </span>
		</Modal>
        
        
    )
}

export default Spinner
