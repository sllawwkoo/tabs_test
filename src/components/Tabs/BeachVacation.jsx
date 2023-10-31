import Beach1 from "../../assets/images/beachVacation/1.jpg";
import Beach2 from "../../assets/images/beachVacation/2.jpg";
import Beach3 from "../../assets/images/beachVacation/3.jpg";
import Beach4 from "../../assets/images/beachVacation/4.jpg";

function BeachVacation() {
	return (
		<div className="flex justify-around gap-6 flex-wrap w-full py-10 p-4 shadow-xl bg-yellow-50 border-2 rounded">
			<div className="basis-[48%]">
				<img
					src={Beach1}
					alt="Beach"
					className="rounded-xl hover:scale-105 duration-300"
				/>
			</div>
			<div className="basis-[48%]">
				<img
					src={Beach2}
					alt="Beach"
					className="rounded-xl hover:scale-105 duration-300"
				/>
			</div>
			<div className="basis-[48%]">
				<img
					src={Beach3}
					alt="Beach"
					className="rounded-xl hover:scale-105 duration-300"
				/>
			</div>
			<div className="basis-[48%]">
				<img
					src={Beach4}
					alt="Beach"
					className="rounded-xl hover:scale-105 duration-300"
				/>
			</div>
		</div>
	);
}

export default BeachVacation;
