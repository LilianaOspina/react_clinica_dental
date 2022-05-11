const ApiPacientes = () => {
    return (
        new Promise((resolve, reject) => {
            setTimeout(() => {
                const pacientes = [
					{
						id: 1,
						apellido: "Ortiz",
						nombre: "Maria",
						email: "maria@gmail",
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
					{
						id: 2,
						apellido: "Fernandez",
						nombre: "Lucas",
						email: "lucas@gmail",
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
					{
						id: 3,
						apellido: "Lopez",
						nombre: "Ana",
						email: "lucas@gmail",
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
					{
						id: 4,
						apellido: "Diaz",
						nombre: "Luz",
						email: "lucas@gmail",
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
				];
                resolve(pacientes);
            }, 2000);
        })
    )
}

export default ApiPacientes;