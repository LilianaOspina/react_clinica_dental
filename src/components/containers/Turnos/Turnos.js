import React, { useState, useEffect } from "react"; 
import ApiTurnos from "./ApiTurnos";
import TurnosListado from "./TurnosListado";
import Navbar from "../../Navbar/Navbar";
import Loading from "../../Loading/Loading";

const Turnos = () => {
    const [turns, setTurns] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(
        () => {
            ApiTurnos().then(
                response => {
                    setTurns(response)
                    setLoading(false)
                }
            )
        },
        []
    );

    return (
		<>
			<Navbar title='Turnos'/>
			{loading && <Loading />}
			<div className='card__container'>
				<TurnosListado turnos={turns} />
			</div>
		</>
	);
}

export default Turnos;