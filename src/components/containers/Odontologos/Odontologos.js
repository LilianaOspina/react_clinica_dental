import React, { useState, useEffect } from "react";
import ApiOdontologos from "./ApiOdontologos";
import OdontologosListado from "./OdontologosListado";
import Navbar from "../../Navbar/Navbar";
import Loading from "../../Loading/Loading";

const Odontologos = () => {
	const [dentist, setDentist] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		ApiOdontologos().then(response => {
			setDentist(response);
			setLoading(false);
		});
	}, []);

	return (
		<>
			<Navbar title='Odontologos' />
			{loading && <Loading />}
			<div className='card__container'>
				<OdontologosListado odontologos={dentist} />
			</div>
		</>
	);
};
export default Odontologos;
