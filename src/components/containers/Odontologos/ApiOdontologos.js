const ApiOdontologos = () => {
    return (
        new Promise((resolve, reject) => {
            setTimeout(() => {
                const odontologos = [
					{
						id: 1,
						apellido: "Urda",
						nombre: "Silvia",
						matricula: "ABC123",
					},
					{
						id: 2,
						apellido: "Chennales",
						nombre: "Leandro",
						matricula: "ABC123",
					},
					{
						id: 3,
						apellido: "Senorcito",
						nombre: "Tom",
						matricula: "ABC123",
					},
					{
						id: 4,
						apellido: "Chennales",
						nombre: "Cristina",
						matricula: "ABC123",
					},
				];
                resolve(odontologos);
            }, 2000);
        })
    )
}

export default ApiOdontologos;