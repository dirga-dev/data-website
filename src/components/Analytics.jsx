import React from "react";
import Laptop from "../assets/laptop.jpg";

const Analytics = () => {
	return (
		<div className="w-full bg-white py-16 px-4">
			<div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
				<img className="w-[500px] mx-auto my-4" src={Laptop} alt="A laptop" />
				<div className="flex flex-col justify-center">
					<p className="text-[#00df9a] font-bold">DATA ANALYTICS DASHBOARD</p>
					<h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
						Manage Data Analytics Centrally
					</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
						non, optio tenetur cum ab perferendis repellendus voluptatum, neque
						sit iure minus suscipit maxime! Maiores, qui illo reprehenderit
						atque blanditiis totam!
					</p>
					<button className="py-3 bg-black text-[#00df9a] w-[200px] font-medium rounded-md my-6 mx-auto md:mx-0">
						Get Started
					</button>
				</div>
			</div>
		</div>
	);
};

export default Analytics;
