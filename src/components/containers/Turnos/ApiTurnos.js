const ApiTurnos = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const turnos = [
				{
					id: 1,
					paciente: {
						id: 1,
						apellido: "Ospina",
						nombre: "Ana",
						email: "ana@gmail",
						dni: 1287346,
						fechaIngreso: "2022-10-01",
						domicilio: {
							id: 1,
							calle: "bustillo",
							numero: 16000,
							localidad: "Bariloche",
							provincia: "Rio Negro",
						},
					},
					odontologo: {
						id: 1,
						matricula: "abc123",
						nombre: "Sonia",
						apellido: "Lopez",
					},
					fecha: "2022-12-01",
				},
				{
					id: 2,
					paciente: {
						id: 1,
						apellido: "Ospina",
						nombre: "Ana",
						email: "ana@gmail",
						dni: 1287346,
						fechaIngreso: "2022-10-01",
						domicilio: {
							id: 1,
							calle: "bustillo",
							numero: 16000,
							localidad: "Bariloche",
							provincia: "Rio Negro",
						},
					},
					odontologo: {
						id: 1,
						matricula: "abc123",
						nombre: "Sonia",
						apellido: "Lopez",
					},
					fecha: "2022-10-10",
				},
			];
			resolve(turnos);
		}, 2000);
	});
};

export default ApiTurnos;
