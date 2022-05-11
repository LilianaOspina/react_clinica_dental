import React from "react";
import CardContain from "../../CardContain/CardContain";

function PacientesListado({ pacientes }) {
    return (
        <>
			{pacientes.map((paciente, index) => {
                return (
					<CardContain
						title={paciente.nombre + " " + paciente.apellido}>
						<li key={index + 1}>
							<b>E-mail: </b> {paciente.email}
						</li>
						<li key={index + 1}>
							<b>DNI: </b> {paciente.dni}
						</li>
						<li key={index + 1}>
							<b>Ingreso: </b> {paciente.fechaIngreso}
						</li>
					</CardContain>
				);
			})}
		</>
	);
}

export default PacientesListado;

