
import CardContain from "../../CardContain/CardContain";
    
const TurnosListado = ({turnos}) => {  
    return (
		<>
			{turnos.map((turno, index) => {
                return (
					<CardContain title={turno.fecha}>
						<li key={index + 1}>
							<b>Paciente: </b>{" "}
							{turno.paciente.nombre +
								" " +
								turno.paciente.apellido}
						</li>
						<li key={index + 1}>
							<b>Odontologo: </b>{" "}
							{turno.odontologo.nombre +
								" " +
								turno.odontologo.apellido}
						</li>
					</CardContain>
				);
			})}
		</>
	);
}

export default TurnosListado;