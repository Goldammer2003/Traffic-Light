import React, { useState } from "react";
import "../../styles/index.css";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [selectColor, setSelectedColor] = useState("red");
	//first step we need

	return (
		<div className="text-center wholetrafficlight">
			<div className="rounded-circle bg-secondary rounded-5 circle1">
				Hello World
			</div>

			<div
				onClick="setColor"
				className="rounded-circle bg-secondary rounded-5 circle1"
			></div>
			
			<div
				onClick="setColor"
				className="rounded-circle bg-secondary rounded-5 circle1"
			></div>
		</div>
	);
};

export default Home;
