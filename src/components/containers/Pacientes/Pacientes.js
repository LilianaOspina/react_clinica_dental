import React, { useState, useEffect } from "react";
import Loading from "../../Loading/Loading";
import Navbar from "../../Navbar/Navbar";
import ApiPacientes from "./ApiPacientes";
import PacientesListado from "./PacientesListado";


const Pacientes = () => {
    const [pacients, setPacients] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(
        () => {
            ApiPacientes().then(
                response => {
                    setPacients(response);
                    setLoading(false);
                }
            )
        },
        []
    );

    return (
		<>
			<Navbar title='Pacientes'/>
			{loading && <Loading />}
			<div className='card__container'>
				<PacientesListado pacientes={pacients} />
			</div>
		</>
	);

}
export default Pacientes;