import Mountain1 from "../../assets/images/mountainAdventure/1.jpg";
import Mountain2 from "../../assets/images/mountainAdventure/2.jpg";
import Mountain3 from "../../assets/images/mountainAdventure/3.jpg";
import Mountain4 from "../../assets/images/mountainAdventure/4.jpg";

function MountainAdventure() {
	return (
		<div className="flex justify-around gap-6 flex-wrap w-full py-10 p-4 shadow-xl bg-green-100 border-2 rounded">
			<div className="basis-[48%]">
				<img
					src={Mountain1}
					alt="Mountain"
					className="rounded-xl hover:scale-105 duration-300"
				/>
			</div>
			<div className="basis-[48%]">
				<img
					src={Mountain2}
					alt="Mountain"
					className="rounded-xl hover:scale-105 duration-300"
				/>
			</div>
			<div className="basis-[48%]">
				<img
					src={Mountain3}
					alt="Mountain"
					className="rounded-xl hover:scale-105 duration-300"
				/>
			</div>
			<div className="basis-[48%] relative">
				<img
					src={Mountain4}
					alt="Mountain"
					className="rounded-xl hover:scale-105 duration-300 absolute top-0 left-0 w-full h-full"
				/>
			</div>
		</div>
	);
}

export default MountainAdventure;
