import City1 from "../../assets/images/cityExploration/1.jpg";
import City2 from "../../assets/images/cityExploration/2.jpg";
import City3 from "../../assets/images/cityExploration/3.jpg";
import City4 from "../../assets/images/cityExploration/4.jpg";

function CityExploration() {
	return (
		<div className="flex justify-around gap-6 flex-wrap w-full py-10 p-4 shadow-xl bg-sky-100 border-2 rounded">
			<div className="basis-[48%] relative">
				<img
					src={City1}
					alt="City"
					className="rounded-xl hover:scale-105 duration-300 absolute top-0 left-0 w-full h-full"
				/>
			</div>
			<div className="basis-[48%]">
				<img
					src={City2}
					alt="City"
					className="rounded-xl hover:scale-105 duration-300"
				/>
			</div>
			<div className="basis-[48%]">
				<img
					src={City3}
					alt="City"
					className="rounded-xl hover:scale-105 duration-300"
				/>
			</div>
			<div className="basis-[48%]">
				<img
					src={City4}
					alt="City"
					className="rounded-xl hover:scale-105 duration-300"
				/>
			</div>
		</div>
	);
}

export default CityExploration;
