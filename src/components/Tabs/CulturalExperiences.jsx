import Cultural1 from "../../assets/images/culturalExperiences/1.jpg";
import Cultural2 from "../../assets/images/culturalExperiences/2.jpg";
import Cultural3 from "../../assets/images/culturalExperiences/3.jpg";
import Cultural4 from "../../assets/images/culturalExperiences/4.jpg";

function CulturalExperiences() {
	return (
		<div className="flex justify-around gap-6 flex-wrap w-full py-10 p-4 shadow-xl bg-cyan-100 border-2 rounded">
			<div className="basis-[48%]">
				<img
					src={Cultural1}
					alt="Cultural"
					className="rounded-xl hover:scale-105 duration-300"
				/>
			</div>
			<div className="basis-[48%]">
				<img
					src={Cultural2}
					alt="Cultural"
					className="rounded-xl hover:scale-105 duration-300"
				/>
			</div>
			<div className="basis-[48%]">
				<img
					src={Cultural3}
					alt="Cultural"
					className="rounded-xl hover:scale-105 duration-300"
				/>
			</div>
			<div className="basis-[48%]">
				<img
					src={Cultural4}
					alt="Cultural"
					className="rounded-xl hover:scale-105 duration-300"
				/>
			</div>
		</div>
	);
}

export default CulturalExperiences;
