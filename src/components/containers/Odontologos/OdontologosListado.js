import React from "react";
import CardContain from "../../CardContain/CardContain";

const OdontologosListado = ({ odontologos })=>{
	return (
		<>
			{odontologos.map((odontologo, index) => {
				return (
					<CardContain
						title={odontologo.nombre + " " + odontologo.apellido}>
						<li key={index + 1}>
							<b>Matricula: </b> {odontologo.matricula}
						</li>
					</CardContain>
				);
			})}
		</>
	);
}

export default OdontologosListado;
