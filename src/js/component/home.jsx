
import React, { useState, useEffect } from "react";

const Home = () => {
	const [color, setColor] = useState("");
	const [luces, setLuces] = useState([
		{nombre: "rojo", valor: "red"},
		{nombre: "amarillo", valor: "yellow"},
		{nombre: "verde", valor: "green"}
	]);

	useEffect(() => {
		let currentIndex = 0;
		const intervalId = setInterval(() => {
			setColor(luces[currentIndex].valor);
			currentIndex = (currentIndex + 1) % luces.length;
		}, 1000); 

		return () => clearInterval(intervalId); 
	}, [luces]);

	return (
		<div className="container mt-5"> 
			<div className="container mt-5 bg-black rounded-5" style={{width: 140 }}>
				<div className="d-inline-block d-flex flex-column aling-items-center">
					{
						luces.map(faro => (
							<button
								className={"d-inline-block rounded-circle m-3 " + (color === faro.valor ? faro.nombre : '')}
								style={{backgroundColor: faro.valor, height: 80, width: 80}}
								onClick={() => setColor(faro.valor)}
							/>
						))
					}
				</div>
			</div>
			<button className="btn btn-success" onClick={() => {
				if (luces.length <= 3) {
					setLuces([...luces, {nombre: "morado", valor: "purple"}]);
				}
			}}> agregar </button>
		</div>
	);
};

export default Home;
